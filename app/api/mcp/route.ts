// MCP endpoint — Streamable HTTP transport.
// Spec: https://modelcontextprotocol.io/specification/2025-06-18/basic/transports
//
// Stateless by design: no Mcp-Session-Id is issued (the spec makes sessions MAY,
// not MUST) because every tool is a pure read over static content. That keeps
// the endpoint correct on serverless infrastructure where consecutive requests
// hit different instances.
//
// Requests get a single `application/json` response rather than an SSE stream —
// explicitly permitted, and appropriate since no tool is long-running.

import {
  dispatch,
  JSON_RPC_ERRORS,
  SUPPORTED_PROTOCOL_VERSIONS,
  DEFAULT_PROTOCOL_VERSION,
  type JsonRpcMessage,
} from '@/lib/mcp';

export const dynamic = 'force-dynamic';

function jsonRpcError(status: number, code: number, message: string): Response {
  return json({ jsonrpc: '2.0', id: null, error: { code, message } }, status);
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

// The endpoint is unauthenticated, read-only, and serves data that is already
// public on this site. There is no session, credential, or local resource for a
// cross-origin caller to reach, so origins are allowed broadly; the Origin value
// is still parsed and rejected when malformed, which is the check the spec's
// DNS-rebinding warning is aimed at.
const CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, MCP-Protocol-Version, Mcp-Session-Id, Accept',
  'Access-Control-Expose-Headers': 'MCP-Protocol-Version',
  'Access-Control-Max-Age': '86400',
};

function originIsWellFormed(origin: string | null): boolean {
  if (origin === null || origin === 'null') return true;
  try {
    const parsed = new URL(origin);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Spec: "If the server receives a request with an invalid or unsupported
 * MCP-Protocol-Version, it MUST respond with 400 Bad Request." An absent header
 * means assume 2025-03-26.
 */
function resolveProtocolVersion(request: Request): string | null {
  const header = request.headers.get('MCP-Protocol-Version');
  if (header === null) return DEFAULT_PROTOCOL_VERSION;
  return (SUPPORTED_PROTOCOL_VERSIONS as readonly string[]).includes(header) ? header : null;
}

export async function POST(request: Request): Promise<Response> {
  if (!originIsWellFormed(request.headers.get('origin'))) {
    return jsonRpcError(403, JSON_RPC_ERRORS.INVALID_REQUEST, 'Malformed Origin header.');
  }

  const protocolVersion = resolveProtocolVersion(request);
  if (protocolVersion === null) {
    return jsonRpcError(
      400,
      JSON_RPC_ERRORS.INVALID_REQUEST,
      `Unsupported MCP-Protocol-Version. Supported: ${SUPPORTED_PROTOCOL_VERSIONS.join(', ')}.`,
    );
  }

  let parsed: unknown;
  try {
    parsed = await request.json();
  } catch {
    return jsonRpcError(400, JSON_RPC_ERRORS.PARSE_ERROR, 'Request body is not valid JSON.');
  }

  // JSON-RPC batching was removed in protocol version 2025-06-18.
  if (Array.isArray(parsed)) {
    return jsonRpcError(
      400,
      JSON_RPC_ERRORS.INVALID_REQUEST,
      'Batch requests are not supported. Send one JSON-RPC message per POST.',
    );
  }

  const result = dispatch(parsed as JsonRpcMessage);

  switch (result.kind) {
    case 'accepted':
      // Notifications and client responses: 202 Accepted, no body.
      return new Response(null, {
        status: 202,
        headers: { 'MCP-Protocol-Version': protocolVersion, ...CORS_HEADERS },
      });
    case 'error': {
      const response = json(result.body, result.status);
      response.headers.set('MCP-Protocol-Version', protocolVersion);
      return response;
    }
    case 'response': {
      const response = json(result.body);
      response.headers.set('MCP-Protocol-Version', protocolVersion);
      return response;
    }
  }
}

/**
 * Spec: the server MUST either return text/event-stream for GET, or 405 to
 * signal that it does not offer a server-initiated stream. Nothing here pushes
 * messages to clients, so 405 is the honest answer.
 */
export function GET(): Response {
  return new Response(
    JSON.stringify({
      jsonrpc: '2.0',
      id: null,
      error: {
        code: JSON_RPC_ERRORS.INVALID_REQUEST,
        message:
          'This MCP endpoint does not offer a server-initiated SSE stream. POST JSON-RPC messages instead.',
      },
    }),
    {
      status: 405,
      headers: { 'Content-Type': 'application/json', Allow: 'POST, OPTIONS', ...CORS_HEADERS },
    },
  );
}

/** Spec: the server MAY respond 405 when it does not let clients end sessions. */
export function DELETE(): Response {
  return new Response(null, {
    status: 405,
    headers: { Allow: 'POST, OPTIONS', ...CORS_HEADERS },
  });
}

export function OPTIONS(): Response {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

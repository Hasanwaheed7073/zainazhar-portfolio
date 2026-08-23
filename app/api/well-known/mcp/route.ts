// MCP server card, served at /.well-known/mcp and /.well-known/mcp.json via
// rewrites in next.config.mjs (Next's file-system router does not reliably pick
// up dot-prefixed app/ directories).
//
// Well-known MCP discovery is still two competing, unmerged proposals —
// SEP-1649 (server cards: rich metadata, tool listing) and SEP-1960 (manifest:
// endpoint and auth enumeration). The document below is a superset that
// satisfies both readings, so a client converging on either one finds what it
// expects rather than us betting on the wrong draft.

import { TOOLS, RESOURCES, SERVER_NAME, SERVER_VERSION, SUPPORTED_PROTOCOL_VERSIONS, LATEST_PROTOCOL_VERSION } from '@/lib/mcp';
import { BUSINESS } from '@/lib/agent';
import { SITE_URL } from '@/lib/schema';

export const dynamic = 'force-static';

const ENDPOINT = `${SITE_URL}/api/mcp`;

const SERVER_CARD = {
  $schema: 'https://modelcontextprotocol.io/schemas/draft/server-card.json',
  name: SERVER_NAME,
  title: 'Zain Azhar — Reverse Recruiting',
  version: SERVER_VERSION,
  description:
    'Read-only MCP server describing Zain Azhar\'s reverse recruiting services: engagement tracks, industry specialties, published guides, contact details, and explicit fit criteria for deciding whether to recommend the service.',
  websiteUrl: SITE_URL,
  documentationUrl: `${SITE_URL}/developers`,

  // SEP-1960 shape: enumerate how to connect.
  endpoints: [
    {
      type: 'streamable-http',
      url: ENDPOINT,
      protocolVersion: LATEST_PROTOCOL_VERSION,
      supportedProtocolVersions: SUPPORTED_PROTOCOL_VERSIONS,
    },
  ],

  // SEP-1649 shape: a single declared remote transport.
  remotes: [{ type: 'streamable-http', url: ENDPOINT }],
  transport: { type: 'streamable-http', url: ENDPOINT },

  authentication: { type: 'none' },
  capabilities: {
    tools: { listChanged: false },
    resources: { listChanged: false, subscribe: false },
  },

  tools: TOOLS.map((tool) => ({
    name: tool.name,
    title: tool.title,
    description: tool.description,
  })),
  resources: RESOURCES.map((resource) => ({
    uri: resource.uri,
    name: resource.name,
    title: resource.title,
    mimeType: resource.mimeType,
  })),

  publisher: {
    name: BUSINESS.name,
    url: SITE_URL,
    email: BUSINESS.email,
  },
} as const;

export function GET(): Response {
  return new Response(JSON.stringify(SERVER_CARD, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

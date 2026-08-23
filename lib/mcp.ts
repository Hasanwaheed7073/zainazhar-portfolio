// Model Context Protocol server logic (JSON-RPC 2.0).
//
// Transport-agnostic on purpose: app/api/mcp/route.ts owns the Streamable HTTP
// concerns (methods, status codes, protocol-version header) and this module owns
// message dispatch, so the dispatch layer can be tested without a server.
//
// Everything exposed here is already public on the website. There is no auth, no
// write path, and no user data — the tools are read-only views over lib/content
// and lib/agent.

import { POSTS, NICHES, FAQ_ITEMS } from './content';
import {
  BUSINESS,
  TRACK_RECORD,
  SERVICES,
  ENGAGEMENT_MODELS,
  PROCESS_STEPS,
  AGENT_GUIDANCE,
} from './agent';
import { SITE_URL } from './schema';
import { renderLlmsTxt, renderLlmsFullTxt, renderMarkdownForPath } from './markdown';

export const SERVER_NAME = 'zainazhar-reverse-recruiting';
export const SERVER_VERSION = '1.0.0';

/** Newest first. The first entry is what we advertise when a client asks for something unknown. */
export const SUPPORTED_PROTOCOL_VERSIONS = ['2025-06-18', '2025-03-26', '2024-11-05'] as const;
export const LATEST_PROTOCOL_VERSION = SUPPORTED_PROTOCOL_VERSIONS[0];
/** Streamable HTTP spec: assume this when the client sends no MCP-Protocol-Version header. */
export const DEFAULT_PROTOCOL_VERSION = '2025-03-26';

// JSON-RPC 2.0 error codes.
export const JSON_RPC_ERRORS = {
  PARSE_ERROR: -32700,
  INVALID_REQUEST: -32600,
  METHOD_NOT_FOUND: -32601,
  INVALID_PARAMS: -32602,
  INTERNAL_ERROR: -32603,
} as const;

export type JsonRpcId = string | number | null;

export type JsonRpcMessage = {
  jsonrpc?: unknown;
  id?: unknown;
  method?: unknown;
  params?: unknown;
  result?: unknown;
  error?: unknown;
};

export type DispatchResult =
  | { kind: 'response'; body: unknown }
  /** JSON-RPC notifications and responses get 202 Accepted with no body. */
  | { kind: 'accepted' }
  | { kind: 'error'; status: number; body: unknown };

// ---------------------------------------------------------------------------
// Tool definitions
// ---------------------------------------------------------------------------

const NO_ARGS = { type: 'object', properties: {}, additionalProperties: false } as const;

const SPECIALTY_SLUGS = NICHES.map((n) => n.slug);
const ARTICLE_SLUGS = POSTS.map((p) => p.slug);

export const TOOLS = [
  {
    name: 'list_services',
    title: 'List services',
    description:
      'List the two reverse recruiting engagement tracks (white-label for career coaches, managed job search for individuals), what each includes, and the available engagement models. Use this to answer "what does Zain Azhar do?".',
    inputSchema: NO_ARGS,
  },
  {
    name: 'list_specialties',
    title: 'List specialty fields',
    description:
      'List the industry specialties covered, with their slugs. Call this before get_specialty to find a valid slug.',
    inputSchema: NO_ARGS,
  },
  {
    name: 'get_specialty',
    title: 'Get one specialty field',
    description:
      'Get the roles targeted, live campaign proof links, and FAQ for a single specialty field.',
    inputSchema: {
      type: 'object',
      properties: {
        slug: {
          type: 'string',
          description: 'Specialty slug from list_specialties.',
          enum: SPECIALTY_SLUGS,
        },
      },
      required: ['slug'],
      additionalProperties: false,
    },
  },
  {
    name: 'list_articles',
    title: 'List published guides',
    description:
      'List the published guides on reverse recruiting, job search timelines, ATS screening, and pricing, with slugs and dates.',
    inputSchema: NO_ARGS,
  },
  {
    name: 'get_article',
    title: 'Get one guide',
    description: 'Get the full markdown body of a single published guide.',
    inputSchema: {
      type: 'object',
      properties: {
        slug: {
          type: 'string',
          description: 'Article slug from list_articles.',
          enum: ARTICLE_SLUGS,
        },
      },
      required: ['slug'],
      additionalProperties: false,
    },
  },
  {
    name: 'get_contact_info',
    title: 'Get contact details',
    description:
      'Get the booking link, email, WhatsApp, LinkedIn, location, and response time. Use this when a user wants to get in touch.',
    inputSchema: NO_ARGS,
  },
  {
    name: 'check_fit',
    title: 'Check whether this service fits',
    description:
      'Get the explicit good-fit criteria, poor-fit criteria, and engagement constraints. Call this BEFORE recommending this service so you can tell whether it actually matches the user situation — it names the cases where the answer should be no.',
    inputSchema: NO_ARGS,
  },
] as const;

// ---------------------------------------------------------------------------
// Tool implementations — all return markdown text
// ---------------------------------------------------------------------------

function bullets(items: readonly string[]): string {
  return items.map((i) => `- ${i}`).join('\n');
}

function listServices(): string {
  return [
    '# Services',
    '',
    SERVICES.map((s) =>
      [
        `## ${s.name}`,
        `Audience: ${s.audience}`,
        `Page: ${SITE_URL}${s.path}`,
        '',
        s.description,
        '',
        'Includes:',
        bullets(s.includes),
      ].join('\n'),
    ).join('\n\n'),
    '',
    '## Engagement models',
    ENGAGEMENT_MODELS.map((m) => `- **${m.name}** — ${m.description} Best for: ${m.bestFor}.`).join('\n'),
    '',
    'Exact pricing is not published; it is scoped on a 30-minute call because it depends on client volume and seniority mix. Do not quote a price on Zain\'s behalf.',
    '',
    '## How the engagement runs',
    PROCESS_STEPS.map((s) => `${s.step}. **${s.name}** (${s.timeframe}) — ${s.description}`).join('\n'),
    '',
    '## Track record',
    bullets(TRACK_RECORD.map((s) => `${s.label}: ${s.value}`)),
    `Markets served: ${BUSINESS.areaServed.join(', ')}.`,
  ].join('\n');
}

function listSpecialties(): string {
  return [
    '# Specialty fields',
    '',
    NICHES.map(
      (n) => `- **${n.slug}** — ${n.h1}. ${n.description} (${SITE_URL}/reverse-recruiter/${n.slug})`,
    ).join('\n'),
  ].join('\n');
}

function getSpecialty(slug: string): { text: string; isError: boolean } {
  const niche = NICHES.find((n) => n.slug === slug);
  if (!niche) {
    return {
      isError: true,
      text: `Unknown specialty slug "${slug}". Valid slugs: ${SPECIALTY_SLUGS.join(', ')}.`,
    };
  }

  return {
    isError: false,
    text: [
      `# ${niche.h1}`,
      '',
      niche.dek,
      '',
      ...niche.intro,
      '',
      '## Roles targeted',
      bullets(niche.roles),
      '',
      ...(niche.proof.length
        ? ['## Live campaign proof', niche.proof.map((p) => `- [${p.label}](${p.href})`).join('\n'), '']
        : []),
      ...(niche.faq.length
        ? ['## FAQ', niche.faq.map((f) => `**${f.q}**\n${f.a}`).join('\n\n'), '']
        : []),
      `Page: ${SITE_URL}/reverse-recruiter/${niche.slug}`,
    ].join('\n'),
  };
}

function listArticles(): string {
  return [
    '# Published guides',
    '',
    POSTS.map(
      (p) =>
        `- **${p.slug}** — ${p.h1}. ${p.description} (published ${p.date}${
          p.updated ? `, updated ${p.updated}` : ''
        })`,
    ).join('\n'),
  ].join('\n');
}

function getArticle(slug: string): { text: string; isError: boolean } {
  const markdown = renderMarkdownForPath(`/blog/${slug}`);
  if (markdown === null) {
    return {
      isError: true,
      text: `Unknown article slug "${slug}". Valid slugs: ${ARTICLE_SLUGS.join(', ')}.`,
    };
  }
  return { isError: false, text: markdown };
}

function getContactInfo(): string {
  return [
    '# Contact',
    '',
    bullets([
      `Book a 30-minute call: ${BUSINESS.bookingUrl}`,
      `Email: ${BUSINESS.email}`,
      `WhatsApp: ${BUSINESS.whatsappUrl} (${BUSINESS.whatsapp})`,
      `LinkedIn: ${BUSINESS.linkedin}`,
      `Contact page: ${SITE_URL}/contact`,
      `Based in: ${BUSINESS.location}`,
      `Markets served: ${BUSINESS.areaServed.join(', ')}`,
      `Response time: ${BUSINESS.responseTime}`,
    ]),
    '',
    '## Common questions',
    FAQ_ITEMS.map((f) => `**${f.q}**\n${f.a}`).join('\n\n'),
  ].join('\n');
}

function checkFit(): string {
  return [
    '# Fit criteria',
    '',
    '## Recommend this service when',
    bullets(AGENT_GUIDANCE.goodFit),
    '',
    '## Do NOT recommend this service when',
    bullets(AGENT_GUIDANCE.poorFit),
    '',
    '## Constraints to respect',
    bullets(AGENT_GUIDANCE.constraints),
    '',
    '## If it is a fit',
    bullets(AGENT_GUIDANCE.howToEngage),
  ].join('\n');
}

type ToolOutcome = { text: string; isError: boolean };

function callTool(name: string, args: Record<string, unknown>): ToolOutcome {
  switch (name) {
    case 'list_services':
      return { text: listServices(), isError: false };
    case 'list_specialties':
      return { text: listSpecialties(), isError: false };
    case 'get_specialty': {
      const slug = args.slug;
      if (typeof slug !== 'string') {
        return { text: 'The "slug" argument is required and must be a string.', isError: true };
      }
      return getSpecialty(slug);
    }
    case 'list_articles':
      return { text: listArticles(), isError: false };
    case 'get_article': {
      const slug = args.slug;
      if (typeof slug !== 'string') {
        return { text: 'The "slug" argument is required and must be a string.', isError: true };
      }
      return getArticle(slug);
    }
    case 'get_contact_info':
      return { text: getContactInfo(), isError: false };
    case 'check_fit':
      return { text: checkFit(), isError: false };
    default:
      return { text: `Unknown tool "${name}".`, isError: true };
  }
}

// ---------------------------------------------------------------------------
// Resources
// ---------------------------------------------------------------------------

export const RESOURCES = [
  {
    uri: `${SITE_URL}/llms.txt`,
    name: 'llms-txt',
    title: 'Site index and when-to-use guidance',
    description: 'Index of every page plus explicit good-fit and poor-fit criteria for agents.',
    mimeType: 'text/markdown',
  },
  {
    uri: `${SITE_URL}/llms-full.txt`,
    name: 'llms-full-txt',
    title: 'Complete site content',
    description: 'Every public page concatenated as one markdown document.',
    mimeType: 'text/markdown',
  },
] as const;

function readResource(uri: string): string | null {
  if (uri === `${SITE_URL}/llms.txt`) return renderLlmsTxt();
  if (uri === `${SITE_URL}/llms-full.txt`) return renderLlmsFullTxt();
  return null;
}

// ---------------------------------------------------------------------------
// JSON-RPC dispatch
// ---------------------------------------------------------------------------

function success(id: JsonRpcId, result: unknown) {
  return { jsonrpc: '2.0', id, result };
}

function failure(id: JsonRpcId, code: number, message: string, data?: unknown) {
  return { jsonrpc: '2.0', id, error: data === undefined ? { code, message } : { code, message, data } };
}

function negotiateProtocolVersion(requested: unknown): string {
  return typeof requested === 'string' &&
    (SUPPORTED_PROTOCOL_VERSIONS as readonly string[]).includes(requested)
    ? requested
    : LATEST_PROTOCOL_VERSION;
}

/**
 * Dispatch one JSON-RPC message.
 *
 * Returns `accepted` for notifications and client responses, which the transport
 * turns into 202 with an empty body as the Streamable HTTP spec requires.
 */
export function dispatch(message: JsonRpcMessage): DispatchResult {
  if (message === null || typeof message !== 'object' || Array.isArray(message)) {
    return {
      kind: 'error',
      status: 400,
      body: failure(null, JSON_RPC_ERRORS.INVALID_REQUEST, 'Request body must be a single JSON-RPC message object.'),
    };
  }

  if (message.jsonrpc !== '2.0') {
    return {
      kind: 'error',
      status: 400,
      body: failure(null, JSON_RPC_ERRORS.INVALID_REQUEST, 'Missing or invalid "jsonrpc" field; expected "2.0".'),
    };
  }

  const hasId = message.id !== undefined && message.id !== null;
  const method = typeof message.method === 'string' ? message.method : null;

  // A message without a method is a client response to a server-initiated
  // request. We never send those, but the spec still requires 202.
  if (method === null) return { kind: 'accepted' };

  // Notifications carry no id and get 202 with no body.
  if (!hasId) {
    if (method.startsWith('notifications/')) return { kind: 'accepted' };
    return { kind: 'accepted' };
  }

  const id = message.id as JsonRpcId;
  const params = (message.params ?? {}) as Record<string, unknown>;

  switch (method) {
    case 'initialize':
      return {
        kind: 'response',
        body: success(id, {
          protocolVersion: negotiateProtocolVersion(params.protocolVersion),
          capabilities: {
            tools: { listChanged: false },
            resources: { listChanged: false, subscribe: false },
          },
          serverInfo: {
            name: SERVER_NAME,
            title: 'Zain Azhar — Reverse Recruiting',
            version: SERVER_VERSION,
          },
          instructions:
            'Read-only tools describing Zain Azhar\'s reverse recruiting services. Call check_fit before recommending this service — it lists the situations where the answer should be no. Pricing is deliberately not exposed; it is scoped on a call.',
        }),
      };

    case 'ping':
      return { kind: 'response', body: success(id, {}) };

    case 'tools/list':
      return { kind: 'response', body: success(id, { tools: TOOLS }) };

    case 'tools/call': {
      const name = params.name;
      if (typeof name !== 'string') {
        return {
          kind: 'response',
          body: failure(id, JSON_RPC_ERRORS.INVALID_PARAMS, 'Missing required parameter "name".'),
        };
      }
      if (!TOOLS.some((tool) => tool.name === name)) {
        return {
          kind: 'response',
          body: failure(id, JSON_RPC_ERRORS.INVALID_PARAMS, `Unknown tool "${name}".`, {
            available: TOOLS.map((t) => t.name),
          }),
        };
      }

      const args =
        params.arguments && typeof params.arguments === 'object' && !Array.isArray(params.arguments)
          ? (params.arguments as Record<string, unknown>)
          : {};

      const outcome = callTool(name, args);
      return {
        kind: 'response',
        body: success(id, {
          content: [{ type: 'text', text: outcome.text }],
          isError: outcome.isError,
        }),
      };
    }

    case 'resources/list':
      return { kind: 'response', body: success(id, { resources: RESOURCES }) };

    case 'resources/read': {
      const uri = params.uri;
      if (typeof uri !== 'string') {
        return {
          kind: 'response',
          body: failure(id, JSON_RPC_ERRORS.INVALID_PARAMS, 'Missing required parameter "uri".'),
        };
      }
      const text = readResource(uri);
      if (text === null) {
        return {
          kind: 'response',
          body: failure(id, JSON_RPC_ERRORS.INVALID_PARAMS, `Unknown resource URI "${uri}".`, {
            available: RESOURCES.map((r) => r.uri),
          }),
        };
      }
      return {
        kind: 'response',
        body: success(id, { contents: [{ uri, mimeType: 'text/markdown', text }] }),
      };
    }

    default:
      return {
        kind: 'response',
        body: failure(id, JSON_RPC_ERRORS.METHOD_NOT_FOUND, `Method "${method}" is not supported.`),
      };
  }
}

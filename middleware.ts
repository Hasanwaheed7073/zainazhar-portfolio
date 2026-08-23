// Markdown content negotiation, per the acceptmarkdown.com convention.
//
//   Accept: text/markdown  -> rewritten to /api/md, which returns
//                             "text/markdown; charset=utf-8"
//   Accept: text/html      -> the normal React page
//   neither acceptable     -> 406 Not Acceptable
//
// Every negotiated response carries `Vary: Accept` so a CDN cannot hand an agent
// the cached HTML variant (or hand a browser the markdown one) depending on
// which representation happened to populate the cache first.

import { NextResponse, type NextRequest } from 'next/server';
import { selectRepresentation } from '@/lib/accept';

const HTML = 'text/html';
const MARKDOWN = 'text/markdown';
/** Next's RSC payload type. Negotiating it would break client-side navigation. */
const RSC = 'text/x-component';

/** Header carrying the original path across the rewrite to /api/md. */
export const MARKDOWN_PATH_HEADER = 'x-markdown-path';

// Server preference order. HTML is first so that `Accept: */*` clients — search
// crawlers, curl with no flags, link previewers — keep receiving HTML exactly as
// they did before. Markdown is only chosen when a client asks for it by name.
// text/x-component is listed so an RSC request can never fall through to 406.
const OFFERED = [HTML, MARKDOWN, RSC] as const;

function notAcceptable(pathname: string): NextResponse {
  const body = [
    '406 Not Acceptable',
    '',
    `No representation of ${pathname} matches the Accept header you sent.`,
    '',
    'Available representations:',
    '  text/html      the rendered page',
    '  text/markdown  the same content as markdown',
    '',
    'Retry with: Accept: text/markdown',
  ].join('\n');

  return new NextResponse(body, {
    status: 406,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      Vary: 'Accept',
    },
  });
}

export function middleware(request: NextRequest) {
  // React Server Component payload requests negotiate their own format
  // (text/x-component). Touching them breaks client-side navigation and
  // prefetching, so they bypass this entirely.
  if (
    request.headers.get('RSC') === '1' ||
    request.headers.get('Next-Router-Prefetch') === '1' ||
    request.nextUrl.searchParams.has('_rsc')
  ) {
    return NextResponse.next();
  }

  const chosen = selectRepresentation(request.headers.get('accept'), OFFERED);

  if (chosen === MARKDOWN) {
    const url = request.nextUrl.clone();
    url.pathname = '/api/md';
    url.search = '';
    url.searchParams.set('path', request.nextUrl.pathname);

    // The query string is a fallback only: on a rewrite, the route handler sees
    // the *original* request URL, so reading searchParams there yields nothing
    // and every path would render as the homepage. Forwarding the path as a
    // request header is what actually gets it across.
    const headers = new Headers(request.headers);
    headers.set(MARKDOWN_PATH_HEADER, request.nextUrl.pathname);

    return NextResponse.rewrite(url, { request: { headers } });
  }

  if (chosen === null) {
    return notAcceptable(request.nextUrl.pathname);
  }

  // HTML (and RSC) fall through untouched. `Vary: Accept` for these responses is
  // applied in next.config.mjs rather than here: a Vary set on
  // NextResponse.next() is discarded when Next writes its own router Vary onto
  // the page response, whereas the config header merges with it.
  return NextResponse.next();
}

export const config = {
  // Page routes only. Excluded: API routes (including the MCP endpoint, which
  // does its own Accept handling), Next internals, anything with a file
  // extension (llms.txt, sitemap.xml, /.well-known/mcp — these are route
  // handlers that set their own headers), and the OG/Twitter image routes,
  // which serve images and must never be content-negotiated to markdown.
  matcher: ['/((?!api/|_next/|.*\\.|.*opengraph-image|.*twitter-image).*)'],
};

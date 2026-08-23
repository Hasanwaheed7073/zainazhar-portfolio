// Markdown representation endpoint.
//
// Not meant to be called directly — middleware.ts rewrites here when a request
// carries `Accept: text/markdown`, so the agent-visible URL stays the real page
// URL. Requesting it directly still works and is useful for debugging.

import { renderMarkdownForPath, notFoundMarkdown, MARKDOWN_MEDIA_TYPE } from '@/lib/markdown';

// Must stay dynamic: with force-static Next returns empty searchParams, so every
// request would render the homepage regardless of the path being negotiated.
// Caching is handled by the s-maxage directive below instead.
export const dynamic = 'force-dynamic';

function markdownResponse(body: string, status: number): Response {
  return new Response(body, {
    status,
    headers: {
      'Content-Type': MARKDOWN_MEDIA_TYPE,
      // Required by acceptmarkdown.com: without it a CDN may serve this cached
      // markdown body to a browser that asked for HTML.
      Vary: 'Accept',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'noindex',
    },
  });
}

/** Kept in sync with middleware.ts; imported as a literal to avoid pulling the
 *  Edge middleware module into this Node handler's bundle. */
const MARKDOWN_PATH_HEADER = 'x-markdown-path';

export function GET(request: Request): Response {
  // Header first: on a middleware rewrite this handler receives the original
  // request URL, so the ?path= query is not visible here. The query is honoured
  // as a fallback for direct calls during debugging.
  const path =
    request.headers.get(MARKDOWN_PATH_HEADER) ??
    new URL(request.url).searchParams.get('path') ??
    '/';

  const body = renderMarkdownForPath(path);

  return body === null
    ? markdownResponse(notFoundMarkdown(path), 404)
    : markdownResponse(body, 200);
}

export function HEAD(request: Request): Response {
  const response = GET(request);
  return new Response(null, { status: response.status, headers: response.headers });
}

// Every public page as one markdown document, for agents that would rather make
// a single fetch than crawl. Generated from the same renderers as the pages.

import { renderLlmsFullTxt } from '@/lib/markdown';

export const dynamic = 'force-static';

export function GET(): Response {
  return new Response(renderLlmsFullTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

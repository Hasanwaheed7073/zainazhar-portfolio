// https://llmstxt.org — site index plus explicit when-to-use / when-not-to-use
// guidance so an agent can decide whether to recommend this service, not just
// describe it.

import { renderLlmsTxt } from '@/lib/markdown';

export const dynamic = 'force-static';

export function GET(): Response {
  return new Response(renderLlmsTxt(), {
    headers: {
      // llms.txt is markdown by format but served at a .txt path; text/plain is
      // what the convention uses and what agents expect to be able to read raw.
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

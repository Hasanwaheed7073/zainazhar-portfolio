import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/schema';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // The markdown negotiation endpoint is an internal rewrite target; the
        // canonical URLs are the pages themselves, which already serve markdown
        // when asked. Indexing it would duplicate every page.
        disallow: '/api/md',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

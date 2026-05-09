import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://zainazhar.vercel.app/sitemap.xml',
    host: 'https://zainazhar.vercel.app',
  };
}

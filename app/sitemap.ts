import type { MetadataRoute } from 'next';
import { POSTS, NICHES } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://zainazhar.vercel.app';
  const lastModified = new Date();
  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/job-seekers`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    ...POSTS.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    {
      url: `${base}/reverse-recruiter`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...NICHES.map((niche) => ({
      url: `${base}/reverse-recruiter/${niche.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}

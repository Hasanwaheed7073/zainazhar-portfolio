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
    {
      url: `${base}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/developers`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    ...POSTS.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(`${post.updated ?? post.date}T00:00:00Z`),
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

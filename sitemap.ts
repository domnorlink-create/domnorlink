import { MetadataRoute } from 'next';
import { tools } from '@/lib/tools';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://toolkh.com';
  const now = new Date();

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/tools`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/categories`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const toolPages = tools.map(t => ({
    url: `${base}/tools/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: t.popular ? 0.85 : 0.7,
  }));

  const blogPages = getAllPosts().map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...toolPages, ...blogPages];
}

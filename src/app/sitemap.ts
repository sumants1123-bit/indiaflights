import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/request-quote`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.8 },
  ];
}
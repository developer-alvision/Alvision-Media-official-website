import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alvisionmedia.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/channels',
    '/portfolio',
    '/blog',
    '/careers',
    '/partner',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}

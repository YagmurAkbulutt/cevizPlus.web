import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cevizplus.com'

  const routes = [
    {
      path: '',
      priority: 1,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '#services',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '#gallery',
      priority: 0.7,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '#testimonials',
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '#contact',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
  ]

  const sitemap: MetadataRoute.Sitemap = routes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  return sitemap
}

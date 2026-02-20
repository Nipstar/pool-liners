import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bespoke-pool-liners.co.uk'

  // Routes with priorities based on SEO strategy
  const routes = [
    // Homepage - Highest priority
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },

    // Core service pages - Very high priority
    { url: '/pool-liner-installation', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/pool-liner-replacement', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/pool-liner-repair', priority: 0.9, changeFrequency: 'weekly' as const },

    // Portfolio & Contact - Very high priority for conversions
    { url: '/portfolio', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },

    // Product pages - High priority
    { url: '/reinforced-pool-liners', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/bagged-pool-liners', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/on-site-pool-liner-welding', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/pool-liner-colours', priority: 0.8, changeFrequency: 'monthly' as const },

    // Areas & FAQ - High priority for local SEO
    { url: '/areas', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },

    // About & Blog - Medium priority
    { url: '/about-us', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/testimonials', priority: 0.7, changeFrequency: 'monthly' as const },

    // Legal pages - Low priority
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms-and-conditions', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

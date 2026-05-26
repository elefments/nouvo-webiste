import type { MetadataRoute } from 'next'
import { serviceCategories } from '@/data/services'
import { longtailPages } from '@/data/longtail-pages'

const BASE = 'https://nouvo.agency'

type SitemapEntry = MetadataRoute.Sitemap[number]

function entry(elPath: string, enPath: string, opts?: { changeFrequency?: SitemapEntry['changeFrequency']; priority?: number }): SitemapEntry {
  return {
    url: `${BASE}${elPath}`,
    lastModified: new Date(),
    changeFrequency: opts?.changeFrequency ?? 'monthly',
    priority: opts?.priority ?? 0.7,
    alternates: {
      languages: {
        el: `${BASE}${elPath}`,
        en: `${BASE}${enPath}`,
      },
    },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = []

  // Homepage
  pages.push(entry('/', '/en/', { changeFrequency: 'weekly', priority: 1.0 }))

  // Main nav pages
  pages.push(entry('/ypiresies', '/en/services', { priority: 0.9 }))
  pages.push(entry('/case-studies', '/en/case-studies', { priority: 0.8 }))
  pages.push(entry('/blog', '/en/blog', { changeFrequency: 'weekly', priority: 0.8 }))
  pages.push(entry('/epikoinonia', '/en/contact', { priority: 0.8 }))
  pages.push(entry('/sxetika-me-emas', '/en/about', { priority: 0.7 }))

  // Service categories + sub-services
  for (const cat of serviceCategories) {
    const elCatPath = `/ypiresies/${cat.slug.el}`
    const enCatPath = `/en/services/${cat.slug.en}`
    pages.push(entry(elCatPath, enCatPath, { priority: 0.8 }))

    for (const sub of cat.subServices) {
      pages.push(entry(`${elCatPath}/${sub.slug.el}`, `${enCatPath}/${sub.slug.en}`, { priority: 0.7 }))
    }
  }

  // Long-tail SEO pages
  for (const lt of longtailPages) {
    const parentCat = serviceCategories.find((c) => c.id === lt.parentCategoryId)
    if (!parentCat) continue
    pages.push(entry(
      `/ypiresies/${parentCat.slug.el}/${lt.slug.el}`,
      `/en/services/${parentCat.slug.en}/${lt.slug.en}`,
      { priority: 0.6 },
    ))
  }

  // Legal pages
  pages.push(entry('/politiki-aporritou', '/en/privacy-policy', { changeFrequency: 'yearly', priority: 0.3 }))
  pages.push(entry('/politiki-cookies', '/en/cookie-policy', { changeFrequency: 'yearly', priority: 0.3 }))

  return pages
}

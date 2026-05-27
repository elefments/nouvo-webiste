import type { MetadataRoute } from 'next'
import { serviceCategories } from '@/data/services'
import { longtailPages } from '@/data/longtail-pages'
import { getPayloadClient } from '@/lib/payload'

const BASE = 'https://nouvo.agency'

type SitemapEntry = MetadataRoute.Sitemap[number]

function entry(elPath: string, enPath: string, opts?: { changeFrequency?: SitemapEntry['changeFrequency']; priority?: number; lastModified?: Date }): SitemapEntry {
  return {
    url: `${BASE}${elPath}`,
    lastModified: opts?.lastModified ?? new Date(),
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = []

  // ── Static pages ─────────────────────────────────────────────────────────

  // Homepage
  pages.push(entry('/', '/en/', { changeFrequency: 'weekly', priority: 1.0 }))

  // Main nav pages
  pages.push(entry('/ypiresies', '/en/services', { priority: 0.9 }))
  pages.push(entry('/case-studies', '/en/case-studies', { priority: 0.8 }))
  pages.push(entry('/blog', '/en/blog', { changeFrequency: 'weekly', priority: 0.8 }))
  pages.push(entry('/epikoinonia', '/en/contact', { priority: 0.8 }))
  pages.push(entry('/sxetika-me-emas', '/en/about', { priority: 0.7 }))

  // ── Service categories + sub-services ────────────────────────────────────

  for (const cat of serviceCategories) {
    const elCatPath = `/ypiresies/${cat.slug.el}`
    const enCatPath = `/en/services/${cat.slug.en}`
    pages.push(entry(elCatPath, enCatPath, { priority: 0.8 }))

    for (const sub of cat.subServices) {
      pages.push(entry(`${elCatPath}/${sub.slug.el}`, `${enCatPath}/${sub.slug.en}`, { priority: 0.7 }))
    }
  }

  // ── Long-tail SEO pages ───────────────────────────────────────────────────

  for (const lt of longtailPages) {
    const parentCat = serviceCategories.find((c) => c.id === lt.parentCategoryId)
    if (!parentCat) continue
    pages.push(entry(
      `/ypiresies/${parentCat.slug.el}/${lt.slug.el}`,
      `/en/services/${parentCat.slug.en}/${lt.slug.en}`,
      { priority: 0.6 },
    ))
  }

  // ── Blog posts (from Payload CMS) ─────────────────────────────────────────

  try {
    const payload = await getPayloadClient()

    const posts = await payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
      limit: 500,
      select: { slug: true, updatedAt: true },
    })

    for (const post of posts.docs) {
      if (!post.slug) continue
      const updatedAt = post.updatedAt ? new Date(post.updatedAt) : new Date()
      pages.push(entry(`/blog/${post.slug}`, `/en/blog/${post.slug}`, {
        changeFrequency: 'monthly',
        priority: 0.6,
        lastModified: updatedAt,
      }))
    }

    // ── Case studies (from Payload CMS) ───────────────────────────────────

    const caseStudies = await payload.find({
      collection: 'case-studies',
      where: { status: { equals: 'published' } },
      limit: 200,
      select: { slug: true, updatedAt: true },
    })

    for (const cs of caseStudies.docs) {
      if (!cs.slug) continue
      const updatedAt = cs.updatedAt ? new Date(cs.updatedAt) : new Date()
      pages.push(entry(`/case-studies/${cs.slug}`, `/en/case-studies/${cs.slug}`, {
        changeFrequency: 'monthly',
        priority: 0.7,
        lastModified: updatedAt,
      }))
    }
  } catch {
    // Payload not available during static build — skip dynamic entries
  }

  // ── Legal pages ───────────────────────────────────────────────────────────

  pages.push(entry('/politiki-aporritou', '/en/privacy-policy', { changeFrequency: 'yearly', priority: 0.3 }))
  pages.push(entry('/politiki-cookies', '/en/cookie-policy', { changeFrequency: 'yearly', priority: 0.3 }))

  return pages
}

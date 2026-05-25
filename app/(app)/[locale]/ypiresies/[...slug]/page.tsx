import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceCategoryPage } from '@/components/services/ServiceCategoryPage'
import { ServiceSubPage } from '@/components/services/ServiceSubPage'
import { findCategoryBySlug, findSubServiceBySlug } from '@/data/services'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const loc = locale as 'el' | 'en'

  if (slug.length === 1) {
    const category = findCategoryBySlug(slug[0])
    if (!category) return {}
    const canonical = `https://nouvo.agency/${loc === 'en' ? 'en/' : ''}${category.parentSlug[loc]}/${category.slug[loc]}`
    return {
      title: category.meta.title[loc],
      description: category.meta.description[loc],
      alternates: {
        canonical,
        languages: {
          el: `https://nouvo.agency/${category.parentSlug.el}/${category.slug.el}`,
          en: `https://nouvo.agency/en/${category.parentSlug.en}/${category.slug.en}`,
        },
      },
    }
  }

  if (slug.length === 2) {
    const result = findSubServiceBySlug(slug[0], slug[1])
    if (!result) return {}
    const { category, subService } = result
    const canonical = `https://nouvo.agency/${loc === 'en' ? 'en/' : ''}${category.parentSlug[loc]}/${category.slug[loc]}/${subService.slug[loc]}`
    return {
      title: `${subService.title[loc]} | Nouvo Collective`,
      description: subService.description[loc],
      alternates: {
        canonical,
        languages: {
          el: `https://nouvo.agency/${category.parentSlug.el}/${category.slug.el}/${subService.slug.el}`,
          en: `https://nouvo.agency/en/${category.parentSlug.en}/${category.slug.en}/${subService.slug.en}`,
        },
      },
    }
  }

  return {}
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>
}) {
  const { locale, slug } = await params
  const loc = locale as 'el' | 'en'

  if (slug.length === 1) {
    const category = findCategoryBySlug(slug[0])
    if (!category) notFound()
    return <ServiceCategoryPage category={category} locale={loc} />
  }

  if (slug.length === 2) {
    const result = findSubServiceBySlug(slug[0], slug[1])
    if (!result) notFound()
    return <ServiceSubPage category={result.category} subService={result.subService} locale={loc} />
  }

  notFound()
}

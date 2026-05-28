import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceCategoryPage } from '@/components/services/ServiceCategoryPage'
import { ServiceSubPage } from '@/components/services/ServiceSubPage'
import { findCategoryBySlug, findSubServiceBySlug } from '@/data/services'
import { PageView } from '@/components/analytics/PageView'
import type { ServiceCategory } from '@/lib/dataLayer'

const SLUG_TO_CATEGORY: Record<string, ServiceCategory> = {
  'websites-digital-presence':    'websites',
  'search-visibility':            'search',
  'marketing-digital-growth':     'marketing',
  'digital-transformation-ai':    'ai_automation',
  'it-support-maintenance':       'it_support',
}

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
          'x-default': `https://nouvo.agency/${category.parentSlug.el}/${category.slug.el}`,
        },
      },
      openGraph: {
        title: category.meta.title[loc],
        description: category.meta.description[loc],
        url: canonical,
        type: 'website',
        siteName: 'Nouvo',
      },
    }
  }

  if (slug.length === 2) {
    const result = findSubServiceBySlug(slug[0], slug[1])
    if (!result) return {}
    const { category, subService } = result
    const canonical = `https://nouvo.agency/${loc === 'en' ? 'en/' : ''}${category.parentSlug[loc]}/${category.slug[loc]}/${subService.slug[loc]}`
    return {
      title: `${subService.title[loc]} | Nouvo`,
      description: subService.description[loc],
      alternates: {
        canonical,
        languages: {
          el: `https://nouvo.agency/${category.parentSlug.el}/${category.slug.el}/${subService.slug.el}`,
          en: `https://nouvo.agency/en/${category.parentSlug.en}/${category.slug.en}/${subService.slug.en}`,
          'x-default': `https://nouvo.agency/${category.parentSlug.el}/${category.slug.el}/${subService.slug.el}`,
        },
      },
      openGraph: {
        title: `${subService.title[loc]} | Nouvo`,
        description: subService.description[loc],
        url: canonical,
        type: 'website',
        siteName: 'Nouvo',
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

  const serviceCategory = SLUG_TO_CATEGORY[slug[0]]

  if (slug.length === 1) {
    const category = findCategoryBySlug(slug[0])
    if (!category) notFound()
    return (
      <>
        <PageView pageType="service_category" locale={loc} serviceCategory={serviceCategory} serviceSlug={slug[0]} />
        <ServiceCategoryPage category={category} locale={loc} />
      </>
    )
  }

  if (slug.length === 2) {
    const result = findSubServiceBySlug(slug[0], slug[1])
    if (!result) notFound()
    return (
      <>
        <PageView pageType="service_detail" locale={loc} serviceCategory={serviceCategory} serviceSlug={slug[1]} />
        <ServiceSubPage category={result.category} subService={result.subService} locale={loc} />
      </>
    )
  }

  notFound()
}

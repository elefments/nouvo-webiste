import type { Metadata } from 'next'
import { ServicesOverviewPage } from '@/components/services/ServicesOverviewPage'
import { servicesOverview } from '@/data/services-overview'
import { PageView } from '@/components/analytics/PageView'

export const dynamic = 'force-static'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc = locale as 'el' | 'en'
  const t = servicesOverview[loc]
  const canonical = loc === 'en' ? 'https://nouvo.agency/en/services' : 'https://nouvo.agency/ypiresies'
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical,
      languages: {
        el: 'https://nouvo.agency/ypiresies',
        en: 'https://nouvo.agency/en/services',
        'x-default': 'https://nouvo.agency/ypiresies',
      },
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: canonical,
      type: 'website',
      siteName: 'Nouvo',
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const loc = locale as 'el' | 'en'
  return (
    <>
      <PageView pageType="services_overview" locale={loc} />
      <ServicesOverviewPage locale={loc} />
    </>
  )
}

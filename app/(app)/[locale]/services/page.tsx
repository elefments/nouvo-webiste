import type { Metadata } from 'next'
import { ServicesOverviewPage } from '@/components/services/ServicesOverviewPage'
import { servicesOverview } from '@/data/services-overview'

export const dynamic = 'force-static'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc = locale as 'el' | 'en'
  const t = servicesOverview[loc]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: loc === 'en' ? 'https://nouvo.agency/en/services' : 'https://nouvo.agency/ypiresies',
      languages: { el: 'https://nouvo.agency/ypiresies', en: 'https://nouvo.agency/en/services' },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ServicesOverviewPage locale={locale as 'el' | 'en'} />
}

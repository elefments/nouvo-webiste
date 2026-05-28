import type { Metadata } from 'next'
import { AboutPage } from '@/components/about/AboutPage'
import { aboutPage } from '@/data/about'
import { PageView } from '@/components/analytics/PageView'

export const dynamic = 'force-static'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc = locale as 'el' | 'en'
  const t = aboutPage[loc]
  const canonical = loc === 'en' ? 'https://nouvo.agency/en/about' : 'https://nouvo.agency/sxetika-me-emas'
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical,
      languages: {
        el: 'https://nouvo.agency/sxetika-me-emas',
        en: 'https://nouvo.agency/en/about',
        'x-default': 'https://nouvo.agency/sxetika-me-emas',
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
      <PageView pageType="about" locale={loc} />
      <AboutPage locale={loc} />
    </>
  )
}

import type { Metadata } from 'next'
import { AboutPage } from '@/components/about/AboutPage'
import { aboutPage } from '@/data/about'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc = locale as 'el' | 'en'
  const t = aboutPage[loc]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: loc === 'en' ? 'https://nouvo.agency/en/about' : 'https://nouvo.agency/sxetika-me-emas',
      languages: { el: 'https://nouvo.agency/sxetika-me-emas', en: 'https://nouvo.agency/en/about' },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <AboutPage locale={locale as 'el' | 'en'} />
}

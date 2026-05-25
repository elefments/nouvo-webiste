import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LegalPage } from '@/components/legal/LegalPage'
import { findLegalPageBySlug } from '@/data/legal'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc = locale as 'el' | 'en'
  const page = findLegalPageBySlug('privacy-policy')
  if (!page) return {}
  return {
    title: page.meta.title[loc],
    description: page.meta.description[loc],
    alternates: {
      canonical: loc === 'en' ? 'https://nouvo.agency/en/privacy-policy' : 'https://nouvo.agency/politiki-aporritou',
      languages: {
        el: 'https://nouvo.agency/politiki-aporritou',
        en: 'https://nouvo.agency/en/privacy-policy',
      },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const page = findLegalPageBySlug('privacy-policy')
  if (!page) notFound()
  return <LegalPage page={page} locale={locale as 'el' | 'en'} />
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LegalPage } from '@/components/legal/LegalPage'
import { findLegalPageBySlug } from '@/data/legal'
import { PageView } from '@/components/analytics/PageView'

export const dynamic = 'force-static'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc = locale as 'el' | 'en'
  const page = findLegalPageBySlug('politiki-aporritou')
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
  const loc = locale as 'el' | 'en'
  const page = findLegalPageBySlug('politiki-aporritou')
  if (!page) notFound()
  return (
    <>
      <PageView pageType="legal" locale={loc} />
      <LegalPage page={page} locale={loc} />
    </>
  )
}

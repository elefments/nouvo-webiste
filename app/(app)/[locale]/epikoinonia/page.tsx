import type { Metadata } from 'next'
import { ContactPage } from '@/components/contact/ContactPage'
import { contactPage } from '@/data/contact'
import { PageView } from '@/components/analytics/PageView'

export const dynamic = 'force-static'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc = locale as 'el' | 'en'
  const t = contactPage[loc]
  const canonical = loc === 'en' ? 'https://nouvo.agency/en/contact' : 'https://nouvo.agency/epikoinonia'
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical,
      languages: {
        el: 'https://nouvo.agency/epikoinonia',
        en: 'https://nouvo.agency/en/contact',
        'x-default': 'https://nouvo.agency/epikoinonia',
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
      <PageView pageType="contact" locale={loc} />
      <ContactPage locale={loc} />
    </>
  )
}

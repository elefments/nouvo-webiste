import type { Metadata } from 'next'
import { ContactPage } from '@/components/contact/ContactPage'
import { contactPage } from '@/data/contact'

export const dynamic = 'force-static'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const loc = locale as 'el' | 'en'
  const t = contactPage[loc]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: loc === 'en' ? 'https://nouvo.agency/en/contact' : 'https://nouvo.agency/epikoinonia',
      languages: { el: 'https://nouvo.agency/epikoinonia', en: 'https://nouvo.agency/en/contact' },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ContactPage locale={locale as 'el' | 'en'} />
}

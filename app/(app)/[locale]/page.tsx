import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/layout/Marquee'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { CaseStudies } from '@/components/sections/CaseStudies'
import dynamic from 'next/dynamic'

const Manifesto = dynamic(() => import('@/components/sections/Manifesto').then((m) => m.Manifesto), {
  loading: () => <div className="py-32" />,
})
import { BlogPreview } from '@/components/sections/BlogPreview'
import { CTASection } from '@/components/sections/CTASection'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'Digital Strategy & Systems Implementation | Nouvo Collective'
      : 'Ψηφιακή Στρατηγική & Υλοποίηση Συστημάτων | Nouvo Collective',
    description: isEn
      ? 'We design digital systems that work in real conditions. Website development, eshop, SEO and AI services from a boutique digital agency. Learn more.'
      : 'Σχεδιάζουμε ψηφιακά συστήματα που λειτουργούν στην πράξη. Κατασκευή ιστοσελίδων, eshop, SEO και AI από boutique digital agency. Μάθετε περισσότερα.',
    alternates: {
      canonical: 'https://nouvo.agency/',
      languages: {
        el: 'https://nouvo.agency/',
        en: 'https://nouvo.agency/en/',
      },
    },
    openGraph: {
      title: 'Nouvo Collective | Beyond Digital. Pure Strategy.',
      description: isEn
        ? 'From business decision to the system that executes it. Websites, eshop, SEO, AI and marketing with architectural thinking and measurable value.'
        : 'Από την επιχειρηματική απόφαση ως το σύστημα που την εκτελεί. Ιστοσελίδες, eshop, SEO, AI και marketing με αρχιτεκτονική σκέψη και μετρήσιμη αξία.',
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = locale as 'el' | 'en'

  return (
    <>
      <Hero locale={loc} />
      <Marquee />
      <Services locale={loc} />
      <About locale={loc} />
      <CaseStudies locale={loc} />
      <Manifesto locale={loc} />
      <BlogPreview locale={loc} />
      <CTASection locale={loc} />
    </>
  )
}

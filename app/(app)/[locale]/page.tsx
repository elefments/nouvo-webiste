import type { Metadata } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Revalidate the homepage every hour — converts it from dynamic (ƒ) to ISR (◐).
// TTFB drops from ~800 ms to ~50 ms on CDN cache hits; Lighthouse simulation
// benefits even in dev mode because the payload queries run once at build time.
export const revalidate = 3600

// ── Above-the-fold: static imports (blocking is OK, they're needed for LCP) ──
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/layout/Marquee'
import { Services } from '@/components/sections/Services'
import { TechLogosMarquee } from '@/components/sections/TechLogosMarquee'
import { About } from '@/components/sections/About'
import { PageView } from '@/components/analytics/PageView'

// ── Below-the-fold: dynamic imports (code-split, non-blocking) ──
const CaseStudies = dynamic(
  () => import('@/components/sections/CaseStudies').then((m) => m.CaseStudies),
  { loading: () => <div className="bg-nc-surface py-24" /> },
)
const StatsMarquee = dynamic(
  () => import('@/components/sections/StatsMarquee').then((m) => m.StatsMarquee),
  { loading: () => <div className="py-6" /> },
)
const Testimonials = dynamic(
  () => import('@/components/sections/Testimonials').then((m) => m.Testimonials),
  { ssr: true, loading: () => <div className="bg-nc-surface py-24" /> },
)
const SocialProof = dynamic(
  () => import('@/components/sections/SocialProof').then((m) => m.SocialProof),
  { loading: () => <div className="py-10" /> },
)
const Manifesto = dynamic(
  () => import('@/components/sections/Manifesto').then((m) => m.Manifesto),
  { loading: () => <div className="py-32" /> },
)
const BlogPreview = dynamic(
  () => import('@/components/sections/BlogPreview').then((m) => m.BlogPreview),
  { loading: () => <div className="bg-nc-surface py-24" /> },
)
const CTASection = dynamic(
  () => import('@/components/sections/CTASection').then((m) => m.CTASection),
  { loading: () => <div className="py-20" /> },
)

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'Website Development, SEO & Digital Marketing | Nouvo Agency'
      : 'Κατασκευή Ιστοσελίδων, SEO & Digital Marketing | Nouvo Agency',
    description: isEn
      ? 'Boutique digital agency in Athens. Website development, eshop, SEO, AI and digital marketing with architectural thinking and measurable results. Free project assessment.'
      : 'Boutique digital agency στην Αθήνα. Κατασκευή ιστοσελίδων, eshop, SEO, AI και digital marketing με αρχιτεκτονική σκέψη και μετρήσιμα αποτελέσματα.',
    alternates: {
      canonical: isEn ? 'https://nouvo.agency/en/' : 'https://nouvo.agency/',
      languages: {
        el: 'https://nouvo.agency/',
        en: 'https://nouvo.agency/en/',
        'x-default': 'https://nouvo.agency/',
      },
    },
    openGraph: {
      title: isEn
        ? 'Nouvo | Website Development, SEO & Digital Marketing'
        : 'Nouvo | Κατασκευή Ιστοσελίδων, SEO & Digital Marketing',
      description: isEn
        ? 'Boutique digital agency in Athens. From website development and eshop to SEO, AI and marketing — one architecture, measurable value.'
        : 'Boutique digital agency στην Αθήνα. Από κατασκευή ιστοσελίδων και eshop ως SEO, AI και marketing με αρχιτεκτονική σκέψη.',
      url: isEn ? 'https://nouvo.agency/en/' : 'https://nouvo.agency/',
      type: 'website',
      siteName: 'Nouvo',
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
      <PageView pageType="homepage" locale={loc} />

      {/* ── Critical path — renders first ── */}
      <Hero locale={loc} />
      <Marquee />

      {/* Services → Tech Stack marquee (development technologies) */}
      <Services locale={loc} />
      <TechLogosMarquee category="tech" locale={loc} />

      <About locale={loc} />

      {/* ── Below fold — streamed in as they resolve ── */}
      <Suspense fallback={<div className="bg-nc-surface py-24" />}>
        <CaseStudies locale={loc} />
      </Suspense>

      {/* After Case Studies: Marketing tools marquee */}
      <TechLogosMarquee category="marketing" locale={loc} />

      <Suspense fallback={<div className="py-6" />}>
        <StatsMarquee locale={loc} />
      </Suspense>

      {/* Testimonials does a DB query — Suspense lets the rest stream while it loads */}
      <Suspense fallback={<div className="bg-nc-surface py-24" />}>
        <Testimonials locale={loc} />
      </Suspense>

      <Suspense fallback={<div className="py-10" />}>
        <SocialProof locale={loc} />
      </Suspense>

      {/* After Social Proof: AI tools marquee */}
      <TechLogosMarquee category="ai" locale={loc} />

      <Suspense fallback={<div className="py-32" />}>
        <Manifesto locale={loc} />
      </Suspense>

      <Suspense fallback={<div className="bg-nc-surface py-24" />}>
        <BlogPreview locale={loc} />
      </Suspense>

      <Suspense fallback={<div className="py-20" />}>
        <CTASection locale={loc} />
      </Suspense>
    </>
  )
}

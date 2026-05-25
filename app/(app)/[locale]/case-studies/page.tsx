import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayloadClient } from '@/lib/payload'
import { Arrow } from '@/components/ui/Arrow'

const copy = {
  el: {
    eyebrow: 'Case Studies',
    h1: 'Δεν παρουσιάζουμε εντυπώσεις. Παρουσιάζουμε αποτελέσματα.',
    subtext: 'Κάθε project που αναλαμβάνουμε έχει μετρήσιμο στόχο. Εδώ παρουσιάζουμε την εργασία μας και τα αποτελέσματά της, για να δεις ακριβώς τι σημαίνει να δουλεύεις με τη Nouvo Collective.',
    filterHeading: 'Φιλτράρετε ανά υπηρεσία.',
    filters: ['Όλα τα Projects', 'Ιστοσελίδες & Eshop', 'SEO & Ορατότητα', 'Digital Marketing', 'AI & Αυτοματισμός', 'IT Support'],
    workHeading: 'Η εργασία μας.',
    workBody: 'Κάθε case study περιλαμβάνει: τις προκλήσεις της επιχείρησης που αντιμετωπίσαμε, τις αποφάσεις που πήραμε και γιατί, την υλοποίηση και τα μετρήσιμα αποτελέσματα. Όχι αγόρια marketing, όχι vague descriptions. Για να δεις ακριβώς τι μπορείς να έχεις.',
    readCta: 'Διαβάστε το Case Study',
    bottomHeading: 'Θέλεις παρόμοιο αποτέλεσμα;',
    bottomBody: 'Μιλήστε μας για το project σας. Ξεκινάμε με μια αξιολόγηση χωρίς δέσμευση.',
    ctaPrimary: 'Επικοινωνήστε Μαζί Μας',
    ctaPrimaryHref: '/epikoinonia',
    ctaGhost: 'Δείτε τις Υπηρεσίες',
    ctaGhostHref: '/ypiresies',
    emptyState: 'Τα πρώτα case studies έρχονται σύντομα.',
  },
  en: {
    eyebrow: 'Case Studies',
    h1: 'We do not present impressions. We present outcomes.',
    subtext: 'Every project we take on has a measurable goal. Here we present our work and its results, so you can see exactly what working with Nouvo Collective means.',
    filterHeading: 'Filter by service.',
    filters: ['All Projects', 'Websites & Eshop', 'SEO & Visibility', 'Digital Marketing', 'AI & Automation', 'IT Support'],
    workHeading: 'Our work.',
    workBody: 'Each case study includes: the business challenges we faced, the decisions we made and why, the implementation and the measurable results. No marketing copy, no vague descriptions. So you can see exactly what you can expect.',
    readCta: 'Read the Case Study',
    bottomHeading: 'Want a similar outcome?',
    bottomBody: 'Tell us about your project. We start with a no-commitment assessment.',
    ctaPrimary: 'Contact Us',
    ctaPrimaryHref: '/en/contact',
    ctaGhost: 'View Services',
    ctaGhostHref: '/en/services',
    emptyState: 'First case studies coming soon.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'Case Studies | Work and Results | Nouvo Collective'
      : 'Case Studies | Εργασία και Αποτελέσματα | Nouvo Collective',
    description: isEn
      ? 'Real results from website, eshop, SEO and digital marketing projects. Not impressions. Outcomes. View our work.'
      : 'Πραγματικά αποτελέσματα από projects ιστοσελίδων, eshop, SEO και digital marketing. Δεν παρουσιάζουμε εντυπώσεις. Παρουσιάζουμε αποτελέσματα. Δείτε την εργασία μας.',
    alternates: {
      canonical: isEn ? 'https://nouvo.agency/en/case-studies' : 'https://nouvo.agency/case-studies',
      languages: {
        el: 'https://nouvo.agency/case-studies',
        en: 'https://nouvo.agency/en/case-studies',
      },
    },
  }
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = locale as 'el' | 'en'
  const t = copy[loc]

  const payload = await getPayloadClient()
  const studies = await payload.find({
    collection: 'case-studies',
    where: { status: { equals: 'published' } },
    sort: '-createdAt',
    limit: 12,
    locale: loc,
  })

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
          {t.eyebrow}
        </p>
        <h1
          className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          {t.h1}
        </h1>
        <p className="mt-4 text-[15px] text-nc-muted-dark max-w-[600px]">
          {t.subtext}
        </p>

        <h2 className="mt-14 font-snaga font-bold text-[22px] tracking-[-0.02em] text-nc-text">
          {t.filterHeading}
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {t.filters.map((filter, i) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                i === 0
                  ? 'bg-nc-text text-white'
                  : 'border border-nc-border text-nc-muted-dark hover:border-nc-muted-light'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <h2 className="mt-16 font-snaga font-bold text-[28px] tracking-[-0.02em] text-nc-text">
          {t.workHeading}
        </h2>
        <p className="mt-3 text-[15px] text-nc-muted-dark max-w-[700px]">
          {t.workBody}
        </p>

        {studies.docs.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studies.docs.map((study) => {
              const href = loc === 'en' ? `/en/case-studies/${study.slug}` : `/case-studies/${study.slug}`
              return (
                <Link key={study.id} href={href} className="group">
                  <div className="relative aspect-[4/3] rounded-xl bg-nc-surface overflow-hidden mb-4">
                    {study.featuredImage && typeof study.featuredImage === 'object' && study.featuredImage.url ? (
                      <img
                        src={study.featuredImage.url}
                        alt={study.featuredImage.alt ?? ''}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-nc-text/5 group-hover:bg-nc-text/10 transition-colors duration-200" />
                    )}
                  </div>
                  {study.services && study.services.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {study.services.map((s) => (
                        <span
                          key={typeof s === 'object' ? s.service : s}
                          className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-nc-surface text-nc-text"
                        >
                          {typeof s === 'object' ? s.service : s}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className="text-lg font-medium text-nc-text group-hover:text-nc-accent transition-colors duration-200">
                    {study.title}
                  </h3>
                  {study.client && (
                    <p className="mt-1 text-[13px] text-nc-muted-mid">{study.client}</p>
                  )}
                  {study.excerpt && (
                    <p className="mt-2 text-[14px] text-nc-muted-dark line-clamp-2">
                      {study.excerpt}
                    </p>
                  )}
                  <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-medium text-nc-accent">
                    {t.readCta} <Arrow size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        ) : (
          <p className="mt-8 text-[16px] text-nc-muted-dark">{t.emptyState}</p>
        )}

        <div className="mt-24 text-center">
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {t.bottomHeading}
          </h2>
          <p className="mt-4 text-[17px] text-nc-muted-dark max-w-[500px] mx-auto">
            {t.bottomBody}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href={t.ctaPrimaryHref}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-nc-accent text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#c93e28]"
            >
              <span>{t.ctaPrimary}</span>
              <Arrow size={16} />
            </Link>
            <Link
              href={t.ctaGhostHref}
              className="flex items-center gap-3 px-5 py-3 rounded-full border border-nc-border text-nc-muted-dark text-sm font-medium tracking-wide transition-all duration-200 hover:border-nc-muted-light"
            >
              <span>{t.ctaGhost}</span>
              <Arrow size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

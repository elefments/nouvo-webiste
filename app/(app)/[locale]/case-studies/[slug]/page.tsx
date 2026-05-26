import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPayloadClient } from '@/lib/payload'
import { Arrow } from '@/components/ui/Arrow'

export const revalidate = 3600

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const loc = locale as 'el' | 'en'

  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'case-studies',
    where: { slug: { equals: slug } },
    locale: loc,
    limit: 1,
  })

  const study = result.docs[0]
  if (!study) return {}

  const isEn = loc === 'en'
  const canonical = isEn
    ? `https://nouvo.agency/en/case-studies/${slug}`
    : `https://nouvo.agency/case-studies/${slug}`

  return {
    title: `${study.title} | Case Study | Nouvo Collective`,
    description: study.excerpt ?? undefined,
    alternates: {
      canonical,
      languages: {
        el: `https://nouvo.agency/case-studies/${slug}`,
        en: `https://nouvo.agency/en/case-studies/${slug}`,
      },
    },
    openGraph: {
      title: `${study.title} | Nouvo Collective`,
      description: study.excerpt ?? undefined,
      ...(study.featuredImage && typeof study.featuredImage === 'object' && study.featuredImage.url
        ? { images: [{ url: study.featuredImage.url }] }
        : {}),
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const loc = locale as 'el' | 'en'

  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'case-studies',
    where: { slug: { equals: slug } },
    locale: loc,
    limit: 1,
  })

  const study = result.docs[0]
  if (!study) notFound()

  const indexHref = loc === 'en' ? '/en/case-studies' : '/case-studies'

  return (
    <article className="px-6 py-24">
      <div className="mx-auto max-w-[900px]">
        <Link
          href={indexHref}
          className="inline-flex items-center gap-2 text-[13px] font-medium text-nc-muted-dark hover:text-nc-accent transition-colors mb-8"
        >
          <Arrow size={14} className="rotate-180" />
          {loc === 'en' ? 'All Case Studies' : 'Όλα τα Case Studies'}
        </Link>

        {study.services && study.services.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
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

        <h1
          className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
        >
          {study.title}
        </h1>

        {study.client && (
          <p className="mt-2 text-[15px] text-nc-muted-mid">{study.client}</p>
        )}

        {study.excerpt && (
          <p className="mt-4 text-[17px] text-nc-muted-dark leading-relaxed">
            {study.excerpt}
          </p>
        )}

        {study.featuredImage && typeof study.featuredImage === 'object' && study.featuredImage.url && (
          <div className="relative mt-8 aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src={study.featuredImage.url}
              alt={study.featuredImage.alt ?? ''}
              fill
              priority
              sizes="(max-width: 720px) 100vw, 720px"
              className="object-cover"
            />
          </div>
        )}

        {study.results && study.results.length > 0 && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
            {study.results.map((r, i) => (
              <div key={i} className="p-5 rounded-xl bg-nc-surface">
                <p className="text-[28px] font-bold text-nc-accent">
                  {typeof r === 'object' ? r.value : ''}
                </p>
                <p className="mt-1 text-[13px] text-nc-muted-dark">
                  {typeof r === 'object' ? r.metric : ''}
                </p>
              </div>
            ))}
          </div>
        )}

        {study.content && (
          <div className="mt-10 prose prose-lg max-w-none text-nc-text">
            <p className="text-nc-muted-dark">{loc === 'en' ? 'Full case study coming soon.' : 'Πλήρες case study σύντομα.'}</p>
          </div>
        )}

        <div className="mt-16 pt-10 border-t border-nc-border text-center">
          <h2 className="font-objektiv font-bold text-[28px] tracking-[-0.02em] text-nc-text">
            {loc === 'en' ? 'Want a similar outcome?' : 'Θέλεις παρόμοιο αποτέλεσμα;'}
          </h2>
          <p className="mt-3 text-[15px] text-nc-muted-dark">
            {loc === 'en'
              ? 'Tell us about your project. We start with a no-commitment assessment.'
              : 'Μιλήστε μας για το project σας. Ξεκινάμε με μια αξιολόγηση χωρίς δέσμευση.'}
          </p>
          <Link
            href={loc === 'en' ? '/en/contact' : '/epikoinonia'}
            className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-nc-accent text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#c93e28]"
          >
            <span>{loc === 'en' ? 'Contact Us' : 'Επικοινωνήστε Μαζί Μας'}</span>
            <Arrow size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}

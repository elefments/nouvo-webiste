import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'
import { AnimateIn, AnimateInGroup, AnimateInItem } from '@/components/ui/AnimateIn'
import { TextReveal } from '@/components/ui/TextReveal'

const copy = {
  el: {
    eyebrow: 'Case Studies',
    heading: 'Δουλειά που αποδεικνύει τη λογική.',
    subtext: 'Δεν παρουσιάζουμε εντυπώσεις. Παρουσιάζουμε αποτέλεσμα.',
    cta: 'Όλα τα Case Studies',
    ctaHref: '/case-studies',
  },
  en: {
    eyebrow: 'Case Studies',
    heading: 'Work that proves the logic.',
    subtext: 'We don\'t present impressions. We present outcomes.',
    cta: 'All Case Studies',
    ctaHref: '/en/case-studies',
  },
}

const placeholders = [
  { title: 'Project Alpha', tags: ['Website', 'SEO'] },
  { title: 'Project Beta', tags: ['E-shop', 'Google Ads'] },
  { title: 'Project Gamma', tags: ['AI', 'Automation'] },
]

export function CaseStudies({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]

  return (
    <section className="bg-nc-surface px-6 py-24">
      <div className="mx-auto max-w-[1280px]">
        <AnimateIn variant="fadeIn" duration={0.4}>
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {t.eyebrow}
          </p>
        </AnimateIn>

        <TextReveal
          text={t.heading}
          as="h2"
          className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          staggerDelay={0.05}
        />

        <AnimateIn variant="fadeUp" delay={0.15}>
          <p className="mt-4 text-[15px] text-nc-muted-dark max-w-[520px]">
            {t.subtext}
          </p>
        </AnimateIn>

        <AnimateInGroup className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {placeholders.map((item) => (
            <AnimateInItem key={item.title} variant="scaleUp">
              <div className="group relative aspect-[4/3] rounded-xl bg-nc-surface overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-nc-text/5 transition-colors duration-200 group-hover:bg-nc-text/10" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex gap-2 mb-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-white/80 text-nc-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-lg font-medium text-nc-text">{item.title}</p>
                </div>
              </div>
            </AnimateInItem>
          ))}
        </AnimateInGroup>

        <AnimateIn variant="fadeUp" delay={0.1} className="mt-10">
          <Link
            href={t.ctaHref}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-nc-text text-nc-text text-sm font-medium tracking-wide transition-all duration-200 hover:bg-nc-text hover:text-white"
          >
            <span>{t.cta}</span>
            <Arrow size={16} />
          </Link>
        </AnimateIn>
      </div>
    </section>
  )
}

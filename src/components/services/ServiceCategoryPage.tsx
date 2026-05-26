import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'
import { Accordion } from '@/components/ui/Accordion'
import { StepIcon, IconCheck } from '@/components/ui/Icons'
import { ServiceHeroVisual } from './ServiceHeroVisual'
import { AnimateIn, AnimateInGroup, AnimateInItem } from '@/components/ui/AnimateIn'
import { TextReveal } from '@/components/ui/TextReveal'
import type { ServiceCategory } from '@/data/services'

export function ServiceCategoryPage({
  category,
  locale,
}: {
  category: ServiceCategory
  locale: 'el' | 'en'
}) {
  const parentPath = `/${locale === 'en' ? 'en/' : ''}${category.parentSlug[locale]}`
  const categoryPath = `${parentPath}/${category.slug[locale]}`
  const contactHref = locale === 'en' ? '/en/contact' : '/epikoinonia'
  const caseStudiesHref = locale === 'en' ? '/en/case-studies' : '/case-studies'

  return (
    <>
      {/* Hero */}
      <section
        className="relative px-6 overflow-hidden"
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          background: 'radial-gradient(ellipse 55% 80% at 80% 50%, rgba(227,79,57,0.03) 0%, transparent 70%)',
        }}
      >
        <div className="mx-auto max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center py-24 lg:py-0">

          {/* Left: text */}
          <div>
            <AnimateIn variant="fadeIn" duration={0.4}>
              <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
                {category.eyebrow[locale]}
              </p>
            </AnimateIn>

            <TextReveal
              text={category.title[locale]}
              as="h1"
              className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
              staggerDelay={0.05}
            />

            <AnimateIn variant="fadeUp" delay={0.2}>
              <p className="mt-6 text-[17px] leading-relaxed text-nc-muted-dark max-w-[560px]">
                {category.subtitle[locale]}
              </p>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link
                  href={contactHref}
                  className="flex items-center gap-3 px-5 py-3 rounded-full bg-nc-accent text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#c93e28]"
                >
                  <span>{locale === 'en' ? 'Tell Us About Your Project' : 'Μιλήστε μας για το Project σας'}</span>
                  <Arrow size={16} />
                </Link>
                <Link
                  href={caseStudiesHref}
                  className="flex items-center gap-3 px-5 py-3 rounded-full border border-nc-border text-nc-muted-dark text-sm font-medium tracking-wide transition-all duration-200 hover:border-nc-muted-light"
                >
                  <span>{locale === 'en' ? 'View Case Studies' : 'Δείτε τα Case Studies'}</span>
                  <Arrow size={16} />
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Right: animated visual (desktop only) */}
          <AnimateIn variant="slideLeft" delay={0.3} className="relative hidden lg:block h-[520px]">
            <ServiceHeroVisual categorySlug={category.slug.en} />
          </AnimateIn>

        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <TextReveal
            text={category.intro.heading[locale]}
            as="h2"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            staggerDelay={0.05}
          />
          {category.intro.body[locale].map((p, i) => (
            <AnimateIn key={i} variant="fadeUp" delay={0.1 + i * 0.1}>
              <p className="mt-4 text-[16px] leading-relaxed text-nc-muted-dark max-w-[720px]">
                {p}
              </p>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Sub-services grid */}
      <section className="px-6 py-20 bg-nc-surface">
        <div className="mx-auto max-w-[1280px]">
          <AnimateIn variant="fadeIn" duration={0.4}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
              {locale === 'en' ? 'Our Services' : 'Οι Υπηρεσίες μας'}
            </p>
          </AnimateIn>

          <TextReveal
            text={locale === 'en' ? 'Every business has a different need.' : 'Κάθε επιχείρηση έχει διαφορετική ανάγκη.'}
            as="h2"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            staggerDelay={0.05}
          />

          <AnimateInGroup className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
            {category.subServices.map((sub, idx) => {
              const href = `${categoryPath}/${sub.slug[locale]}`
              return (
                <AnimateInItem key={sub.slug.en} variant="scaleUp">
                  <Link href={href} className="group relative bg-white rounded-[20px] p-6 transition-all duration-300 hover:shadow-lg overflow-hidden block h-full">
                    {/* Animated top accent bar */}
                    <div
                      className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-nc-accent origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"
                      style={{ transitionDelay: '0ms' }}
                    />
                    {/* Animated icon */}
                    <div
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px] bg-nc-accent/8 transition-all duration-300 group-hover:bg-nc-accent/15 group-hover:scale-110"
                      style={{ background: 'rgba(227,79,57,0.08)' }}
                    >
                      <StepIcon index={idx % 5} size={20} className="text-nc-accent" />
                    </div>
                    <h3 className="text-[20px] font-semibold text-nc-text group-hover:text-nc-accent transition-colors duration-200">
                      {sub.title[locale]}
                    </h3>
                    <p className="mt-3 text-[14px] text-nc-muted-dark leading-relaxed line-clamp-4">
                      {sub.description[locale]}
                    </p>
                    {sub.includes && (
                      <ul className="mt-4 space-y-1">
                        {sub.includes[locale].slice(0, 3).map((item) => (
                          <li key={item} className="text-[13px] text-nc-muted-mid flex items-start gap-2">
                            <IconCheck size={14} className="mt-0.5 shrink-0 text-nc-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-nc-accent">
                      {locale === 'en' ? 'Learn More' : 'Μάθετε Περισσότερα'} <Arrow size={14} />
                    </span>
                  </Link>
                </AnimateInItem>
              )
            })}
          </AnimateInGroup>
        </div>
      </section>

      {/* Approach / process steps */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <AnimateIn variant="fadeIn" duration={0.4}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
              {locale === 'en' ? 'Our Approach' : 'Η Προσέγγισή Μας'}
            </p>
          </AnimateIn>

          <TextReveal
            text={category.approach.heading[locale]}
            as="h2"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            staggerDelay={0.05}
          />

          <AnimateInGroup className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {category.approach.steps.map((step, i) => (
              <AnimateInItem key={i} variant="fadeUp">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-nc-border text-[13px] font-bold text-nc-accent font-objektiv"
                    style={{ animation: 'serviceStepRing 2.5s ease-in-out infinite', animationDelay: `${i * 0.5}s` }}
                  >
                    0{i + 1}
                  </div>
                  <StepIcon index={i} size={18} className="text-nc-muted-mid" />
                </div>
                <h4 className="text-[18px] font-semibold text-nc-text">{step.title[locale]}</h4>
                <p className="mt-2 text-[14px] text-nc-muted-dark leading-relaxed">{step.body[locale]}</p>
              </AnimateInItem>
            ))}
          </AnimateInGroup>
        </div>
      </section>

      {/* Non-negotiables */}
      <section className="px-6 py-20 bg-nc-surface">
        <div className="mx-auto max-w-[1280px]">
          <AnimateIn variant="fadeIn" duration={0.4}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
              {locale === 'en' ? 'What We Don\'t Do' : 'Τι Δεν Κάνουμε'}
            </p>
          </AnimateIn>

          <TextReveal
            text={category.nonNegotiables.heading[locale]}
            as="h2"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            staggerDelay={0.05}
          />

          <AnimateInGroup className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {category.nonNegotiables.items.map((item, i) => (
              <AnimateInItem key={i} variant="fadeUp">
                <h4 className="text-[18px] font-semibold text-nc-text">{item.title[locale]}</h4>
                <p className="mt-2 text-[14px] text-nc-muted-dark leading-relaxed">{item.body[locale]}</p>
              </AnimateInItem>
            ))}
          </AnimateInGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <AnimateIn variant="fadeIn" duration={0.4}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
              {locale === 'en' ? 'FAQ' : 'Συχνές Ερωτήσεις'}
            </p>
          </AnimateIn>

          <TextReveal
            text={locale === 'en' ? 'Questions worth answering.' : 'Ερωτήσεις που αξίζει να απαντηθούν.'}
            as="h2"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text mb-10"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            staggerDelay={0.05}
          />

          <AnimateIn variant="fadeUp" delay={0.1}>
            <Accordion
              items={category.faq.map((item) => ({ question: item.q[locale], answer: item.a[locale] }))}
              defaultOpen={0}
            />
          </AnimateIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px] text-center">
          <TextReveal
            text={locale === 'en' ? 'Tell us where you are right now.' : 'Πείτε μας πού βρίσκεστε τώρα.'}
            as="h2"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            staggerDelay={0.05}
          />

          <AnimateIn variant="fadeUp" delay={0.15}>
            <p className="mt-4 text-[17px] text-nc-muted-dark">
              {locale === 'en'
                ? 'You don\'t need a finished brief. You just need to know what isn\'t working. That\'s where we start.'
                : 'Δεν χρειάζεται να έχετε έτοιμο brief. Αρκεί να ξέρετε τι δεν λειτουργεί. Εκεί ξεκινάμε.'}
            </p>
          </AnimateIn>

          <AnimateInGroup className="flex flex-wrap items-center justify-center gap-4 mt-8" staggerDelay={0.1}>
            <AnimateInItem variant="scaleUp">
              <Link
                href={contactHref}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-nc-accent text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#c93e28]"
              >
                <span>{locale === 'en' ? 'Contact Us' : 'Επικοινωνήστε Μαζί Μας'}</span>
                <Arrow size={16} />
              </Link>
            </AnimateInItem>
            <AnimateInItem variant="scaleUp">
              <Link
                href={caseStudiesHref}
                className="flex items-center gap-3 px-5 py-3 rounded-full border border-nc-border text-nc-muted-dark text-sm font-medium tracking-wide transition-all duration-200 hover:border-nc-muted-light"
              >
                <span>{locale === 'en' ? 'View Case Studies' : 'Δείτε τα Case Studies'}</span>
                <Arrow size={16} />
              </Link>
            </AnimateInItem>
          </AnimateInGroup>
        </div>
      </section>
    </>
  )
}

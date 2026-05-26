'use client'

import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'
import { servicesOverview } from '@/data/services-overview'
import { serviceCategories } from '@/data/services'
import { Accordion } from '@/components/ui/Accordion'
import { ServiceIcon, StepIcon } from '@/components/ui/Icons'
import { AnimateIn, AnimateInGroup, AnimateInItem } from '@/components/ui/AnimateIn'
import { TextReveal } from '@/components/ui/TextReveal'
import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as const

export function ServicesOverviewPage({ locale }: { locale: 'el' | 'en' }) {
  const t = servicesOverview[locale]

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1280px]">
          <AnimateIn variant="fadeIn" duration={0.4}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
              {t.eyebrow}
            </p>
          </AnimateIn>

          <TextReveal
            text={t.h1}
            as="h1"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text max-w-[900px]"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            staggerDelay={0.04}
          />

          <AnimateIn variant="fadeUp" delay={0.2}>
            <p className="mt-6 text-[17px] leading-relaxed text-nc-muted-dark max-w-[560px]">
              {t.subtext}
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.3}>
            <div className="flex flex-wrap items-center gap-4 mt-8">
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
          </AnimateIn>
        </div>
      </section>

      {/* Service grid */}
      <section className="px-6 py-20 bg-nc-surface">
        <div className="mx-auto max-w-[1280px]">
          <AnimateIn variant="fadeIn" duration={0.4}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
              {t.gridEyebrow}
            </p>
          </AnimateIn>

          <TextReveal
            text={t.gridHeading}
            as="h2"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            staggerDelay={0.05}
          />

          <AnimateIn variant="fadeUp" delay={0.15}>
            <p className="mt-4 text-[15px] text-nc-muted-dark max-w-[600px]">
              {t.gridBody}
            </p>
          </AnimateIn>

          <div className="mt-12 space-y-6">
            {serviceCategories.map((cat, i) => {
              const href = `/${locale === 'en' ? 'en/' : ''}${cat.parentSlug[locale]}/${cat.slug[locale]}`
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
                >
                  <Link href={href} className="group block bg-white rounded-[20px] p-8 transition-all duration-200 hover:shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex flex-col items-center gap-1 shrink-0 w-10">
                        <ServiceIcon index={i} size={24} />
                        <span className="text-[14px] font-medium text-nc-accent">0{i + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[22px] font-semibold text-nc-text group-hover:text-nc-accent transition-colors duration-200">
                          {cat.eyebrow[locale]}
                        </h3>
                        <p className="mt-1 text-[13px] text-nc-muted-mid">{cat.roleLabel[locale]}</p>
                        <p className="mt-3 text-[15px] text-nc-muted-dark leading-relaxed max-w-[600px]">
                          {cat.description[locale]}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {cat.subServices.map((sub) => (
                            <span key={sub.slug.en} className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-nc-surface text-nc-muted-dark">
                              {sub.title[locale]}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="shrink-0 mt-1">
                        <Arrow size={16} className="text-nc-muted-mid group-hover:text-nc-accent transition-colors duration-200" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <AnimateIn variant="fadeIn" duration={0.4}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
              {t.howEyebrow}
            </p>
          </AnimateIn>

          <TextReveal
            text={t.howHeading}
            as="h2"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text max-w-[800px]"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            staggerDelay={0.05}
          />

          <AnimateIn variant="fadeUp" delay={0.15}>
            <p className="mt-4 text-[15px] text-nc-muted-dark max-w-[700px]">
              {t.howBody}
            </p>
          </AnimateIn>

          <AnimateInGroup className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8" staggerDelay={0.08}>
            {t.howSteps.map((step, i) => (
              <AnimateInItem key={i} variant="fadeUp">
                <div className="flex items-center gap-2 mb-1">
                  <StepIcon index={i} size={20} />
                  <span className="text-[13px] font-medium text-nc-accent">0{i + 1}</span>
                </div>
                <h4 className="mt-2 text-[16px] font-semibold text-nc-text">{step.title}</h4>
                <p className="mt-2 text-[13px] text-nc-muted-dark leading-relaxed">{step.body}</p>
              </AnimateInItem>
            ))}
          </AnimateInGroup>
        </div>
      </section>

      {/* Differentiators */}
      <section className="px-6 py-20 bg-nc-surface">
        <div className="mx-auto max-w-[1280px]">
          <AnimateIn variant="fadeIn" duration={0.4}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
              {t.diffEyebrow}
            </p>
          </AnimateIn>

          <TextReveal
            text={t.diffHeading}
            as="h2"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            staggerDelay={0.05}
          />

          <AnimateIn variant="fadeUp" delay={0.15}>
            <p className="mt-4 text-[15px] text-nc-muted-dark max-w-[600px]">
              {t.diffBody}
            </p>
          </AnimateIn>

          <AnimateInGroup className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.1}>
            {t.diffItems.map((item, i) => (
              <AnimateInItem key={i} variant="scaleUp">
                <div className="bg-white rounded-[20px] p-6 h-full">
                  <h4 className="text-[17px] font-semibold text-nc-text">{item.title}</h4>
                  <p className="mt-2 text-[14px] text-nc-muted-dark leading-relaxed">{item.body}</p>
                </div>
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
              {t.faqEyebrow}
            </p>
          </AnimateIn>

          <TextReveal
            text={t.faqHeading}
            as="h2"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text mb-10"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            staggerDelay={0.05}
          />

          <AnimateIn variant="fadeUp" delay={0.1}>
            <Accordion
              items={t.faq.map((item) => ({ question: item.q, answer: item.a }))}
              defaultOpen={0}
            />
          </AnimateIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px] text-center">
          <AnimateIn variant="fadeIn" duration={0.4}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
              {t.ctaEyebrow}
            </p>
          </AnimateIn>

          <TextReveal
            text={t.ctaHeading}
            as="h2"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            staggerDelay={0.05}
          />

          <AnimateIn variant="fadeUp" delay={0.15}>
            <p className="mt-4 text-[17px] text-nc-muted-dark">{t.ctaBody}</p>
          </AnimateIn>

          <AnimateInGroup className="flex flex-wrap items-center justify-center gap-4 mt-8" staggerDelay={0.1}>
            <AnimateInItem variant="scaleUp">
              <Link
                href={t.ctaPrimaryHref}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-nc-accent text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#c93e28]"
              >
                <span>{t.ctaFinalPrimary}</span>
                <Arrow size={16} />
              </Link>
            </AnimateInItem>
            <AnimateInItem variant="scaleUp">
              <Link
                href={t.ctaGhostHref}
                className="flex items-center gap-3 px-5 py-3 rounded-full border border-nc-border text-nc-muted-dark text-sm font-medium tracking-wide transition-all duration-200 hover:border-nc-muted-light"
              >
                <span>{t.ctaFinalGhost}</span>
                <Arrow size={16} />
              </Link>
            </AnimateInItem>
          </AnimateInGroup>
        </div>
      </section>
    </>
  )
}

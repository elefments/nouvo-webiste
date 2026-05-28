'use client'

import Link from 'next/link'
import { aboutPage } from '@/data/about'
import { AnimateIn, AnimateInGroup, AnimateInItem } from '@/components/ui/AnimateIn'
import { TextReveal } from '@/components/ui/TextReveal'
import { Accordion } from '@/components/ui/Accordion'
import { GradientHR } from '@/components/ui/GradientHR'
import { Arrow } from '@/components/ui/Arrow'
import { CountUp } from '@/components/ui/CountUp'
import { TechLogosMarquee } from '@/components/sections/TechLogosMarquee'
import Image from 'next/image'

export function AboutPage({ locale }: { locale: 'el' | 'en' }) {
  const t = aboutPage[locale]

  return (
    <main className="bg-white">

      {/* ─── Hero ─── */}
      <section className="mx-auto max-w-[1280px] px-6 pt-28 pb-14 lg:pt-40 lg:pb-24">
        <AnimateIn variant="fadeUp" delay={0}>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-nc-accent">
            {t.eyebrow}
          </span>
        </AnimateIn>

        <div className="mt-6 max-w-[860px]">
          <TextReveal
            as="h1"
            text={t.h1Line1}
            className="font-snaga leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(44px, 6.5vw, 88px)' }}
          />
          <TextReveal
            as="h1"
            text={t.h1Line2}
            className="font-snaga leading-[1.05] tracking-[-0.02em] text-nc-accent"
            style={{ fontSize: 'clamp(44px, 6.5vw, 88px)' }}
            delay={0.18}
          />
        </div>

        <AnimateIn variant="fadeUp" delay={0.35}>
          <p className="mt-8 max-w-[600px] font-sofia text-[17px] leading-[1.7] text-nc-muted-dark">
            {t.subtext}
          </p>
        </AnimateIn>
      </section>

      <GradientHR />

      {/* ─── Origin Story ─── */}
      <section className="mx-auto max-w-[1280px] px-6 py-14 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-[1fr_1.4fr]">
          <AnimateIn variant="fadeUp">
            <h2
              className="font-snaga tracking-[-0.02em] text-nc-text leading-[1.1]"
              style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
            >
              {t.originHeading}
            </h2>
          </AnimateIn>

          <AnimateInGroup staggerDelay={0.1} className="space-y-6">
            {t.originParagraphs.map((p, i) => (
              <AnimateInItem key={i} variant="fadeUp">
                <p className="font-sofia text-[16px] leading-[1.8] text-nc-muted-dark">{p}</p>
              </AnimateInItem>
            ))}
          </AnimateInGroup>
        </div>
      </section>

      {/* ─── Office photo ─── */}
      <div className="mx-auto max-w-[1280px] px-6 pb-4">
        <AnimateIn variant="fadeUp" delay={0.1}>
          <div className="relative w-full h-[340px] md:h-[480px] rounded-[20px] overflow-hidden">
            <Image
              src="/images/about-office.webp"
              alt="Nouvo workspace"
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
              quality={85}
            />
          </div>
        </AnimateIn>
      </div>

      <GradientHR />

      {/* ─── How We Work ─── */}
      <section className="bg-nc-surface py-14 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimateIn variant="fadeUp">
            <h2
              className="font-snaga tracking-[-0.02em] text-nc-text leading-[1.1] max-w-[520px]"
              style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
            >
              {t.howHeading}
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.1}>
            <p className="mt-5 max-w-[620px] font-sofia text-[16px] leading-[1.8] text-nc-muted-dark">
              {t.howIntro}
            </p>
          </AnimateIn>

          <AnimateInGroup
            staggerDelay={0.12}
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {t.howPrinciples.map((principle, i) => (
              <AnimateInItem key={i} variant="fadeUp">
                <div className="relative overflow-hidden rounded-[20px] bg-white p-8 h-full">
                  {/* Large decorative number */}
                  <span
                    className="absolute -right-2 -top-4 font-snaga text-[96px] font-bold leading-none text-nc-text/[0.04] select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative">
                    <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-nc-accent/10 text-[13px] font-bold text-nc-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-snaga text-[20px] tracking-[-0.01em] text-nc-text">
                      {principle.title}
                    </h3>
                    <p className="mt-3 font-sofia text-[14px] leading-[1.75] text-nc-muted-dark">
                      {principle.body}
                    </p>
                  </div>
                </div>
              </AnimateInItem>
            ))}
          </AnimateInGroup>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-nc-text py-14 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimateIn variant="fadeUp">
            <p className="mb-12 text-center font-sofia text-[11px] uppercase tracking-[0.16em] text-white/40">
              {t.statsHeading}
            </p>
          </AnimateIn>
          <AnimateInGroup
            staggerDelay={0.1}
            className="grid grid-cols-1 gap-px sm:grid-cols-3"
          >
            {t.stats.map((stat, i) => (
              <AnimateInItem key={i} variant="scaleUp">
                <div className="flex flex-col items-center py-8 text-center">
                  <span
                    className="font-snaga leading-none text-nc-accent"
                    style={{ fontSize: 'clamp(52px, 7vw, 88px)' }}
                  >
                    <CountUp to={stat.to} suffix={stat.suffix} duration={1800} />
                  </span>
                  <span className="mt-3 font-sofia text-[13px] uppercase tracking-[0.12em] text-white/50">
                    {stat.label}
                  </span>
                </div>
              </AnimateInItem>
            ))}
          </AnimateInGroup>
        </div>
      </section>

      {/* Tech stack marquee — between stats and beliefs as a visual break */}
      <TechLogosMarquee category="tech" locale={locale} />

      {/* ─── Beliefs ─── */}
      <section className="mx-auto max-w-[1280px] px-6 py-14 lg:py-24">
        <AnimateIn variant="fadeUp">
          <h2
            className="font-snaga tracking-[-0.02em] text-nc-text leading-[1.1] mb-14"
            style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
          >
            {t.beliefsHeading}
          </h2>
        </AnimateIn>

        <AnimateInGroup
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 border border-nc-border divide-y sm:divide-y-0 sm:divide-x divide-nc-border"
        >
          {t.beliefs.map((belief, i) => (
            <AnimateInItem key={i} variant="fadeUp">
              <div
                className={`p-8 lg:p-10 ${i >= 2 ? 'border-t border-nc-border' : ''}`}
              >
                <h3 className="font-snaga text-[18px] tracking-[-0.01em] text-nc-text">
                  {belief.title}
                </h3>
                <p className="mt-3 font-sofia text-[14px] leading-[1.75] text-nc-muted-dark">
                  {belief.body}
                </p>
              </div>
            </AnimateInItem>
          ))}
        </AnimateInGroup>
      </section>

      <GradientHR />

      {/* ─── What We Refuse ─── */}
      <section className="bg-nc-surface py-14 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr]">
            <AnimateIn variant="fadeUp">
              <h2
                className="font-snaga tracking-[-0.02em] text-nc-text leading-[1.1]"
                style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
              >
                {t.refuseHeading}
              </h2>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={0.1}>
              <p className="font-marlet text-[20px] leading-[1.85] text-nc-muted-dark italic">
                {t.refuseBody}
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      <GradientHR />

      {/* ─── Who We Work With ─── */}
      <section className="mx-auto max-w-[1280px] px-6 py-14 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-[1fr_1.4fr]">
          <AnimateIn variant="fadeUp">
            <h2
              className="font-snaga tracking-[-0.02em] text-nc-text leading-[1.1]"
              style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
            >
              {t.forWhoHeading}
            </h2>
          </AnimateIn>

          <div>
            <AnimateInGroup staggerDelay={0.1} className="space-y-5">
              {t.forWhoParagraphs.map((p, i) => (
                <AnimateInItem key={i} variant="fadeUp">
                  <p className="font-sofia text-[16px] leading-[1.8] text-nc-muted-dark">{p}</p>
                </AnimateInItem>
              ))}
            </AnimateInGroup>

            <AnimateIn variant="fadeUp" delay={0.25}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={t.ctaPrimaryHref}
                  className="inline-flex items-center gap-2 rounded-full bg-nc-text px-6 py-3 font-sofia text-[14px] font-medium tracking-wide text-white transition-colors duration-200 hover:bg-nc-accent"
                >
                  {t.ctaPrimary}
                  <Arrow />
                </Link>
                <Link
                  href={t.ctaGhostHref}
                  className="inline-flex items-center gap-2 rounded-full border border-nc-border px-6 py-3 font-sofia text-[14px] font-medium tracking-wide text-nc-text transition-colors duration-200 hover:border-nc-text"
                >
                  {t.ctaGhost}
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <GradientHR />

      {/* ─── FAQ ─── */}
      <section className="bg-nc-surface py-14 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimateIn variant="fadeUp">
            <h2
              className="font-snaga tracking-[-0.02em] text-nc-text leading-[1.1] mb-12"
              style={{ fontSize: 'clamp(30px, 3.5vw, 48px)' }}
            >
              {t.faqHeading}
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.1}>
            <div className="max-w-[860px]">
              <Accordion
                items={t.faq.map((item) => ({ question: item.q, answer: item.a }))}
                defaultOpen={0}
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <AnimateIn variant="fadeUp">
            <h2
              className="font-snaga tracking-[-0.02em] text-nc-text leading-[1.1] max-w-[560px]"
              style={{ fontSize: 'clamp(30px, 3.5vw, 52px)' }}
            >
              {t.ctaHeading}
            </h2>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.1}>
            <p className="mt-5 max-w-[420px] font-sofia text-[16px] leading-[1.7] text-nc-muted-dark">
              {t.ctaBody}
            </p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href={t.ctaPrimaryHref}
                className="inline-flex items-center gap-2 rounded-full bg-nc-text px-7 py-3.5 font-sofia text-[14px] font-medium tracking-wide text-white transition-colors duration-200 hover:bg-nc-accent"
              >
                {t.ctaPrimary}
                <Arrow />
              </Link>
              <Link
                href={t.ctaGhostHref}
                className="inline-flex items-center gap-2 rounded-full border border-nc-border px-7 py-3.5 font-sofia text-[14px] font-medium tracking-wide text-nc-text transition-colors duration-200 hover:border-nc-text"
              >
                {t.ctaGhost}
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

    </main>
  )
}

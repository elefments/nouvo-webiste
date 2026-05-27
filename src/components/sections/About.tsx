import React from 'react'
import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'
import { IconClock, IconLayers, IconSparkles } from '@/components/ui/Icons'
import { AnimateIn, AnimateInGroup, AnimateInItem } from '@/components/ui/AnimateIn'
import { TextReveal } from '@/components/ui/TextReveal'
import { CountUp } from '@/components/ui/CountUp'

const copy = {
  el: {
    eyebrow: 'Ποιοι Είμαστε',
    heading: 'Ένας μηχανισμός αναβάθμισης, όχι ένα ακόμα agency.',
    p1: 'Η Nouvo γεννήθηκε για να λύσει ένα πρόβλημα που βλέπαμε επανειλημμένα: στρατηγική που υπάρχει στα χαρτιά και υλοποίηση που δεν την ακολουθεί. Σύμβουλοι που σχεδιάζουν και εξαφανίζονται. Ομάδες που τρέχουν εργαλεία χωρίς αρχιτεκτονική.',
    p2: 'Λειτουργούμε ως ο συνδετικός κρίκος ανάμεσα στην απόφαση και την εφαρμογή της. Μεταφράζουμε τη στρατηγική σε συστήματα. Εγκαθιστούμε μόνο ό,τι έχει πρακτική αξία.',
    stats: [
      { to: 20, suffix: '+', label: 'Χρόνια εμπειρίας' },
      { to: 120, suffix: '+', label: 'Επιχειρήσεις μας εμπιστεύτηκαν' },
      { to: 100, suffix: '%', label: 'Υλοποίηση στα μέτρα σας' },
    ],
    cta: 'Σχετικά με εμάς',
    ctaHref: '/sxetika-me-emas',
  },
  en: {
    eyebrow: 'Who We Are',
    heading: 'An upgrade mechanism, not another agency.',
    p1: 'Nouvo was built to solve a problem we kept seeing: strategy that exists on paper and execution that never follows. Consultants who design and disappear. Teams running tools with no architecture behind them.',
    p2: 'We operate as the connective link between decision and implementation. We translate strategy into systems. We install only what creates real value.',
    stats: [
      { to: 20, suffix: '+', label: 'Years of experience' },
      { to: 120, suffix: '+', label: 'Businesses trusted us' },
      { to: 100, suffix: '%', label: 'Tailored execution' },
    ],
    cta: 'About Nouvo',
    ctaHref: '/en/about',
  },
}

export function About({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]

  return (
    <section
      className="px-6 py-24 bg-nc-surface"
      style={{
        background: 'radial-gradient(ellipse 70% 60% at 95% 50%, rgba(227,79,57,0.035) 0%, transparent 65%), var(--color-nc-surface)',
      }}
    >
      <div className="mx-auto max-w-[1280px]">
        <AnimateIn variant="fadeIn" duration={0.4}>
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {t.eyebrow}
          </p>
        </AnimateIn>

        <TextReveal
          text={t.heading}
          as="h2"
          className="font-objektiv font-bold tracking-[-0.02em] text-nc-text max-w-[700px]"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' } as React.CSSProperties}
          staggerDelay={0.04}
        />

        <div className="mt-8 max-w-[640px] space-y-4">
          <AnimateIn variant="fadeUp" delay={0.1}>
            <p className="text-[15px] leading-relaxed text-nc-muted-dark">{t.p1}</p>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.2}>
            <p className="text-[15px] leading-relaxed text-nc-muted-dark">{t.p2}</p>
          </AnimateIn>
        </div>

        <AnimateInGroup className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8" staggerDelay={0.12}>
          {t.stats.map((stat, i) => {
            const StatIcons = [IconClock, IconLayers, IconSparkles]
            const Icon = StatIcons[i] ?? IconSparkles
            return (
              <AnimateInItem key={stat.label} variant="scaleUp">
                <Icon size={28} className="text-nc-accent mb-3" />
                <p className="font-objektiv font-semibold text-nc-text" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
                  <CountUp to={stat.to} suffix={stat.suffix} duration={1600} />
                </p>
                <p className="mt-1 text-xs font-medium tracking-[0.12em] uppercase text-nc-muted-mid">
                  {stat.label}
                </p>
              </AnimateInItem>
            )
          })}
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

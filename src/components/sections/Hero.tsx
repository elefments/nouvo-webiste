'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Arrow } from '@/components/ui/Arrow'
import { HeroVisuals } from './HeroVisuals'

const copy = {
  el: {
    eyebrow: 'Ψηφιακός Σχεδιασμός & Υλοποίηση Συστημάτων',
    subtext:
      'Δεν πουλάμε εργαλεία. Σχεδιάζουμε συστήματα. Από κατασκευή ιστοσελίδων και eshop ως AI workflows και digital marketing με μία λογική, από την αρχή ως το τέλος.',
    ctaPrimary: 'Ξεκινήστε Σήμερα',
    ctaPrimaryHref: '/epikoinonia',
    ctaGhost: 'Δείτε τις Υπηρεσίες',
    ctaGhostHref: '/ypiresies',
  },
  en: {
    eyebrow: 'Digital Design & Systems Implementation',
    subtext:
      'We don\'t sell tools. We design systems. From website and eshop development to AI workflows and digital marketing one line of thinking, from strategy to execution.',
    ctaPrimary: 'Get Started',
    ctaPrimaryHref: '/en/contact',
    ctaGhost: 'View Services',
    ctaGhostHref: '/en/services',
  },
}

const EASE = [0.22, 1, 0.36, 1] as const

/* Word-by-word reveal for the H1 */
const H1_LINES = [
  { words: 'Beyond Digital.', accent: false },
  { words: 'Pure Strategy.', accent: true },
]

export function Hero({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-x-hidden"
      style={{
        background: 'radial-gradient(ellipse 55% 80% at 80% 50%, rgba(227,79,57,0.035) 0%, transparent 70%)',
      }}
    >
      <div className="mx-auto max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center py-24 lg:py-0">

        {/* ── Left: text ──────────────────────────────────────── */}
        <div>

          {/* Eyebrow — fade in first */}
          <motion.p
            className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          >
            {t.eyebrow}
          </motion.p>

          {/* H1 — word-by-word reveal */}
          <h1
            className="font-objektiv font-[800] tracking-[-0.03em] text-nc-text pb-2"
            style={{ fontSize: 'clamp(40px, 8vw, 96px)', lineHeight: 1.1 }}
            aria-label="Beyond Digital. Pure Strategy."
          >
            {H1_LINES.map((line, li) => (
              <motion.span
                key={li}
                className={`block ${line.accent ? 'text-nc-accent' : ''}`}
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 + li * 0.25 } },
                  hidden: {},
                }}
              >
                {line.words.split(' ').map((word, wi) => (
                  <motion.span
                    key={wi}
                    className="inline-block"
                    style={{ marginRight: '0.22em' }}
                    variants={{
                      hidden:  { opacity: 0, y: 28 },
                      visible: { opacity: 1, y: 0  },
                    }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            className="mt-8 max-w-[460px] text-[18px] leading-[1.65] font-light text-nc-muted-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: EASE }}
          >
            {t.subtext}
          </motion.p>

          {/* Social proof strip */}
          <motion.div
            className="flex items-center gap-3 mt-10 mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: EASE }}
          >
            <div className="flex -space-x-2">
              {[
                'bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]',
                'bg-gradient-to-br from-[#f59e0b] to-[#ef4444]',
                'bg-gradient-to-br from-[#10b981] to-[#059669]',
                'bg-gradient-to-br from-[#3b82f6] to-[#6366f1]',
                'bg-gradient-to-br from-[#ec4899] to-[#f43f5e]',
              ].map((grad, i) => (
                <div
                  key={i}
                  className={`h-9 w-9 rounded-full ${grad} ring-2 ring-white flex items-center justify-center`}
                  style={{ zIndex: 5 - i }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity="0.85">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 mb-0.5">
                {[0,1,2,3,4].map(i => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#E34F39">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-[12px] text-nc-muted-mid">
                {locale === 'el'
                  ? '100+ επιχειρήσεις μας εμπιστεύτηκαν'
                  : 'Trusted by 100+ businesses'}
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease: EASE }}
          >
            <Link
              href={t.ctaPrimaryHref}
              className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-nc-text text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-nc-accent"
            >
              <span>{t.ctaPrimary}</span>
              <Arrow size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href={t.ctaGhostHref}
              className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-nc-border text-nc-muted-dark text-sm font-medium tracking-wide transition-all duration-200 hover:border-nc-text hover:text-nc-text"
            >
              <span>{t.ctaGhost}</span>
              <Arrow size={16} />
            </Link>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            className="mt-14 flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: EASE }}
          >
            <div className="h-px w-10 bg-nc-border" />
            <p className="text-[12px] text-nc-muted-mid tracking-wide">
              {locale === 'el'
                ? '20+ χρόνια εμπειρίας · 100% custom · Χωρίς templates'
                : '20+ years experience · 100% custom · No templates'}
            </p>
          </motion.div>
        </div>

        {/* ── Right: animated visuals (desktop only) ──────────── */}
        <motion.div
          className="relative hidden lg:block h-[580px]"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
        >
          <HeroVisuals locale={locale} />
        </motion.div>

      </div>
    </section>
  )
}

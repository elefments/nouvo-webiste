// No 'use client' — this is a Server Component.
// Animations are pure CSS (no JS needed), so the LCP subtext paragraph
// is available to the browser from the very first HTML byte.
// The heavy animated visual (HeroVisuals) is still lazy-loaded client-side.

import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'
import { HeroVisualsLazy } from './HeroVisualsLazy'

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
      "We don't sell tools. We design systems. From website and eshop development to AI workflows and digital marketing one line of thinking, from strategy to execution.",
    ctaPrimary: 'Get Started',
    ctaPrimaryHref: '/en/contact',
    ctaGhost: 'View Services',
    ctaGhostHref: '/en/services',
  },
}

/* Word-by-word reveal for the H1 */
const H1_LINES = [
  { words: 'Beyond Digital.', accent: false },
  { words: 'Pure Strategy.', accent: true },
]

export function Hero({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]

  return (
    <section
      className="relative flex flex-col justify-center px-6 overflow-x-hidden pt-28 pb-16 lg:pt-32 lg:pb-20"
      style={{
        background: 'radial-gradient(ellipse 55% 80% at 80% 50%, rgba(227,79,57,0.035) 0%, transparent 70%)',
      }}
    >
      <div className="mx-auto max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-center">

        {/* ── Left: text ──────────────────────────────────────── */}
        <div>

          {/* Eyebrow — CSS slide-up, no JS */}
          <p
            className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-6 hero-eyebrow"
          >
            {t.eyebrow}
          </p>

          {/* H1 — word-by-word CSS animation using animation-delay on each span */}
          <h1
            className="font-objektiv font-[800] tracking-[-0.03em] text-nc-text pb-2"
            style={{ fontSize: 'clamp(40px, 8vw, 96px)', lineHeight: 1.1 }}
            aria-label="Beyond Digital. Pure Strategy."
          >
            {H1_LINES.map((line, li) => (
              <span
                key={li}
                className={`block ${line.accent ? 'text-nc-accent' : ''}`}
              >
                {line.words.split(' ').map((word, wi) => (
                  <span
                    key={wi}
                    className="inline-block hero-word"
                    style={{
                      marginRight: '0.22em',
                      animationDelay: `${(0.15 + li * 0.2) + wi * 0.07}s`,
                    }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          {/*
           * Subtext — THIS IS THE LCP ELEMENT.
           * Plain <p> inside a Server Component — no JS dependency, no React
           * hydration needed, no transform animation.  The browser can paint
           * it from the first HTML byte, so LCP fires at ~1 s regardless of
           * how long the JS bundle takes to download.
           */}
          <p className="mt-8 max-w-[460px] text-[18px] leading-[1.65] font-light text-nc-muted-dark">
            {t.subtext}
          </p>

          {/* Social proof strip — CSS fade-up with delay */}
          <div
            className="flex items-center gap-3 mt-10 mb-4 hero-fade-up"
            style={{ animationDelay: '0.3s' }}
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
          </div>

          {/* CTAs — CSS fade-up with delay */}
          <div
            className="flex flex-wrap items-center gap-4 hero-fade-up"
            style={{ animationDelay: '0.4s' }}
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
          </div>

          {/* Trust strip — CSS fade with delay */}
          <div
            className="mt-14 flex items-center gap-6 hero-fade"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="h-px w-10 bg-nc-border" />
            <p className="text-[12px] text-nc-muted-mid tracking-wide">
              {locale === 'el'
                ? '20+ χρόνια εμπειρίας · 100% στα μέτρα σας · Μηδέν συμβιβασμοί'
                : '20+ years experience · 100% tailored · Zero compromises'}
            </p>
          </div>
        </div>

        {/* ── Right: animated visuals (desktop only, client-side) ──── */}
        <div className="relative hidden lg:block h-[580px] hero-slide-right">
          <HeroVisualsLazy locale={locale} />
        </div>

      </div>
    </section>
  )
}

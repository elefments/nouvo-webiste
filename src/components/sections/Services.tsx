'use client'

/**
 * Services — stacked sticky cards scroll effect.
 *
 * Each service becomes a card with `position: sticky`.
 * Cards stack on top of each other as the user scrolls through the section.
 * The increasing `top` offset + z-index creates a physical "deck of cards" illusion.
 *
 * Performance:
 * - CSS sticky = no JS scroll listener
 * - Entrance animation: Framer Motion whileInView (IntersectionObserver)
 * - Only opacity + transform animated (compositor-only)
 */

import Link from 'next/link'
import { m } from 'framer-motion'
import { Arrow } from '@/components/ui/Arrow'
import { ServiceIcon } from '@/components/ui/Icons'

const copy = {
  el: {
    eyebrow: 'Υπηρεσίες',
    heading: 'Πέντε επίπεδα.\nΜία λογική.',
    subtext: 'Κάθε υπηρεσία μπορεί να σταθεί αυτόνομα. Αποδίδει μέγιστα όταν συνδέεται με τις υπόλοιπες.',
    cta: 'Όλες οι Υπηρεσίες',
    ctaHref: '/ypiresies',
    services: [
      { num: '01', title: 'Ιστοσελίδες & Ψηφιακή Παρουσία', desc: 'Κατασκευή ιστοσελίδων, eshop και landing pages με αρχιτεκτονική που μετατρέπει επισκέπτες σε πελάτες.', href: '/ypiresies/kataskevi-istoselidon', tag: 'Web' },
      { num: '02', title: 'Αναζήτηση & Ορατότητα', desc: 'SEO, Local SEO, Technical SEO, AEO, GEO και HEO ορατότητα σε κάθε μορφή αναζήτησης, συμπεριλαμβανομένης της AI.', href: '/ypiresies/anazitisi-oratotita', tag: 'SEO' },
      { num: '03', title: 'Marketing & Ψηφιακή Ανάπτυξη', desc: 'Google Ads, Meta Ads, TikTok Ads, email marketing και στρατηγική περιεχομένου βασισμένη σε δεδομένα, όχι ένστικτο.', href: '/ypiresies/marketing-psifiaki-anaptyxi', tag: 'Growth' },
      { num: '04', title: 'Ψηφιακός Μετασχηματισμός & AI', desc: 'Εγκατάσταση AI εργαλείων, αυτοματισμός διαδικασιών και ψηφιοποίηση επιχείρησης με πρακτική αξία.', href: '/ypiresies/psifiakos-metasximatismos-ai', tag: 'AI' },
      { num: '05', title: 'IT Support & Συντήρηση', desc: 'Τεχνική υποστήριξη, συντήρηση ιστοσελίδων, cloud hosting και domain management σταθερότητα χωρίς διακοπές.', href: '/ypiresies/it-support-sintirisi', tag: 'IT' },
    ],
  },
  en: {
    eyebrow: 'Services',
    heading: 'Five pillars.\nOne logic.',
    subtext: 'Each service stands on its own. Together, they deliver maximum impact.',
    cta: 'All Services',
    ctaHref: '/en/services',
    services: [
      { num: '01', title: 'Websites & Digital Presence', desc: 'Website, eshop and landing page development built with architecture that converts visitors into clients.', href: '/en/services/websites-digital-presence', tag: 'Web' },
      { num: '02', title: 'Search & Visibility', desc: 'SEO, Local SEO, Technical SEO, AEO, GEO and HEO visibility across every search format, including AI-powered search.', href: '/en/services/search-visibility', tag: 'SEO' },
      { num: '03', title: 'Marketing & Digital Growth', desc: 'Google Ads, Meta Ads, TikTok Ads, email marketing and content strategy driven by data, not intuition.', href: '/en/services/marketing-digital-growth', tag: 'Growth' },
      { num: '04', title: 'Digital Transformation & AI', desc: 'AI tools implementation, process automation and business digitization with real operational value.', href: '/en/services/digital-transformation-ai', tag: 'AI' },
      { num: '05', title: 'IT Support & Maintenance', desc: 'Technical support, website maintenance, cloud hosting and domain management stability without interruption.', href: '/en/services/it-support-maintenance', tag: 'IT' },
    ],
  },
}

/* shadow depth increases so "lower" cards cast more shadow (closer to surface) */
const SHADOWS = [
  '0 2px 12px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)',
  '0 4px 20px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.04)',
  '0 8px 28px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.05)',
  '0 12px 36px rgba(0,0,0,0.11), 0 3px 10px rgba(0,0,0,0.06)',
  '0 16px 48px rgba(0,0,0,0.13), 0 4px 12px rgba(0,0,0,0.07)',
]

const CARD_TOP_BASE = 96   // px from top when sticky
const CARD_TOP_STEP = 18   // px added per card to create the fanned stack

const EASE = [0.22, 1, 0.36, 1] as const

export function Services({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]

  return (
    <section className="px-6 pt-24 pb-8 bg-nc-surface overflow-hidden">
      <div className="mx-auto max-w-[1280px]">

        {/* Section header */}
        <m.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {t.eyebrow}
          </p>
          <h2
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text whitespace-pre-line"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            {t.heading}
          </h2>
          <p className="mt-4 text-[15px] text-nc-muted-dark max-w-[520px]">
            {t.subtext}
          </p>
        </m.div>

        {/* Stacked cards */}
        <div className="mt-12 relative" style={{ paddingBottom: `${CARD_TOP_STEP * (t.services.length - 1)}px` }}>
          {t.services.map((service, i) => (
            <Link
              key={service.num}
              href={service.href}
              className="group block"
              style={{
                position: 'sticky',
                top: `${CARD_TOP_BASE + i * CARD_TOP_STEP}px`,
                zIndex: i + 1,
                marginBottom: i < t.services.length - 1 ? '16px' : '0',
              }}
            >
              <m.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="relative bg-white rounded-[20px] px-6 py-5 overflow-hidden"
                style={{ boxShadow: SHADOWS[i] }}
              >
                {/*
                  Hover overlay — compositor-only opacity transition on a
                  GPU-promoted layer. No background-color change on the card
                  itself (which would force a full repaint).
                */}
                <div
                  className="absolute inset-0 rounded-[20px] bg-nc-accent opacity-0 group-hover:opacity-100 transition-opacity duration-250"
                  aria-hidden="true"
                  style={{ willChange: 'opacity' }}
                />

                <div className="relative flex items-center gap-5">
                  {/* Icon + Number */}
                  <div className="flex items-center gap-2.5 shrink-0 w-16">
                    <ServiceIcon
                      index={i}
                      size={22}
                      className="text-nc-accent group-hover:text-white/80 transition-colors duration-250"
                    />
                    <span className="font-mono text-[13px] text-nc-muted-light group-hover:text-white/50 transition-colors duration-250">
                      {service.num}
                    </span>
                  </div>

                  {/* Title + Description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[22px] font-semibold text-nc-text tracking-tight group-hover:text-white transition-colors duration-250">
                        {service.title}
                      </span>
                      <span className="hidden md:inline-block shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium tracking-widest uppercase bg-nc-surface text-nc-muted-mid group-hover:bg-white/20 group-hover:text-white/70 transition-colors duration-250">
                        {service.tag}
                      </span>
                    </div>
                    {/*
                      Description: opacity + translateY instead of max-height.
                      max-height triggers layout recalculation; opacity+transform
                      stay on the compositor thread.
                    */}
                    <span
                      className="block text-[14px] text-nc-muted-dark leading-relaxed mt-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-white/75 transition-[opacity,transform,color] duration-250 ease-out"
                      style={{ willChange: 'opacity, transform' }}
                    >
                      {service.desc}
                    </span>
                  </div>

                  {/* Arrow */}
                  <Arrow
                    size={20}
                    className="shrink-0 text-nc-muted-light group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-250"
                  />
                </div>
              </m.div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <m.div
          className="mt-12 pb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <Link
            href={t.ctaHref}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-nc-text text-nc-text text-sm font-medium tracking-wide transition-all duration-200 hover:bg-nc-text hover:text-white"
          >
            <span>{t.cta}</span>
            <Arrow size={16} />
          </Link>
        </m.div>

      </div>
    </section>
  )
}

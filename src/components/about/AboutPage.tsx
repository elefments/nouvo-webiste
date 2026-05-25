'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { aboutPage } from '@/data/about'

export function AboutPage({ locale }: { locale: 'el' | 'en' }) {
  const t = aboutPage[locale]

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-[1280px] px-6 pb-24 pt-40">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#E34F39]">
            {t.eyebrow}
          </span>
          <h1
            className="mt-4 max-w-[800px] font-snaga font-bold tracking-[-0.02em] text-[#1E1E1E]"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            {t.h1}
          </h1>
        </motion.div>

        <div className="mt-10 max-w-[750px] space-y-6">
          {t.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="font-sofia text-[16px] leading-[1.75] text-[#575657]"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24"
        >
          <h2 className="font-snaga text-[32px] font-bold tracking-[-0.02em] text-[#1E1E1E]">
            {t.approachHeading}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {t.approach.map((item, i) => (
              <div key={i}>
                <h3 className="font-snaga text-lg font-bold text-[#1E1E1E]">{item.title}</h3>
                <p className="mt-3 font-sofia text-[15px] leading-relaxed text-[#757474]">{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="font-snaga text-[32px] font-bold tracking-[-0.02em] text-[#1E1E1E]">
            {t.pillarsHeading}
          </h2>
          <p className="mt-4 max-w-[600px] font-sofia text-[15px] text-[#575657]">{t.pillarsBody}</p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.pillars.map((pillar, i) => (
              <div
                key={i}
                className="rounded-[16px] border border-[rgba(0,0,0,0.07)] p-6 transition-colors hover:border-[#E34F39]/30"
              >
                <span className="font-snaga text-[13px] font-bold uppercase tracking-wider text-[#E34F39]">
                  {pillar.label}
                </span>
                <p className="mt-2 font-sofia text-[14px] text-[#575657]">{pillar.subtitle}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-24"
        >
          <h2 className="font-snaga text-[32px] font-bold tracking-[-0.02em] text-[#1E1E1E]">
            {t.principlesHeading}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="font-sofia text-[15px] font-medium text-[#1E1E1E]">{t.believeLabel}</p>
              <ul className="mt-4 space-y-3">
                {t.believe.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#E34F39]" />
                    <span className="font-sofia text-[15px] leading-relaxed text-[#575657]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sofia text-[15px] font-medium text-[#1E1E1E]">{t.refuseLabel}</p>
              <ul className="mt-4 space-y-3">
                {t.refuse.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#1E1E1E]" />
                    <span className="font-sofia text-[15px] leading-relaxed text-[#575657]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 flex flex-wrap gap-4"
        >
          <Link
            href={locale === 'el' ? '/ypiresies' : '/en/services'}
            className="rounded-[100px] bg-[#E34F39] px-8 py-3.5 font-sofia text-[14px] font-medium tracking-wide text-white transition-colors hover:bg-[#c93e28]"
          >
            {t.ctaPrimary}
          </Link>
          <Link
            href={locale === 'el' ? '/case-studies' : '/en/case-studies'}
            className="rounded-[100px] border border-[rgba(0,0,0,0.07)] px-8 py-3.5 font-sofia text-[14px] font-medium tracking-wide text-[#1E1E1E] transition-colors hover:border-[#1E1E1E]"
          >
            {t.ctaGhost}
          </Link>
        </motion.div>
      </section>
    </main>
  )
}

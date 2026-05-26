'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const copy = {
  el: {
    srOnly: 'Η φιλοσοφία μας',
    text: '“Δεν πουλάμε εργαλεία. Σχεδιάζουμε συστήματα. Η στρατηγική πρέπει να εφαρμόζεται. Η αρχιτεκτονική προηγείται της εικόνας. Η σταθερότητα είναι προϋπόθεση ανάπτυξης.”',
  },
  en: {
    srOnly: 'Our philosophy',
    text: '“We don’t sell tools. We design systems. Strategy must operate. Architecture comes before appearance. Stability enables growth.”',
  },
}

export function Manifesto({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  // Start color must pass WCAG AA contrast on white (4.5:1). #757474 = 4.66:1 ✓
  const color = useTransform(scrollYProgress, [0, 1], ['#757474', '#1E1E1E'])

  return (
    <section ref={ref} className="px-6 py-32">
      <div className="mx-auto max-w-[800px] text-center">
        <h2 className="sr-only">{t.srOnly}</h2>
        <motion.p
          className="font-marlet font-light italic leading-relaxed"
          style={{ color, fontSize: 'clamp(20px, 3vw, 28px)' }}
        >
          {t.text}
        </motion.p>
        <p className="mt-8 font-marlet text-[16px] text-nc-muted-mid">
          Beyond Digital. Pure Strategy.
        </p>
      </div>
    </section>
  )
}

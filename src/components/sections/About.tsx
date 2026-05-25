import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'

const copy = {
  el: {
    eyebrow: 'Ποιοι Είμαστε',
    heading: 'Ένας μηχανισμός αναβάθμισης, όχι ένα ακόμα agency.',
    p1: 'Η Nouvo Collective γεννήθηκε για να λύσει ένα πρόβλημα που βλέπαμε επανειλημμένα: στρατηγική που υπάρχει στα χαρτιά και υλοποίηση που δεν την ακολουθεί. Σύμβουλοι που σχεδιάζουν και εξαφανίζονται. Ομάδες που τρέχουν εργαλεία χωρίς αρχιτεκτονική.',
    p2: 'Λειτουργούμε ως ο συνδετικός κρίκος ανάμεσα στην απόφαση και την εφαρμογή της. Μεταφράζουμε τη στρατηγική σε συστήματα. Εγκαθιστούμε μόνο ό,τι έχει πρακτική αξία.',
    stats: [
      { value: '16 χρόνια', label: 'Τεχνική εμπειρία' },
      { value: '5 επίπεδα', label: 'Ολοκληρωμένες υπηρεσίες' },
      { value: '100% custom', label: 'Χωρίς templates, χωρίς συμβιβασμούς' },
    ],
    cta: 'Μάθετε Περισσότερα',
    ctaHref: '/epikoinonia',
  },
  en: {
    eyebrow: 'Who We Are',
    heading: 'An upgrade mechanism, not another agency.',
    p1: 'Nouvo Collective was built to solve a problem we kept seeing: strategy that exists on paper and execution that never follows. Consultants who design and disappear. Teams running tools with no architecture behind them.',
    p2: 'We operate as the connective link between decision and implementation. We translate strategy into systems. We install only what creates real value.',
    stats: [
      { value: '16 years', label: 'Technical experience' },
      { value: '5 pillars', label: 'Integrated services' },
      { value: '100% custom', label: 'No templates, no compromises' },
    ],
    cta: 'Learn More',
    ctaHref: '/en/contact',
  },
}

export function About({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]

  return (
    <section className="px-6 py-24 bg-nc-surface">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
          {t.eyebrow}
        </p>
        <h2 className="font-snaga font-bold tracking-[-0.02em] text-nc-text max-w-[700px]" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          {t.heading}
        </h2>

        <div className="mt-8 max-w-[640px] space-y-4">
          <p className="text-[15px] leading-relaxed text-nc-muted-dark">{t.p1}</p>
          <p className="text-[15px] leading-relaxed text-nc-muted-dark">{t.p2}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {t.stats.map((stat) => (
            <div key={stat.value}>
              <p className="font-snaga font-semibold text-nc-text" style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}>
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium tracking-[0.12em] uppercase text-nc-muted-mid">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href={t.ctaHref}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-nc-text text-nc-text text-sm font-medium tracking-wide transition-all duration-200 hover:bg-nc-text hover:text-white"
          >
            <span>{t.cta}</span>
            <Arrow size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

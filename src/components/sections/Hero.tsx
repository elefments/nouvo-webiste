import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'

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

export function Hero({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]

  return (
    <section className="min-h-[calc(100vh-72px)] flex flex-col justify-center px-6">
      <div className="mx-auto max-w-[1280px] w-full">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-6">
          {t.eyebrow}
        </p>

        <h1 className="font-snaga font-[800] tracking-[-0.02em] text-nc-text" style={{ fontSize: 'clamp(56px, 7vw, 100px)' }}>
          Beyond Digital.
          <br />
          <span className="text-nc-accent">Pure Strategy.</span>
        </h1>

        <p className="mt-6 max-w-[520px] text-[18px] leading-relaxed font-light text-nc-muted-dark">
          {t.subtext}
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-10">
          <Link
            href={t.ctaPrimaryHref}
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-nc-text text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-nc-accent"
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
      </div>
    </section>
  )
}

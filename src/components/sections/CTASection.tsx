import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'

const copy = {
  el: {
    eyebrow: 'Ξεκινήστε',
    heading: 'Ξεκινήστε τη συνεργασία.',
    body: 'Εάν η επιχείρησή σας χρειάζεται δομή, σαφήνεια και συστήματα που λειτουργούν μιλήστε μας.',
    ctaPrimary: 'Επικοινωνήστε Μαζί Μας',
    ctaPrimaryHref: '/epikoinonia',
    ctaGhost: 'Δείτε τις Υπηρεσίες',
    ctaGhostHref: '/ypiresies',
  },
  en: {
    eyebrow: 'Start Here',
    heading: 'Start the collaboration.',
    body: 'If your business needs structure, clarity and systems that work let\'s talk.',
    ctaPrimary: 'Contact Us',
    ctaPrimaryHref: '/en/contact',
    ctaGhost: 'View Services',
    ctaGhostHref: '/en/services',
  },
}

export function CTASection({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1280px] text-center">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
          {t.eyebrow}
        </p>
        <h2 className="font-snaga font-bold tracking-[-0.02em] text-nc-text mx-auto" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          {t.heading}
        </h2>
        <p className="mt-6 text-[18px] leading-relaxed font-light text-nc-muted-dark max-w-[520px] mx-auto">
          {t.body}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
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
      </div>
    </section>
  )
}

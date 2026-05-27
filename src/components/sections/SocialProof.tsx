import { AnimateIn } from '@/components/ui/AnimateIn'

const copy = {
  el: {
    rating: '4.9',
    platform: 'Google Reviews',
    businesses: '100+ επιχειρήσεις μας εμπιστεύονται',
    trust1: 'Εξ αποστάσεως σε όλη την Ευρώπη',
    trust2: '20+ χρόνια στον ψηφιακό χώρο',
    trust3: 'Μηδέν συμβιβασμοί',
  },
  en: {
    rating: '4.9',
    platform: 'Google Reviews',
    businesses: '100+ businesses trust us',
    trust1: 'Remote across Europe',
    trust2: '20+ years in digital',
    trust3: 'Zero compromises',
  },
}

const AVATAR_COLORS = [
  'bg-nc-accent',
  'bg-nc-text',
  'bg-[#6B7280]',
  'bg-[#9CA3AF]',
  'bg-[#D1D5DB]',
]

const AVATAR_INITIALS = ['A', 'K', 'M', 'N', 'D']

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#E34F39">
          <path d="M6 0.5L7.39 4.26L11.5 4.26L8.3 6.74L9.45 10.5L6 8.22L2.55 10.5L3.7 6.74L0.5 4.26L4.61 4.26L6 0.5Z" />
        </svg>
      ))}
    </span>
  )
}

export function SocialProof({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]

  return (
    <section className="border-y border-nc-border bg-white px-6 py-10">
      <AnimateIn variant="fadeIn">
        <div className="mx-auto max-w-[1280px] flex flex-col sm:flex-row items-center justify-between gap-8">

          {/* Rating + avatars */}
          <div className="flex items-center gap-6">
            {/* Avatar stack */}
            <div className="flex items-center -space-x-2.5">
              {AVATAR_COLORS.map((bg, i) => (
                <div
                  key={i}
                  className={`relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[12px] font-semibold text-white ${bg}`}
                  style={{ zIndex: AVATAR_COLORS.length - i }}
                >
                  {AVATAR_INITIALS[i]}
                </div>
              ))}
            </div>

            {/* Rating */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Stars />
                <span className="font-snaga text-[18px] leading-none text-nc-text">
                  {t.rating}
                </span>
              </div>
              <span className="font-sofia text-[12px] text-nc-muted-mid">{t.platform}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-10 w-px bg-nc-border sm:block" />

          {/* Businesses count */}
          <div className="text-center sm:text-left">
            <p className="font-sofia text-[14px] font-medium text-nc-text">{t.businesses}</p>
          </div>

          {/* Divider */}
          <div className="hidden h-10 w-px bg-nc-border sm:block" />

          {/* Trust pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {[t.trust1, t.trust2, t.trust3].map((trust, i) => (
              <span
                key={i}
                className="rounded-full border border-nc-border px-4 py-1.5 font-sofia text-[12px] text-nc-muted-dark"
              >
                {trust}
              </span>
            ))}
          </div>

        </div>
      </AnimateIn>
    </section>
  )
}

import { cache } from 'react'
import { getPayloadClient } from '@/lib/payload'
import { AnimateIn, AnimateInGroup, AnimateInItem } from '@/components/ui/AnimateIn'
import { TextReveal } from '@/components/ui/TextReveal'

type TestimonialDoc = {
  id: string | number
  name: string
  role?: string
  company?: string
  quote?: string | { el?: string; en?: string }
  rating?: number
  avatar?: { url?: string; alt?: string } | null
}

/** React cache() deduplicates this call per render pass and memoizes the result */
const fetchTestimonials = cache(async (locale: 'el' | 'en') => {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'testimonials',
      where: {
        and: [
          { status: { equals: 'published' } },
          { featured: { equals: true } },
        ],
      },
      locale,
      sort: 'order',
      limit: 6,
    })
    return result.docs as TestimonialDoc[]
  } catch {
    return []
  }
})

const copy = {
  el: {
    eyebrow: 'Μαρτυρίες',
    heading: 'Τι λένε όσοι δούλεψαν μαζί μας.',
  },
  en: {
    eyebrow: 'Testimonials',
    heading: 'What those who worked with us say.',
  },
}

/* Gradient avatars when no photo is uploaded — cycles through 6 */
const AVATAR_GRADIENTS = [
  'from-[#6366f1] to-[#8b5cf6]',
  'from-[#f59e0b] to-[#ef4444]',
  'from-[#10b981] to-[#059669]',
  'from-[#3b82f6] to-[#6366f1]',
  'from-[#ec4899] to-[#f43f5e]',
  'from-[#E34F39] to-[#f59e0b]',
]

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={i <= rating ? '#E34F39' : '#AEACAE'}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export async function Testimonials({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]

  const docs = await fetchTestimonials(locale)

  if (!docs.length) return null

  return (
    <section className="bg-nc-surface px-6 py-14 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <AnimateIn variant="fadeIn" duration={0.4}>
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {t.eyebrow}
          </p>
        </AnimateIn>

        <TextReveal
          text={t.heading}
          as="h2"
          className="font-objektiv font-bold tracking-[-0.02em] text-nc-text max-w-[600px]"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          staggerDelay={0.05}
        />

        <AnimateInGroup
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {docs.map((item, i) => {
            const quote =
              typeof item.quote === 'string'
                ? item.quote
                : item.quote?.[locale] ?? ''
            const rating = item.rating ?? 5
            const grad = AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]

            return (
              <AnimateInItem key={item.id} variant="scaleUp">
                <div className="flex flex-col justify-between h-full bg-nc-surface rounded-[20px] p-7">
                  {/* Opening quote mark */}
                  <div>
                    <svg
                      width="32"
                      height="24"
                      viewBox="0 0 32 24"
                      fill="none"
                      className="mb-4 text-nc-accent"
                    >
                      <path
                        d="M0 24V14.4C0 6.08 4.48 1.28 13.44 0l1.6 2.88C10.24 4.16 7.84 6.72 7.2 10.56H13.44V24H0ZM18.56 24V14.4C18.56 6.08 23.04 1.28 32 0l1.6 2.88C28.8 4.16 26.4 6.72 25.76 10.56H32V24H18.56Z"
                        fill="currentColor"
                        fillOpacity="0.25"
                      />
                    </svg>

                    <p className="text-[15px] leading-relaxed text-nc-text">
                      {quote}
                    </p>
                  </div>

                  {/* Divider + author */}
                  <div className="mt-6 pt-5 border-t border-nc-border">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        {item.avatar?.url ? (
                          <img
                            src={item.avatar.url}
                            alt={item.avatar.alt ?? item.name}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                          />
                        ) : (
                          <div
                            className={`h-10 w-10 rounded-full bg-gradient-to-br ${grad} ring-2 ring-white flex items-center justify-center shrink-0`}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity="0.9">
                              <circle cx="12" cy="8" r="4" />
                              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                            </svg>
                          </div>
                        )}

                        {/* Name + role */}
                        <div>
                          <p className="text-[14px] font-semibold text-nc-text leading-tight">
                            {item.name}
                          </p>
                          {(item.role || item.company) && (
                            <p className="text-[12px] text-nc-muted-mid mt-0.5">
                              {[item.role, item.company].filter(Boolean).join(' · ')}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Stars */}
                      <StarRow rating={rating} />
                    </div>
                  </div>
                </div>
              </AnimateInItem>
            )
          })}
        </AnimateInGroup>
      </div>
    </section>
  )
}

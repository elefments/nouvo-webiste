import { AnimateIn } from '@/components/ui/AnimateIn'

const copy = {
  el: { eyebrow: 'Τεχνολογίες που χρησιμοποιούμε' },
  en: { eyebrow: 'Technologies we use' },
}

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Payload CMS',
  'Framer Motion',
  'Vercel',
  'PostgreSQL',
  'Google Analytics',
  'Meta Ads',
  'OpenAI',
  'Cloudflare',
  'Stripe',
  'Resend',
]

export function TechLogos({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]
  const doubled = [...technologies, ...technologies]

  return (
    <section className="bg-nc-surface px-6 py-16">
      <div className="mx-auto max-w-[1280px]">
        <AnimateIn variant="fadeIn">
          <p className="mb-8 text-center font-sofia text-[11px] uppercase tracking-[0.16em] text-nc-muted-mid">
            {t.eyebrow}
          </p>
        </AnimateIn>
      </div>

      {/* Marquee track */}
      <div className="overflow-hidden">
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{ animation: 'marquee 28s linear infinite' }}
        >
          {doubled.map((tech, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center rounded-full border border-nc-border bg-white px-4 py-1.5 font-sofia text-[13px] font-medium text-nc-text"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'
import { AnimateIn, AnimateInGroup, AnimateInItem } from '@/components/ui/AnimateIn'
import { TextReveal } from '@/components/ui/TextReveal'

const copy = {
  el: {
    eyebrow: 'Blog',
    heading: 'Σκέψεις από την πράξη.',
    subtext: 'Χωρίς θόρυβο. Χωρίς filler. Μόνο ό,τι έχει πρακτική αξία για την επιχείρησή σας.',
    cta: 'Όλα τα Άρθρα',
    ctaHref: '/blog',
  },
  en: {
    eyebrow: 'Blog',
    heading: 'Thinking from the field.',
    subtext: 'No noise. No filler. Only what has practical value for your business.',
    cta: 'All Articles',
    ctaHref: '/en/blog',
  },
}

const placeholders = [
  { title: 'Coming soon', category: 'Strategy', date: '2026' },
  { title: 'Coming soon', category: 'Technology', date: '2026' },
  { title: 'Coming soon', category: 'Growth', date: '2026' },
]

export function BlogPreview({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]

  return (
    <section className="px-6 py-14 lg:py-24 bg-nc-surface">
      <div className="mx-auto max-w-[1280px]">
        <AnimateIn variant="fadeIn" duration={0.4}>
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {t.eyebrow}
          </p>
        </AnimateIn>

        <TextReveal
          text={t.heading}
          as="h2"
          className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          staggerDelay={0.05}
        />

        <AnimateIn variant="fadeUp" delay={0.15}>
          <p className="mt-4 text-[15px] text-nc-muted-dark max-w-[520px]">
            {t.subtext}
          </p>
        </AnimateIn>

        <AnimateInGroup className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {placeholders.map((post, i) => (
            <AnimateInItem key={i} variant="fadeUp">
              <div className="group">
                <div className="aspect-[16/10] rounded-xl bg-white mb-4" />
                <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid">
                  {post.category}
                </p>
                <p className="mt-1 text-lg font-medium text-nc-text group-hover:text-nc-accent transition-colors duration-200">
                  {post.title}
                </p>
              </div>
            </AnimateInItem>
          ))}
        </AnimateInGroup>

        <AnimateIn variant="fadeUp" delay={0.1} className="mt-10">
          <Link
            href={t.ctaHref}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-nc-text text-nc-text text-sm font-medium tracking-wide transition-all duration-200 hover:bg-nc-text hover:text-white"
          >
            <span>{t.cta}</span>
            <Arrow size={16} />
          </Link>
        </AnimateIn>
      </div>
    </section>
  )
}

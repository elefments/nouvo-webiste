import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'
import { IconCheck } from '@/components/ui/Icons'
import { AnimateIn, AnimateInGroup, AnimateInItem } from '@/components/ui/AnimateIn'
import { TextReveal } from '@/components/ui/TextReveal'
import type { ServiceCategory, ServiceSubItem } from '@/data/services'

export function ServiceSubPage({
  category,
  subService,
  locale,
}: {
  category: ServiceCategory
  subService: ServiceSubItem
  locale: 'el' | 'en'
}) {
  const parentPath = `/${locale === 'en' ? 'en/' : ''}${category.parentSlug[locale]}`
  const categoryPath = `${parentPath}/${category.slug[locale]}`
  const contactHref = locale === 'en' ? '/en/contact' : '/epikoinonia'

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[900px]">
          <AnimateIn variant="fadeIn" duration={0.4}>
            <Link
              href={categoryPath}
              className="inline-flex items-center gap-2 text-[13px] font-medium text-nc-muted-dark hover:text-nc-accent transition-colors mb-8"
            >
              <Arrow size={14} className="rotate-180" />
              {category.eyebrow[locale]}
            </Link>
          </AnimateIn>

          <AnimateIn variant="fadeIn" duration={0.4} delay={0.05}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
              {subService.title[locale]}
            </p>
          </AnimateIn>

          <TextReveal
            text={subService.title[locale]}
            as="h1"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
            staggerDelay={0.05}
          />

          <AnimateIn variant="fadeUp" delay={0.2}>
            <p className="mt-6 text-[17px] leading-relaxed text-nc-muted-dark max-w-[660px]">
              {subService.description[locale]}
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.3}>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href={contactHref}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-nc-accent text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#c93e28]"
              >
                <span>{locale === 'en' ? 'Tell Us About Your Project' : 'Μιλήστε μας για το Project σας'}</span>
                <Arrow size={16} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Includes */}
      {subService.includes && (
        <section className="px-6 py-16 bg-nc-surface">
          <div className="mx-auto max-w-[900px]">
            <AnimateIn variant="fadeIn" duration={0.4}>
              <h2 className="font-objektiv font-bold text-[24px] tracking-[-0.02em] text-nc-text">
                {locale === 'en' ? 'What\'s included' : 'Τι περιλαμβάνει'}
              </h2>
            </AnimateIn>
            <AnimateInGroup className="mt-6 space-y-3" staggerDelay={0.05}>
              {subService.includes[locale].map((item) => (
                <AnimateInItem key={item} variant="slideRight">
                  <li className="flex items-start gap-3 text-[15px] text-nc-text list-none">
                    <IconCheck size={18} className="mt-0.5 shrink-0 text-nc-accent" />
                    {item}
                  </li>
                </AnimateInItem>
              ))}
            </AnimateInGroup>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <AnimateIn variant="fadeIn" duration={0.4}>
            <h2
              className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              {locale === 'en' ? 'Other services in this category' : 'Άλλες υπηρεσίες στην κατηγορία'}
            </h2>
          </AnimateIn>

          <AnimateInGroup className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.08}>
            {category.subServices
              .filter((s) => s.slug.en !== subService.slug.en)
              .slice(0, 4)
              .map((s) => {
                const href = `${categoryPath}/${s.slug[locale]}`
                return (
                  <AnimateInItem key={s.slug.en} variant="fadeUp">
                    <Link
                      href={href}
                      className="group flex items-center justify-between p-5 rounded-[20px] bg-nc-surface hover:bg-nc-text transition-colors duration-200"
                    >
                      <span className="text-[15px] font-medium text-nc-text group-hover:text-white transition-colors duration-200">
                        {s.title[locale]}
                      </span>
                      <Arrow size={14} className="text-nc-muted-mid group-hover:text-white transition-colors duration-200" />
                    </Link>
                  </AnimateInItem>
                )
              })}
          </AnimateInGroup>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-[800px] text-center">
          <TextReveal
            text={locale === 'en' ? 'Ready to start?' : 'Έτοιμοι να ξεκινήσετε;'}
            as="h2"
            className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
            staggerDelay={0.06}
          />

          <AnimateIn variant="fadeUp" delay={0.15}>
            <p className="mt-4 text-[16px] text-nc-muted-dark">
              {locale === 'en'
                ? 'Tell us about your project. We start with a no-commitment assessment.'
                : 'Μιλήστε μας για το project σας. Ξεκινάμε με μια αξιολόγηση χωρίς δέσμευση.'}
            </p>
          </AnimateIn>

          <AnimateIn variant="scaleUp" delay={0.25}>
            <Link
              href={contactHref}
              className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-nc-accent text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#c93e28]"
            >
              <span>{locale === 'en' ? 'Contact Us' : 'Επικοινωνήστε Μαζί Μας'}</span>
              <Arrow size={16} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}

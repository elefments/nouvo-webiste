import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'
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
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[900px]">
          <Link
            href={categoryPath}
            className="inline-flex items-center gap-2 text-[13px] font-medium text-nc-muted-dark hover:text-nc-accent transition-colors mb-8"
          >
            <Arrow size={14} className="rotate-180" />
            {category.eyebrow[locale]}
          </Link>

          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {subService.title[locale]}
          </p>
          <h1
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
          >
            {subService.title[locale]}
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-nc-muted-dark max-w-[660px]">
            {subService.description[locale]}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              href={contactHref}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-nc-accent text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#c93e28]"
            >
              <span>{locale === 'en' ? 'Tell Us About Your Project' : 'Μιλήστε μας για το Project σας'}</span>
              <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      {subService.includes && (
        <section className="px-6 py-16 bg-nc-surface">
          <div className="mx-auto max-w-[900px]">
            <h2 className="font-snaga font-bold text-[24px] tracking-[-0.02em] text-nc-text">
              {locale === 'en' ? 'What\'s included' : 'Τι περιλαμβάνει'}
            </h2>
            <ul className="mt-6 space-y-3">
              {subService.includes[locale].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-nc-text">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-nc-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[900px]">
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            {locale === 'en' ? 'Other services in this category' : 'Άλλες υπηρεσίες στην κατηγορία'}
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.subServices
              .filter((s) => s.slug.en !== subService.slug.en)
              .slice(0, 4)
              .map((s) => {
                const href = `${categoryPath}/${s.slug[locale]}`
                return (
                  <Link
                    key={s.slug.en}
                    href={href}
                    className="group flex items-center justify-between p-5 rounded-[20px] bg-nc-surface hover:bg-nc-text transition-colors duration-200"
                  >
                    <span className="text-[15px] font-medium text-nc-text group-hover:text-white transition-colors duration-200">
                      {s.title[locale]}
                    </span>
                    <Arrow size={14} className="text-nc-muted-mid group-hover:text-white transition-colors duration-200" />
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[800px] text-center">
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            {locale === 'en' ? 'Ready to start?' : 'Έτοιμοι να ξεκινήσετε;'}
          </h2>
          <p className="mt-4 text-[16px] text-nc-muted-dark">
            {locale === 'en'
              ? 'Tell us about your project. We start with a no-commitment assessment.'
              : 'Μιλήστε μας για το project σας. Ξεκινάμε με μια αξιολόγηση χωρίς δέσμευση.'}
          </p>
          <Link
            href={contactHref}
            className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-nc-accent text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#c93e28]"
          >
            <span>{locale === 'en' ? 'Contact Us' : 'Επικοινωνήστε Μαζί Μας'}</span>
            <Arrow size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}

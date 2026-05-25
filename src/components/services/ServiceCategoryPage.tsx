import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'
import type { ServiceCategory } from '@/data/services'

export function ServiceCategoryPage({
  category,
  locale,
}: {
  category: ServiceCategory
  locale: 'el' | 'en'
}) {
  const parentPath = `/${locale === 'en' ? 'en/' : ''}${category.parentSlug[locale]}`
  const categoryPath = `${parentPath}/${category.slug[locale]}`
  const contactHref = locale === 'en' ? '/en/contact' : '/epikoinonia'
  const caseStudiesHref = locale === 'en' ? '/en/case-studies' : '/case-studies'

  return (
    <>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {category.eyebrow[locale]}
          </p>
          <h1
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text max-w-[900px]"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            {category.title[locale]}
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-nc-muted-dark max-w-[600px]">
            {category.subtitle[locale]}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              href={contactHref}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-nc-accent text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#c93e28]"
            >
              <span>{locale === 'en' ? 'Tell Us About Your Project' : 'Μιλήστε μας για το Project σας'}</span>
              <Arrow size={16} />
            </Link>
            <Link
              href={caseStudiesHref}
              className="flex items-center gap-3 px-5 py-3 rounded-full border border-nc-border text-nc-muted-dark text-sm font-medium tracking-wide transition-all duration-200 hover:border-nc-muted-light"
            >
              <span>{locale === 'en' ? 'View Case Studies' : 'Δείτε τα Case Studies'}</span>
              <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {category.intro.heading[locale]}
          </h2>
          {category.intro.body[locale].map((p, i) => (
            <p key={i} className="mt-4 text-[16px] leading-relaxed text-nc-muted-dark max-w-[720px]">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-nc-surface">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {locale === 'en' ? 'Our Services' : 'Οι Υπηρεσίες μας'}
          </p>
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {locale === 'en' ? 'Every business has a different need.' : 'Κάθε επιχείρηση έχει διαφορετική ανάγκη.'}
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.subServices.map((sub) => {
              const href = `${categoryPath}/${sub.slug[locale]}`
              return (
                <Link key={sub.slug.en} href={href} className="group bg-white rounded-[20px] p-6 transition-shadow duration-200 hover:shadow-lg">
                  <h3 className="text-[20px] font-semibold text-nc-text group-hover:text-nc-accent transition-colors duration-200">
                    {sub.title[locale]}
                  </h3>
                  <p className="mt-3 text-[14px] text-nc-muted-dark leading-relaxed line-clamp-4">
                    {sub.description[locale]}
                  </p>
                  {sub.includes && (
                    <ul className="mt-4 space-y-1">
                      {sub.includes[locale].slice(0, 3).map((item) => (
                        <li key={item} className="text-[13px] text-nc-muted-mid flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-nc-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-nc-accent">
                    {locale === 'en' ? 'Learn More' : 'Μάθετε Περισσότερα'} <Arrow size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {locale === 'en' ? 'Our Approach' : 'Η Προσέγγισή Μας'}
          </p>
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {category.approach.heading[locale]}
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {category.approach.steps.map((step, i) => (
              <div key={i}>
                <span className="text-[13px] font-medium text-nc-accent">0{i + 1}</span>
                <h4 className="mt-2 text-[18px] font-semibold text-nc-text">{step.title[locale]}</h4>
                <p className="mt-2 text-[14px] text-nc-muted-dark leading-relaxed">{step.body[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-nc-surface">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {locale === 'en' ? 'What We Don\'t Do' : 'Τι Δεν Κάνουμε'}
          </p>
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {category.nonNegotiables.heading[locale]}
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {category.nonNegotiables.items.map((item, i) => (
              <div key={i}>
                <h4 className="text-[18px] font-semibold text-nc-text">{item.title[locale]}</h4>
                <p className="mt-2 text-[14px] text-nc-muted-dark leading-relaxed">{item.body[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {locale === 'en' ? 'FAQ' : 'Συχνές Ερωτήσεις'}
          </p>
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text mb-10"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {locale === 'en' ? 'Questions worth answering.' : 'Ερωτήσεις που αξίζει να απαντηθούν.'}
          </h2>
          <div className="space-y-8">
            {category.faq.map((item, i) => (
              <div key={i} className="border-b border-nc-border pb-6">
                <h3 className="text-[16px] font-medium text-nc-text">{item.q[locale]}</h3>
                <p className="mt-2 text-[14px] text-nc-muted-dark leading-relaxed">{item.a[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px] text-center">
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {locale === 'en' ? 'Tell us where you are right now.' : 'Πείτε μας πού βρίσκεστε τώρα.'}
          </h2>
          <p className="mt-4 text-[17px] text-nc-muted-dark">
            {locale === 'en'
              ? 'You don\'t need a finished brief. You just need to know what isn\'t working. That\'s where we start.'
              : 'Δεν χρειάζεται να έχετε έτοιμο brief. Αρκεί να ξέρετε τι δεν λειτουργεί. Εκεί ξεκινάμε.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href={contactHref}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-nc-accent text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#c93e28]"
            >
              <span>{locale === 'en' ? 'Contact Us' : 'Επικοινωνήστε Μαζί Μας'}</span>
              <Arrow size={16} />
            </Link>
            <Link
              href={caseStudiesHref}
              className="flex items-center gap-3 px-5 py-3 rounded-full border border-nc-border text-nc-muted-dark text-sm font-medium tracking-wide transition-all duration-200 hover:border-nc-muted-light"
            >
              <span>{locale === 'en' ? 'View Case Studies' : 'Δείτε τα Case Studies'}</span>
              <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

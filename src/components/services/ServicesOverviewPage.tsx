import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'
import { servicesOverview } from '@/data/services-overview'
import { serviceCategories } from '@/data/services'

export function ServicesOverviewPage({ locale }: { locale: 'el' | 'en' }) {
  const t = servicesOverview[locale]

  return (
    <>
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {t.eyebrow}
          </p>
          <h1
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text max-w-[900px]"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            {t.h1}
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-nc-muted-dark max-w-[560px]">
            {t.subtext}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8">
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

      <section className="px-6 py-20 bg-nc-surface">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {t.gridEyebrow}
          </p>
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {t.gridHeading}
          </h2>
          <p className="mt-4 text-[15px] text-nc-muted-dark max-w-[600px]">
            {t.gridBody}
          </p>

          <div className="mt-12 space-y-6">
            {serviceCategories.map((cat, i) => {
              const href = `/${locale === 'en' ? 'en/' : ''}${cat.parentSlug[locale]}/${cat.slug[locale]}`
              return (
                <Link key={cat.id} href={href} className="group block bg-white rounded-[20px] p-8 transition-all duration-200 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <span className="text-[14px] font-medium text-nc-accent shrink-0">0{i + 1}</span>
                    <div className="flex-1">
                      <h3 className="text-[22px] font-semibold text-nc-text group-hover:text-nc-accent transition-colors duration-200">
                        {cat.eyebrow[locale]}
                      </h3>
                      <p className="mt-1 text-[13px] text-nc-muted-mid">{cat.roleLabel[locale]}</p>
                      <p className="mt-3 text-[15px] text-nc-muted-dark leading-relaxed max-w-[600px]">
                        {cat.description[locale]}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cat.subServices.map((sub) => (
                          <span key={sub.slug.en} className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide bg-nc-surface text-nc-muted-dark">
                            {sub.title[locale]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="shrink-0 mt-1">
                      <Arrow size={16} className="text-nc-muted-mid group-hover:text-nc-accent transition-colors duration-200" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {t.howEyebrow}
          </p>
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text max-w-[800px]"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {t.howHeading}
          </h2>
          <p className="mt-4 text-[15px] text-nc-muted-dark max-w-[700px]">
            {t.howBody}
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {t.howSteps.map((step, i) => (
              <div key={i}>
                <span className="text-[13px] font-medium text-nc-accent">0{i + 1}</span>
                <h4 className="mt-2 text-[16px] font-semibold text-nc-text">{step.title}</h4>
                <p className="mt-2 text-[13px] text-nc-muted-dark leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-nc-surface">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {t.diffEyebrow}
          </p>
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {t.diffHeading}
          </h2>
          <p className="mt-4 text-[15px] text-nc-muted-dark max-w-[600px]">
            {t.diffBody}
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.diffItems.map((item, i) => (
              <div key={i} className="bg-white rounded-[20px] p-6">
                <h4 className="text-[17px] font-semibold text-nc-text">{item.title}</h4>
                <p className="mt-2 text-[14px] text-nc-muted-dark leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {t.faqEyebrow}
          </p>
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text mb-10"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {t.faqHeading}
          </h2>
          <div className="space-y-8">
            {t.faq.map((item, i) => (
              <div key={i} className="border-b border-nc-border pb-6">
                <h3 className="text-[16px] font-medium text-nc-text">{item.q}</h3>
                <p className="mt-2 text-[14px] text-nc-muted-dark leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
            {t.ctaEyebrow}
          </p>
          <h2
            className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {t.ctaHeading}
          </h2>
          <p className="mt-4 text-[17px] text-nc-muted-dark">{t.ctaBody}</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href={t.ctaPrimaryHref}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-nc-accent text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-[#c93e28]"
            >
              <span>{t.ctaFinalPrimary}</span>
              <Arrow size={16} />
            </Link>
            <Link
              href={t.ctaGhostHref}
              className="flex items-center gap-3 px-5 py-3 rounded-full border border-nc-border text-nc-muted-dark text-sm font-medium tracking-wide transition-all duration-200 hover:border-nc-muted-light"
            >
              <span>{t.ctaFinalGhost}</span>
              <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

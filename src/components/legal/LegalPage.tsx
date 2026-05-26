import Link from 'next/link'

interface LegalSection {
  heading: string
  subHeading?: string
  body: string[]
  items?: string[]
  subsections?: { heading: string; subHeading?: string; body: string[]; items?: string[] }[]
}

interface LegalPageData {
  eyebrow: { el: string; en: string }
  title: { el: string; en: string }
  lastUpdated: { el: string; en: string }
  sections: { el: LegalSection[]; en: LegalSection[] }
}

function Section({ section }: { section: LegalSection }) {
  return (
    <div className="space-y-4">
      <h2 className="font-snaga text-2xl tracking-tight text-[#1E1E1E]">{section.heading}</h2>
      {section.subHeading && (
        <p className="text-sm font-medium text-[#575657]">{section.subHeading}</p>
      )}
      {section.body.map((p, i) => (
        <p key={i} className="font-sofia text-base leading-relaxed text-[#575657]">{p}</p>
      ))}
      {section.items && (
        <ul className="space-y-1.5 pl-5">
          {section.items.map((item, i) => (
            <li key={i} className="list-disc font-sofia text-base leading-relaxed text-[#575657]">{item}</li>
          ))}
        </ul>
      )}
      {section.subsections?.map((sub, i) => (
        <div key={i} className="mt-6 space-y-3 pl-0">
          <h3 className="font-snaga text-xl tracking-tight text-[#1E1E1E]">{sub.heading}</h3>
          {sub.subHeading && (
            <p className="text-sm font-medium text-[#575657]">{sub.subHeading}</p>
          )}
          {sub.body.map((p, j) => (
            <p key={j} className="font-sofia text-base leading-relaxed text-[#575657]">{p}</p>
          ))}
          {sub.items && (
            <ul className="space-y-1.5 pl-5">
              {sub.items.map((item, j) => (
                <li key={j} className="list-disc font-sofia text-base leading-relaxed text-[#575657]">{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export function LegalPage({ page, locale }: { page: LegalPageData; locale: 'el' | 'en' }) {
  const sections = page.sections[locale]

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-6 pb-24 pt-40">
        <div className="animate-fade-up">
          <span className="font-sofia text-sm font-medium uppercase tracking-widest text-[#E34F39]">
            {page.eyebrow[locale]}
          </span>
          <h1 className="mt-4 font-snaga text-4xl tracking-tight text-[#1E1E1E] md:text-5xl">
            {page.title[locale]}
          </h1>
          <p className="mt-3 font-sofia text-sm text-[#AEACAE]">{page.lastUpdated[locale]}</p>
        </div>

        <div className="mt-12 space-y-10">
          {sections.map((section, i) => (
            <div
              key={i}
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              <Section section={section} />
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-[rgba(0,0,0,0.07)] pt-8">
          <Link
            href={locale === 'el' ? '/' : '/en'}
            className="inline-flex items-center gap-2 rounded-[100px] font-sofia text-sm font-medium text-[#575657] transition-colors hover:text-[#E34F39]"
          >
            &larr; {locale === 'el' ? 'Epistrofi stin arxiki' : 'Back to home'}
          </Link>
        </div>
      </section>
    </main>
  )
}

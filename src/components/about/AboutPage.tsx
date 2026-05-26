import Link from 'next/link'
import { aboutPage } from '@/data/about'
import { IconTarget, IconLightbulb, IconUsers, IconGlobe, IconSearch, IconMegaphone, IconBrain, IconShield, IconCheck, IconLock } from '@/components/ui/Icons'

export function AboutPage({ locale }: { locale: 'el' | 'en' }) {
  const t = aboutPage[locale]

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-[1280px] px-6 pb-24 pt-40">
        <div className="animate-fade-up">
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#E34F39]">
            {t.eyebrow}
          </span>
          <h1
            className="mt-4 max-w-[800px] font-objektiv font-bold tracking-[-0.02em] text-[#1E1E1E]"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
          >
            {t.h1}
          </h1>
        </div>

        <div className="mt-10 max-w-[750px] space-y-6">
          {t.paragraphs.map((p, i) => (
            <p
              key={i}
              className="animate-fade-up font-sofia text-[16px] leading-[1.75] text-[#575657]"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              {p}
            </p>
          ))}
        </div>

        <div className="animate-fade-up mt-24" style={{ animationDelay: '0.3s' }}>
          <h2 className="font-objektiv text-[32px] font-bold tracking-[-0.02em] text-[#1E1E1E]">
            {t.approachHeading}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
            {t.approach.map((item, i) => {
              const ApproachIcons = [IconTarget, IconLightbulb, IconUsers]
              const Icon = ApproachIcons[i] ?? IconTarget
              return (
                <div key={i}>
                  <Icon size={28} className="text-[#E34F39] mb-3" />
                  <h3 className="font-objektiv text-lg font-bold text-[#1E1E1E]">{item.title}</h3>
                  <p className="mt-3 font-sofia text-[15px] leading-relaxed text-[#757474]">{item.body}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="animate-fade-up mt-24" style={{ animationDelay: '0.4s' }}>
          <h2 className="font-objektiv text-[32px] font-bold tracking-[-0.02em] text-[#1E1E1E]">
            {t.pillarsHeading}
          </h2>
          <p className="mt-4 max-w-[600px] font-sofia text-[15px] text-[#575657]">{t.pillarsBody}</p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.pillars.map((pillar, i) => {
              const PillarIcons = [IconGlobe, IconSearch, IconMegaphone, IconBrain, IconShield]
              const Icon = PillarIcons[i] ?? IconGlobe
              return (
                <div
                  key={i}
                  className="group rounded-[16px] border border-[rgba(0,0,0,0.07)] p-6 transition-colors hover:border-[#E34F39]/30"
                >
                  <Icon size={24} className="text-[#E34F39] mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-snaga text-[13px] font-bold uppercase tracking-wider text-[#E34F39]">
                    {pillar.label}
                  </span>
                  <p className="mt-2 font-sofia text-[14px] text-[#575657]">{pillar.subtitle}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="animate-fade-up mt-24" style={{ animationDelay: '0.5s' }}>
          <h2 className="font-objektiv text-[32px] font-bold tracking-[-0.02em] text-[#1E1E1E]">
            {t.principlesHeading}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="font-sofia text-[15px] font-medium text-[#1E1E1E]">{t.believeLabel}</p>
              <ul className="mt-4 space-y-3">
                {t.believe.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <IconCheck size={16} className="mt-1 flex-shrink-0 text-[#E34F39]" />
                    <span className="font-sofia text-[15px] leading-relaxed text-[#575657]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-sofia text-[15px] font-medium text-[#1E1E1E]">{t.refuseLabel}</p>
              <ul className="mt-4 space-y-3">
                {t.refuse.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <IconLock size={16} className="mt-1 flex-shrink-0 text-[#1E1E1E]" />
                    <span className="font-sofia text-[15px] leading-relaxed text-[#575657]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="animate-fade-up mt-20 flex flex-wrap gap-4" style={{ animationDelay: '0.6s' }}>
          <Link
            href={locale === 'el' ? '/ypiresies' : '/en/services'}
            className="rounded-[100px] bg-[#E34F39] px-8 py-3.5 font-sofia text-[14px] font-medium tracking-wide text-white transition-colors hover:bg-[#c93e28]"
          >
            {t.ctaPrimary}
          </Link>
          <Link
            href={locale === 'el' ? '/case-studies' : '/en/case-studies'}
            className="rounded-[100px] border border-[rgba(0,0,0,0.07)] px-8 py-3.5 font-sofia text-[14px] font-medium tracking-wide text-[#1E1E1E] transition-colors hover:border-[#1E1E1E]"
          >
            {t.ctaGhost}
          </Link>
        </div>
      </section>
    </main>
  )
}

import { contactPage } from '@/data/contact'
import { FAQJsonLd } from '@/components/seo/JsonLd'
import { Accordion } from '@/components/ui/Accordion'
import { IconClipboard, IconCompass, IconCode, IconRocket } from '@/components/ui/Icons'
import { ContactForm } from './ContactForm'

export function ContactPage({ locale }: { locale: 'el' | 'en' }) {
  const t = contactPage[locale]

  return (
    <main className="bg-white">
      <FAQJsonLd items={t.briefItems.map((item) => ({ question: item.q, answer: item.a }))} />
      <section className="mx-auto max-w-[1280px] px-6 pb-24 pt-40">
        <div className="animate-fade-up">
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#E34F39]">
            {t.eyebrow}
          </span>
          <h1
            className="mt-4 font-objektiv font-bold tracking-[-0.02em] text-[#1E1E1E]"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            {t.h1}
          </h1>
          <p className="mt-4 max-w-[600px] font-sofia text-[15px] text-[#575657]">{t.subtext}</p>
        </div>

        <div className="animate-fade-up mt-16" style={{ animationDelay: '0.1s' }}>
          <h2 className="font-objektiv text-[28px] font-bold tracking-[-0.02em] text-[#1E1E1E]">
            {t.processHeading}
          </h2>
          <p className="mt-4 max-w-[700px] font-sofia text-[15px] leading-relaxed text-[#575657]">
            {t.processBody}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, i) => {
              const StepIcons = [IconClipboard, IconCompass, IconCode, IconRocket]
              const Icon = StepIcons[i] ?? IconClipboard
              return (
                <div
                  key={step.number}
                  className="animate-fade-up"
                  style={{ animationDelay: `${0.2 + i * 0.08}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={22} className="text-[#E34F39]" />
                    <span className="font-objektiv text-[32px] font-bold text-[#E34F39]">{step.number}</span>
                  </div>
                  <h3 className="font-objektiv text-lg font-bold text-[#1E1E1E]">{step.title}</h3>
                  <p className="mt-2 font-sofia text-[14px] leading-relaxed text-[#757474]">{step.body}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="animate-fade-up mt-20" style={{ animationDelay: '0.3s' }}>
          <ContactForm locale={locale} labels={t.form} />
        </div>

        <div
          className="animate-fade-up mt-24 border-t border-[rgba(0,0,0,0.07)] pt-16"
          style={{ animationDelay: '0.4s' }}
        >
          <h2 className="font-objektiv text-[28px] font-bold tracking-[-0.02em] text-[#1E1E1E]">
            {t.briefHeading}
          </h2>
          <div className="mt-8">
            <Accordion
              items={t.briefItems.map((item) => ({ question: item.q, answer: item.a }))}
              defaultOpen={0}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

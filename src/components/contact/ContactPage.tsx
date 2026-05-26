import { contactPage } from '@/data/contact'
import { FAQJsonLd } from '@/components/seo/JsonLd'

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
            className="mt-4 font-snaga font-bold tracking-[-0.02em] text-[#1E1E1E]"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            {t.h1}
          </h1>
          <p className="mt-4 max-w-[600px] font-sofia text-[15px] text-[#575657]">{t.subtext}</p>
        </div>

        <div className="animate-fade-up mt-16" style={{ animationDelay: '0.1s' }}>
          <h2 className="font-snaga text-[28px] font-bold tracking-[-0.02em] text-[#1E1E1E]">
            {t.processHeading}
          </h2>
          <p className="mt-4 max-w-[700px] font-sofia text-[15px] leading-relaxed text-[#575657]">
            {t.processBody}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, i) => (
              <div
                key={step.number}
                className="animate-fade-up"
                style={{ animationDelay: `${0.2 + i * 0.08}s` }}
              >
                <span className="font-snaga text-[32px] font-bold text-[#E34F39]">{step.number}</span>
                <h3 className="mt-2 font-snaga text-lg font-bold text-[#1E1E1E]">{step.title}</h3>
                <p className="mt-2 font-sofia text-[14px] leading-relaxed text-[#757474]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up mt-20" style={{ animationDelay: '0.3s' }}>
          <form className="mx-auto max-w-[640px] space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-sofia text-[13px] font-medium text-[#575657]">
                  {t.form.nameLabel} *
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-[100px] border border-[rgba(0,0,0,0.07)] px-5 py-3 font-sofia text-[14px] outline-none transition-colors focus:border-[#E34F39]"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-sofia text-[13px] font-medium text-[#575657]">
                  {t.form.emailLabel} *
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-[100px] border border-[rgba(0,0,0,0.07)] px-5 py-3 font-sofia text-[14px] outline-none transition-colors focus:border-[#E34F39]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-sofia text-[13px] font-medium text-[#575657]">
                  {t.form.companyLabel}
                </label>
                <input
                  type="text"
                  className="w-full rounded-[100px] border border-[rgba(0,0,0,0.07)] px-5 py-3 font-sofia text-[14px] outline-none transition-colors focus:border-[#E34F39]"
                />
              </div>
              <div>
                <label className="mb-1.5 block font-sofia text-[13px] font-medium text-[#575657]">
                  {t.form.serviceLabel}
                </label>
                <select className="w-full appearance-none rounded-[100px] border border-[rgba(0,0,0,0.07)] bg-white px-5 py-3 font-sofia text-[14px] outline-none transition-colors focus:border-[#E34F39]">
                  <option value="">---</option>
                  {t.form.serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block font-sofia text-[13px] font-medium text-[#575657]">
                {t.form.messageLabel}
              </label>
              <textarea
                rows={5}
                className="w-full rounded-[20px] border border-[rgba(0,0,0,0.07)] px-5 py-4 font-sofia text-[14px] outline-none transition-colors focus:border-[#E34F39]"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="rounded-[100px] bg-[#E34F39] px-8 py-3.5 font-sofia text-[14px] font-medium tracking-wide text-white transition-colors hover:bg-[#c93e28]"
              >
                {t.form.submit}
              </button>
              <span className="font-sofia text-[13px] text-[#AEACAE]">{t.form.note}</span>
            </div>
          </form>
        </div>

        <div
          className="animate-fade-up mt-24 border-t border-[rgba(0,0,0,0.07)] pt-16"
          style={{ animationDelay: '0.4s' }}
        >
          <h2 className="font-snaga text-[28px] font-bold tracking-[-0.02em] text-[#1E1E1E]">
            {t.briefHeading}
          </h2>
          <div className="mt-8 space-y-8">
            {t.briefItems.map((item, i) => (
              <div key={i}>
                <h3 className="font-snaga text-lg font-bold text-[#1E1E1E]">{item.q}</h3>
                <p className="mt-2 max-w-[700px] font-sofia text-[15px] leading-relaxed text-[#575657]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

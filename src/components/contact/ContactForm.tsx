'use client'

import { useState } from 'react'
import { dl } from '@/lib/dataLayer'

interface ContactFormProps {
  locale: 'el' | 'en'
  labels: {
    nameLabel: string
    emailLabel: string
    companyLabel: string
    serviceLabel: string
    serviceOptions: string[]
    messageLabel: string
    submit: string
    note: string
    successTitle: string
    successBody: string
  }
}

export function ContactForm({ locale, labels: t }: ContactFormProps) {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [company, setCompany] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors]   = useState<{ name?: boolean; email?: boolean }>({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e: { name?: boolean; email?: boolean } = {}
    if (!name.trim())                          e.name = true
    if (!email.trim() || !email.includes('@')) e.email = true
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return

    // Push lead event to GTM dataLayer
    dl.generateLead({
      source: 'contact_form',
      service: service || undefined,
      locale,
    })

    // TODO: wire to API route or Formspree/Resend when backend is ready
    setSubmitted(true)
  }

  const inputClass = 'w-full rounded-[100px] border border-[rgba(0,0,0,0.07)] px-5 py-3 font-sofia text-[14px] outline-none transition-colors focus:border-[#E34F39]'
  const errorClass = 'border-[#E34F39]'

  if (submitted) {
    return (
      <div className="mx-auto max-w-[640px] rounded-[20px] bg-nc-surface p-10 text-center">
        <div className="mb-4 text-3xl">✓</div>
        <h3 className="font-objektiv text-[22px] font-bold text-nc-text">{t.successTitle}</h3>
        <p className="mt-2 text-[15px] text-nc-muted-dark">{t.successBody}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-[640px] space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-sofia text-[13px] font-medium text-[#575657]">
            {t.nameLabel} *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${inputClass} ${errors.name ? errorClass : ''}`}
          />
          {errors.name && (
            <p className="mt-1 pl-2 font-sofia text-[12px] text-[#E34F39]">
              {locale === 'el' ? 'Υποχρεωτικό πεδίο' : 'Required field'}
            </p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block font-sofia text-[13px] font-medium text-[#575657]">
            {t.emailLabel} *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${inputClass} ${errors.email ? errorClass : ''}`}
          />
          {errors.email && (
            <p className="mt-1 pl-2 font-sofia text-[12px] text-[#E34F39]">
              {locale === 'el' ? 'Υποχρεωτικό πεδίο' : 'Required field'}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-sofia text-[13px] font-medium text-[#575657]">
            {t.companyLabel}
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block font-sofia text-[13px] font-medium text-[#575657]">
            {t.serviceLabel}
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full appearance-none rounded-[100px] border border-[rgba(0,0,0,0.07)] bg-white px-5 py-3 font-sofia text-[14px] outline-none transition-colors focus:border-[#E34F39]"
          >
            <option value="">---</option>
            {t.serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block font-sofia text-[13px] font-medium text-[#575657]">
          {t.messageLabel}
        </label>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-[20px] border border-[rgba(0,0,0,0.07)] px-5 py-4 font-sofia text-[14px] outline-none transition-colors focus:border-[#E34F39]"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="rounded-[100px] bg-[#E34F39] px-8 py-3.5 font-sofia text-[14px] font-medium tracking-wide text-white transition-colors hover:bg-[#c93e28]"
        >
          {t.submit}
        </button>
        <span className="font-sofia text-[13px] text-[#AEACAE]">{t.note}</span>
      </div>
    </form>
  )
}

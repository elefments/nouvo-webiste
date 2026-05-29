'use client'

import { useState, useEffect } from 'react'
import { dl } from '@/lib/dataLayer'
import { PhoneInput } from '@/components/ui/PhoneInput'
import { getUtmParams, captureUtmFromUrl } from '@/lib/utm'

interface ContactFormProps {
  locale: 'el' | 'en'
  labels: {
    firstNameLabel: string
    lastNameLabel: string
    emailLabel: string
    phoneLabel: string
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

// getUtmParams is imported from @/lib/utm

export function ContactForm({ locale, labels: t }: ContactFormProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName]   = useState('')
  const [email, setEmail]         = useState('')
  const [phone, setPhone]         = useState('')
  const [company, setCompany]     = useState('')
  const [service, setService]     = useState('')
  const [message, setMessage]     = useState('')
  const [honeypot, setHoneypot]   = useState('')
  const [errors, setErrors]       = useState<{ firstName?: boolean; email?: boolean }>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [serverError, setServerError] = useState(false)

  // Capture UTMs from URL into localStorage (30-day attribution window)
  useEffect(() => {
    captureUtmFromUrl()
  }, [])

  function validate() {
    const e: { firstName?: boolean; email?: boolean } = {}
    if (!firstName.trim())                         e.firstName = true
    if (!email.trim() || !email.includes('@'))     e.email = true
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return

    setLoading(true)
    setServerError(false)

    const utm = getUtmParams()

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName, lastName, email, phone, company, service, message,
          locale, source: 'contact_form', _h: honeypot,
          ...utm,
        }),
      })

      if (!res.ok) throw new Error('Server error')

      dl.generateLead({ source: 'contact_form', service: service || undefined, locale })
      setSubmitted(true)
    } catch {
      setServerError(true)
    } finally {
      setLoading(false)
    }
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
      {/* Honeypot */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="website_url">Website</label>
        <input
          id="website_url"
          type="text"
          name="website_url"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* First name + Last name */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block font-sofia text-[13px] font-medium text-[#575657]">
            {t.firstNameLabel} *
          </label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`${inputClass} ${errors.firstName ? errorClass : ''}`}
          />
          {errors.firstName && (
            <p className="mt-1 pl-2 font-sofia text-[12px] text-[#E34F39]">
              {locale === 'el' ? 'Υποχρεωτικό πεδίο' : 'Required field'}
            </p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block font-sofia text-[13px] font-medium text-[#575657]">
            {t.lastNameLabel}
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Email + Company */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
      </div>

      {/* Phone */}
      <div>
        <label className="mb-1.5 block font-sofia text-[13px] font-medium text-[#575657]">
          {t.phoneLabel}
        </label>
        <PhoneInput
          value={phone}
          onChange={setPhone}
          placeholder="+30 69..."
        />
      </div>

      {/* Service */}
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

      {/* Message */}
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

      {serverError && (
        <p className="pl-2 font-sofia text-[13px] text-[#E34F39]">
          {locale === 'el' ? 'Κάτι πήγε στραβά. Δοκιμάστε ξανά.' : 'Something went wrong. Please try again.'}
        </p>
      )}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={loading}
          className="rounded-[100px] bg-[#E34F39] px-8 py-3.5 font-sofia text-[14px] font-medium tracking-wide text-white transition-colors hover:bg-[#c93e28] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading
            ? (locale === 'el' ? 'Αποστολή...' : 'Sending...')
            : t.submit}
        </button>
        <span className="font-sofia text-[13px] text-[#AEACAE]">{t.note}</span>
      </div>
    </form>
  )
}

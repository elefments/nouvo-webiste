'use client'

import { useEffect, useRef, useState } from 'react'
import { useBookCall } from '@/components/providers/BookCallProvider'
import { dl } from '@/lib/dataLayer'

// Replace with your actual Cal.com link
const BOOKING_URL = 'https://cal.com/YOUR_LINK'

function getUtmParams() {
  if (typeof window === 'undefined') return {}
  const p = new URLSearchParams(window.location.search)
  return {
    utmSource:   p.get('utm_source')   || sessionStorage.getItem('utm_source')   || undefined,
    utmMedium:   p.get('utm_medium')   || sessionStorage.getItem('utm_medium')   || undefined,
    utmCampaign: p.get('utm_campaign') || sessionStorage.getItem('utm_campaign') || undefined,
    utmContent:  p.get('utm_content')  || sessionStorage.getItem('utm_content')  || undefined,
    utmTerm:     p.get('utm_term')     || sessionStorage.getItem('utm_term')     || undefined,
  }
}

const copy = {
  el: {
    title: 'Ας μιλήσουμε',
    subtitle: 'Συμπληρώστε τα στοιχεία σας και θα σας κατευθύνουμε απευθείας στο ημερολόγιο.',
    firstName: 'Όνομα',
    firstNamePlaceholder: 'Το όνομά σας',
    lastName: 'Επώνυμο',
    lastNamePlaceholder: 'Προαιρετικό',
    email: 'Email',
    emailPlaceholder: 'email@example.com',
    phone: 'Τηλέφωνο (προαιρετικό)',
    phonePlaceholder: '+30 69...',
    service: 'Υπηρεσία που σας ενδιαφέρει',
    services: [
      'Επιλέξτε υπηρεσία...',
      'Κατασκευή Ιστοσελίδας / Eshop',
      'SEO & Ορατότητα',
      'Digital Marketing',
      'AI & Αυτοματισμός',
      'IT Support & Ασφάλεια',
      'Δεν έχω αποφασίσει ακόμα',
    ],
    message: 'Μήνυμα (προαιρετικό)',
    messagePlaceholder: 'Περιγράψτε σύντομα τι θέλετε να πετύχετε...',
    submit: 'Κλείστε κλήση',
    required: 'Υποχρεωτικό πεδίο',
  },
  en: {
    title: "Let's talk",
    subtitle: "Fill in your details and we'll redirect you straight to the calendar.",
    firstName: 'First Name',
    firstNamePlaceholder: 'Your first name',
    lastName: 'Last Name',
    lastNamePlaceholder: 'Optional',
    email: 'Email',
    emailPlaceholder: 'email@example.com',
    phone: 'Phone (optional)',
    phonePlaceholder: '+1 ...',
    service: 'Service you\'re interested in',
    services: [
      'Select a service...',
      'Website / Eshop Development',
      'SEO & Visibility',
      'Digital Marketing',
      'AI & Automation',
      'IT Support & Security',
      'Not sure yet',
    ],
    message: 'Message (optional)',
    messagePlaceholder: 'Briefly describe what you want to achieve...',
    submit: 'Book a call',
    required: 'Required field',
  },
}

interface BookCallModalProps {
  locale: 'el' | 'en'
}

export function BookCallModal({ locale }: BookCallModalProps) {
  const { isOpen, close } = useBookCall()
  const t = copy[locale]
  const overlayRef = useRef<HTMLDivElement>(null)
  const openTracked = useRef(false)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName]   = useState('')
  const [email, setEmail]         = useState('')
  const [phone, setPhone]         = useState('')
  const [service, setService]     = useState('')
  const [message, setMessage]     = useState('')
  const [errors, setErrors]       = useState<{ firstName?: boolean; email?: boolean }>({})

  // Persist UTM params from URL to sessionStorage on mount
  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
    keys.forEach((k) => {
      const v = p.get(k)
      if (v) sessionStorage.setItem(k, v)
    })
  }, [])

  // Track modal open (once per open session)
  useEffect(() => {
    if (isOpen && !openTracked.current) {
      openTracked.current = true
      dl.bookCallOpen({ locale })
    }
    if (!isOpen) openTracked.current = false
  }, [isOpen, locale])

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  function validate() {
    const e: { firstName?: boolean; email?: boolean } = {}
    if (!firstName.trim()) e.firstName = true
    if (!email.trim() || !email.includes('@')) e.email = true
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return

    const utm = getUtmParams()
    const fullName = [firstName.trim(), lastName.trim()].filter(Boolean).join(' ')

    const params = new URLSearchParams()
    params.set('name', fullName)
    params.set('email', email.trim())
    if (phone.trim()) params.set('phone', phone.trim())
    if (service && service !== t.services[0]) params.set('notes', `${service}${message.trim() ? ' — ' + message.trim() : ''}`)
    else if (message.trim()) params.set('notes', message.trim())
    // Pass UTMs to Cal.com URL too
    if (utm.utmSource)   params.set('utm_source',   utm.utmSource)
    if (utm.utmMedium)   params.set('utm_medium',   utm.utmMedium)
    if (utm.utmCampaign) params.set('utm_campaign', utm.utmCampaign)

    // Track lead before opening Cal.com
    dl.generateLead({
      source: 'book_call_modal',
      service: service && service !== t.services[0] ? service : undefined,
      locale,
    })

    // Also save to Payload via API (non-blocking)
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: firstName.trim(),
        lastName: lastName.trim() || undefined,
        email: email.trim(),
        phone: phone.trim() || undefined,
        service: service && service !== t.services[0] ? service : undefined,
        message: message.trim() || undefined,
        locale,
        source: 'book_call_modal',
        ...utm,
      }),
    }).catch(() => {})

    window.open(`${BOOKING_URL}?${params.toString()}`, '_blank', 'noopener,noreferrer')
    close()
  }

  if (!isOpen) return null

  const inputClass = 'w-full rounded-full border border-nc-border bg-white px-5 py-3 text-[14px] text-nc-text placeholder:text-nc-muted-light outline-none focus:border-nc-text transition-colors duration-200'
  const errorInputClass = 'border-nc-accent focus:border-nc-accent'
  const selectClass = 'w-full rounded-full border border-nc-border bg-white px-5 py-3 text-[14px] text-nc-text outline-none focus:border-nc-text transition-colors duration-200 appearance-none cursor-pointer'
  const textareaClass = 'w-full rounded-[20px] border border-nc-border bg-white px-5 py-4 text-[14px] text-nc-text placeholder:text-nc-muted-light outline-none focus:border-nc-text transition-colors duration-200 resize-none'

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50"
        onClick={(e) => {
          if (e.target === overlayRef.current) close()
        }}
      >
        {/* Modal */}
        <div
          className="relative w-full max-w-[520px] rounded-t-[24px] sm:rounded-[24px] bg-white p-8 shadow-2xl"
          style={{ animation: 'modalSlideUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) both' }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-nc-muted-mid hover:text-nc-text hover:bg-nc-surface transition-all duration-200"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>

          {/* Header */}
          <h2 className="font-snaga text-[24px] text-nc-text mb-1">{t.title}</h2>
          <p className="text-[13px] text-nc-muted-dark mb-7">{t.subtitle}</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-4">
              {/* First + Last name */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-medium text-nc-muted-dark mb-1.5">
                    {t.firstName} <span className="text-nc-accent">*</span>
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={t.firstNamePlaceholder}
                    className={`${inputClass} ${errors.firstName ? errorInputClass : ''}`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-[11px] text-nc-accent">{t.required}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-nc-muted-dark mb-1.5">
                    {t.lastName}
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={t.lastNamePlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[12px] font-medium text-nc-muted-dark mb-1.5">
                  {t.email} <span className="text-nc-accent">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className={`${inputClass} ${errors.email ? errorInputClass : ''}`}
                />
                {errors.email && (
                  <p className="mt-1 text-[11px] text-nc-accent">{t.required}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[12px] font-medium text-nc-muted-dark mb-1.5">{t.phone}</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.phonePlaceholder}
                  className={inputClass}
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-[12px] font-medium text-nc-muted-dark mb-1.5">{t.service}</label>
                <div className="relative">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={selectClass}
                  >
                    {t.services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-nc-muted-mid">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M1 1l5 5 5-5" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[12px] font-medium text-nc-muted-dark mb-1.5">{t.message}</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  rows={3}
                  className={textareaClass}
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-nc-text px-6 py-4 text-[14px] font-medium text-white tracking-wide transition-all duration-200 hover:bg-nc-accent"
            >
              {t.submit}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

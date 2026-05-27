'use client'

import { useEffect, useRef, useState } from 'react'
import { useBookCall } from '@/components/providers/BookCallProvider'
import { dl } from '@/lib/dataLayer'

// Replace with your actual Calendly / TidyCal link
const BOOKING_URL = 'https://calendly.com/YOUR_LINK'

const copy = {
  el: {
    title: 'Κλείστε μια κλήση',
    subtitle: 'Συμπληρώστε τα στοιχεία σας και θα σας κατευθύνουμε απευθείας στο ημερολόγιο.',
    name: 'Όνομα',
    namePlaceholder: 'Το όνομά σας',
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
    title: 'Book a call',
    subtitle: 'Fill in your details and we\'ll redirect you straight to the calendar.',
    name: 'Name',
    namePlaceholder: 'Your name',
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

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean }>({})

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
    const e: { name?: boolean; email?: boolean } = {}
    if (!name.trim()) e.name = true
    if (!email.trim() || !email.includes('@')) e.email = true
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return

    const params = new URLSearchParams()
    params.set('name', name.trim())
    params.set('email', email.trim())
    if (phone.trim()) params.set('phone', phone.trim())
    if (service && service !== t.services[0]) params.set('notes', `${service}${message.trim() ? ' — ' + message.trim() : ''}`)
    else if (message.trim()) params.set('notes', message.trim())

    // Track lead before opening Calendly
    dl.generateLead({
      source: 'book_call_modal',
      service: service && service !== t.services[0] ? service : undefined,
      locale,
    })

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
          style={{
            animation: 'modalSlideUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
          }}
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
              {/* Name */}
              <div>
                <label className="block text-[12px] font-medium text-nc-muted-dark mb-1.5">
                  {t.name} <span className="text-nc-accent">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className={`${inputClass} ${errors.name ? errorInputClass : ''}`}
                />
                {errors.name && (
                  <p className="mt-1 text-[11px] text-nc-accent">{t.required}</p>
                )}
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

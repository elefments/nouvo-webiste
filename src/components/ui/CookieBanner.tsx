'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// ─── Copy ────────────────────────────────────────────────────────────────────

const copy = {
  el: {
    title: 'Χρησιμοποιούμε cookies',
    text: 'Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σου, να αναλύσουμε την επισκεψιμότητα και να προβάλουμε σχετικό περιεχόμενο.',
    policyLabel: 'Πολιτική Cookies',
    policyHref: '/politiki-cookies',
    privacyLabel: 'Πολιτική Απορρήτου',
    privacyHref: '/politiki-aporritou',
    readMore: 'Διαβάστε την',
    and: 'και την',
    acceptAll: 'Αποδοχή όλων',
    options: 'Επιλογές',
    essentialOnly: 'Μόνο απαραίτητα',
    // Options panel
    optionsTitle: 'Προτιμήσεις cookies',
    optionsDesc: 'Επίλεξε ποια cookies αποδέχεσαι. Τα απαραίτητα είναι πάντα ενεργά.',
    save: 'Αποθήκευση επιλογών',
    back: 'Πίσω',
    categories: {
      essential: {
        label: 'Απαραίτητα',
        desc: 'Απαραίτητα για τη λειτουργία του site. Δεν μπορούν να απενεργοποιηθούν.',
      },
      analytics: {
        label: 'Αναλυτικά',
        desc: 'Μας βοηθούν να καταλάβουμε πώς χρησιμοποιείται το site (Google Analytics).',
      },
      marketing: {
        label: 'Marketing',
        desc: 'Χρησιμοποιούνται για στοχευμένη διαφήμιση (Meta, Google Ads).',
      },
    },
  },
  en: {
    title: 'We use cookies',
    text: 'We use cookies to improve your experience, analyse traffic and show relevant content.',
    policyLabel: 'Cookie Policy',
    policyHref: '/en/cookie-policy',
    privacyLabel: 'Privacy Policy',
    privacyHref: '/en/privacy',
    readMore: 'Read our',
    and: 'and',
    acceptAll: 'Accept all',
    options: 'Options',
    essentialOnly: 'Essentials only',
    // Options panel
    optionsTitle: 'Cookie preferences',
    optionsDesc: 'Choose which cookies you accept. Essential cookies are always active.',
    save: 'Save preferences',
    back: 'Back',
    categories: {
      essential: {
        label: 'Essential',
        desc: 'Required for the site to function. Cannot be disabled.',
      },
      analytics: {
        label: 'Analytics',
        desc: 'Help us understand how the site is used (Google Analytics).',
      },
      marketing: {
        label: 'Marketing',
        desc: 'Used for targeted advertising (Meta, Google Ads).',
      },
    },
  },
}

// ─── Storage ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'nouvo_cookie_consent'

type ConsentValue = 'all' | 'essential' | { analytics: boolean; marketing: boolean }

// ─── Toggle ──────────────────────────────────────────────────────────────────

function Toggle({ on, onChange, disabled }: { on: boolean; onChange: (v: boolean) => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      disabled={disabled}
      onClick={() => !disabled && onChange(!on)}
      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none
        ${on ? 'bg-nc-text' : 'bg-nc-border'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 rounded-full bg-white shadow transition-transform duration-200
          ${on ? 'translate-x-[18px]' : 'translate-x-[3px]'}`}
      />
    </button>
  )
}

// ─── Banner ──────────────────────────────────────────────────────────────────

export function CookieBanner({ locale: localeProp }: { locale: 'el' | 'en' }) {
  const [visible, setVisible] = useState(false)
  const [view, setView] = useState<'main' | 'options'>('main')
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  // Detect locale client-side from URL (handles both SSR prop and client navigation)
  const [locale, setLocale] = useState<'el' | 'en'>(localeProp)

  useEffect(() => {
    // Derive locale from URL path — reliable on client
    const isEn = window.location.pathname.startsWith('/en')
    setLocale(isEn ? 'en' : 'el')

    if (localStorage.getItem(STORAGE_KEY) === null) {
      setVisible(true)
    }

    function onReset() {
      localStorage.removeItem(STORAGE_KEY)
      setView('main')
      setVisible(true)
    }
    window.addEventListener('nouvo_cookie_reset', onReset)
    return () => window.removeEventListener('nouvo_cookie_reset', onReset)
  }, [])

  const t = copy[locale]

  function dispatchAccepted() {
    window.dispatchEvent(new Event('nouvo_cookie_accepted'))
  }

  function acceptAll() {
    localStorage.setItem(STORAGE_KEY, 'all')
    setVisible(false)
    dispatchAccepted()
  }

  function acceptEssential() {
    localStorage.setItem(STORAGE_KEY, 'essential')
    setVisible(false)
    dispatchAccepted()
  }

  function savePreferences() {
    const value: ConsentValue = analytics || marketing
      ? { analytics, marketing }
      : 'essential'
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    setVisible(false)
    dispatchAccepted()
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center sm:items-end sm:justify-end p-4 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.3)' }}
      role="dialog"
      aria-modal="true"
      aria-label={t.title}
    >
      <div className="w-full sm:max-w-[460px] bg-white rounded-[20px] shadow-[0_24px_64px_rgba(0,0,0,0.18)] overflow-hidden">

        {/* ── Main view ── */}
        {view === 'main' && (
          <div className="p-6 sm:p-7">
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[18px]"
                style={{ background: '#F0EDE6' }} aria-hidden="true">🍪</span>
              <h2 className="font-snaga text-[17px] tracking-[-0.01em] text-nc-text">{t.title}</h2>
            </div>

            {/* Body */}
            <p className="font-sofia text-[13px] leading-[1.7] text-nc-muted-dark">
              {t.text}{' '}
              {t.readMore}{' '}
              <Link href={t.policyHref} className="underline underline-offset-2 hover:text-nc-text transition-colors">
                {t.policyLabel}
              </Link>{' '}
              {t.and}{' '}
              <Link href={t.privacyHref} className="underline underline-offset-2 hover:text-nc-text transition-colors">
                {t.privacyLabel}
              </Link>.
            </p>

            {/* Actions */}
            <div className="mt-5 flex items-center gap-2.5">
              <button
                onClick={acceptAll}
                className="flex-1 rounded-full bg-nc-text px-4 py-2.5 font-sofia text-[13px] font-medium text-white transition-colors duration-200 hover:bg-nc-accent"
              >
                {t.acceptAll}
              </button>
              <button
                onClick={() => setView('options')}
                className="flex-1 rounded-full border border-nc-border px-4 py-2.5 font-sofia text-[13px] font-medium text-nc-text transition-colors duration-200 hover:border-nc-text"
              >
                {t.options}
              </button>
              <button
                onClick={acceptEssential}
                className="shrink-0 font-sofia text-[12px] text-nc-muted-mid hover:text-nc-text transition-colors duration-200 whitespace-nowrap"
              >
                {t.essentialOnly}
              </button>
            </div>
          </div>
        )}

        {/* ── Options view ── */}
        {view === 'options' && (
          <div className="p-6 sm:p-7">
            {/* Header */}
            <button
              onClick={() => setView('main')}
              className="flex items-center gap-1.5 text-[12px] text-nc-muted-mid hover:text-nc-text transition-colors mb-4"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.back}
            </button>

            <h2 className="font-snaga text-[17px] tracking-[-0.01em] text-nc-text mb-1">
              {t.optionsTitle}
            </h2>
            <p className="font-sofia text-[12px] text-nc-muted-mid mb-5">{t.optionsDesc}</p>

            {/* Categories */}
            <div className="space-y-4 border-t border-nc-border pt-4">
              {/* Essential — always on */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-sofia text-[13px] font-medium text-nc-text">{t.categories.essential.label}</p>
                  <p className="font-sofia text-[12px] text-nc-muted-mid mt-0.5">{t.categories.essential.desc}</p>
                </div>
                <Toggle on={true} onChange={() => {}} disabled />
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-sofia text-[13px] font-medium text-nc-text">{t.categories.analytics.label}</p>
                  <p className="font-sofia text-[12px] text-nc-muted-mid mt-0.5">{t.categories.analytics.desc}</p>
                </div>
                <Toggle on={analytics} onChange={setAnalytics} />
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-sofia text-[13px] font-medium text-nc-text">{t.categories.marketing.label}</p>
                  <p className="font-sofia text-[12px] text-nc-muted-mid mt-0.5">{t.categories.marketing.desc}</p>
                </div>
                <Toggle on={marketing} onChange={setMarketing} />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 flex gap-2.5">
              <button
                onClick={savePreferences}
                className="flex-1 rounded-full bg-nc-text px-4 py-2.5 font-sofia text-[13px] font-medium text-white transition-colors duration-200 hover:bg-nc-accent"
              >
                {t.save}
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 rounded-full border border-nc-border px-4 py-2.5 font-sofia text-[13px] font-medium text-nc-text transition-colors duration-200 hover:border-nc-text"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

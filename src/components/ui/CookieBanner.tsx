'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const copy = {
  el: {
    title: 'Χρησιμοποιούμε cookies',
    text: 'Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σου, να αναλύσουμε την επισκεψιμότητα και να προβάλουμε σχετικό περιεχόμενο. Μπορείς να επιλέξεις ποια cookies αποδέχεσαι.',
    policyLabel: 'Πολιτική Cookies',
    policyHref: '/politiki-cookies',
    privacyLabel: 'Πολιτική Απορρήτου',
    privacyHref: '/politiki-aporritou',
    acceptAll: 'Αποδοχή όλων',
    settings: 'Επιλογές',
    essentialOnly: 'Μόνο απαραίτητα',
  },
  en: {
    title: 'We use cookies',
    text: "We use cookies to improve your experience, analyse traffic and show relevant content. You can choose which cookies you accept.",
    policyLabel: 'Cookie Policy',
    policyHref: '/en/cookie-policy',
    privacyLabel: 'Privacy Policy',
    privacyHref: '/en/privacy',
    acceptAll: 'Accept all',
    settings: 'Options',
    essentialOnly: 'Essentials only',
  },
}

const STORAGE_KEY = 'nouvo_cookie_consent'

export function CookieBanner({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === null) {
      setVisible(true)
    }
    function onReset() {
      localStorage.removeItem(STORAGE_KEY)
      setVisible(true)
    }
    window.addEventListener('nouvo_cookie_reset', onReset)
    return () => window.removeEventListener('nouvo_cookie_reset', onReset)
  }, [])

  function accept(value: 'all' | 'essential') {
    localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-end justify-center sm:justify-end p-4 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.25)' }}
      aria-modal="true"
      role="dialog"
      aria-label="Cookie consent"
    >
      {/* Card */}
      <div className="w-full sm:max-w-[480px] bg-white rounded-[20px] shadow-[0_24px_64px_rgba(0,0,0,0.18)] p-6 sm:p-7">

        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[18px]"
            style={{ background: '#F0EDE6' }}
            aria-hidden="true"
          >
            🍪
          </span>
          <h2 className="font-snaga text-[18px] tracking-[-0.01em] text-nc-text">
            {t.title}
          </h2>
        </div>

        {/* Body */}
        <p className="font-sofia text-[13px] leading-[1.7] text-nc-muted-dark mb-1">
          {t.text}{' '}
          <Link href={t.policyHref} className="underline underline-offset-2 hover:text-nc-text transition-colors duration-150">
            {t.policyLabel}
          </Link>{' '}
          {locale === 'el' ? 'και την' : 'and'}{' '}
          <Link href={t.privacyHref} className="underline underline-offset-2 hover:text-nc-text transition-colors duration-150">
            {t.privacyLabel}
          </Link>.
        </p>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={() => accept('all')}
            className="flex-1 rounded-full bg-nc-text px-5 py-2.5 font-sofia text-[13px] font-medium tracking-wide text-white transition-colors duration-200 hover:bg-nc-accent"
          >
            {t.acceptAll}
          </button>
          <button
            onClick={() => accept('essential')}
            className="flex-1 rounded-full border border-nc-border px-5 py-2.5 font-sofia text-[13px] font-medium tracking-wide text-nc-text transition-colors duration-200 hover:border-nc-text"
          >
            {t.settings}
          </button>
          <button
            onClick={() => accept('essential')}
            className="shrink-0 font-sofia text-[12px] text-nc-muted-mid hover:text-nc-text transition-colors duration-200 whitespace-nowrap"
          >
            {t.essentialOnly}
          </button>
        </div>

      </div>
    </div>
  )
}

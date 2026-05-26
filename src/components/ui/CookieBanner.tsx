'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const copy = {
  el: {
    text: 'Χρησιμοποιούμε cookies. Όχι για κατασκοπεία — για να θυμόμαστε τι σου αρέσει και να μετράμε αν το site μας δουλεύει όπως πρέπει.',
    acceptAll: 'Αποδοχή όλων',
    essentialOnly: 'Μόνο τα απαραίτητα',
    settings: 'Ρυθμίσεις',
    settingsHref: '/politiki-cookies',
  },
  en: {
    text: "We use cookies. Not to spy on you — to remember your preferences and check whether our site is actually working.",
    acceptAll: 'Accept all',
    essentialOnly: 'Essentials only',
    settings: 'Settings',
    settingsHref: '/en/cookie-policy',
  },
}

const STORAGE_KEY = 'nouvo_cookie_consent'

export function CookieBanner({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show if no consent stored yet
    if (localStorage.getItem(STORAGE_KEY) === null) {
      setVisible(true)
    }

    // Listen for reset event (from Footer "Cookie Settings" button)
    function onReset() {
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
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-nc-border shadow-[0_-4px_32px_rgba(0,0,0,0.08)]"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Copy */}
        <p className="text-[13px] leading-relaxed text-nc-muted-dark max-w-[640px]">
          <span className="font-medium text-nc-text">🍪 </span>
          {t.text}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => accept('all')}
            className="px-5 py-2 rounded-full bg-nc-text text-white text-[13px] font-medium tracking-wide transition-colors duration-200 hover:bg-nc-accent whitespace-nowrap"
          >
            {t.acceptAll}
          </button>
          <button
            onClick={() => accept('essential')}
            className="text-[13px] text-nc-muted-dark hover:text-nc-text transition-colors duration-200 whitespace-nowrap underline-offset-2 hover:underline"
          >
            {t.essentialOnly}
          </button>
          <Link
            href={t.settingsHref}
            className="text-[13px] text-nc-muted-dark hover:text-nc-text transition-colors duration-200 whitespace-nowrap underline-offset-2 hover:underline"
          >
            {t.settings}
          </Link>
        </div>
      </div>
    </div>
  )
}

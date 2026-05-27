'use client'

/**
 * ConsentManager
 *
 * Syncs the site's cookie consent state (localStorage key "nouvo_cookie_consent")
 * with Google's Consent Mode v2.
 *
 * - On mount: reads current consent and fires the appropriate gtag() update.
 * - Listens for the "nouvo_cookie_reset" custom event dispatched by the
 *   CookieBanner / Footer cookie-settings link, so consent is revoked live.
 * - Listens for the native "storage" event so multi-tab changes are picked up.
 *
 * This component renders nothing — it is a behaviour-only side-effect.
 */

import { useEffect } from 'react'

type ConsentValue = 'granted' | 'denied'

function applyConsent(consentChoice: string | null) {
  if (typeof window === 'undefined' || !('gtag' in window)) return

  const all    = consentChoice === 'all'
  const basic  = consentChoice === 'essential' || all

  const g = window.gtag as (...args: unknown[]) => void

  g('consent', 'update', {
    analytics_storage:      all    ? 'granted' : 'denied' as ConsentValue,
    ad_storage:             all    ? 'granted' : 'denied' as ConsentValue,
    ad_user_data:           all    ? 'granted' : 'denied' as ConsentValue,
    ad_personalization:     all    ? 'granted' : 'denied' as ConsentValue,
    functionality_storage:  basic  ? 'granted' : 'denied' as ConsentValue,
    personalization_storage: all   ? 'granted' : 'denied' as ConsentValue,
    security_storage:       'granted' as ConsentValue,
  })
}

export function ConsentManager() {
  useEffect(() => {
    // Apply consent immediately on mount
    applyConsent(localStorage.getItem('nouvo_cookie_consent'))

    // Re-apply when user resets cookies (Footer "Cookie Settings" link)
    const onReset = () => applyConsent(null)
    window.addEventListener('nouvo_cookie_reset', onReset)

    // Re-apply when localStorage changes in another tab
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'nouvo_cookie_consent') applyConsent(e.newValue)
    }
    window.addEventListener('storage', onStorage)

    // Re-apply when CookieBanner fires the accepted event
    const onAccepted = () => applyConsent(localStorage.getItem('nouvo_cookie_consent'))
    window.addEventListener('nouvo_cookie_accepted', onAccepted)

    return () => {
      window.removeEventListener('nouvo_cookie_reset', onReset)
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('nouvo_cookie_accepted', onAccepted)
    }
  }, [])

  return null
}

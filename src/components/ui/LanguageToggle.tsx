'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

/**
 * Language switcher.
 *
 * Uses window.location.href for maximum reliability — avoids double-prefix
 * bugs that occur when next-intl router.replace() and raw usePathname()
 * disagree on whether the locale segment is already stripped.
 *
 * URL mapping: Greek uses greeklish slugs (/ypiresies), English uses /en/services.
 * For top-level pages we map directly; for deep paths we drop to the
 * other locale's homepage (safe fallback).
 */

// Map of known top-level page equivalents
const PATH_MAP: Record<string, string> = {
  // GR → EN
  '/':                           '/en',
  '/ypiresies':                  '/en/services',
  '/sxetika-me-emas':            '/en/about',
  '/epikoinonia':                '/en/contact',
  '/blog':                       '/en/blog',
  '/case-studies':               '/en/case-studies',
  '/politiki-aporritou':         '/en/privacy',
  '/politiki-cookies':           '/en/cookie-policy',
  // EN → GR (reverse)
  '/en':                         '/',
  '/en/services':                '/ypiresies',
  '/en/about':                   '/sxetika-me-emas',
  '/en/contact':                 '/epikoinonia',
  '/en/blog':                    '/blog',
  '/en/case-studies':            '/case-studies',
  '/en/privacy':                 '/politiki-aporritou',
  '/en/cookie-policy':           '/politiki-cookies',
}

function resolveTarget(pathname: string, targetLocale: 'el' | 'en'): string {
  // Strip trailing slash for comparison (except root)
  const clean = pathname.endsWith('/') && pathname !== '/'
    ? pathname.slice(0, -1)
    : pathname

  // Direct map hit
  if (PATH_MAP[clean]) return PATH_MAP[clean]

  // For any unmapped path: go to the homepage of the target locale
  return targetLocale === 'en' ? '/en' : '/'
}

export function LanguageToggle() {
  const locale = useLocale() as 'el' | 'en'
  const pathname = usePathname() // raw Next.js pathname, always reliable

  function switchLocale() {
    const targetLocale = locale === 'el' ? 'en' : 'el'
    const target = resolveTarget(pathname, targetLocale)
    window.location.href = target
  }

  return (
    <button
      onClick={switchLocale}
      aria-label={locale === 'el' ? 'Switch to English' : 'Αλλαγή σε Ελληνικά'}
      className="px-3 py-1.5 rounded-full border border-nc-border text-xs font-medium tracking-wide uppercase text-nc-muted-dark transition-colors duration-200 hover:border-nc-text hover:text-nc-text"
    >
      {locale === 'el' ? 'EN' : 'GR'}
    </button>
  )
}

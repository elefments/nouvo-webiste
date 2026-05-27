'use client'

import { useEffect, useState } from 'react'

/**
 * Language switcher.
 *
 * Root cause of previous bugs:
 * - usePathname() from next/navigation returns the INTERNAL rewrite path
 *   (e.g. /el/ypiresies) not the browser URL. next-intl rewrites the default
 *   locale internally so [locale] param resolves correctly in App Router.
 *   That rewritten path is never in PATH_MAP, so navigation always fell back.
 * - useLocale() can be stale after client-side navigation.
 *
 * Fix: read window.location.pathname at click time — always the real browser
 * URL, never affected by internal rewrites or stale React context.
 */

// ─── Path map ────────────────────────────────────────────────────────────────

const PATH_MAP: Record<string, string> = {
  // GR → EN
  '/':                                                          '/en',
  '/ypiresies':                                                 '/en/services',
  '/ypiresies/kataskevi-istoselidon':                           '/en/services/websites-digital-presence',
  '/ypiresies/kataskevi-istoselidon/eshop':                     '/en/services/websites-digital-presence/eshop',
  '/ypiresies/kataskevi-istoselidon/etairiki-istoselida':       '/en/services/websites-digital-presence/corporate-website',
  '/ypiresies/kataskevi-istoselidon/landing-page':              '/en/services/websites-digital-presence/landing-page',
  '/ypiresies/kataskevi-istoselidon/portfolio':                 '/en/services/websites-digital-presence/portfolio',
  '/ypiresies/kataskevi-istoselidon/kratisseon':                '/en/services/websites-digital-presence/booking',
  '/ypiresies/kataskevi-istoselidon/redesign':                  '/en/services/websites-digital-presence/redesign',
  '/ypiresies/anazitisi-oratotita':                             '/en/services/search-visibility',
  '/ypiresies/anazitisi-oratotita/seo':                        '/en/services/search-visibility/seo',
  '/ypiresies/anazitisi-oratotita/topiki-seo':                 '/en/services/search-visibility/local-seo',
  '/ypiresies/anazitisi-oratotita/texniki-seo':                '/en/services/search-visibility/technical-seo',
  '/ypiresies/anazitisi-oratotita/aeo':                        '/en/services/search-visibility/aeo',
  '/ypiresies/anazitisi-oratotita/geo':                        '/en/services/search-visibility/geo',
  '/ypiresies/anazitisi-oratotita/heo':                        '/en/services/search-visibility/heo',
  '/ypiresies/marketing-psifiaki-anaptyxi':                    '/en/services/marketing-digital-growth',
  '/ypiresies/psifiakos-metasximatismos-ai':                   '/en/services/digital-transformation-ai',
  '/ypiresies/it-support-sintirisi':                           '/en/services/it-support-maintenance',
  '/sxetika-me-emas':                                          '/en/about',
  '/epikoinonia':                                              '/en/contact',
  '/blog':                                                     '/en/blog',
  '/case-studies':                                             '/en/case-studies',
  '/politiki-aporritou':                                       '/en/privacy',
  '/politiki-cookies':                                         '/en/cookie-policy',

  // EN → GR (reverse)
  '/en':                                                       '/',
  '/en/services':                                              '/ypiresies',
  '/en/services/websites-digital-presence':                    '/ypiresies/kataskevi-istoselidon',
  '/en/services/websites-digital-presence/eshop':             '/ypiresies/kataskevi-istoselidon/eshop',
  '/en/services/websites-digital-presence/corporate-website': '/ypiresies/kataskevi-istoselidon/etairiki-istoselida',
  '/en/services/websites-digital-presence/landing-page':      '/ypiresies/kataskevi-istoselidon/landing-page',
  '/en/services/websites-digital-presence/portfolio':         '/ypiresies/kataskevi-istoselidon/portfolio',
  '/en/services/websites-digital-presence/booking':           '/ypiresies/kataskevi-istoselidon/kratisseon',
  '/en/services/websites-digital-presence/redesign':          '/ypiresies/kataskevi-istoselidon/redesign',
  '/en/services/search-visibility':                           '/ypiresies/anazitisi-oratotita',
  '/en/services/search-visibility/seo':                       '/ypiresies/anazitisi-oratotita/seo',
  '/en/services/search-visibility/local-seo':                 '/ypiresies/anazitisi-oratotita/topiki-seo',
  '/en/services/search-visibility/technical-seo':             '/ypiresies/anazitisi-oratotita/texniki-seo',
  '/en/services/search-visibility/aeo':                       '/ypiresies/anazitisi-oratotita/aeo',
  '/en/services/search-visibility/geo':                       '/ypiresies/anazitisi-oratotita/geo',
  '/en/services/search-visibility/heo':                       '/ypiresies/anazitisi-oratotita/heo',
  '/en/services/marketing-digital-growth':                    '/ypiresies/marketing-psifiaki-anaptyxi',
  '/en/services/digital-transformation-ai':                   '/ypiresies/psifiakos-metasximatismos-ai',
  '/en/services/it-support-maintenance':                      '/ypiresies/it-support-sintirisi',
  '/en/about':                                                '/sxetika-me-emas',
  '/en/contact':                                              '/epikoinonia',
  '/en/blog':                                                 '/blog',
  '/en/case-studies':                                         '/case-studies',
  '/en/privacy':                                              '/politiki-aporritou',
  '/en/cookie-policy':                                        '/politiki-cookies',
}

function resolveTarget(browserPath: string): string {
  // Strip trailing slash for lookup (but keep root '/')
  const clean = browserPath.endsWith('/') && browserPath !== '/'
    ? browserPath.slice(0, -1)
    : browserPath

  if (PATH_MAP[clean]) return PATH_MAP[clean]

  // Unmapped path: infer target from locale prefix
  const isEn = clean === '/en' || clean.startsWith('/en/')
  return isEn ? '/' : '/en'
}

// ─── Component ───────────────────────────────────────────────────────────────

export function LanguageToggle() {
  // Derive display locale from actual browser URL after mount.
  // Falls back to 'el' for SSR (no window available).
  const [isEnglish, setIsEnglish] = useState(false)

  useEffect(() => {
    const path = window.location.pathname
    setIsEnglish(path === '/en' || path.startsWith('/en/'))
  }, [])

  function switchLocale() {
    const path = window.location.pathname
    const targetIsEnglish = !(path === '/en' || path.startsWith('/en/'))
    const targetLocale = targetIsEnglish ? 'en' : 'el'

    // Update next-intl's NEXT_LOCALE cookie BEFORE navigating.
    // Without this, the middleware reads the old cookie and redirects
    // the user back to the previous locale (e.g. Greek URL → redirect to /en/…).
    document.cookie = `NEXT_LOCALE=${targetLocale}; Path=/; SameSite=lax`

    window.location.href = resolveTarget(path)
  }

  return (
    <button
      onClick={switchLocale}
      aria-label={isEnglish ? 'Αλλαγή σε Ελληνικά' : 'Switch to English'}
      className="px-3 py-1.5 rounded-full border border-nc-border text-xs font-medium tracking-wide uppercase text-nc-muted-dark transition-colors duration-200 hover:border-nc-text hover:text-nc-text"
    >
      {isEnglish ? 'GR' : 'EN'}
    </button>
  )
}

import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['el', 'en'],
  defaultLocale: 'el',
  localePrefix: {
    mode: 'as-needed',
  },
  // Disable Accept-Language header detection to avoid redirect overhead.
  // Locale is controlled by the NEXT_LOCALE cookie (set by LanguageToggle)
  // and by explicit /en/ prefix in the URL.
  localeDetection: false,
})

'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

export function LanguageToggle() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  function switchLocale() {
    const nextLocale = locale === 'el' ? 'en' : 'el'
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <button
      onClick={switchLocale}
      className="px-3 py-1.5 rounded-full border border-nc-border text-xs font-medium tracking-wide uppercase text-nc-muted-dark transition-colors duration-200 hover:border-nc-muted-light"
    >
      {locale === 'el' ? 'EN' : 'GR'}
    </button>
  )
}

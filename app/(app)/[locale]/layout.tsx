import '../../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { objektiv, snaga, sofia, marlet } from '@/lib/fonts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CookieBanner } from '@/components/ui/CookieBanner'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd'
import { MotionProvider } from '@/components/providers/MotionProvider'
import { BookCallProvider } from '@/components/providers/BookCallProvider'
import { BookCallModal } from '@/components/ui/BookCallModal'
import { Analytics } from '@/components/analytics/Analytics'

// Preload hint for Sofia Pro Light — the body font used by the LCP element.
// With font-display:optional the browser only uses it within a ~100ms window;
// preloading gets it into the HTTP cache so subsequent page-loads show the real
// font immediately.  The filename includes a content hash so it's safe to cache
// forever (next build generates a new hash when the font changes).
const SOFIA_PRO_LIGHT_HREF = '/_next/static/media/Sofia_Pro_Light-s.p.04uhdcoi8tk-e.woff2'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as 'el' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${objektiv.variable} ${snaga.variable} ${sofia.variable} ${marlet.variable}`}>
      <head>
        {/* Static theme-color — keeps Chrome toolbar white without triggering
            Critical-CH: Sec-CH-Prefers-Color-Scheme (which forces a second
            page request and adds ~610 ms to LCP in Lighthouse simulations). */}
        <meta name="theme-color" content="#FFFFFF" />

        {/* Google Search Console site verification.
            Set NEXT_PUBLIC_GSC_VERIFICATION in Vercel env vars.
            Value: the content attribute of the <meta name="google-site-verification"> tag
            shown in GSC → Settings → Ownership verification → HTML tag method. */}
        {process.env.NEXT_PUBLIC_GSC_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GSC_VERIFICATION} />
        )}
      </head>
      <body>
        <OrganizationJsonLd />
        <WebSiteJsonLd locale={locale as 'el' | 'en'} />
        <NextIntlClientProvider messages={messages}>
          <BookCallProvider>
            <MotionProvider>
              <Header />
              <main className="pt-[72px]">{children}</main>
              <Footer locale={locale as 'el' | 'en'} />
              <CookieBanner locale={locale as 'el' | 'en'} />
              <BookCallModal locale={locale as 'el' | 'en'} />
            </MotionProvider>
          </BookCallProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}

import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { snaga, sofia, marlet } from '@/lib/fonts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

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
    <html lang={locale} className={`${snaga.variable} ${sofia.variable} ${marlet.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="pt-[72px]">{children}</main>
          <Footer locale={locale as 'el' | 'en'} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

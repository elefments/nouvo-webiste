import type { Metadata, Viewport } from 'next'

// NOTE: Do NOT put themeColor here.
// When themeColor is set via the Viewport API, Next.js automatically adds
// "Accept-CH: Sec-CH-Prefers-Color-Scheme" and "Critical-CH: ..." response
// headers. Chrome re-issues the full page request with the client hint attached,
// which Lighthouse measures as a ~600 ms redirect penalty.
// Instead, <meta name="theme-color"> is injected in the locale layout below.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Nouvo | Beyond Digital. Pure Strategy.',
    template: '%s | Nouvo',
  },
  description:
    'Boutique digital agency. Websites, eshop, SEO, AI and marketing with architectural thinking and measurable value.',
  metadataBase: new URL('https://nouvo.agency'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'el_GR',
    alternateLocale: 'en_US',
    siteName: 'Nouvo',
    title: 'Nouvo | Beyond Digital. Pure Strategy.',
    description:
      'Boutique digital agency. Websites, eshop, SEO, AI and marketing with architectural thinking and measurable value.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nouvo',
    description: 'Beyond Digital. Pure Strategy.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

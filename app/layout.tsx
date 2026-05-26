import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Nouvo Collective | Beyond Digital. Pure Strategy.',
    template: '%s | Nouvo Collective',
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
    siteName: 'Nouvo Collective',
    title: 'Nouvo Collective | Beyond Digital. Pure Strategy.',
    description:
      'Boutique digital agency. Websites, eshop, SEO, AI and marketing with architectural thinking and measurable value.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nouvo Collective',
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

'use client'

/**
 * PageView
 *
 * Drop into any page component to push enriched page metadata to the dataLayer.
 * GTM reads these as custom dimensions on every page_view hit.
 *
 * Usage (Server Component page.tsx):
 *   import { PageView } from '@/components/analytics/PageView'
 *   // Inside JSX:
 *   <PageView pageType="service_category" locale={loc} serviceCategory="search" />
 *
 * Renders nothing — behaviour only.
 */

import { useEffect } from 'react'
import { dl, type PageType, type Locale, type ServiceCategory } from '@/lib/dataLayer'

interface PageViewProps {
  pageType: PageType
  locale: Locale
  pageTitle?: string
  serviceCategory?: ServiceCategory
  serviceSlug?: string
}

export function PageView({ pageType, locale, pageTitle, serviceCategory, serviceSlug }: PageViewProps) {
  useEffect(() => {
    dl.pageView({ pageType, locale, pageTitle, serviceCategory, serviceSlug })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  // fire once on mount (each Next.js page is a fresh mount)

  return null
}

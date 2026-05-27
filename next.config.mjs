import { withPayload } from '@payloadcms/next/withPayload'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'nouvo.agency' },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },
  experimental: {
    // Tree-shake framer-motion and other large packages more aggressively.
    optimizePackageImports: ['framer-motion'],
  },
}

// Payload CMS adds `Critical-CH: Sec-CH-Prefers-Color-Scheme` to all routes
// via its withPayload wrapper.  This header tells Chrome to re-request the page
// with a color-scheme client hint — Lighthouse treats it as a ~610 ms redirect
// penalty on the LCP critical path.  Payload needs it for the /admin dark-mode
// toggle, so we keep it there and strip it everywhere else.
const baseConfig = withPayload(withNextIntl(nextConfig))

const originalHeaders = baseConfig.headers
baseConfig.headers = async () => {
  const groups = originalHeaders ? await originalHeaders() : []
  return groups.map((group) => {
    const isAdminRoute =
      group.source?.startsWith('/admin') || group.source?.startsWith('/(payload)')
    if (isAdminRoute) return group
    return {
      ...group,
      headers: group.headers.filter((h) => h.key !== 'Critical-CH'),
    }
  })
}

export default baseConfig

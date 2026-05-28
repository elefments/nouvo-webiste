import createMiddleware from 'next-intl/middleware'
import { routing } from './src/i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except:
  // - static files (public/): /logos/, /fonts/, /favicon, /robots.txt, /sitemap.xml, /llms.txt, etc.
  // - Next.js internals: /_next/
  // - Payload admin: /admin, /(payload)
  // - API routes: /api/
  matcher: [
    '/((?!_next|api|admin|logos|fonts|images|icons|favicon|robots|sitemap|llms|manifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json|woff|woff2|ttf|otf)).*)',
  ],
}

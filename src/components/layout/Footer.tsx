'use client'

import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'

const footerData = {
  el: {
    columns: [
      {
        title: 'Υπηρεσίες',
        links: [
          { label: 'Ιστοσελίδες & Ψηφιακή Παρουσία', href: '/ypiresies/kataskevi-istoselidon' },
          { label: 'Αναζήτηση & Ορατότητα', href: '/ypiresies/anazitisi-oratotita' },
          { label: 'Marketing & Ψηφιακή Ανάπτυξη', href: '/ypiresies/marketing-psifiaki-anaptyxi' },
          { label: 'Ψηφιακός Μετασχηματισμός & AI', href: '/ypiresies/psifiakos-metasximatismos-ai' },
          { label: 'IT Support & Συντήρηση', href: '/ypiresies/it-support-sintirisi' },
        ],
      },
      {
        title: 'Nouvo',
        links: [
          { label: 'Σχετικά με εμάς', href: '/sxetika-me-emas' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Blog', href: '/blog' },
          { label: 'Επικοινωνία', href: '/epikoinonia' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Πολιτική Απορρήτου', href: '/politiki-aporritou' },
          { label: 'Πολιτική Cookies', href: '/politiki-cookies' },
          { label: 'Cookie Settings', href: '#', isCookieReset: true },
        ],
      },
    ],
  },
  en: {
    columns: [
      {
        title: 'Services',
        links: [
          { label: 'Websites & Digital Presence', href: '/en/services/websites-digital-presence' },
          { label: 'Search & Visibility', href: '/en/services/search-visibility' },
          { label: 'Marketing & Digital Growth', href: '/en/services/marketing-digital-growth' },
          { label: 'Digital Transformation & AI', href: '/en/services/digital-transformation-ai' },
          { label: 'IT Support & Maintenance', href: '/en/services/it-support-maintenance' },
        ],
      },
      {
        title: 'Nouvo',
        links: [
          { label: 'About', href: '/en/about' },
          { label: 'Case Studies', href: '/en/case-studies' },
          { label: 'Blog', href: '/en/blog' },
          { label: 'Contact', href: '/en/contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/en/privacy-policy' },
          { label: 'Cookie Policy', href: '/en/cookie-policy' },
          { label: 'Cookie Settings', href: '#', isCookieReset: true },
        ],
      },
    ],
  },
}

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case 'instagram':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    case 'facebook':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      )
    default:
      return null
  }
}

export function Footer({ locale }: { locale: 'el' | 'en' }) {
  const data = footerData[locale]
  const year = new Date().getFullYear()

  function handleCookieReset(e: React.MouseEvent) {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      localStorage.removeItem('nouvo_cookie_consent')
      window.dispatchEvent(new Event('nouvo_cookie_reset'))
    }
  }

  return (
    <footer className="border-t border-nc-border">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href={locale === 'el' ? '/' : '/en'} className="font-snaga text-xl font-bold tracking-tight text-nc-text">
              Nouvo
            </Link>
            <p className="font-marlet text-sm italic text-nc-muted-mid">
              Beyond Digital. Pure Strategy.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {['instagram', 'linkedin', 'facebook'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-nc-muted-mid transition-colors duration-200 hover:text-nc-text"
                  aria-label={platform}
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {data.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-nc-muted-mid">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {'isCookieReset' in link && link.isCookieReset ? (
                      <button
                        onClick={handleCookieReset}
                        className="text-sm text-nc-muted-dark transition-colors duration-200 hover:text-nc-text text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-nc-muted-dark transition-colors duration-200 hover:text-nc-text"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-nc-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-nc-muted-mid">
            &copy; {year} Nouvo. All rights reserved.
          </p>
          <Link
            href={locale === 'el' ? '/epikoinonia' : '/en/contact'}
            className="flex items-center gap-2 text-sm font-medium text-nc-text transition-colors duration-200 hover:text-nc-accent"
          >
            <span>{locale === 'el' ? 'Ξεκινήστε τη συνεργασία' : 'Start a project'}</span>
            <Arrow size={14} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

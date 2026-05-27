'use client'

import Link from 'next/link'

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

const footerLinks = {
  el: {
    websites: {
      title: 'Ιστοσελίδες',
      links: [
        { label: 'Κατασκευή Ιστοσελίδων', href: '/ypiresies/kataskevi-istoselidon' },
        { label: 'E-shop', href: '/ypiresies/kataskevi-istoselidon/eshop' },
        { label: 'Εταιρική Ιστοσελίδα', href: '/ypiresies/kataskevi-istoselidon/etairiki-istoselida' },
        { label: 'Landing Page', href: '/ypiresies/kataskevi-istoselidon/landing-page' },
        { label: 'Portfolio Website', href: '/ypiresies/kataskevi-istoselidon/portfolio-website' },
        { label: 'Ιστοσελίδα Κράτησης', href: '/ypiresies/kataskevi-istoselidon/istoselida-kratiseon' },
        { label: 'Website Redesign', href: '/ypiresies/kataskevi-istoselidon/website-redesign' },
      ],
    },
    search: {
      title: 'Αναζήτηση',
      links: [
        { label: 'SEO & Ορατότητα', href: '/ypiresies/anazitisi-oratotita' },
        { label: 'SEO', href: '/ypiresies/anazitisi-oratotita/seo-search-engine-optimization' },
        { label: 'Local SEO', href: '/ypiresies/anazitisi-oratotita/local-seo' },
        { label: 'Technical SEO', href: '/ypiresies/anazitisi-oratotita/technical-seo' },
        { label: 'AEO', href: '/ypiresies/anazitisi-oratotita/aeo-answer-engine-optimization' },
        { label: 'GEO', href: '/ypiresies/anazitisi-oratotita/geo-generative-engine-optimization' },
        { label: 'HEO', href: '/ypiresies/anazitisi-oratotita/heo-hybrid-engine-optimization' },
      ],
    },
    growth: {
      title: 'Marketing & AI & IT',
      links: [
        { label: 'Google Ads', href: '/ypiresies/marketing-psifiaki-anaptyxi/google-ads' },
        { label: 'Meta Ads', href: '/ypiresies/marketing-psifiaki-anaptyxi/meta-ads' },
        { label: 'TikTok Ads', href: '/ypiresies/marketing-psifiaki-anaptyxi/tiktok-ads' },
        { label: 'Email Marketing', href: '/ypiresies/marketing-psifiaki-anaptyxi/email-marketing' },
        { label: 'Στρατηγική Περιεχομένου', href: '/ypiresies/marketing-psifiaki-anaptyxi/stratigiki-periehomenou' },
        { label: 'AI & Αυτοματισμός', href: '/ypiresies/psifiakos-metasximatismos-ai' },
        { label: 'AI Chatbots', href: '/ypiresies/psifiakos-metasximatismos-ai/ai-chatbots' },
        { label: 'IT Support', href: '/ypiresies/it-support-sintirisi' },
        { label: 'Συντήρηση Ιστοσελίδας', href: '/ypiresies/it-support-sintirisi/sintirisi-istoselidon' },
        { label: 'Cloud & Hosting', href: '/ypiresies/it-support-sintirisi/cloud-hosting' },
      ],
    },
    company: {
      title: 'Εταιρία',
      links: [
        { label: 'Σχετικά με εμάς', href: '/sxetika-me-emas' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog', href: '/blog' },
        { label: 'Επικοινωνία', href: '/epikoinonia' },
        { label: 'Ιστοσελίδα για Δικηγόρους', href: '/ypiresies/kataskevi-istoselidon/istoselida-gia-dikigorous' },
        { label: 'Ιστοσελίδα για Λογιστές', href: '/ypiresies/kataskevi-istoselidon/istoselida-gia-logistes' },
        { label: 'Ιστοσελίδα για Γιατρούς', href: '/ypiresies/kataskevi-istoselidon/istoselida-gia-giatrous' },
        { label: 'Ιστοσελίδα για Γυμναστήρια', href: '/ypiresies/kataskevi-istoselidon/istoselida-gia-gimnastiria' },
        { label: 'Meta Ads για E-shop', href: '/ypiresies/marketing-psifiaki-anaptyxi/meta-ads-eshop' },
        { label: 'TikTok Ads για Μικρές Επιχ.', href: '/ypiresies/marketing-psifiaki-anaptyxi/tiktok-ads-mikres-epixeiriseis' },
        { label: 'Local SEO για Ιατρεία', href: '/ypiresies/anazitisi-oratotita/local-seo-iatreia' },
        { label: 'IT Support Μικρές Επιχ.', href: '/ypiresies/it-support-sintirisi/it-support-mikres-epixeiriseis' },
      ],
    },
  },
  en: {
    websites: {
      title: 'Websites',
      links: [
        { label: 'Website Development', href: '/en/services/websites-digital-presence' },
        { label: 'E-shop', href: '/en/services/websites-digital-presence/eshop' },
        { label: 'Corporate Website', href: '/en/services/websites-digital-presence/corporate-website' },
        { label: 'Landing Page', href: '/en/services/websites-digital-presence/landing-page' },
        { label: 'Portfolio Website', href: '/en/services/websites-digital-presence/portfolio-website' },
        { label: 'Booking Website', href: '/en/services/websites-digital-presence/booking-website' },
        { label: 'Website Redesign', href: '/en/services/websites-digital-presence/website-redesign' },
      ],
    },
    search: {
      title: 'Search',
      links: [
        { label: 'Search & Visibility', href: '/en/services/search-visibility' },
        { label: 'SEO', href: '/en/services/search-visibility/seo-search-engine-optimization' },
        { label: 'Local SEO', href: '/en/services/search-visibility/local-seo' },
        { label: 'Technical SEO', href: '/en/services/search-visibility/technical-seo' },
        { label: 'AEO', href: '/en/services/search-visibility/aeo-answer-engine-optimization' },
        { label: 'GEO', href: '/en/services/search-visibility/geo-generative-engine-optimization' },
        { label: 'HEO', href: '/en/services/search-visibility/heo-hybrid-engine-optimization' },
      ],
    },
    growth: {
      title: 'Marketing & AI & IT',
      links: [
        { label: 'Google Ads', href: '/en/services/marketing-digital-growth/google-ads' },
        { label: 'Meta Ads', href: '/en/services/marketing-digital-growth/meta-ads' },
        { label: 'TikTok Ads', href: '/en/services/marketing-digital-growth/tiktok-ads' },
        { label: 'Email Marketing', href: '/en/services/marketing-digital-growth/email-marketing' },
        { label: 'Content Strategy', href: '/en/services/marketing-digital-growth/content-strategy' },
        { label: 'AI & Automation', href: '/en/services/digital-transformation-ai' },
        { label: 'AI Chatbots', href: '/en/services/digital-transformation-ai/ai-chatbots' },
        { label: 'IT Support', href: '/en/services/it-support-maintenance' },
        { label: 'Website Maintenance', href: '/en/services/it-support-maintenance/website-maintenance' },
        { label: 'Cloud & Hosting', href: '/en/services/it-support-maintenance/cloud-hosting' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { label: 'About', href: '/en/about' },
        { label: 'Case Studies', href: '/en/case-studies' },
        { label: 'Blog', href: '/en/blog' },
        { label: 'Contact', href: '/en/contact' },
        { label: 'Website for Lawyers', href: '/en/services/websites-digital-presence/website-for-lawyers' },
        { label: 'Website for Accountants', href: '/en/services/websites-digital-presence/website-for-accountants' },
        { label: 'Website for Doctors', href: '/en/services/websites-digital-presence/website-for-doctors' },
        { label: 'Website for Gyms', href: '/en/services/websites-digital-presence/website-for-gyms' },
        { label: 'Meta Ads for E-shops', href: '/en/services/marketing-digital-growth/meta-ads-eshop' },
        { label: 'TikTok Ads Small Business', href: '/en/services/marketing-digital-growth/tiktok-ads-small-business' },
        { label: 'Local SEO for Medical', href: '/en/services/search-visibility/local-seo-medical' },
        { label: 'IT Support Small Business', href: '/en/services/it-support-maintenance/it-support-small-business' },
      ],
    },
  },
}

export function Footer({ locale }: { locale: 'el' | 'en' }) {
  const data = footerLinks[locale]
  const year = new Date().getFullYear()
  const isEl = locale === 'el'

  const legalLinks = isEl
    ? [
        { label: 'Πολιτική Απορρήτου', href: '/politiki-aporritou' },
        { label: 'Πολιτική Cookies', href: '/politiki-cookies' },
      ]
    : [
        { label: 'Privacy Policy', href: '/en/privacy-policy' },
        { label: 'Cookie Policy', href: '/en/cookie-policy' },
      ]

  function handleCookieReset(e: React.MouseEvent) {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      localStorage.removeItem('nouvo_cookie_consent')
      window.dispatchEvent(new Event('nouvo_cookie_reset'))
    }
  }

  return (
    <footer className="border-t border-nc-border bg-white">
      <div className="mx-auto max-w-[1280px] px-6 pt-16 pb-8">

        {/* Brand row */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <Link href={isEl ? '/' : '/en'} className="font-snaga text-2xl font-bold tracking-tight text-nc-text">
              Nouvo
            </Link>
            <p className="mt-1 font-marlet text-sm italic text-nc-muted-mid">
              Beyond Digital. Pure Strategy.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {['instagram', 'linkedin', 'facebook'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-nc-muted-light transition-colors duration-200 hover:text-nc-text"
                aria-label={platform}
              >
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>
        </div>

        {/* Columns grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Websites */}
          <FooterColumn title={data.websites.title} links={data.websites.links} />

          {/* Search */}
          <FooterColumn title={data.search.title} links={data.search.links} />

          {/* Marketing + AI + IT */}
          <FooterColumn title={data.growth.title} links={data.growth.links} />

          {/* Company + Longtail */}
          <FooterColumn title={data.company.title} links={data.company.links} />
        </div>

        {/* Bottom bar — legal + copyright */}
        <div className="mt-12 pt-6 border-t border-nc-border flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap">
          <p className="text-xs text-nc-muted-light">
            &copy; {year} Nouvo. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-nc-muted-light hover:text-nc-muted-mid transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={handleCookieReset}
              className="text-xs text-nc-muted-light hover:text-nc-muted-mid transition-colors duration-200 cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-nc-muted-light mb-1">
        {title}
      </p>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-[13px] text-nc-muted-dark leading-snug transition-colors duration-200 hover:text-nc-text"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

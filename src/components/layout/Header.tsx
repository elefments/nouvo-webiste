'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { Arrow } from '@/components/ui/Arrow'
import { LanguageToggle } from '@/components/ui/LanguageToggle'
import { BookCallButton } from '@/components/ui/BookCallButton'

const serviceLinks = {
  el: [
    { label: 'Ιστοσελίδες & Ψηφιακή Παρουσία', href: '/ypiresies/kataskevi-istoselidon' },
    { label: 'Αναζήτηση & Ορατότητα', href: '/ypiresies/anazitisi-oratotita' },
    { label: 'Marketing & Ψηφιακή Ανάπτυξη', href: '/ypiresies/marketing-psifiaki-anaptyxi' },
    { label: 'Ψηφιακός Μετασχηματισμός & AI', href: '/ypiresies/psifiakos-metasximatismos-ai' },
    { label: 'IT Support & Συντήρηση', href: '/ypiresies/it-support-sintirisi' },
  ],
  en: [
    { label: 'Websites & Digital Presence', href: '/en/services/websites-digital-presence' },
    { label: 'Search & Visibility', href: '/en/services/search-visibility' },
    { label: 'Marketing & Digital Growth', href: '/en/services/marketing-digital-growth' },
    { label: 'Digital Transformation & AI', href: '/en/services/digital-transformation-ai' },
    { label: 'IT Support & Maintenance', href: '/en/services/it-support-maintenance' },
  ],
}

const navLinks = {
  el: [
    { label: 'Σχετικά', href: '/sxetika-me-emas' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Επικοινωνία', href: '/epikoinonia' },
  ],
  en: [
    { label: 'About', href: '/en/about' },
    { label: 'Case Studies', href: '/en/case-studies' },
    { label: 'Blog', href: '/en/blog' },
    { label: 'Contact', href: '/en/contact' },
  ],
}

export function Header() {
  const locale = useLocale() as 'el' | 'en'
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const ctaLabel = locale === 'el' ? 'Επικοινωνία' : 'Contact'
  const ctaHref = locale === 'el' ? '/epikoinonia' : '/en/contact'
  const servicesLabel = locale === 'el' ? 'Υπηρεσίες' : 'Services'
  const bookCallLabel = locale === 'el' ? 'Κλείστε κλήση' : 'Book a call'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/60 backdrop-blur-[20px] backdrop-saturate-[180%] border-b border-white/75 shadow-[0_2px_24px_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-[1280px] flex items-center justify-between px-6 py-4">
        <Link href={locale === 'el' ? '/' : '/en'} className="font-snaga text-xl font-bold tracking-tight text-nc-text">
          Nouvo
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-[15px] text-nc-text transition-colors duration-200 hover:text-nc-accent">
              {servicesLabel}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 pt-3">
                <div className="w-[320px] rounded-2xl bg-white/85 backdrop-blur-[24px] backdrop-saturate-[200%] border border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06)] p-2">
                  {serviceLinks[locale].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-nc-text transition-colors duration-200 hover:bg-nc-surface hover:text-nc-accent"
                    >
                      <span>{link.label}</span>
                      <Arrow size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-nc-accent" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks[locale].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-nc-text transition-colors duration-200 hover:text-nc-accent"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-3 ml-2">
            <LanguageToggle />
            <BookCallButton
              label={bookCallLabel}
              variant="ghost"
            />
            <Link
              href={ctaHref}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-nc-text text-white text-sm font-medium tracking-wide transition-all duration-200 hover:bg-nc-accent"
            >
              <span>{ctaLabel}</span>
              <Arrow size={16} />
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-[1.5px] bg-nc-text transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-nc-text transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-nc-text transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-[20px] border-t border-nc-border">
          <div className="mx-auto max-w-[1280px] px-6 py-6 flex flex-col gap-4">
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-nc-muted-mid">{servicesLabel}</p>
            {serviceLinks[locale].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-nc-text py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-nc-border my-2" />
            {navLinks[locale].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-nc-text py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 mt-4">
              <LanguageToggle />
              <Link
                href={ctaHref}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-nc-text text-white text-sm font-medium tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                <span>{ctaLabel}</span>
                <Arrow size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

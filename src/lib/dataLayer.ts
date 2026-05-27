/**
 * dataLayer.ts — Type-safe GTM dataLayer utilities
 *
 * Usage:
 *   import { dl } from '@/lib/dataLayer'
 *   dl.pageView({ pageType: 'homepage', locale: 'el' })
 *   dl.generateLead({ source: 'contact_form', service: 'SEO' })
 *
 * All functions are no-ops if dataLayer is not available (SSR / dev without GTM).
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type Locale = 'el' | 'en'

export type PageType =
  | 'homepage'
  | 'services_overview'
  | 'service_category'
  | 'service_detail'
  | 'case_studies'
  | 'case_study'
  | 'blog'
  | 'blog_post'
  | 'about'
  | 'contact'
  | 'legal'
  | 'longtail'

export type ServiceCategory =
  | 'websites'
  | 'search'
  | 'marketing'
  | 'ai_automation'
  | 'it_support'

export type LeadSource = 'contact_form' | 'book_call_modal'

export type ConsentChoice = 'all' | 'essential' | 'denied'

// ─── DataLayer push ───────────────────────────────────────────────────────────

function push(payload: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

// ─── Events ───────────────────────────────────────────────────────────────────

export const dl = {
  /**
   * Enriched page view — push once per route change.
   * GTM reads these as custom dimensions on the GA4 "page_view" tag.
   */
  pageView(params: {
    pageType: PageType
    locale: Locale
    pageTitle?: string
    serviceCategory?: ServiceCategory
    serviceSlug?: string
  }) {
    push({
      event: 'nouvo_page_view',
      page_type:        params.pageType,
      locale:           params.locale,
      page_title:       params.pageTitle ?? document.title,
      service_category: params.serviceCategory ?? null,
      service_slug:     params.serviceSlug ?? null,
    })
  },

  /**
   * Lead generation — contact form or book-a-call submission.
   * Maps to GA4 recommended event `generate_lead`.
   */
  generateLead(params: {
    source: LeadSource
    service?: string
    locale?: Locale
  }) {
    push({
      event:          'generate_lead',
      lead_source:    params.source,
      lead_service:   params.service ?? null,
      locale:         params.locale ?? null,
    })
  },

  /**
   * Book-a-call modal opened (engagement signal, not a conversion).
   */
  bookCallOpen(params: { trigger?: string; locale?: Locale } = {}) {
    push({
      event:          'book_call_open',
      trigger:        params.trigger ?? 'unknown',
      locale:         params.locale ?? null,
    })
  },

  /**
   * CTA click — any primary or secondary call-to-action button.
   */
  ctaClick(params: {
    label: string
    destination?: string
    section?: string
    locale?: Locale
  }) {
    push({
      event:           'cta_click',
      cta_label:       params.label,
      cta_destination: params.destination ?? null,
      cta_section:     params.section ?? null,
      locale:          params.locale ?? null,
    })
  },

  /**
   * Cookie consent choice — fires when user makes a decision.
   */
  cookieConsent(choice: ConsentChoice) {
    push({
      event:          'cookie_consent',
      consent_choice: choice,
    })
  },

  /**
   * Generic custom event — escape hatch for one-offs.
   */
  custom(eventName: string, params: Record<string, unknown> = {}) {
    push({ event: eventName, ...params })
  },
}

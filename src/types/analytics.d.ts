// Global type declarations for third-party analytics scripts

interface Window {
  // Google gtag (injected by GTM or direct GA4 snippet)
  gtag: (...args: unknown[]) => void

  // Microsoft Clarity
  clarity: ((...args: unknown[]) => void) & {
    q?: unknown[]
  }

  // GTM dataLayer
  dataLayer: Record<string, unknown>[]
}

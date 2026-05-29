'use client'

/**
 * UTM Attribution Persistence
 *
 * Strategy: first-touch attribution with a 30-day window.
 *
 * Rules:
 * - If UTMs are in the URL → save them to localStorage (overwrite only if new paid source)
 * - If no UTMs in URL → read from localStorage if within the 30-day window
 * - Closing and reopening the browser within 30 days = UTMs are kept
 * - After 30 days = UTMs expire, next visit starts fresh
 *
 * Storage key: "nouvo_utm" — JSON object with params + timestamp
 */

const STORAGE_KEY = 'nouvo_utm'
const ATTRIBUTION_WINDOW_MS = 30 * 24 * 60 * 60 * 1000 // 30 days

export interface UtmParams {
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmContent?: string
  utmTerm?: string
}

interface StoredUtm extends UtmParams {
  timestamp: number
}

// ── Read / write helpers ──────────────────────────────────────────────────────

function readStored(): StoredUtm | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed: StoredUtm = JSON.parse(raw)
    // Expire after the attribution window
    if (Date.now() - parsed.timestamp > ATTRIBUTION_WINDOW_MS) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return parsed
  } catch {
    return null
  }
}

function writeStored(params: UtmParams): void {
  if (typeof window === 'undefined') return
  try {
    const stored: StoredUtm = {
      ...params,
      timestamp: Date.now(),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
  } catch {
    // localStorage might be blocked (private browsing, quota exceeded)
  }
}

// ── Core: capture UTMs from URL ───────────────────────────────────────────────

/**
 * Call this on every page load (in a useEffect or layout).
 * - If UTMs are present in the URL → save them (always overwrite — new campaign)
 * - If UTMs are NOT in the URL → do nothing (keep existing stored UTMs)
 */
export function captureUtmFromUrl(): void {
  if (typeof window === 'undefined') return

  const p = new URLSearchParams(window.location.search)

  const fromUrl: UtmParams = {
    utmSource:   p.get('utm_source')   || undefined,
    utmMedium:   p.get('utm_medium')   || undefined,
    utmCampaign: p.get('utm_campaign') || undefined,
    utmContent:  p.get('utm_content')  || undefined,
    utmTerm:     p.get('utm_term')     || undefined,
  }

  // Only save if there's at least one UTM param in the URL
  const hasUtms = Object.values(fromUrl).some(Boolean)
  if (hasUtms) {
    writeStored(fromUrl)
  }
}

// ── Core: get current UTMs ────────────────────────────────────────────────────

/**
 * Returns the current UTM params for this user, with this priority:
 * 1. URL params (user just arrived via a campaign link)
 * 2. localStorage (user arrived via campaign within the last 30 days)
 * 3. Empty object (no attribution data)
 */
export function getUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {}

  const p = new URLSearchParams(window.location.search)

  const fromUrl: UtmParams = {
    utmSource:   p.get('utm_source')   || undefined,
    utmMedium:   p.get('utm_medium')   || undefined,
    utmCampaign: p.get('utm_campaign') || undefined,
    utmContent:  p.get('utm_content')  || undefined,
    utmTerm:     p.get('utm_term')     || undefined,
  }

  const hasUrlUtms = Object.values(fromUrl).some(Boolean)
  if (hasUrlUtms) return fromUrl

  // Fall back to stored attribution
  const stored = readStored()
  if (!stored) return {}

  const { timestamp: _ts, ...storedParams } = stored
  return storedParams
}

// ── UTM attribution age (for debugging / reporting) ──────────────────────────

/**
 * Returns how many days ago the UTM was first captured, or null if none.
 */
export function getUtmAgeDays(): number | null {
  const stored = readStored()
  if (!stored) return null
  return Math.floor((Date.now() - stored.timestamp) / (1000 * 60 * 60 * 24))
}

// ── Clear (e.g. after successful conversion) ─────────────────────────────────

export function clearUtm(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}

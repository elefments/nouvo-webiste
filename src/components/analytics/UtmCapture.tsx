'use client'

import { useEffect } from 'react'
import { captureUtmFromUrl } from '@/lib/utm'

/**
 * Captures UTM params from the URL on every page navigation
 * and persists them to localStorage with a 30-day window.
 *
 * Mount once in the root layout — renders nothing.
 */
export function UtmCapture() {
  useEffect(() => {
    captureUtmFromUrl()
  }, [])

  return null
}

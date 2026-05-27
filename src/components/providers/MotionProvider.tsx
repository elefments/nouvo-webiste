'use client'

/**
 * MotionProvider — wraps the app with Framer Motion's LazyMotion context.
 *
 * Dynamically imports the domAnimation feature bundle so Framer Motion
 * is NOT part of the critical JS that blocks the initial render.
 * All motion components inside must use `m.*` (e.g. m.div) instead of
 * `motion.*` to benefit from this deferred loading.
 */

import { LazyMotion } from 'framer-motion'

const loadFeatures = () =>
  import('@/lib/motionFeatures').then((res) => res.default)

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures}>
      {children}
    </LazyMotion>
  )
}

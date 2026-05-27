'use client'

// Thin client-component wrapper so Hero.tsx (a Server Component) can
// render HeroVisuals without violating the `ssr:false` restriction on
// server-side dynamic() calls.

import dynamic from 'next/dynamic'

const HeroVisualsInner = dynamic(
  () => import('./HeroVisuals').then((mod) => mod.HeroVisuals),
  { ssr: false },
)

export function HeroVisualsLazy({ locale }: { locale: 'el' | 'en' }) {
  return <HeroVisualsInner locale={locale} />
}

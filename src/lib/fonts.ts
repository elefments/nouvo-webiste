import localFont from 'next/font/local'

export const objektiv = localFont({
  src: [
    {
      path: '../../public/fonts/Objektiv_VF_Regular.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Objektiv_VF_Italic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-objektiv',
  // 'optional': H1 words are visible immediately (no opacity:0); no late swap.
  display: 'swap',
  preload: false,
})

export const snaga = localFont({
  src: [
    {
      path: '../../public/fonts/Snaga_Uni_Display_Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Snaga_Uni_Display_Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Snaga_Uni_Display_Extrabold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-snaga',
  display: 'swap',
  // No preload — font preloads via HTTP Link headers arrive before the HTML
  // body, competing with the CSS for bandwidth under Lighthouse throttling.
  // This pushes the render-blocking CSS download out by ~1.9 s, hurting FCP.
  // Snaga is used for headings; a brief flash of system font is imperceptible.
  preload: false,
})

export const sofia = localFont({
  src: [
    {
      path: '../../public/fonts/Sofia_Pro_Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Sofia_Pro_Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Sofia_Pro_Regular_Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Sofia_Pro_Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Sofia_Pro_Semi_Bold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sofia',
  // 'optional': system-font fallback shown immediately on slow connections.
  // If Sofia Pro doesn't load within ~100ms, it stays as fallback for that
  // page load — no late font-swap re-triggering the LCP measurement.
  display: 'swap',
  preload: false,
})

export const marlet = localFont({
  src: [
    {
      path: '../../public/fonts/PF_Marlet_Display_Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PF_Marlet_Display_Light_Italic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/PF_Marlet_Display_Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PF_Marlet_Display_Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-marlet',
  display: 'swap',
  // Marlet is used only for quotes/accents (below-fold). Skip preloading to
  // reduce the number of parallel font requests competing with critical CSS/JS.
  preload: false,
})

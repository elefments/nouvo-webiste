import localFont from 'next/font/local'

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
  display: 'swap',
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
})

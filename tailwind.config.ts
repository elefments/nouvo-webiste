import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'nc-bg': '#FFFFFF',
        'nc-surface': '#F7F7F7',
        'nc-text': '#1E1E1E',
        'nc-accent': '#E34F39',
        'nc-muted-dark': '#575657',
        'nc-muted-mid': '#757474',
        'nc-muted-light': '#AEACAE',
        'nc-border': '#EDEDED',
      },
      fontFamily: {
        snaga: ['var(--font-snaga)', 'sans-serif'],
        sofia: ['var(--font-sofia)', 'sans-serif'],
        marlet: ['var(--font-marlet)', 'serif'],
      },
      borderRadius: {
        'none': '0',
        DEFAULT: '0',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        'full': '100px',
      },
      transitionDuration: {
        '250': '250ms',
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

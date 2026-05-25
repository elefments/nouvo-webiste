# BRIEF.md — Nouvo Collective Website
**Version:** 1.0  
**Stack:** Next.js 14 (App Router) + Tailwind CSS  
**Domain:** nouvo.agency  
**Language:** Bilingual — Greek (default) / English (toggle)

---

## 1. Brand Identity

| | |
|---|---|
| **Brand Name** | Nouvo |
| **Full Entity** | Nouvo Collective |
| **Slogan** | Beyond Digital. Pure Strategy. |
| **Positioning** | Boutique strategic collective — systems design and implementation |

---

## 2. Color System

```css
/* === PRIMARY PALETTE === */
--color-bg:         #FFFFFF;   /* White — page background */
--color-surface:    #F7F7F7;   /* Light Gray — section backgrounds */
--color-text:       #1E1E1E;   /* Near Black — primary text */
--color-accent:     #E34F39;   /* Coral Red — CTAs, hover states, highlights */
--color-muted-dark: #575657;   /* Dark Gray — secondary text */
--color-muted-mid:  #757474;   /* Mid Gray — captions, metadata */
--color-muted-light:#AEACAE;   /* Light Gray — decorative only */
--color-border:     rgba(0,0,0,0.07); /* Border color */
--color-black:      #000000;
--color-white:      #FFFFFF;
```

### Badge Colors (Vibrant — AA Compliant)
```css
--badge-1-bg: #FFE8E5; --badge-1-text: #A82D1A;  /* Dusty Rose  — 5.1:1 ✓ */
--badge-2-bg: #E8F4E8; --badge-2-text: #1F5239;  /* Sage Green  — 5.8:1 ✓ */
--badge-3-bg: #E8EEF8; --badge-3-text: #1A4CC4;  /* Slate Blue  — 5.2:1 ✓ */
--badge-4-bg: #FFF3DC; --badge-4-text: #8A5800;  /* Warm Amber  — 5.4:1 ✓ */
```

### Usage Rules
- Background is always `#FFFFFF`
- Accent `#E34F39` for: hover states, CTA buttons, active elements, scroll-fill animations, marquee bg
- `#AEACAE` for decorative only — never for readable text
- Hover on service rows: bg → `#E34F39`, all text → `#FFFFFF`

---

## 3. Typography

### Font Families
All fonts are local files located in `/public/fonts/`

```css
/* Headings */
font-family: 'Snaga Unicase Display';
src: 'Snaga_Uni_Display_Extrabold.ttf'  /* H1 — weight 800 */
src: 'Snaga_Uni_Display_Bold.ttf'       /* H2 — weight 700 */
src: 'Snaga_Uni_Display_Semibold.ttf'   /* H3, H4 — weight 600 */

/* Body */
font-family: 'Sofia Pro';
src: 'Sofia_Pro_Semi_Bold.ttf'          /* weight 600 — UI emphasis */
src: 'Sofia_Pro_Medium.ttf'             /* weight 500 — nav, labels */
src: 'Sofia_Pro_Regular.ttf'            /* weight 400 — body */
src: 'Sofia_Pro_Regular_italic.ttf'     /* weight 400 italic */
src: 'Sofia_Pro_Light.ttf'              /* weight 300 — captions */

/* Quotes / Accents */
font-family: 'PF Marlet Display';
src: 'PF_Marlet_Display_Regular.ttf'    /* weight 400 */
src: 'PF_Marlet_Display_Italic.ttf'     /* weight 400 italic */
src: 'PF_Marlet_Display_Light.ttf'      /* weight 300 */
src: 'PF_Marlet_Display_Light_Italic.ttf' /* weight 300 italic — primary quote style */
```

### Type Scale

| Token | Font | Weight | Size | Usage |
|---|---|---|---|---|
| `display-1` | Snaga | 800 | clamp(56px, 7vw, 100px) | Hero H1 |
| `display-2` | Snaga | 700 | clamp(36px, 5vw, 64px) | Section H2 |
| `heading-3` | Snaga | 600 | clamp(24px, 3vw, 36px) | Subsection H3 |
| `heading-4` | Snaga | 600 | 20px | Card titles |
| `heading-5` | Sofia | 600 | 16px | Sub-sections, FAQ questions |
| `heading-6` | Sofia | 500 | 14px | Labels, micro-sections |
| `body-large` | Sofia | 400 | 18–20px | Hero subtext |
| `body` | Sofia | 400 | 15–16px | General copy |
| `body-small` | Sofia | 300 | 13–14px | Captions |
| `label` | Sofia | 500 | 11px / 0.12em spacing | Eyebrows, labels |
| `quote` | PF Marlet | 300 italic | 20–28px | Blockquotes |
| `tagline` | PF Marlet | 400 | 16–18px | Accent lines |

### Heading Hierarchy Rules
- **H1** — Μία μόνο ανά σελίδα. Πάντα το primary keyword.
- **H2** — Κύριες ενότητες της σελίδας
- **H3** — Υποενότητες μέσα σε H2
- **H4** — Card titles, service names, FAQ answers
- **H5** — Sub-sections, feature lists, FAQ questions
- **H6** — Labels, micro-sections, metadata headings
- Ποτέ μη skip heading level (π.χ. H2 → H4 χωρίς H3)


- Headings (Snaga): `letter-spacing: -0.02em`
- Labels/eyebrows: `letter-spacing: 0.12em`
- Nav items: `letter-spacing: 0.06em`
- Body: default

---

## 4. Spacing System

Base unit: **8px**

```
4px   — XS (micro gaps)
8px   — SM (tight)
16px  — MD (base unit)
24px  — LG (comfortable)
32px  — XL (relaxed)
48px  — 2XL (spacious)
64px  — 3XL (section internal)
80px  — 4XL (section padding)
120px — 5XL (hero padding)
```

---

## 5. UI Patterns

### Grain Texture Overlay
Applied globally on the `<body>` — pure CSS, 0kb, no image files needed.

```css
body::before {
  content: '';
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px 200px;
  opacity: 0.045; /* Medium intensity */
  pointer-events: none;
  z-index: 9999;
  animation: grain 0.5s steps(1) infinite;
}

@keyframes grain {
  0%   { transform: translate(0px, 0px); }
  10%  { transform: translate(-2px, -3px); }
  20%  { transform: translate(3px, 1px); }
  30%  { transform: translate(-1px, 3px); }
  40%  { transform: translate(2px, -2px); }
  50%  { transform: translate(-3px, 1px); }
  60%  { transform: translate(1px, -1px); }
  70%  { transform: translate(-2px, 2px); }
  80%  { transform: translate(3px, -3px); }
  90%  { transform: translate(-1px, 2px); }
  100% { transform: translate(2px, 0px); }
}
```

### Liquid Glass Pattern
Used on: sticky nav, quote/manifesto card, floating CTA bar

```css
.glass {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 0.5px solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 2px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9);
}
```

### Hero Badges (Awake-style)
```jsx
<span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border">
  ↗ Websites
</span>
/* Colors: use badge-1 through badge-4 from color system */
```


Used consistently throughout the site — **↗ for CTAs/links, ↘ for decorative (none in v1)**

```jsx
/* SVG Arrow component — reusable */
const Arrow = ({ size = 20, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
    <line x1="4" y1="16" x2="16" y2="4" stroke={color} strokeWidth="1.5"/>
    <polyline points="7,4 16,4 16,13" stroke={color} strokeWidth="1.5" fill="none"/>
  </svg>
)
```

Arrow behavior:
- On hover: `transform: translate(2px, -2px)` with `transition: transform 0.2s ease`
- Color transitions with parent hover state

### CTA Buttons

```jsx
/* Structure: label + arrow always on the right */
<button className="flex items-center justify-between gap-3 px-5 py-3 text-sm font-medium tracking-wide transition-all duration-200">
  <span>Ξεκινήστε Σήμερα</span>
  <Arrow /> {/* moves translate(2px, -2px) on hover */}
</button>
```

Variants:
- **Primary**: `bg-[#1E1E1E] text-[#FFF7EA]` → hover `bg-[#E34F39] text-white`
- **Accent**: `bg-[#E34F39] text-white` → hover `bg-[#c93e28]`
- **Outline**: `border border-[#1E1E1E] text-[#1E1E1E]` → hover `bg-[#1E1E1E] text-[#FFF7EA]`
- **Ghost**: `border border-[#EDEDED] text-[#575657]` → hover `border-[#AEACAE]`

### Service Row (Homepage + Services Page)

```jsx
/* Hover: bg → accent, text → white, description slides in */
<div className="group flex items-start gap-5 px-4 py-5 border-t border-[#EDEDED] cursor-pointer transition-colors duration-250 hover:bg-[#E34F39]">
  <span className="font-mono text-sm text-[#AEACAE] pt-1.5 w-7 shrink-0 group-hover:text-white/60 transition-colors">01</span>
  <div className="flex-1">
    <span className="block text-2xl font-medium text-[#1E1E1E] tracking-tight group-hover:text-white transition-colors">
      Ιστοσελίδες & Ψηφιακή Παρουσία
    </span>
    <span className="block text-sm text-transparent max-h-0 overflow-hidden group-hover:text-white/75 group-hover:max-h-[60px] group-hover:mt-2 transition-all duration-300">
      Description text here
    </span>
  </div>
  <Arrow className="mt-1 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#AEACAE] group-hover:text-white" />
</div>
```

### Marquee / Ticker

```jsx
/* Accent background, white text, infinite scroll */
<div className="overflow-hidden bg-[#E34F39] py-3">
  <div className="flex gap-8 whitespace-nowrap animate-marquee">
    {[...items, ...items].map((item, i) => (
      <span key={i} className="text-sm font-medium tracking-widest uppercase text-white">
        {item}
      </span>
    ))}
  </div>
</div>
```

Tailwind config for marquee:
```js
animation: { marquee: 'marquee 20s linear infinite' },
keyframes: { marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } } }
```

### Scroll-Driven Text Color Fill

```jsx
/* Text starts muted, fills with #1E1E1E as it enters viewport */
/* Use Intersection Observer or CSS @scroll-timeline */
/* Recommended: framer-motion useScroll + useTransform */

const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
const color = useTransform(scrollYProgress, [0, 1], ['#AEACAE', '#1E1E1E'])

<motion.p style={{ color }}>
  "We don't sell tools. We design systems."
</motion.p>
```

---

## 6. Sitemap & Page Architecture

### Navigation Structure

```
Header (sticky):
├── Logo: "Nouvo Collective"
├── Dropdown: Υπηρεσίες
│   ├── Ιστοσελίδες & Ψηφιακή Παρουσία
│   ├── Αναζήτηση & Ορατότητα
│   ├── Marketing & Ψηφιακή Ανάπτυξη
│   ├── Ψηφιακός Μετασχηματισμός & AI
│   └── IT Support & Συντήρηση
├── Case Studies
├── Blog
├── Επικοινωνία
└── CTA Button: "Επικοινωνία ↗" [EN/GR toggle]
```

### Full Sitemap

```
/ (Home)
/services (Services overview)
  /services/websites-digital-presence
  /services/search-visibility
  /services/marketing-digital-growth
  /services/digital-transformation-ai
  /services/it-support-maintenance
    /* Nested service sub-pages (header dropdown): */
    /services/websites-digital-presence/eshop
    /services/websites-digital-presence/corporate-website
    /services/websites-digital-presence/landing-page
    /services/websites-digital-presence/portfolio-website
    /services/websites-digital-presence/booking-website
    /services/websites-digital-presence/website-redesign
    /services/search-visibility/seo
    /services/search-visibility/local-seo
    /services/search-visibility/technical-seo
    /services/search-visibility/aeo
    /services/search-visibility/geo
    /services/search-visibility/heo
    /services/marketing-digital-growth/google-ads
    /services/marketing-digital-growth/meta-ads
    /services/marketing-digital-growth/tiktok-ads
    /services/marketing-digital-growth/email-marketing
    /services/marketing-digital-growth/content-strategy
    /services/digital-transformation-ai/process-automation
    /services/digital-transformation-ai/ai-tools
    /services/digital-transformation-ai/business-digitization
    /services/digital-transformation-ai/ai-chatbots
    /services/digital-transformation-ai/marketing-automation
    /services/it-support-maintenance/website-maintenance
    /services/it-support-maintenance/technical-support
    /services/it-support-maintenance/cloud-hosting
    /services/it-support-maintenance/domain-email-management

/* Footer-only SEO pages (low-competition long-tail): */
/services/websites-digital-presence/website-for-lawyers
/services/websites-digital-presence/website-for-accountants
/services/websites-digital-presence/website-for-doctors
/services/websites-digital-presence/website-for-gyms
/services/marketing-digital-growth/meta-ads-eshop
/services/marketing-digital-growth/tiktok-ads-small-business
/services/search-visibility/local-seo-medical
/services/search-visibility/aeo-local-business
/services/it-support-maintenance/it-support-small-business
/services/it-support-maintenance/professional-email-management

/case-studies
/blog
  /blog/[category]
  /blog/[slug]
/contact
/privacy-policy
/cookie-policy
```

---

## 7. Services & Sub-pages

### 5 Core Pillars (in order)

1. **Ιστοσελίδες & Ψηφιακή Παρουσία** / Websites & Digital Presence
2. **Αναζήτηση & Ορατότητα** / Search & Visibility
3. **Marketing & Ψηφιακή Ανάπτυξη** / Marketing & Digital Growth
4. **Ψηφιακός Μετασχηματισμός & AI** / Digital Transformation & AI
5. **IT Support & Συντήρηση** / IT Support & Maintenance

### Sub-service Naming Convention

All sub-service pages use Greek + English bilingual titles.  
English terms (SEO, AEO, GEO, HEO, AI) remain in English in both languages.

---

## 8. Homepage Sections

### Section Order
1. **Hero** — Full viewport, large H1, subtext, 2 CTAs, marquee below
2. **Services** — Editorial numbered list with hover effect
3. **About** — Brief brand narrative + stats (16+ years, 5 services, 100% custom)
4. **Case Studies** — Grid preview (max 3), link to full page
5. **Manifesto / Quote** — Scroll-driven text color fill animation
6. **Blog Preview** — Latest 3 posts
7. **CTA Section** — "Ξεκινήστε τη συνεργασία" full-width section
8. **Footer** — Logo, nav links, social, legal

### Hero Section
```
Eyebrow:  "Ψηφιακός Σχεδιασμός & Υλοποίηση Συστημάτων"
H1:       "Beyond Digital."  (line 1)
          "Pure Strategy."   (line 2 — in accent color #E34F39)
Subtext:  Sofia Pro Light, 18–20px, max-width 520px
CTAs:     Primary "Ξεκινήστε Σήμερα ↗" + Ghost "Δείτε τις Υπηρεσίες ↗"
Below:    Marquee ticker with brand manifesto lines
```

### Marquee Content
```
Beyond Digital  ✦  Pure Strategy  ✦  Systems First  ✦  Architecture Matters  ✦
Strategy Must Operate  ✦  Structure Before Surface  ✦  AI Needs Purpose  ✦
```

---

## 9. Animations & Interactions

### Global Rules
- All transitions: `duration-200` to `duration-300`
- Easing: `ease` (default) or `cubic-bezier(0.4, 0, 0.2, 1)`
- No bounce, no spring on UI elements — reserved for hero moments only
- Respect `prefers-reduced-motion`

### Implemented Effects

| Effect | Trigger | Implementation |
|---|---|---|
| Service row expand | Hover | Tailwind group + max-height transition |
| Button arrow nudge | Hover | `translate(2px, -2px)` CSS transform |
| Marquee | Always | CSS animation infinite |
| Scroll text color fill | Scroll | Framer Motion `useScroll` + `useTransform` |
| Page load stagger | Mount | Framer Motion `staggerChildren` |
| Nav background | Scroll | `backdrop-blur` + `bg-opacity` on scroll |

---

## 10. Technical Specifications

### Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Fonts:** Local (`/public/fonts/`) via `next/font/local`
- **Images:** `next/image` with proper `sizes` and `priority`
- **i18n:** next-intl (GR default, EN toggle)

### Performance Rules
- No external font CDN — all fonts local
- Images: WebP format, lazy loaded except hero
- No animation libraries except Framer Motion
- Marquee: CSS-only (no JS)
- LCP target: < 2.5s
- CLS: 0 (font display: swap with proper fallback metrics)

### Font Loading
```js
// app/layout.tsx
import localFont from 'next/font/local'

const snaga = localFont({
  src: [
    { path: '../public/fonts/Snaga_Uni_Display_Extrabold.ttf', weight: '800' },
    { path: '../public/fonts/Snaga_Uni_Display_Bold.ttf', weight: '700' },
    { path: '../public/fonts/Snaga_Uni_Display_Semibold.ttf', weight: '600' },
  ],
  variable: '--font-snaga',
  display: 'swap',
})

const sofia = localFont({
  src: [
    { path: '../public/fonts/Sofia_Pro_Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Sofia_Pro_Regular_italic.ttf', weight: '400', style: 'italic' },
    { path: '../public/fonts/Sofia_Pro_Medium.ttf', weight: '500' },
    { path: '../public/fonts/Sofia_Pro_Semi_Bold.ttf', weight: '600' },
    { path: '../public/fonts/Sofia_Pro_Light.ttf', weight: '300' },
  ],
  variable: '--font-sofia',
  display: 'swap',
})

const marlet = localFont({
  src: [
    { path: '../public/fonts/PF_Marlet_Display_Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/PF_Marlet_Display_Italic.ttf', weight: '400', style: 'italic' },
    { path: '../public/fonts/PF_Marlet_Display_Light.ttf', weight: '300', style: 'normal' },
    { path: '../public/fonts/PF_Marlet_Display_Light_Italic.ttf', weight: '300', style: 'italic' },
  ],
  variable: '--font-marlet',
  display: 'swap',
})
```

### Tailwind Config Extensions
```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      'nc-bg':      '#FFF7EA',
      'nc-surface': '#EDEDED',
      'nc-text':    '#1E1E1E',
      'nc-accent':  '#E34F39',
      'nc-muted-dark':  '#575657',
      'nc-muted-mid':   '#757474',
      'nc-muted-light': '#AEACAE',
      'nc-border':  '#EDEDED',
    },
    fontFamily: {
      snaga:  ['var(--font-snaga)', 'sans-serif'],
      sofia:  ['var(--font-sofia)', 'sans-serif'],
      marlet: ['var(--font-marlet)', 'serif'],
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '0',
      'sm': '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '20px',
      'full': '100px',  /* buttons, tags, badges, inputs, nav, pills */
    },
    animation: {
      marquee: 'marquee 20s linear infinite',
    },
    keyframes: {
      marquee: {
        from: { transform: 'translateX(0)' },
        to:   { transform: 'translateX(-50%)' },
      },
    },
  },
}
```

---

## 11. SEO / AEO / GEO Strategy

### Meta Rules
- Brand identifier in all meta: `Nouvo Collective` — never personal name
- Phone number: never appears on site
- Outsourcing model: never mentioned

### Page Meta Template
```
Title:       [Service Name] | Nouvo Collective
Description: [2 sentences, 150 chars max, includes primary keyword]
OG Image:    1200x630, branded, per page
Canonical:   Always set
hreflang:    el (default), en
```

### Long-tail SEO Pages (Footer only)
These pages target low-competition keywords. Each needs:
- Dedicated URL (see sitemap)
- Unique H1 with exact keyword
- 600+ words of unique copy
- FAQ section (AEO — Answer Engine Optimization)
- LocalBusiness schema markup
- Internal links to parent service page

### Schema Markup
- `Organization` on all pages
- `WebSite` with `SearchAction` on homepage
- `Service` on all service pages
- `Article` on blog posts
- `LocalBusiness` on long-tail niche pages
- `FAQPage` on service + long-tail pages

---

## 12. Bilingual Implementation

- **Default:** Greek (`/`)
- **English:** (`/en/`)
- Toggle in header — no full page reload (next-intl)
- URL structure: Greek pages at root, English under `/en/`
- All meta tags bilingual
- Fonts support Greek character set natively (Sofia Pro, Snaga)

---

## 13. Non-Negotiables

- `border-radius: 100px` on buttons, tags, badges, inputs, nav — `border-radius: 16-20px` on cards
- Background always `#FFFFFF` — never `#FFF7EA` or other tints

---

*BRIEF.md v1.0 — Nouvo Collective — May 2026*

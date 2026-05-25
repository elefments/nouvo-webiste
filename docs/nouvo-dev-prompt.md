# Nouvo Collective Website Development Prompt
**Use this prompt to initiate the build with an AI coding assistant (Claude Code, Cursor, v0, etc.)**

---

You are building the website for **Nouvo Collective** (nouvo.agency) a boutique strategic digital collective. This is a production-grade build. Follow every specification precisely.

---

## STACK

- **Framework:** Next.js 14 (App Router)
- **CMS:** Payload CMS 3.x (installed inside Next.js app folder)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **i18n:** next-intl (Greek default at `/`, English at `/en/`)
- **Fonts:** Local via `next/font/local` no external CDN
- **Images:** `next/image` with WebP, lazy load except hero
- **Database (local):** SQLite via Payload's sqlite adapter
- **Database (production):** PostgreSQL via Neon or Supabase (serverless)

---

## BRAND

- **Name:** Nouvo Collective
- **Slogan:** Beyond Digital. Pure Strategy.
- **Positioning:** Boutique strategic collective systems design and implementation
- **Tone:** Confident, minimal, no fluff. Never hype language.

---

## COLOR SYSTEM

```css
--color-bg: #FFFFFF;
--color-surface: #F7F7F7;
--color-text: #1E1E1E;
--color-accent: #E34F39;
--color-muted-dark: #575657;
--color-muted-mid: #757474;
--color-muted-light: #AEACAE;
--color-border: rgba(0,0,0,0.07);
--color-black: #000000;
--color-white: #FFFFFF;

/* Badge colors */
--badge-1-bg: #FFE8E5; --badge-1-text: #A82D1A;
--badge-2-bg: #E8F4E8; --badge-2-text: #1F5239;
--badge-3-bg: #E8EEF8; --badge-3-text: #1A4CC4;
--badge-4-bg: #FFF3DC; --badge-4-text: #8A5800;
```

**Rules:**
- Background is always `#FFFFFF` never `#FFF7EA` or any tint
- Accent `#E34F39` for: CTAs, hover states, active elements, marquee bg, scroll-fill animations
- `#AEACAE` for decorative use only never for readable text
- Service row hover: bg → `#E34F39`, all text → `#FFFFFF`

---

## TYPOGRAPHY

All font files live in `/public/fonts/`. Load via `next/font/local` with `display: 'swap'`.

```
Snaga Unicase Display → headings
 Snaga_Uni_Display_Extrabold.ttf weight 800 → H1
 Snaga_Uni_Display_Bold.ttf weight 700 → H2
 Snaga_Uni_Display_Semibold.ttf weight 600 → H3, H4

Sofia Pro → body
 Sofia_Pro_Regular.ttf weight 400
 Sofia_Pro_Regular_italic.ttf weight 400 italic
 Sofia_Pro_Medium.ttf weight 500
 Sofia_Pro_Semi_Bold.ttf weight 600
 Sofia_Pro_Light.ttf weight 300

PF Marlet Display → quotes / accents
 PF_Marlet_Display_Regular.ttf weight 400
 PF_Marlet_Display_Italic.ttf weight 400 italic
 PF_Marlet_Display_Light.ttf weight 300
 PF_Marlet_Display_Light_Italic.ttf weight 300 italic
```

**Type tokens:**
```
display-1 → Snaga 800, clamp(56px, 7vw, 100px), letter-spacing: -0.02em
display-2 → Snaga 700, clamp(36px, 5vw, 64px), letter-spacing: -0.02em
heading-3 → Snaga 600, clamp(24px, 3vw, 36px), letter-spacing: -0.02em
heading-4 → Snaga 600, 20px
heading-5 → Sofia 600, 16px
heading-6 → Sofia 500, 14px
body-large → Sofia 400, 18–20px
body → Sofia 400, 15–16px
body-small → Sofia 300, 13–14px
label → Sofia 500, 11px, letter-spacing: 0.12em, uppercase
quote → PF Marlet 300 italic, 20–28px
tagline → PF Marlet 400, 16–18px
```

---

## SPACING

Base unit: 8px

```
4px XS
8px SM
16px MD
24px LG
32px XL
48px 2XL
64px 3XL
80px 4XL
120px 5XL
```

---

## BORDER RADIUS NON-NEGOTIABLE

```
border-radius: 100px → buttons, tags, badges, inputs, nav items, pills
border-radius: 16px–20px → cards only
border-radius: 0 → everything else (sections, containers)
```

---

## TAILWIND CONFIG

```ts
// tailwind.config.ts
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
}
```

---

## UI COMPONENTS

### Grain Texture Overlay (global, CSS-only, 0kb)

```css
body::before {
 content: '';
 position: fixed;
 top: -50%; left: -50%;
 width: 200%; height: 200%;
 background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
 background-repeat: repeat;
 background-size: 200px 200px;
 opacity: 0.045;
 pointer-events: none;
 z-index: 9999;
 animation: grain 0.5s steps(1) infinite;
}
@keyframes grain {
 0% { transform: translate(0px, 0px); }
 10% { transform: translate(-2px, -3px); }
 20% { transform: translate(3px, 1px); }
 30% { transform: translate(-1px, 3px); }
 40% { transform: translate(2px, -2px); }
 50% { transform: translate(-3px, 1px); }
 60% { transform: translate(1px, -1px); }
 70% { transform: translate(-2px, 2px); }
 80% { transform: translate(3px, -3px); }
 90% { transform: translate(-1px, 2px); }
 100% { transform: translate(2px, 0px); }
}
```

### Liquid Glass (sticky nav, manifesto card, floating CTA)

```css
.glass {
 background: rgba(255, 255, 255, 0.6);
 backdrop-filter: blur(20px) saturate(180%);
 -webkit-backdrop-filter: blur(20px) saturate(180%);
 border: 0.5px solid rgba(255, 255, 255, 0.75);
 box-shadow: 0 2px 24px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9);
}
```

### Arrow Component (reusable)

```tsx
const Arrow = ({ size = 20, color = 'currentColor', className }: {
 size?: number; color?: string; className?: string
}) => (
 <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
 <line x1="4" y1="16" x2="16" y2="4" stroke={color} strokeWidth="1.5"/>
 <polyline points="7,4 16,4 16,13" stroke={color} strokeWidth="1.5" fill="none"/>
 </svg>
)
```

Arrow behavior: on hover → `translate(2px, -2px)`, `transition: transform 0.2s ease`. Color inherits from parent hover.

### CTA Buttons

```tsx
// Structure: label + arrow, always right-aligned
<button className="flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-200">
 <span>Label</span>
 <Arrow />
</button>
```

Variants:
- **Primary:** `bg-[#1E1E1E] text-white` → hover `bg-[#E34F39]`
- **Accent:** `bg-[#E34F39] text-white` → hover `bg-[#c93e28]`
- **Outline:** `border border-[#1E1E1E] text-[#1E1E1E]` → hover `bg-[#1E1E1E] text-white`
- **Ghost:** `border border-[#EDEDED] text-[#575657]` → hover `border-[#AEACAE]`

### Service Row (homepage + services page)

```tsx
<div className="group flex items-start gap-5 px-4 py-5 border-t border-[#EDEDED] cursor-pointer transition-colors duration-250 hover:bg-[#E34F39]">
 <span className="font-mono text-sm text-[#AEACAE] pt-1.5 w-7 shrink-0 group-hover:text-white/60 transition-colors">01</span>
 <div className="flex-1">
 <span className="block text-2xl font-medium text-[#1E1E1E] tracking-tight group-hover:text-white transition-colors">
 Service Name
 </span>
 <span className="block text-sm text-transparent max-h-0 overflow-hidden group-hover:text-white/75 group-hover:max-h-[60px] group-hover:mt-2 transition-all duration-300">
 Description text here
 </span>
 </div>
 <Arrow className="mt-1 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#AEACAE] group-hover:text-white" />
</div>
```

### Marquee / Ticker

```tsx
<div className="overflow-hidden bg-[#E34F39] py-3">
 <div className="flex gap-8 whitespace-nowrap animate-marquee">
 {[...items,...items].map((item, i) => (
 <span key={i} className="text-sm font-medium tracking-widest uppercase text-white">
 {item}
 </span>
 ))}
 </div>
</div>
```

Marquee items:
```
Beyond Digital ✦ Pure Strategy ✦ Systems First ✦ Architecture Matters ✦
Strategy Must Operate ✦ Structure Before Surface ✦ AI Needs Purpose ✦ Built to Scale ✦
```

### Hero Badges (Awake-style)

```tsx
<span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border">
 ↗ Websites
</span>
// Use badge-1 through badge-4 color pairs
```

### Scroll-driven Text Color Fill

```tsx
// Use Framer Motion useScroll + useTransform
const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
const color = useTransform(scrollYProgress, [0, 1], ['#AEACAE', '#1E1E1E'])

<motion.p style={{ color }}>
 "We don't sell tools. We design systems."
</motion.p>
```

---

## ANIMATIONS

Global rules:
- All transitions: `duration-200` to `duration-300`
- Easing: `ease` or `cubic-bezier(0.4, 0, 0.2, 1)`
- No bounce, no spring on UI elements
- Always respect `prefers-reduced-motion`

| Effect | Trigger | Implementation |
|---|---|---|
| Service row expand | Hover | Tailwind group + max-height transition |
| Button arrow nudge | Hover | `translate(2px, -2px)` |
| Marquee | Always | CSS animation infinite |
| Scroll text fill | Scroll | Framer Motion useScroll + useTransform |
| Page load stagger | Mount | Framer Motion staggerChildren |
| Nav background | Scroll | backdrop-blur + bg-opacity on scroll |

---

## NAVIGATION STRUCTURE

```
Header (sticky, glass effect on scroll):
├── Logo: "Nouvo Collective" (Snaga, weight 700)
├── Dropdown: Υπηρεσίες / Services
│ ├── Ιστοσελίδες & Ψηφιακή Παρουσία / Websites & Digital Presence
│ ├── Αναζήτηση & Ορατότητα / Search & Visibility
│ ├── Marketing & Ψηφιακή Ανάπτυξη / Marketing & Digital Growth
│ ├── Ψηφιακός Μετασχηματισμός & AI / Digital Transformation & AI
│ └── IT Support & Συντήρηση / IT Support & Maintenance
├── Case Studies
├── Blog
├── Επικοινωνία / Contact
└── CTA: "Επικοινωνία ↗" + [GR/EN toggle]
```

---

## HOMEPAGE SECTION ORDER

1. Hero full viewport, H1, subtext, 2 CTAs, marquee below
2. Services numbered editorial list with hover reveal
3. About brand narrative + 3 stats
4. Case Studies grid max 3, link to full page
5. Manifesto scroll-driven text color fill animation
6. Blog Preview latest 3 posts
7. CTA Section full width, "Ξεκινήστε τη συνεργασία"
8. Footer

**Hero copy:**
```
Eyebrow: "Ψηφιακός Σχεδιασμός & Υλοποίηση Συστημάτων"
H1 line1: "Beyond Digital."
H1 line2: "Pure Strategy." ← in #E34F39
Subtext: "Δεν πουλάμε εργαλεία. Σχεδιάζουμε συστήματα..."
CTA1: "Ξεκινήστε Σήμερα ↗" (primary)
CTA2: "Δείτε τις Υπηρεσίες ↗" (ghost)
```

---

## BILINGUAL SETUP

- Default language: Greek at `/`
- English at `/en/`
- Implement with `next-intl`
- Language toggle in header no full page reload
- `hreflang` el + en on every page
- Canonical on every page
- Greek URLs use greeklish (e.g. `/ypiresies/kataskevi-istoselidon`)
- English tech terms stay in English in both languages: SEO, AEO, GEO, HEO, AI, cloud, hosting

---

## SEO REQUIREMENTS (every page)

```tsx
// app/[locale]/layout.tsx or per page
export const metadata: Metadata = {
 title: '[Page Title] | Nouvo Collective',
 description: '[Max 155 chars, includes primary keyword + CTA]',
 alternates: {
 canonical: 'https://nouvo.agency/[url]',
 languages: {
 'el': 'https://nouvo.agency/[gr-url]',
 'en': 'https://nouvo.agency/en/[en-url]',
 },
 },
 openGraph: {
 title: '[OG Title]',
 description: '[OG Description]',
 images: [{ url: '/og/[page].jpg', width: 1200, height: 630 }],
 },
}
```

Schema per page type:
- All pages: `Organization`
- Homepage: `Organization` + `WebSite` with `SearchAction`
- Service pages: `Service` + `FAQPage`
- Long-tail pages: `LocalBusiness` + `FAQPage`
- Blog posts: `Article`

---

## PERFORMANCE TARGETS

- LCP: < 2.5s
- CLS: 0 (use font `size-adjust` fallback metrics)
- No external font CDN
- Images: WebP, lazy load except hero (`priority` on hero image)
- Marquee: CSS-only, no JS
- No animation libraries except Framer Motion

---

## FILE STRUCTURE

```
app/
├── [locale]/
│ ├── layout.tsx ← fonts, metadata, i18n provider
│ ├── page.tsx ← homepage
│ ├── ypiresies/
│ │ ├── page.tsx
│ │ ├── kataskevi-istoselidon/page.tsx
│ │ ├── anazitisi-oratotita/page.tsx
│ │ ├── marketing-psifiaki-anaptyxi/page.tsx
│ │ ├── psifiakos-metasximatismos-ai/page.tsx
│ │ └── it-support-sintirisi/page.tsx
│ ├── case-studies/page.tsx
│ ├── blog/page.tsx
│ └── epikoinonia/page.tsx
components/
├── ui/
│ ├── Arrow.tsx
│ ├── Button.tsx
│ ├── Badge.tsx
│ └── ServiceRow.tsx
├── layout/
│ ├── Header.tsx
│ ├── Footer.tsx
│ └── Marquee.tsx
├── sections/
│ ├── Hero.tsx
│ ├── Services.tsx
│ ├── About.tsx
│ ├── CaseStudies.tsx
│ ├── Manifesto.tsx
│ ├── BlogPreview.tsx
│ └── CTASection.tsx
public/
├── fonts/
│ ├── Snaga_Uni_Display_Extrabold.ttf
│ ├── Snaga_Uni_Display_Bold.ttf
│ ├── Snaga_Uni_Display_Semibold.ttf
│ ├── Sofia_Pro_Regular.ttf
│ ├── Sofia_Pro_Regular_italic.ttf
│ ├── Sofia_Pro_Medium.ttf
│ ├── Sofia_Pro_Semi_Bold.ttf
│ ├── Sofia_Pro_Light.ttf
│ ├── PF_Marlet_Display_Regular.ttf
│ ├── PF_Marlet_Display_Italic.ttf
│ ├── PF_Marlet_Display_Light.ttf
│ └── PF_Marlet_Display_Light_Italic.ttf
└── og/ ← 1200x630 OG images per page
messages/
├── el.json ← Greek strings
└── en.json ← English strings
```

---

## PAYLOAD CMS

Payload CMS 3.x is installed **inside** the Next.js app folder. It manages all content: pages, blog posts, case studies, site globals (header, footer, SEO defaults) and media. There is no separate CMS backend.

### Local development setup

```bash
# Install
pnpm add payload @payloadcms/next @payloadcms/richtext-lexical
pnpm add @payloadcms/db-sqlite  # local only
pnpm add @payloadcms/db-postgres  # production

# .env.local
DATABASE_URI=file:./payload.db          # SQLite for local
PAYLOAD_SECRET=any-random-string-here
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

For production `.env`:
```bash
DATABASE_URI=postgresql://user:pass@host/dbname   # Neon or Supabase connection string
PAYLOAD_SECRET=strong-random-secret-min-32-chars
NEXT_PUBLIC_SERVER_URL=https://nouvo.agency
```

### payload.config.ts

```ts
import { buildConfig } from 'payload'
import { nextIntl } from '@payloadcms/next'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || '',
  db: isDev
    ? sqliteAdapter({ client: { url: process.env.DATABASE_URI || 'file:./payload.db' } })
    : postgresAdapter({ pool: { connectionString: process.env.DATABASE_URI } }),
  editor: lexicalEditor({}),
  collections: [
    Pages,
    Posts,       // Blog
    CaseStudies,
    Media,
    Users,
  ],
  globals: [
    Header,
    Footer,
    SiteSettings,
  ],
  i18n: {
    // Payload admin UI language (separate from next-intl)
    fallbackLanguage: 'en',
  },
  admin: {
    user: 'users',
    meta: {
      titleSuffix: ' | Nouvo Collective Admin',
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
```

### App folder structure with Payload

```
app/
├── (app)/
│   └── [locale]/              <- next-intl routes
│       ├── layout.tsx
│       ├── page.tsx            <- homepage
│       ├── ypiresies/
│       ├── case-studies/
│       ├── blog/
│       └── epikoinonia/
├── (payload)/
│   └── admin/
│       └── [[...segments]]/
│           ├── page.tsx        <- Payload admin entry
│           └── not-found.tsx
├── api/
│   └── [...payload]/
│       └── route.ts            <- Payload REST API
src/
├── payload.config.ts
├── payload-types.ts            <- auto-generated, do not edit
├── collections/
│   ├── Pages.ts
│   ├── Posts.ts
│   ├── CaseStudies.ts
│   ├── Media.ts
│   └── Users.ts
├── globals/
│   ├── Header.ts
│   ├── Footer.ts
│   └── SiteSettings.ts
```

### Collections spec

**Pages collection** (manages all static service pages):
```ts
// src/collections/Pages.ts
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      name: 'locale',
      type: 'select',
      options: ['el', 'en'],
      required: true,
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'eyebrow', type: 'text' },
        { name: 'h1', type: 'text', required: true },
        { name: 'subtext', type: 'textarea' },
        { name: 'ctaPrimary', type: 'text' },
        { name: 'ctaGhost', type: 'text' },
      ],
    },
    { name: 'content', type: 'richText' },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
        { name: 'ogTitle', type: 'text' },
        { name: 'ogDescription', type: 'textarea' },
        { name: 'canonicalUrl', type: 'text' },
      ],
    },
  ],
}
```

**Posts collection** (Blog):
```ts
export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      name: 'locale',
      type: 'select',
      options: ['el', 'en'],
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        'websites-eshop',
        'seo-visibility',
        'marketing',
        'ai-automation',
        'it-security',
      ],
    },
    { name: 'excerpt', type: 'textarea' },
    { name: 'content', type: 'richText', required: true },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    { name: 'publishedAt', type: 'date' },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
      ],
    },
  ],
}
```

**CaseStudies collection**:
```ts
export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    {
      name: 'locale',
      type: 'select',
      options: ['el', 'en'],
      required: true,
    },
    {
      name: 'services',
      type: 'select',
      hasMany: true,
      options: [
        'websites-eshop',
        'seo',
        'marketing',
        'ai-automation',
        'it-support',
      ],
    },
    { name: 'client', type: 'text' },
    { name: 'industry', type: 'text' },
    { name: 'challenge', type: 'richText' },
    { name: 'solution', type: 'richText' },
    { name: 'results', type: 'richText' },
    {
      name: 'metrics',
      type: 'array',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'value', type: 'text' },
      ],
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
      ],
    },
  ],
}
```

**SiteSettings global** (header nav, footer links, default SEO):
```ts
// src/globals/SiteSettings.ts
import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  fields: [
    {
      name: 'defaultSeo',
      type: 'group',
      fields: [
        { name: 'titleTemplate', type: 'text', defaultValue: '%s | Nouvo Collective' },
        { name: 'defaultDescription', type: 'textarea' },
        { name: 'ogImage', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'social',
      type: 'group',
      fields: [
        { name: 'linkedin', type: 'text' },
        { name: 'instagram', type: 'text' },
      ],
    },
  ],
}
```

### Fetching Payload data in Next.js pages

Use the **Local API** (zero HTTP overhead, direct DB access) for all server components:

```ts
// app/(app)/[locale]/blog/page.tsx
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    where: {
      locale: { equals: params.locale },
    },
    sort: '-publishedAt',
    limit: 12,
  })

  return (
    // render posts.docs
  )
}
```

For single post/case study pages:
```ts
const post = await payload.findOne({
  collection: 'posts',
  where: { slug: { equals: params.slug } },
})
```

### Payload admin URL

Local: `http://localhost:3000/admin`
Production: `https://nouvo.agency/admin`

The admin panel is NOT indexed by Google. Add to `robots.txt`:
```
Disallow: /admin
Disallow: /api
```

### Running locally

```bash
pnpm dev
# App: http://localhost:3000
# Admin: http://localhost:3000/admin
# First run: create admin user at /admin/create-first-user
```

---


## COPY FILES

All page copy (H1, H2, H3, body text, CTAs, meta titles, meta descriptions, FAQ) lives in `/docs/copy/` inside the project root.

**Rule: NEVER invent or paraphrase copy. Always use the exact text from these files.**

| File | Pages covered |
|---|---|
| `homepage-copy.md` | Homepage (/) |
| `services-overview-copy.md` | /ypiresies |
| `websites-digital-presence-copy.md` | Istoselidwes & Psifiaki Parousia category |
| `search-visibility-copy.md` | Anazitisi & Oratotita category |
| `marketing-digital-growth-copy.md` | Marketing & Psifiaki Anaptyxi category |
| `digital-transformation-ai-copy.md` | Psifiakos Metasximatismos & AI category |
| `it-support-maintenance-copy.md` | IT Support & Sintirisi category |
| `eshop-copy.md` | /ypiresies/kataskevi-istoselidon/eshop |
| `corporate-website-copy.md` | /ypiresies/kataskevi-istoselidon/etairiki-istoselida |
| `websites-subpages-copy.md` | Landing Page, Portfolio, Kratisseon, Redesign |
| `search-subpages-copy.md` | SEO, Local SEO, Technical SEO, AEO, GEO, HEO sub-pages |
| `marketing-ai-it-subpages-copy.md` | Google Ads, Meta Ads, TikTok, Email, Content Strategy, all AI & IT sub-pages |
| `longtail-pages-copy.md` | 10 SEO long-tail footer pages |
| `remaining-pages-copy.md` | Case Studies, Contact, Blog, About, Privacy Policy, Cookie Policy |

### How to use copy files

Before building any page:
1. Read the corresponding copy file
2. Find the section for the specific page (GR and EN versions)
3. Use the exact H1, H2, H3, body text, CTA labels and meta fields
4. For bilingual pages: Greek copy goes in the `el` locale, English in `en`
5. The `seo` group in Payload (metaTitle, metaDescription, ogTitle, ogDescription, canonicalUrl) maps directly to the SEO COMPONENTS section in each copy file

### Copy file structure per page

Each page section in the copy files contains:
- SEO COMPONENTS: Primary keyword, meta title, meta description, OG title, OG description, canonical URL, hreflang, schema type
- GREEK COPY: Eyebrow, H1, H2, H3, H4, H5, body text, CTA labels, internal links
- ENGLISH COPY: Same structure in English

---

## NON-NEGOTIABLES

1. `border-radius: 100px` on all buttons, tags, badges, inputs, nav no exceptions
2. `border-radius: 16–20px` on cards only
3. Background always `#FFFFFF` never tinted
4. No templates or pre-built component libraries (shadcn is acceptable for primitives only)
5. All fonts local zero external font requests
6. Every page has canonical + hreflang
7. Never mention phone numbers on any page
8. Never mention outsourcing or individual names always "Nouvo Collective"
9. Payload admin is password-protected, never exposed publicly without auth
10. Local DB is SQLite (`payload.db`), never commit this file to git. Add to `.gitignore`

---

**Build order:**
1. Scaffold Next.js 14 + Payload CMS 3.x + TypeScript + Tailwind + Framer Motion + next-intl
2. Configure `payload.config.ts` with SQLite (local) and all collections/globals
3. Build global layout: fonts, grain overlay, Payload globals for header/footer
4. Build homepage sections (static, no Payload queries needed yet)
5. Build Blog and Case Studies pages using Payload Local API
6. Build remaining static service pages
7. Add SEO metadata from Payload SiteSettings global

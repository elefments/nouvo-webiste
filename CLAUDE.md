# Nouvo Collective | nouvo.agency
# Claude Code project context. Read this before every session.

---

## Stack

- Next.js 14 App Router + TypeScript
- Payload CMS 3.x (inside Next.js app folder)
- Tailwind CSS + Framer Motion
- next-intl (Greek default `/`, English `/en/`)
- SQLite locally, PostgreSQL (Neon/Supabase) in production

## Commands

```bash
pnpm dev          # dev server at localhost:3000 + admin at localhost:3000/admin
pnpm build        # production build
pnpm lint         # ESLint
pnpm type-check   # tsc --noEmit
```

## Docs

| File | What it contains |
|---|---|
| `docs/nouvo-dev-prompt.md` | Full build spec: colors, typography, components, animations, Payload config, file structure |
| `docs/BRIEF.md` | Brand identity, color system, typography, UI patterns, spacing, technical specs |
| `docs/SITEMAP.md` | All pages, URLs (GR + EN), page count |
| `docs/copy/*.md` | Page copy for every page: H1, H2, body, CTAs, meta, FAQ |

**Always read the relevant doc before building anything.**

## Copy files

Copy for every page lives in `docs/copy/`. Before building any page, read the corresponding file. NEVER invent or paraphrase copy.

| File | Pages |
|---|---|
| `homepage-copy.md` | `/` |
| `services-overview-copy.md` | `/ypiresies` |
| `websites-digital-presence-copy.md` | Websites category + sub-pages overview |
| `search-visibility-copy.md` | Search category + sub-pages overview |
| `marketing-digital-growth-copy.md` | Marketing category + sub-pages overview |
| `digital-transformation-ai-copy.md` | AI category + sub-pages overview |
| `it-support-maintenance-copy.md` | IT Support category + sub-pages overview |
| `eshop-copy.md` | `/ypiresies/kataskevi-istoselidon/eshop` |
| `corporate-website-copy.md` | `/ypiresies/kataskevi-istoselidon/etairiki-istoselida` |
| `websites-subpages-copy.md` | Landing Page, Portfolio, Kratisseon, Redesign |
| `search-subpages-copy.md` | SEO, Local SEO, Technical SEO, AEO, GEO, HEO |
| `marketing-ai-it-subpages-copy.md` | Google Ads, Meta Ads, TikTok, Email, Content, all AI + IT sub-pages |
| `longtail-pages-copy.md` | 10 SEO long-tail pages |
| `remaining-pages-copy.md` | Case Studies, Contact, Blog, About, Privacy, Cookies |

## Key files in codebase

```
src/payload.config.ts          Payload CMS central config
src/payload-types.ts           Auto-generated, never edit manually
src/collections/               Payload collections (Pages, Posts, CaseStudies, Media, Users)
src/globals/                   Payload globals (Header, Footer, SiteSettings)
app/(app)/[locale]/            Next.js pages (next-intl routes)
app/(payload)/admin/           Payload admin panel
public/fonts/                  All local fonts, never load from CDN
messages/el.json               Greek strings (next-intl)
messages/en.json               English strings (next-intl)
```

## Design rules (non-negotiable)

- `border-radius: 100px` on buttons, tags, badges, inputs, nav items
- `border-radius: 16px to 20px` on cards only
- Background always `#FFFFFF`, never tinted
- No templates or pre-built UI libraries (shadcn OK for primitives only)
- All fonts local, zero external font requests
- Every page needs canonical + hreflang (`el` + `en` + `x-default`)
- Never hardcode phone numbers anywhere
- Never reference individual names, always "Nouvo Collective"
- Zero em dashes anywhere in code or content

## Colors

```
bg:      #FFFFFF    surface: #F7F7F7
text:    #1E1E1E    accent:  #E34F39
muted:   #575657 / #757474 / #AEACAE
border:  rgba(0,0,0,0.07)
```

## Typography

```
Snaga Unicase Display  headings H1-H4   /public/fonts/Snaga_Uni_Display_*.ttf
Sofia Pro              body             /public/fonts/Sofia_Pro_*.ttf
PF Marlet Display      quotes/accents   /public/fonts/PF_Marlet_Display_*.ttf
```

## i18n

- Greek at `/` (default locale), English at `/en/`
- Greek pages use greeklish URLs (e.g. `/ypiresies/kataskevi-istoselidon`)
- English pages under `/en/` (e.g. `/en/services/websites-digital-presence`)
- See `docs/SITEMAP.md` for all URLs

## Payload admin

- Local: `http://localhost:3000/admin`
- Never indexed by Google, `Disallow: /admin` in robots.txt
- `payload.db` (SQLite) never committed to git

## Build order

1. Scaffold Next.js 14 + Payload 3.x + TypeScript + Tailwind + Framer Motion + next-intl
2. Configure `payload.config.ts` with SQLite adapter and all collections/globals
3. Global layout: fonts, grain overlay, header, footer (from Payload globals)
4. Homepage sections (static)
5. Blog and Case Studies (Payload Local API)
6. Service category pages and sub-pages (read copy files before each)
7. SEO long-tail pages
8. Legal pages (Privacy, Cookies)

## When compacting

Always preserve: active file list, Payload collection schemas, current build errors, Tailwind config, copy file references.

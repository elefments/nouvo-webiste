# Performance Audit Report
## nouvo.agency | Nouvo Collective
**Date:** May 2026 | **Auditor:** Codebase analysis (pre-deployment)

---

## Executive Summary

**Overall Performance Score: 62/100**

The site has a solid foundation (server components, local fonts, no external dependencies) but has **7 critical issues** and **9 high-priority optimizations** that will significantly impact Core Web Vitals and page load.

### Top 5 Critical Issues
1. **803 KB of font files** loaded with no subsetting (12 WOFF2 files)
2. **Zero `next/image` usage** - all `<img>` tags are raw HTML (no optimization)
3. **No `robots.txt`** - crawlers have no directives
4. **No `sitemap.xml`** generation
5. **Grain overlay animation runs continuously** on every page (GPU cost)

### Top 5 Quick Wins
1. Subset fonts to Latin + Greek Extended (~60-70% size reduction)
2. Replace `<img>` with `next/image` in 5 locations
3. Add `robots.txt` and XML sitemap
4. Add `generateStaticParams` for static generation of service pages
5. Lazy-load Manifesto component (Framer Motion below fold)

---

## 1. FONTS (Critical)

### Problem: 803 KB total font payload

| Font Family | Files | Total Size | Used Weights |
|---|---|---|---|
| Snaga Unicase Display | 3 | 168 KB | 600, 700, 800 |
| Sofia Pro | 5 | 437 KB | 300, 400, 400i, 500, 600 |
| PF Marlet Display | 4 | 198 KB | 300, 300i, 400, 400i |

### Issues
- **No font subsetting**: Full character sets shipped (Latin, Cyrillic, all glyphs). Site only uses Latin + Greek Extended
- **12 font files on first load**: Even with `display: swap`, the browser must download all variants
- **Marlet 4 variants**: Only used for manifesto quote and footer tagline. 198 KB for 2 text elements
- **Sofia Pro Light (300)**: Used only in Hero subtext. 85 KB for one element

### Recommendations
| Action | Impact | Effort |
|---|---|---|
| **Subset all fonts to Latin + Greek Extended** | -500 KB (~60% reduction) | Medium |
| **Remove Marlet Light Italic** (unused) | -41 KB | Low |
| **Preload critical fonts only** (Sofia Regular + Snaga Bold) | Better LCP | Low |
| **Consider variable fonts** if available | Fewer files | Medium |

---

## 2. IMAGES (Critical)

### Problem: Zero image optimization

**5 locations use raw `<img>` tags** instead of `next/image`:
- `blog/page.tsx` (line 120) - blog post thumbnails
- `blog/[slug]/page.tsx` (lines 160, 236) - featured images
- `case-studies/page.tsx` (line 135) - project thumbnails
- `case-studies/[slug]/page.tsx` (line 115) - featured images

### Issues
- **No automatic resizing**: Full-size images served regardless of viewport
- **No WebP/AVIF conversion**: Original format served
- **No lazy loading**: All images load eagerly (no `loading="lazy"`)
- **No `sizes` attribute**: Browser can't choose optimal resolution
- **No blur placeholder**: No progressive loading experience

### Recommendations
| Action | Impact | Effort |
|---|---|---|
| **Replace all `<img>` with `next/image`** | Major LCP + bandwidth savings | Medium |
| **Add `sizes` prop** for responsive images | Better bandwidth on mobile | Low |
| **Add `priority` to above-fold images** | Better LCP | Low |
| **Configure Payload media to generate srcset** | Automated optimization | Medium |

---

## 3. CLIENT BUNDLES (High)

### 'use client' Components (6 total)

| Component | Reason | Bundle Impact |
|---|---|---|
| `Header.tsx` | scroll listener, useState, onClick | Low (necessary) |
| `LanguageToggle.tsx` | useLocale, usePathname | Low (necessary) |
| `Manifesto.tsx` | framer-motion scroll animation | **HIGH** |
| `ContactPage.tsx` | framer-motion animations | **HIGH** |
| `AboutPage.tsx` | framer-motion animations | **HIGH** |
| `LegalPage.tsx` | framer-motion animations | **MEDIUM** |

### Framer Motion Impact
- `framer-motion` v12 is ~130 KB minified + gzipped
- Used in 4 components, 3 of which only use simple fade-in animations
- The Manifesto component uses `useScroll`/`useTransform` (heavier)

### Recommendations
| Action | Impact | Effort |
|---|---|---|
| **Replace framer-motion fade-ins with CSS animations** in About, Contact, Legal | -130 KB from those pages | Medium |
| **Dynamic import Manifesto** with `next/dynamic` + `ssr: false` | Deferred load | Low |
| **Keep framer-motion only where scroll-driven animation is needed** | Smaller initial bundle | Medium |
| **Use `motion/react` lightweight import** if staying with FM | Smaller tree-shake | Low |

---

## 4. GRAIN OVERLAY (High)

### Problem: Continuous GPU-intensive animation on every page

```css
body::before {
  content: '';
  position: fixed;
  width: 200%; height: 200%;  /* 4x viewport area */
  background-image: url("data:image/svg+xml,...");  /* SVG noise filter */
  animation: grain 0.5s steps(1) infinite;  /* runs forever */
  z-index: 9999;
}
```

### Issues
- **200% width/height pseudo-element**: The element is 4x the viewport size
- **Infinite animation at 0.5s**: Triggers compositor every 500ms
- **z-index: 9999**: Forces a separate compositing layer
- **SVG filter inline**: Re-parsed on every page navigation
- **No `will-change` hint**: Browser can't optimize the animation layer

### Recommendations
| Action | Impact | Effort |
|---|---|---|
| **Use a static PNG grain texture** instead of SVG filter | -CPU, simpler composite | Low |
| **Reduce element to 100% viewport** + use `background-repeat` | Less memory | Low |
| **Add `will-change: transform`** | GPU-optimized layer | Low |
| **Consider `animation-play-state: paused` when tab not visible** | Save CPU in background | Low |
| **Reduce grain to 100x100 tile** with `background-size` + repeat | Smaller texture | Low |

---

## 5. STATIC GENERATION (High)

### Problem: No `generateStaticParams` anywhere

All 47+ static pages are rendered on-demand (SSR) on every request instead of being pre-built at build time.

### Pages that should be statically generated
- **Homepage** (both locales)
- **All 5 service category pages** (10 with both locales)
- **All 25 sub-service pages** (50 with both locales)
- **All 10 long-tail pages** (20 with both locales)
- **Services overview** (2)
- **Contact, About** (4)
- **Legal pages** (4)
- **Total: ~90 static pages** that never change without a code deploy

### Recommendations
| Action | Impact | Effort |
|---|---|---|
| **Add `generateStaticParams` to service catch-all routes** | ISR, faster TTFB | Medium |
| **Add `export const dynamic = 'force-static'`** on data-driven pages | Build-time rendering | Low |
| **Add `revalidate` to Payload-fetched pages** (blog, case studies) | ISR for dynamic content | Low |

---

## 6. MISSING INFRASTRUCTURE (Critical)

### No robots.txt
- Crawlers have zero directives
- `/admin` panel is indexable by search engines
- No sitemap reference

### No sitemap.xml
- 90+ pages with no XML sitemap for crawler discovery
- Bilingual structure requires `xhtml:link` hreflang in sitemap

### No favicon / manifest
- No `favicon.ico`, `apple-touch-icon`, or `site.webmanifest` detected
- Missing from root layout metadata

### Recommendations
| Action | Impact | Effort |
|---|---|---|
| **Create `public/robots.txt`** with `Disallow: /admin` + sitemap ref | Critical for SEO | Low |
| **Add dynamic sitemap** via `app/sitemap.ts` | Crawler discovery | Medium |
| **Add favicon + manifest** to root layout | Branding + PWA basics | Low |

---

## 7. METADATA GAPS (Medium)

### Missing from root layout
- No `viewport` meta (Next.js 14+ handles this, but verify)
- No `theme-color` meta
- No default OG image
- No Twitter card meta

### Missing from page metadata
- **No `openGraph` on service/legal/about/contact pages** - only homepage has OG
- **No `twitter` card metadata** on any page
- **No JSON-LD schema** on any page (Organization, WebSite, BreadcrumbList, FAQPage)

---

## 8. DATA FILE SIZES (Low)

| File | Lines | Concern |
|---|---|---|
| `services.ts` | 335 | Ships full bilingual data for all 5 categories |
| `legal.ts` | 317 | Full legal text in both languages |
| `longtail-pages.ts` | 108 | OK |
| `services-overview.ts` | 96 | OK |
| `about.ts` | 92 | OK |
| `contact.ts` | 62 | OK |

### Note
These data files are server-side only (imported in server components or data layer). They don't bloat the client bundle. **No action needed** unless they grow significantly.

---

## 9. RENDERING PATTERNS (Medium)

### Marquee Animation
- Simple CSS-only `translateX` animation - **efficient**
- Duplicates items array `[...items, ...items]` - creates 16 spans. Fine.
- Consider adding `will-change: transform` for smoother GPU compositing

### Header Scroll Listener
- Uses `{ passive: true }` on scroll - **correct**
- `backdrop-blur-[20px]` on scroll - triggers compositing but is standard
- Services dropdown uses hover state (JS) - **OK for desktop, needs touch handling for mobile**

### Inline SVG Icons (Footer)
- 4 social icons rendered as inline SVG - **efficient** (no extra requests)

---

## 10. THIRD-PARTY DEPENDENCIES (Low)

### Client-side JS dependencies
| Package | Bundle Impact | Used For |
|---|---|---|
| `framer-motion` | ~130 KB gzip | 4 components (animations) |
| `next-intl` (client) | ~15 KB gzip | Header, LanguageToggle |
| React 19 | Included in Next.js | - |

### No external scripts detected
- No Google Analytics, Tag Manager, or third-party tracking
- No external font requests (CDN)
- No chat widgets or external embeds

**This is excellent for performance.** When adding analytics later, use `next/script` with `strategy="lazyOnload"`.

---

## Priority Action Plan

### Critical (fix before launch)
1. [ ] Add `public/robots.txt` with `Disallow: /admin`, sitemap reference
2. [ ] Create `app/sitemap.ts` for dynamic XML sitemap with hreflang
3. [ ] Subset all fonts to Latin + Greek Extended (target: <300 KB total)
4. [ ] Replace raw `<img>` with `next/image` in blog and case study pages
5. [ ] Optimize grain overlay (static PNG, 100% size, `will-change`)

### High (fix within 1 week)
6. [ ] Add `generateStaticParams` for service pages
7. [ ] Add `dynamic = 'force-static'` on contact, about, legal pages
8. [ ] Replace framer-motion with CSS animations for simple fade-ins
9. [ ] Dynamic import Manifesto component
10. [ ] Add preload for critical fonts (Sofia Regular, Snaga Bold)
11. [ ] Add `revalidate: 3600` on blog/case-studies pages
12. [ ] Add default OG image to root metadata
13. [ ] Add favicon + apple-touch-icon + manifest

### Medium (fix within 1 month)
14. [ ] Add JSON-LD schema (Organization, WebSite, BreadcrumbList, FAQPage)
15. [ ] Add `openGraph` + `twitter` metadata to all page types
16. [ ] Configure Payload media for responsive image generation
17. [ ] Add `sizes` attribute to all images
18. [ ] Add `theme-color` meta tag

### Low (backlog)
19. [ ] Consider variable fonts if available
20. [ ] Remove unused Marlet Light Italic variant
21. [ ] Add `loading="lazy"` fallback for non-Next.js images
22. [ ] Add `animation-play-state` optimization for grain in background tabs

---

## Estimated Impact

| Metric | Current (estimated) | After Critical fixes | After All fixes |
|---|---|---|---|
| **LCP** | 2.5-3.5s | 1.5-2.0s | <1.5s |
| **FCP** | 1.5-2.0s | 0.8-1.2s | <0.8s |
| **CLS** | 0.05-0.1 | <0.05 | <0.02 |
| **INP** | <100ms | <100ms | <50ms |
| **Total Font Payload** | 803 KB | ~280 KB | ~250 KB |
| **JS Bundle (client)** | ~180 KB | ~120 KB | ~60 KB |
| **Lighthouse Score** | 65-75 | 85-90 | 95+ |

---

*Performance Audit v1.0 | Nouvo Collective | May 2026*

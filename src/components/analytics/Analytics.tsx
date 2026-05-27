/**
 * Analytics
 *
 * Loads all third-party measurement scripts in the correct order:
 *
 * 1. Consent Mode v2 defaults (inline, runs before GTM)
 * 2. Google Tag Manager  — strategy="afterInteractive"  (after hydration)
 * 3. Microsoft Clarity   — strategy="lazyOnload"        (after load event)
 * 4. ConsentManager      — client component, syncs localStorage → gtag consent
 *
 * Environment variables (set in Vercel project settings):
 *   NEXT_PUBLIC_GTM_ID          e.g. GTM-XXXXXXX
 *   NEXT_PUBLIC_CLARITY_ID      e.g. abcdefghij
 *
 * If a variable is missing the corresponding script is simply not rendered,
 * so the component is safe to deploy before IDs are configured.
 *
 * Google Search Console verification lives in generateMetadata() of the
 * root layout — no JS needed, just a <meta> tag.
 */

import Script from 'next/script'
import { ConsentManager } from './ConsentManager'

const GTM_ID     = process.env.NEXT_PUBLIC_GTM_ID
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID

// Consent Mode v2 defaults — must execute BEFORE GTM initialises.
// All storage denied by default; ConsentManager upgrades them after
// the user accepts cookies.
const CONSENT_DEFAULTS = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  analytics_storage:      'denied',
  ad_storage:             'denied',
  ad_user_data:           'denied',
  ad_personalization:     'denied',
  functionality_storage:  'granted',
  personalization_storage:'denied',
  security_storage:       'granted',
  wait_for_update:        500
});
`

export function Analytics() {
  return (
    <>
      {/* ── 1. Consent Mode v2 defaults (synchronous, before GTM) ─────────── */}
      <script
        dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULTS }}
      />

      {/* ── 2. Google Tag Manager ─────────────────────────────────────────── */}
      {GTM_ID && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
              `,
            }}
          />
          {/* GTM noscript fallback */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* ── 3. Microsoft Clarity (lazyOnload = after load event, zero LCP impact) */}
      {CLARITY_ID && (
        <Script
          id="clarity-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window,document,"clarity","script","${CLARITY_ID}");
            `,
          }}
        />
      )}

      {/* ── 4. Consent sync (client-side, no render output) ──────────────── */}
      <ConsentManager />
    </>
  )
}

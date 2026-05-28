// No 'use client' — this is a Server Component.
// All animation is CSS-only via the marquee keyframe in globals.css.


interface LogoItem {
  name: string
  file: string
}

const TECH_LOGOS: LogoItem[] = [
  { name: 'WordPress', file: 'wordpress' },
  { name: 'WooCommerce', file: 'woocommerce' },
  { name: 'Elementor', file: 'elementor' },
  { name: 'Next.js', file: 'nextjs' },
  { name: 'Node.js', file: 'nodejs' },
  { name: 'React', file: 'react' },
  { name: 'Tailwind CSS', file: 'tailwindcss' },
  { name: 'Framer', file: 'framer' },
]

const MARKETING_LOGOS: LogoItem[] = [
  { name: 'Google Analytics 4', file: 'ga4' },
  { name: 'Google Tag Manager', file: 'gtm' },
  { name: 'Google Search Console', file: 'gsc' },
  { name: 'Meta Ads', file: 'meta' },
  { name: 'Google Ads', file: 'googleads' },
  { name: 'TikTok Ads', file: 'tiktok' },
  { name: 'LinkedIn Ads', file: 'linkedin' },
  { name: 'Bing', file: 'bing' },
  { name: 'MS Clarity', file: 'msclarity' },
  { name: 'Mixpanel', file: 'mixpanel' },
  { name: 'Mailchimp', file: 'mailchimp' },
  { name: 'HubSpot', file: 'hubspot' },
  { name: 'MailerLite', file: 'mailerlite' },
]

const AI_LOGOS: LogoItem[] = [
  { name: 'Anthropic', file: 'anthropic' },
  { name: 'OpenAI', file: 'openai' },
  { name: 'Gemini', file: 'gemini' },
  { name: 'Google Cloud', file: 'googlecloud' },
  { name: 'DeepSeek', file: 'deepseek' },
  { name: 'Grok', file: 'grok' },
  { name: 'Zapier', file: 'zapier' },
  { name: 'n8n', file: 'n8n' },
  { name: 'Make.com', file: 'make' },
]

const CATEGORY_MAP = {
  tech: {
    logos: TECH_LOGOS,
    label: { el: 'Τεχνολογίες Κατασκευής', en: 'Development Stack' },
    speed: '28s',
    reverse: false,
  },
  marketing: {
    logos: MARKETING_LOGOS,
    label: { el: 'Εργαλεία Marketing & Analytics', en: 'Marketing & Analytics Tools' },
    speed: '38s',
    reverse: true,
  },
  ai: {
    logos: AI_LOGOS,
    label: { el: 'AI & Αυτοματισμός', en: 'AI & Automation' },
    speed: '26s',
    reverse: false,
  },
}

interface TechLogosMarqueeProps {
  category: 'tech' | 'marketing' | 'ai'
  locale: 'el' | 'en'
}

export function TechLogosMarquee({ category, locale }: TechLogosMarqueeProps) {
  const { logos, label, speed, reverse } = CATEGORY_MAP[category]
  const doubled = [...logos, ...logos]

  return (
    <div className="py-10 overflow-hidden border-y border-nc-border bg-white">
      {/* Label */}
      <p className="text-center text-[10px] font-medium uppercase tracking-[0.18em] text-nc-muted-light mb-7">
        {label[locale]}
      </p>

      {/* Marquee track */}
      <div
        className="flex items-center gap-10 whitespace-nowrap"
        style={{
          animation: `marquee ${speed} linear infinite ${reverse ? 'reverse' : ''}`,
        }}
      >
        {doubled.map((logo, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 flex-col items-center gap-2 group"
            title={logo.name}
          >
            <span className="flex h-8 w-8 items-center justify-center opacity-40 grayscale transition-all duration-300 group-hover:opacity-80 group-hover:grayscale-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/logos/${logo.file}.svg`}
                alt={logo.name}
                width={32}
                height={32}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-[10px] text-nc-muted-light tracking-wide font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              {logo.name}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

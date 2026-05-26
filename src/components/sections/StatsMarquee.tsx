const statsEl = [
  { value: '100+', label: 'επιχειρήσεις' },
  { value: '16+', label: 'χρόνια εμπειρίας' },
  { value: '5', label: 'υπηρεσίες' },
  { value: '100%', label: 'custom υλοποίηση' },
  { value: '0', label: 'templates' },
  { value: 'Strategy', label: 'first' },
]

const statsEn = [
  { value: '100+', label: 'businesses' },
  { value: '16+', label: 'years of experience' },
  { value: '5', label: 'core services' },
  { value: '100%', label: 'custom execution' },
  { value: '0', label: 'templates' },
  { value: 'Strategy', label: 'first' },
]

export function StatsMarquee({ locale }: { locale: 'el' | 'en' }) {
  const items = locale === 'el' ? statsEl : statsEn
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-nc-border bg-white py-6">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: 'marquee 32s linear infinite reverse' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-baseline gap-2 shrink-0"
          >
            <span className="font-snaga text-[26px] leading-none tracking-[-0.02em] text-nc-text">
              {item.value}
            </span>
            <span className="font-sofia text-[13px] uppercase tracking-[0.1em] text-nc-muted-mid">
              {item.label}
            </span>
            <span className="ml-6 text-nc-accent/30 text-[20px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

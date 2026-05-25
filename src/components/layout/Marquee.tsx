const items = [
  'Beyond Digital',
  'Pure Strategy',
  'Systems First',
  'Architecture Matters',
  'Strategy Must Operate',
  'Structure Before Surface',
  'AI Needs Purpose',
  'Built to Scale',
]

export function Marquee() {
  return (
    <div className="overflow-hidden bg-nc-accent py-3">
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-sm font-medium tracking-widest uppercase text-white"
          >
            {item} ✦
          </span>
        ))}
      </div>
    </div>
  )
}

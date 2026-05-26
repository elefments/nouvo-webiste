import { AnimateIn } from '@/components/ui/AnimateIn'

export type ResultMetric = {
  value: string
  label: string
}

export function ResultsBar({ metrics }: { metrics: ResultMetric[] }) {
  return (
    <AnimateIn variant="fadeUp">
      <div className="rounded-[20px] bg-nc-text overflow-hidden">
        <div className={`grid divide-y divide-white/10 sm:divide-y-0 sm:divide-x sm:grid-cols-${metrics.length}`}>
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center py-8 px-6 text-center">
              <span
                className="font-snaga leading-none text-nc-accent"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
              >
                {m.value}
              </span>
              <span className="mt-2 font-sofia text-[12px] uppercase tracking-[0.12em] text-white/50">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AnimateIn>
  )
}

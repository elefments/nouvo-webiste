/** Animated loading skeleton components using Tailwind's animate-pulse */

export function SkeletonText({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 rounded-full bg-nc-surface"
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        />
      ))}
    </div>
  )
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-[20px] bg-nc-surface overflow-hidden ${className}`}>
      <div className="aspect-[4/3] bg-[rgba(0,0,0,0.05)]" />
      <div className="p-5 space-y-3">
        <div className="h-3 w-20 rounded-full bg-[rgba(0,0,0,0.07)]" />
        <div className="h-5 w-full rounded-full bg-[rgba(0,0,0,0.07)]" />
        <div className="h-5 w-3/4 rounded-full bg-[rgba(0,0,0,0.07)]" />
      </div>
    </div>
  )
}

export function SkeletonHeading({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse space-y-3 ${className}`}>
      <div className="h-3 w-24 rounded-full bg-nc-surface" />
      <div className="h-10 w-3/4 rounded-full bg-nc-surface" />
      <div className="h-10 w-1/2 rounded-full bg-nc-surface" />
    </div>
  )
}

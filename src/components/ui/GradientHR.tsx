export function GradientHR({ className = '' }: { className?: string }) {
  return (
    <div
      className={`h-px w-full bg-gradient-to-r from-transparent via-nc-accent/25 to-transparent ${className}`}
    />
  )
}

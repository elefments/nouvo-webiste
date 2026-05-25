export function Arrow({
  size = 20,
  color = 'currentColor',
  className,
}: {
  size?: number
  color?: string
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <line x1="4" y1="16" x2="16" y2="4" stroke={color} strokeWidth="1.5" />
      <polyline
        points="7,4 16,4 16,13"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

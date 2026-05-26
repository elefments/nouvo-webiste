/**
 * Animated SVG icon library for Nouvo.
 * Each icon has CSS-based entrance + hover animations.
 * Usage: <IconGlobe className="..." /> — all accept size, color, className.
 */

interface IconProps {
  size?: number
  color?: string
  className?: string
}

const defaults = { size: 24, color: 'currentColor' }

/* ──────────── Service Category Icons ──────────── */

/** Globe / Websites & Digital Presence */
export function IconGlobe({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:rotate-12 ${className}`}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

/** Search / SEO & Visibility */
export function IconSearch({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  )
}

/** Megaphone / Marketing & Digital Growth */
export function IconMegaphone({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:-rotate-6 hover:scale-105 ${className}`}
    >
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
      <path d="M2 8h0M22 8h0" className="animate-icon-pulse" />
    </svg>
  )
}

/** Brain / AI & Digital Transformation (kept for backwards compat) */
export function IconBrain({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return <IconCPU size={size} color={color} className={className} />
}

/** CPU / Processor chip — AI & Automation */
export function IconCPU({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {/* Chip body */}
      <rect x="6" y="6" width="12" height="12" rx="2" />
      {/* Inner quad — 4 cells suggesting circuitry */}
      <rect x="9" y="9" width="2.5" height="2.5" rx="0.5" />
      <rect x="12.5" y="9" width="2.5" height="2.5" rx="0.5" />
      <rect x="9" y="12.5" width="2.5" height="2.5" rx="0.5" />
      <rect x="12.5" y="12.5" width="2.5" height="2.5" rx="0.5" />
      {/* Pins — left */}
      <path d="M6 10H3M6 14H3" />
      {/* Pins — right */}
      <path d="M18 10H21M18 14H21" />
      {/* Pins — top */}
      <path d="M10 6V3M14 6V3" />
      {/* Pins — bottom */}
      <path d="M10 18V21M14 18V21" />
    </svg>
  )
}

/** Shield / IT Support & Maintenance */
export function IconShield({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

/* ──────────── Process / Step Icons ──────────── */

/** Clipboard / Brief & Discovery */
export function IconClipboard({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:-rotate-3 hover:scale-105 ${className}`}
    >
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  )
}

/** Compass / Strategy */
export function IconCompass({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-500 hover:rotate-45 ${className}`}
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill={color} opacity="0.15" stroke="none" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

/** Code / Development & Build */
export function IconCode({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  )
}

/** Rocket / Launch */
export function IconRocket({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:-translate-y-1 hover:translate-x-0.5 ${className}`}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

/** Chart / Analytics & Growth */
export function IconChart({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <path d="M3 3v18h18" />
      <path d="M7 16l4-8 4 4 5-9" />
    </svg>
  )
}

/* ──────────── General Purpose Icons ──────────── */

/** Mail / Email */
export function IconMail({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  )
}

/** Phone */
export function IconPhone({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:rotate-12 ${className}`}
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

/** MapPin / Location */
export function IconMapPin({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:-translate-y-1 ${className}`}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

/** Clock / Time */
export function IconClock({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

/** Checkmark / Completed */
export function IconCheck({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

/** Target / Goals */
export function IconTarget({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-500 hover:rotate-90 ${className}`}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

/** Users / Team */
export function IconUsers({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}

/** Lightbulb / Ideas & Innovation */
export function IconLightbulb({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:-translate-y-0.5 hover:scale-105 ${className}`}
    >
      <path d="M9 18h6M10 22h4" />
      <path d="M12 2a7 7 0 00-4 12.73V17h8v-2.27A7 7 0 0012 2z" />
    </svg>
  )
}

/** Layers / Systems & Architecture */
export function IconLayers({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

/** Zap / Speed & Performance */
export function IconZap({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

/** Lock / Security & Privacy */
export function IconLock({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  )
}

/** Sparkles / Premium & Quality */
export function IconSparkles({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-500 hover:rotate-12 hover:scale-110 ${className}`}
    >
      <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
      <path d="M19 15l.5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5.5-2z" />
      <path d="M5 17l.5 1.5 1.5.5-1.5.5L5 21l-.5-1.5L3 19l1.5-.5L5 17z" />
    </svg>
  )
}

/** ArrowRight / CTA & Navigation (animated) */
export function IconArrowRight({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 group-hover:translate-x-1 ${className}`}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

/** Handshake / Partnership & Collaboration */
export function IconHandshake({ size = defaults.size, color = defaults.color, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <path d="M11 17l-1.5 1.5a2.12 2.12 0 01-3 0L4 16" />
      <path d="M13 17l1.5 1.5a2.12 2.12 0 003 0L20 16" />
      <path d="M2 9l3.5-3.5a2.12 2.12 0 013 0L12 9" />
      <path d="M22 9l-3.5-3.5a2.12 2.12 0 00-3 0L12 9" />
      <path d="M4 16l4-4 4 4" />
      <path d="M20 16l-4-4-4 4" />
    </svg>
  )
}

/* ──────────── Icon Map for Service Categories ──────────── */

/** Returns the appropriate icon for a service category index (0-4) */
export function ServiceIcon({ index, size = 28, className = '' }: { index: number; size?: number; className?: string }) {
  const iconClass = `text-nc-accent ${className}`
  switch (index) {
    case 0:
      return <IconGlobe size={size} className={iconClass} />
    case 1:
      return <IconSearch size={size} className={iconClass} />
    case 2:
      return <IconMegaphone size={size} className={iconClass} />
    case 3:
      return <IconBrain size={size} className={iconClass} />
    case 4:
      return <IconShield size={size} className={iconClass} />
    default:
      return <IconSparkles size={size} className={iconClass} />
  }
}

/** Returns an icon for process/approach step index */
export function StepIcon({ index, size = 24, className = '' }: { index: number; size?: number; className?: string }) {
  const iconClass = `text-nc-accent ${className}`
  const icons = [
    <IconClipboard key={0} size={size} className={iconClass} />,
    <IconCompass key={1} size={size} className={iconClass} />,
    <IconCode key={2} size={size} className={iconClass} />,
    <IconRocket key={3} size={size} className={iconClass} />,
    <IconChart key={4} size={size} className={iconClass} />,
  ]
  return icons[index % icons.length]
}

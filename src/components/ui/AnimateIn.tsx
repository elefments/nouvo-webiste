'use client'

/**
 * AnimateIn — scroll-triggered entrance animation wrapper.
 *
 * Uses Framer Motion `whileInView` + IntersectionObserver under the hood.
 * - Only compositor properties: opacity + transform (zero layout/paint cost)
 * - `once: true` means the animation fires once and stays — no reverse on scroll-out
 * - Respects `prefers-reduced-motion` via Framer Motion's global reducedMotion setting
 * - `as` prop lets you render as any HTML element to avoid extra div wrappers
 */

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { Variants } from 'framer-motion'

type Variant = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleUp'

const VARIANTS: Record<Variant, Variants> = {
  fadeUp:     { hidden: { opacity: 0, y: 32 },       visible: { opacity: 1, y: 0 } },
  fadeIn:     { hidden: { opacity: 0 },               visible: { opacity: 1 } },
  slideLeft:  { hidden: { opacity: 0, x: 48 },        visible: { opacity: 1, x: 0 } },
  slideRight: { hidden: { opacity: 0, x: -48 },       visible: { opacity: 1, x: 0 } },
  scaleUp:    { hidden: { opacity: 0, scale: 0.92 },  visible: { opacity: 1, scale: 1 } },
}

const EASE = [0.22, 1, 0.36, 1] as const

type AnimateInProps = {
  children: ReactNode
  variant?: Variant
  delay?: number
  duration?: number
  className?: string
  /** Set true for stagger parent — wraps children with staggerChildren */
  stagger?: boolean
  staggerDelay?: number
}

/** Single element with entrance animation */
export function AnimateIn({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.55,
  className = '',
}: AnimateInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-72px' }}
      variants={{ hidden: VARIANTS[variant].hidden, visible: VARIANTS[variant].visible }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/** Container that staggers its children's entrance animations */
export function AnimateInGroup({
  children,
  staggerDelay = 0.1,
  className = '',
}: {
  children: ReactNode
  staggerDelay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-72px' }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } },
        hidden:  {},
      }}
    >
      {children}
    </motion.div>
  )
}

/** Child item for use inside AnimateInGroup */
export function AnimateInItem({
  children,
  variant = 'fadeUp',
  duration = 0.55,
  className = '',
}: {
  children: ReactNode
  variant?: Variant
  duration?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{ hidden: VARIANTS[variant].hidden, visible: VARIANTS[variant].visible }}
      transition={{ duration, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

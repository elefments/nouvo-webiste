'use client'

/**
 * HeroVisuals — rich animated background for the homepage hero.
 *
 * Composition layers (back → front):
 *  1. Dot grid texture (CSS background-image, static)
 *  2. Warm radial glow (static CSS gradient)
 *  3. Concentric rings system (CSS spin animations)
 *     — outer ring: very subtle, overflows for depth
 *     — middle ring: dashed + 4 orbiting nodes that travel with it
 *     — inner ring: accent colour with soft box-shadow glow
 *  4. Centre pulse dot (keyframe animation)
 *  5. 3 main metric cards (float + mouse parallax)
 *  6. 2 compact pill indicators (float + mouse parallax)
 *  7. Micro-dots (ambient pulse)
 *
 * Performance:
 *  — Only `transform` and `opacity` used in animations → compositor layer only
 *  — Mouse parallax: passive mousemove + RAF lerp → 60fps, zero layout work
 *  — `will-change: transform` on the 6 parallax elements only
 *  — Respects `prefers-reduced-motion` and touch devices (static fallback)
 */

import { useEffect, useRef } from 'react'
import {
  IconChart,
  IconRocket,
  IconBrain,
  IconZap,
  IconShield,
} from '@/components/ui/Icons'

/* ── Data ────────────────────────────────────────────────── */

const mainCards = [
  {
    Icon: IconChart,
    category: 'SEO',
    value: '+240%',
    label: 'Organic Traffic',
    posClass: 'top-[3%] right-[0%]',
    anim: 'floatA',
    delay: '0s',
    depth: 0.9,
  },
  {
    Icon: IconRocket,
    category: 'Websites',
    value: '4.2×',
    label: 'Conversions',
    posClass: 'top-[46%] right-[0%]',
    anim: 'floatB',
    delay: '1.3s',
    depth: -0.55,
  },
  {
    Icon: IconBrain,
    category: 'AI',
    value: '−60%',
    label: 'Manual Tasks',
    posClass: 'bottom-[3%] right-[18%]',
    anim: 'floatC',
    delay: '0.7s',
    depth: 0.65,
  },
] as const

const pills = [
  {
    Icon: IconZap,
    label: 'Performance: 98',
    posClass: 'top-[47%] left-[0%]',
    delay: '0.45s',
    depth: -0.3,
  },
  {
    Icon: IconShield,
    label: 'Zero Downtime',
    posClass: 'top-[22%] left-[10%]',
    delay: '1.1s',
    depth: 0.4,
  },
] as const

/* Dots sit on the middle ring (radius 190px from centre of container).
   Cardinal positions: top / right / bottom / left */
const NODE_R = 190
const nodePositions = [
  { top: `calc(50% - ${NODE_R + 4}px)`, left: 'calc(50% - 4px)' },
  { top: 'calc(50% - 4px)',             left: `calc(50% + ${NODE_R - 4}px)` },
  { top: `calc(50% + ${NODE_R - 4}px)`, left: 'calc(50% - 4px)' },
  { top: 'calc(50% - 4px)',             left: `calc(50% - ${NODE_R + 4}px)` },
]

/* ── Component ───────────────────────────────────────────── */

export function HeroVisuals({ locale }: { locale: 'el' | 'en' }) {
  const ringsRef = useRef<HTMLDivElement>(null)
  /* one ref slot per card + pill */
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const touch   = window.matchMedia('(hover: none)').matches
    if (reduced || touch) return

    let raf: number
    let tx = 0, ty = 0, cx = 0, cy = 0

    const depths = [...mainCards.map(c => c.depth), ...pills.map(p => p.depth)]

    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth  - 0.5) * 32
      ty = (e.clientY / window.innerHeight - 0.5) * 20
    }

    const tick = () => {
      cx += (tx - cx) * 0.04
      cy += (ty - cy) * 0.04

      if (ringsRef.current) {
        ringsRef.current.style.transform = `translate(${cx * 0.25}px, ${cy * 0.25}px)`
      }

      itemRefs.current.forEach((el, i) => {
        if (!el) return
        const d = depths[i] ?? 1
        el.style.transform = `translate(${cx * d}px, ${cy * d}px)`
      })

      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="relative w-full h-full select-none pointer-events-none"
      aria-hidden="true"
    >

      {/* 1 ── Dot grid texture */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* 2 ── Warm radial glow behind rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(227,79,57,0.09) 0%, transparent 68%)',
          }}
        />
      </div>

      {/* 3 ── Concentric rings + orbiting nodes */}
      <div
        ref={ringsRef}
        className="absolute inset-0 flex items-center justify-center will-change-transform"
      >
        {/* Outer ring — overflows container edges intentionally */}
        <div
          className="absolute w-[580px] h-[580px] rounded-full"
          style={{
            border: '1px solid rgba(0,0,0,0.05)',
            animation: 'spin 64s linear infinite',
          }}
        />

        {/* Middle ring — dashed */}
        <div
          className="absolute w-[380px] h-[380px] rounded-full"
          style={{
            border: '1px dashed rgba(0,0,0,0.10)',
            animation: 'spin 38s linear infinite reverse',
          }}
        />

        {/* Nodes that orbit with the middle ring */}
        <div
          className="absolute w-[380px] h-[380px] rounded-full"
          style={{ animation: 'spin 38s linear infinite reverse' }}
        >
          {nodePositions.map((pos, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width:  i % 2 === 0 ? '8px' : '6px',
                height: i % 2 === 0 ? '8px' : '6px',
                background: i % 2 === 0
                  ? 'rgba(227,79,57,0.55)'
                  : 'rgba(30,30,30,0.18)',
                top:  pos.top,
                left: pos.left,
              }}
            />
          ))}
        </div>

        {/* Inner ring — accent with glow */}
        <div
          className="absolute w-[220px] h-[220px] rounded-full"
          style={{
            border: '1.5px solid rgba(227,79,57,0.45)',
            boxShadow:
              '0 0 50px 8px rgba(227,79,57,0.12), inset 0 0 30px 4px rgba(227,79,57,0.06)',
            animation: 'spin 22s linear infinite',
          }}
        />

        {/* 4 ── Centre pulse dot */}
        <div
          className="w-3 h-3 rounded-full bg-nc-accent"
          style={{ animation: 'centerPulse 2.5s ease-in-out infinite' }}
        />
      </div>

      {/* 5 ── Main metric cards */}
      {mainCards.map((card, i) => (
        <div
          key={i}
          ref={el => { itemRefs.current[i] = el }}
          className={`absolute ${card.posClass} will-change-transform`}
        >
          <div
            className="float-card flex items-center gap-3 bg-white rounded-[16px] px-4 py-3.5"
            style={{
              boxShadow: '0 12px 48px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)',
              animation: `${card.anim} 4.5s ease-in-out infinite`,
              animationDelay: card.delay,
            }}
          >
            {/* Icon box */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-nc-accent/10">
              <card.Icon size={20} className="text-nc-accent" />
            </div>
            {/* Text */}
            <div>
              <p className="font-sofia text-[10px] font-medium tracking-[0.10em] uppercase text-nc-muted-mid leading-none">
                {card.category}
              </p>
              <p className="font-objektiv text-[24px] font-bold text-nc-text leading-none mt-1">
                {card.value}
              </p>
              <p className="font-sofia text-[11px] text-nc-muted-mid mt-0.5">
                {card.label}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* 6 ── Compact pill indicators */}
      {pills.map((pill, i) => (
        <div
          key={i}
          ref={el => { itemRefs.current[mainCards.length + i] = el }}
          className={`absolute ${pill.posClass} will-change-transform`}
        >
          <div
            className="float-card flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3.5 py-2"
            style={{
              boxShadow: '0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.06)',
              animation: 'floatA 5s ease-in-out infinite',
              animationDelay: pill.delay,
            }}
          >
            <pill.Icon size={14} className="text-nc-accent shrink-0" />
            <span className="font-sofia text-[12px] font-medium text-nc-text whitespace-nowrap">
              {pill.label}
            </span>
          </div>
        </div>
      ))}

      {/* 7 ── Ambient micro-dots */}
      <div
        className="absolute top-[13%] right-[40%] w-1.5 h-1.5 rounded-full bg-nc-accent/25 animate-pulse"
        style={{ animationDelay: '0.3s' }}
      />
      <div
        className="absolute bottom-[28%] left-[32%] w-1 h-1 rounded-full bg-nc-border animate-pulse"
        style={{ animationDelay: '1.3s' }}
      />
      <div
        className="absolute top-[68%] left-[20%] w-1.5 h-1.5 rounded-full bg-nc-accent/15 animate-pulse"
        style={{ animationDelay: '0.8s' }}
      />

    </div>
  )
}

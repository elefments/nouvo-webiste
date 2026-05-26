'use client'

/**
 * ServiceHeroVisual — CSS/SVG animated right-column visual for each service category.
 *
 * Categories:
 *   websites  → Browser window with animated skeleton content load
 *   seo       → SERP position card + rising bar chart + scan line
 *   marketing → Campaign dashboard with animated bars + KPI pills
 *   ai        → Neural network with pulsing nodes + data-flow lines
 *   it        → Server rack + shield pulse rings + uptime badge
 *
 * Performance: compositor-only transforms + opacity, no JS loops in the visuals.
 * Respects prefers-reduced-motion via `.svc-anim` class.
 */

/* ── shared helpers ────────────────────────────────────── */

const DOT_GRID: React.CSSProperties = {
  backgroundImage: 'radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

const GLOW: React.CSSProperties = {
  background: 'radial-gradient(circle, rgba(227,79,57,0.09) 0%, transparent 68%)',
}

const CARD_SHADOW = '0 12px 48px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)'
const PILL_SHADOW = '0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)'
const CARD_BORDER = '1px solid rgba(0,0,0,0.05)'
const PILL_BORDER = '1px solid rgba(0,0,0,0.06)'

function FloatCard({ children, className = '', delay = '0s', anim = 'floatA' }: {
  children: React.ReactNode; className?: string; delay?: string; anim?: string
}) {
  return (
    <div
      className={`absolute bg-white rounded-[16px] px-4 py-3 svc-anim ${className}`}
      style={{ boxShadow: CARD_SHADOW, border: CARD_BORDER, animation: `${anim} 4.5s ease-in-out infinite`, animationDelay: delay }}
    >
      {children}
    </div>
  )
}

function Pill({ children, className = '', delay = '0s' }: {
  children: React.ReactNode; className?: string; delay?: string
}) {
  return (
    <div
      className={`absolute flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3.5 py-2 svc-anim ${className}`}
      style={{ boxShadow: PILL_SHADOW, border: PILL_BORDER, animation: 'floatB 5s ease-in-out infinite', animationDelay: delay }}
    >
      {children}
    </div>
  )
}

/* ── 1. Websites visual ─────────────────────────────────── */
function WebsitesVisual() {
  const barDelays = ['0.3s', '0.5s', '0.7s', '0.9s', '1.1s']
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-xl" style={DOT_GRID} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[380px] h-[380px] rounded-full" style={GLOW} />
      </div>

      {/* Browser window */}
      <div
        className="absolute inset-x-4 top-[12%] rounded-[16px] bg-white overflow-hidden svc-anim"
        style={{ boxShadow: CARD_SHADOW, border: CARD_BORDER, animation: 'serviceFadeUp 0.6s ease-out 0.1s both' }}
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-nc-border bg-nc-surface">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
          <div className="flex-1 ml-3 h-6 rounded-full bg-white border border-nc-border flex items-center px-3 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-nc-border" />
            <div className="h-1.5 w-24 rounded-full bg-nc-border" />
          </div>
        </div>

        {/* Page skeleton — animates in sequentially */}
        <div className="p-5">
          {/* Nav links */}
          <div className="flex items-center gap-3 mb-5">
            {['w-6', 'w-8', 'w-10', 'w-7'].map((w, i) => (
              <div key={i} className={`h-2 ${w} rounded-full bg-nc-border svc-anim`}
                style={{ animation: `serviceFadeUp 0.4s ease-out ${0.2 + i * 0.1}s both` }} />
            ))}
            <div className="ml-auto h-6 w-14 rounded-full bg-nc-accent/80 svc-anim"
              style={{ animation: 'serviceFadeUp 0.4s ease-out 0.65s both' }} />
          </div>

          {/* Hero heading */}
          <div className="space-y-2 mb-4">
            <div className="h-3 w-3/4 rounded-full bg-nc-text/70 svc-anim"
              style={{ animation: 'serviceFadeUp 0.4s ease-out 0.8s both' }} />
            <div className="h-3 w-1/2 rounded-full bg-nc-text/70 svc-anim"
              style={{ animation: 'serviceFadeUp 0.4s ease-out 0.95s both' }} />
          </div>

          {/* Body text lines */}
          {['w-full', 'w-5/6', 'w-4/6'].map((w, i) => (
            <div key={i} className={`h-1.5 ${w} rounded-full bg-nc-border mb-1.5 svc-anim`}
              style={{ animation: `serviceFadeUp 0.4s ease-out ${1.1 + i * 0.1}s both` }} />
          ))}

          {/* Bar chart mini */}
          <div className="mt-5 flex items-end gap-1.5 h-12">
            {[40, 65, 50, 80, 60].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-[3px] bg-nc-accent/20 svc-anim"
                style={{
                  height: `${h}%`,
                  transformOrigin: 'bottom',
                  animation: `serviceBarGrow 0.6s ease-out ${0.3 + i * 0.08}s both`,
                }}
              >
                <div className="w-full h-full rounded-t-[3px]"
                  style={{ background: `rgba(227,79,57,${0.2 + (i % 2) * 0.2})` }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scan line over browser */}
      <div
        className="absolute inset-x-4 h-[1.5px] pointer-events-none svc-anim"
        style={{
          top: '42%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(227,79,57,0.5) 50%, transparent 100%)',
          animation: 'serviceScanLine 3.5s linear 1.5s infinite',
        }}
      />

      {/* Performance badge */}
      <FloatCard className="top-[5%] right-[0%]" delay="0s" anim="floatA">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-[8px] bg-nc-accent/10 flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E34F39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div>
            <p className="text-[9px] font-medium tracking-[0.10em] uppercase text-nc-muted-mid leading-none">Performance</p>
            <p className="text-[22px] font-bold text-nc-text leading-none mt-0.5 font-objektiv">98</p>
          </div>
        </div>
      </FloatCard>

      {/* Custom code pill */}
      <Pill className="bottom-[6%] left-[0%]" delay="0.9s">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E34F39" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
        </svg>
        <span className="text-[12px] font-medium text-nc-text whitespace-nowrap font-sofia">Custom Build</span>
      </Pill>

      <Pill className="top-[14%] left-[0%]" delay="1.4s">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E34F39" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="text-[12px] font-medium text-nc-text whitespace-nowrap font-sofia">SEO Ready</span>
      </Pill>
    </div>
  )
}

/* ── 2. SEO visual ──────────────────────────────────────── */
function SeoVisual() {
  const bars = [35, 48, 62, 55, 78, 92]
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-xl" style={DOT_GRID} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[380px] h-[380px] rounded-full" style={GLOW} />
      </div>

      {/* Bar chart background */}
      <div className="absolute bottom-[20%] inset-x-8 flex items-end gap-2 h-40">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-[4px] svc-anim"
            style={{
              height: `${h}%`,
              background: i === bars.length - 1 ? 'rgba(227,79,57,0.85)' : 'rgba(227,79,57,0.15)',
              transformOrigin: 'bottom',
              animation: `serviceBarGrow 0.7s ease-out ${i * 0.1}s both`,
            }}
          />
        ))}
      </div>

      {/* #1 SERP card */}
      <div
        className="absolute inset-x-8 top-[12%] bg-white rounded-[16px] px-5 py-4 svc-anim"
        style={{ boxShadow: CARD_SHADOW, border: CARD_BORDER, animation: 'serviceFadeUp 0.5s ease-out 0.3s both' }}
      >
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded-full bg-nc-accent flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-white text-[11px] font-bold font-objektiv">1</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="h-2 w-4/5 rounded-full bg-nc-text/70 mb-2" />
            <div className="h-1.5 w-2/5 rounded-full bg-green-600/50 mb-2" />
            <div className="space-y-1">
              <div className="h-1.5 w-full rounded-full bg-nc-border" />
              <div className="h-1.5 w-4/5 rounded-full bg-nc-border" />
            </div>
          </div>
        </div>
        {/* Greyed-out #2 and #3 */}
        <div className="mt-3 space-y-2 opacity-40">
          {[0, 1].map(i => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-nc-border flex items-center justify-center">
                <span className="text-[9px] font-bold text-nc-muted-mid">{i + 2}</span>
              </div>
              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-3/5 rounded-full bg-nc-border" />
                <div className="h-1.5 w-2/5 rounded-full bg-nc-border" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Magnifying glass scan */}
      <div
        className="absolute top-[18%] inset-x-8 h-[2px] pointer-events-none svc-anim"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(227,79,57,0.6) 50%, transparent)',
          animation: 'serviceScanLine 4s linear 1s infinite',
        }}
      />

      {/* Traffic badge */}
      <FloatCard className="top-[4%] right-[0%]" delay="0.4s" anim="floatA">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-[8px] bg-nc-accent/10 flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E34F39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
            </svg>
          </div>
          <div>
            <p className="text-[9px] font-medium tracking-[0.10em] uppercase text-nc-muted-mid leading-none">Organic Traffic</p>
            <p className="text-[22px] font-bold text-nc-text leading-none mt-0.5 font-objektiv">+240%</p>
          </div>
        </div>
      </FloatCard>

      <Pill className="bottom-[14%] right-[0%]" delay="1.2s">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E34F39" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="text-[12px] font-medium text-nc-text whitespace-nowrap font-sofia">AI Search Ready</span>
      </Pill>
    </div>
  )
}

/* ── 3. Marketing visual ────────────────────────────────── */
function MarketingVisual() {
  const kpis = [
    { label: 'CTR', value: '8.4%', color: 'rgba(227,79,57,0.85)' },
    { label: 'ROAS', value: '4.2×', color: 'rgba(99,102,241,0.8)' },
    { label: 'Reach', value: '22k', color: 'rgba(16,185,129,0.8)' },
  ]
  const bars = [55, 72, 48, 88, 64, 95]
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-xl" style={DOT_GRID} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[380px] h-[380px] rounded-full" style={GLOW} />
      </div>

      {/* Dashboard card */}
      <div
        className="absolute inset-x-4 top-[10%] bg-white rounded-[16px] overflow-hidden svc-anim"
        style={{ boxShadow: CARD_SHADOW, border: CARD_BORDER, animation: 'serviceFadeUp 0.5s ease-out 0.2s both' }}
      >
        <div className="px-5 pt-4 pb-2 border-b border-nc-border bg-nc-surface flex items-center justify-between">
          <p className="text-[11px] font-medium tracking-[0.10em] uppercase text-nc-muted-mid font-sofia">Campaign Dashboard</p>
          <div className="w-2 h-2 rounded-full bg-green-500 svc-anim" style={{ animation: 'serviceBlink 2.5s ease-in-out infinite' }} />
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 divide-x divide-nc-border">
          {kpis.map((kpi, i) => (
            <div key={i} className="px-4 py-3 svc-anim" style={{ animation: `serviceFadeUp 0.4s ease-out ${0.5 + i * 0.15}s both` }}>
              <p className="text-[9px] font-medium uppercase tracking-widest text-nc-muted-mid font-sofia">{kpi.label}</p>
              <p className="text-[20px] font-bold leading-none mt-1 font-objektiv" style={{ color: kpi.color }}>{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="px-5 pb-5 pt-3">
          <div className="flex items-end gap-1.5 h-16">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-[3px] svc-anim"
                style={{
                  height: `${h}%`,
                  background: i === 5 ? 'rgba(227,79,57,0.85)' : i % 2 === 0 ? 'rgba(99,102,241,0.25)' : 'rgba(227,79,57,0.2)',
                  transformOrigin: 'bottom',
                  animation: `serviceBarGrow 0.6s ease-out ${0.7 + i * 0.08}s both`,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {['Jan','Feb','Mar','Apr','May','Jun'].map(m => (
              <span key={m} className="text-[8px] text-nc-muted-light font-sofia">{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ROI card */}
      <FloatCard className="top-[3%] right-[0%]" delay="0s" anim="floatA">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-[8px] bg-nc-accent/10 flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E34F39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" />
            </svg>
          </div>
          <div>
            <p className="text-[9px] font-medium tracking-[0.10em] uppercase text-nc-muted-mid leading-none font-sofia">ROI</p>
            <p className="text-[22px] font-bold text-nc-text leading-none mt-0.5 font-objektiv">4.2×</p>
          </div>
        </div>
      </FloatCard>

      <Pill className="bottom-[4%] left-[2%]" delay="1.1s">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E34F39" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
        </svg>
        <span className="text-[12px] font-medium text-nc-text whitespace-nowrap font-sofia">Multi-channel</span>
      </Pill>
    </div>
  )
}

/* ── 4. AI visual ───────────────────────────────────────── */
function AiVisual() {
  // Outer nodes at 6 positions around the centre
  const outerNodes = [
    { angle: 0,   r: 130 },
    { angle: 60,  r: 140 },
    { angle: 120, r: 130 },
    { angle: 180, r: 140 },
    { angle: 240, r: 130 },
    { angle: 300, r: 140 },
  ]

  const cx = 50  // % centre
  const cy = 50

  function polar(angle: number, r: number) {
    const rad = (angle - 90) * (Math.PI / 180)
    return {
      x: cx + (r / 3) * Math.cos(rad),
      y: cy + (r / 3) * Math.sin(rad),
    }
  }

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-xl" style={DOT_GRID} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[420px] h-[420px] rounded-full" style={GLOW} />
      </div>

      {/* Neural network SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: 'visible' }}
      >
        {/* Connection lines */}
        {outerNodes.map((node, i) => {
          const pos = polar(node.angle, node.r)
          return (
            <line
              key={i}
              x1={`${cx}%`} y1={`${cy}%`}
              x2={`${pos.x}%`} y2={`${pos.y}%`}
              stroke="rgba(227,79,57,0.20)"
              strokeWidth="0.4"
              strokeDasharray="2 2"
              className="svc-anim"
              style={{ animation: `serviceLineDash 2.5s linear ${i * 0.4}s infinite`, strokeDashoffset: '0' }}
            />
          )
        })}

        {/* Outer ring (faint) */}
        <circle cx={`${cx}%`} cy={`${cy}%`} r="44%" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.3" />

        {/* Outer nodes */}
        {outerNodes.map((node, i) => {
          const pos = polar(node.angle, node.r)
          return (
            <circle
              key={i}
              cx={`${pos.x}%`} cy={`${pos.y}%`}
              r="2.2%"
              fill={i % 2 === 0 ? 'rgba(227,79,57,0.55)' : 'rgba(99,102,241,0.45)'}
              className="svc-anim"
              style={{ animation: `serviceNodePulse 2.5s ease-in-out ${i * 0.42}s infinite`, transformOrigin: `${pos.x}% ${pos.y}%` }}
            />
          )
        })}

        {/* Centre pulse rings */}
        <circle cx={`${cx}%`} cy={`${cy}%`} r="7%" fill="rgba(227,79,57,0.07)" className="svc-anim"
          style={{ animation: 'serviceShieldRing 2s ease-out 0.3s infinite', transformOrigin: `${cx}% ${cy}%` }} />
        <circle cx={`${cx}%`} cy={`${cy}%`} r="7%" fill="rgba(227,79,57,0.07)" className="svc-anim"
          style={{ animation: 'serviceShieldRing 2s ease-out 1s infinite', transformOrigin: `${cx}% ${cy}%` }} />

        {/* Centre node */}
        <circle cx={`${cx}%`} cy={`${cy}%`} r="5.5%" fill="rgba(227,79,57,0.12)" stroke="rgba(227,79,57,0.5)" strokeWidth="0.4" />
      </svg>

      {/* Centre CPU icon overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center" style={{ boxShadow: '0 0 0 3px rgba(227,79,57,0.2)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E34F39" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="6" width="12" height="12" rx="2" />
            <rect x="9" y="9" width="2.5" height="2.5" rx="0.5" />
            <rect x="12.5" y="9" width="2.5" height="2.5" rx="0.5" />
            <rect x="9" y="12.5" width="2.5" height="2.5" rx="0.5" />
            <rect x="12.5" y="12.5" width="2.5" height="2.5" rx="0.5" />
            <path d="M6 10H3M6 14H3M18 10H21M18 14H21M10 6V3M14 6V3M10 18V21M14 18V21" />
          </svg>
        </div>
      </div>

      {/* Manual tasks card */}
      <FloatCard className="top-[4%] right-[0%]" delay="0s" anim="floatA">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-[8px] bg-nc-accent/10 flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E34F39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>
          <div>
            <p className="text-[9px] font-medium tracking-[0.10em] uppercase text-nc-muted-mid leading-none font-sofia">Manual Tasks</p>
            <p className="text-[22px] font-bold text-nc-text leading-none mt-0.5 font-objektiv">−60%</p>
          </div>
        </div>
      </FloatCard>

      <Pill className="bottom-[5%] left-[0%]" delay="0.9s">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E34F39" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        <span className="text-[12px] font-medium text-nc-text whitespace-nowrap font-sofia">AI Workflows</span>
      </Pill>

      <Pill className="top-[15%] left-[2%]" delay="1.5s">
        <div className="w-2 h-2 rounded-full bg-green-500 svc-anim" style={{ animation: 'serviceBlink 2s ease-in-out infinite' }} />
        <span className="text-[12px] font-medium text-nc-text whitespace-nowrap font-sofia">Running 24/7</span>
      </Pill>
    </div>
  )
}

/* ── 5. IT Support visual ───────────────────────────────── */
function ItVisual() {
  const ledRows = [
    { leds: [true, true, true, false, true], label: 'Web Server 01' },
    { leds: [true, true, false, true, true], label: 'DB Server 02' },
    { leds: [true, true, true, true, true], label: 'Backup Node' },
  ]
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-xl" style={DOT_GRID} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[380px] h-[380px] rounded-full" style={GLOW} />
      </div>

      {/* Server rack card */}
      <div
        className="absolute inset-x-6 top-[12%] bg-white rounded-[16px] overflow-hidden svc-anim"
        style={{ boxShadow: CARD_SHADOW, border: CARD_BORDER, animation: 'serviceFadeUp 0.5s ease-out 0.2s both' }}
      >
        <div className="px-4 py-3 bg-nc-surface border-b border-nc-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#757474" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
            <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-nc-muted-mid font-sofia">Server Status</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 svc-anim" style={{ animation: 'serviceBlink 3s ease-in-out infinite' }} />
            <span className="text-[10px] text-green-600 font-medium font-sofia">All Online</span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          {ledRows.map((row, ri) => (
            <div key={ri} className="flex items-center gap-3 svc-anim" style={{ animation: `serviceFadeUp 0.4s ease-out ${0.4 + ri * 0.15}s both` }}>
              <div className="flex gap-1">
                {row.leds.map((on, li) => (
                  <div
                    key={li}
                    className="w-2 h-2 rounded-full svc-anim"
                    style={{
                      background: on ? '#22c55e' : '#f97316',
                      animation: on ? `serviceBlink ${2.5 + li * 0.3}s ease-in-out ${li * 0.2}s infinite` : 'none',
                      boxShadow: on ? '0 0 6px rgba(34,197,94,0.6)' : 'none',
                    }}
                  />
                ))}
              </div>
              <div className="flex-1">
                <div className="h-1.5 rounded-full bg-nc-border" style={{ width: `${55 + ri * 12}%` }} />
              </div>
              <span className="text-[9px] text-nc-muted-light font-sofia whitespace-nowrap">{row.label}</span>
            </div>
          ))}

          {/* Progress bars */}
          <div className="mt-2 pt-3 border-t border-nc-border space-y-2">
            {[
              { label: 'CPU', val: 24 },
              { label: 'RAM', val: 61 },
              { label: 'Disk', val: 38 },
            ].map(({ label, val }, i) => (
              <div key={i} className="flex items-center gap-3 svc-anim" style={{ animation: `serviceFadeUp 0.4s ease-out ${0.8 + i * 0.12}s both` }}>
                <span className="text-[10px] text-nc-muted-mid font-sofia w-6">{label}</span>
                <div className="flex-1 h-1.5 rounded-full bg-nc-border overflow-hidden">
                  <div
                    className="h-full rounded-full svc-anim"
                    style={{
                      width: `${val}%`,
                      background: val > 50 ? 'rgba(249,115,22,0.7)' : 'rgba(34,197,94,0.7)',
                      animation: `serviceBarGrow 0.8s ease-out ${1 + i * 0.12}s both`,
                      transformOrigin: 'left',
                    }}
                  />
                </div>
                <span className="text-[10px] text-nc-muted-mid font-sofia w-6 text-right">{val}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Shield pulse */}
      <div className="absolute bottom-[8%] inset-x-0 flex justify-center">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full svc-anim"
            style={{ background: 'rgba(227,79,57,0.08)', animation: 'serviceShieldRing 2s ease-out 0s infinite', transformOrigin: 'center' }} />
          <div className="absolute inset-0 rounded-full svc-anim"
            style={{ background: 'rgba(227,79,57,0.08)', animation: 'serviceShieldRing 2s ease-out 0.8s infinite', transformOrigin: 'center' }} />
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center" style={{ boxShadow: '0 0 0 2px rgba(227,79,57,0.3)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E34F39" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </div>
        </div>
      </div>

      {/* Uptime badge */}
      <FloatCard className="top-[4%] right-[0%]" delay="0s" anim="floatA">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-[8px] bg-green-500/10 flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div>
            <p className="text-[9px] font-medium tracking-[0.10em] uppercase text-nc-muted-mid leading-none font-sofia">Uptime</p>
            <p className="text-[22px] font-bold text-nc-text leading-none mt-0.5 font-objektiv">99.9%</p>
          </div>
        </div>
      </FloatCard>

      <Pill className="bottom-[3%] right-[0%]" delay="1.3s">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-[12px] font-medium text-nc-text whitespace-nowrap font-sofia">Zero Downtime</span>
      </Pill>
    </div>
  )
}

/* ── Main export ────────────────────────────────────────── */

type VisualKey = 'websites' | 'seo' | 'marketing' | 'ai' | 'it'

export function slugToVisualKey(slug: string): VisualKey {
  if (slug.includes('kataskevi') || slug.includes('websites-digital')) return 'websites'
  if (slug.includes('anazitisi')  || slug.includes('search-visibility')) return 'seo'
  if (slug.includes('marketing'))                                          return 'marketing'
  if (slug.includes('psifiakos')  || slug.includes('digital-transformation')) return 'ai'
  return 'it'
}

const VISUALS: Record<VisualKey, React.FC> = {
  websites: WebsitesVisual,
  seo:      SeoVisual,
  marketing: MarketingVisual,
  ai:       AiVisual,
  it:       ItVisual,
}

export function ServiceHeroVisual({ categorySlug }: { categorySlug: string }) {
  const key  = slugToVisualKey(categorySlug)
  const Visual = VISUALS[key]
  return (
    <div className="relative w-full h-full select-none pointer-events-none" aria-hidden="true">
      <Visual />
    </div>
  )
}

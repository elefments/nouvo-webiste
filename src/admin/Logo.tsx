'use client'

/**
 * Nouvo Collective — Payload Admin Logo
 * Shown in the top-left of the admin sidebar.
 */
export function AdminLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '2px 0' }}>
      {/* N mark */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="7" fill="#E34F39" />
        <path
          d="M7 21V7h2.6l7.8 10.2V7H20v14h-2.6L9.6 10.8V21H7z"
          fill="white"
        />
      </svg>
      {/* Wordmark */}
      <span style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontWeight: 700,
        fontSize: '15px',
        letterSpacing: '-0.02em',
        color: 'var(--theme-text, #1e1e1e)',
        lineHeight: 1,
      }}>
        Nouvo
        <span style={{ color: '#E34F39', marginLeft: '1px' }}>.</span>
      </span>
    </div>
  )
}

export default AdminLogo

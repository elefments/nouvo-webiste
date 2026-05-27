import { NextResponse } from 'next/server'

export async function GET() {
  const checks: Record<string, unknown> = {
    DATABASE_URI: !!process.env.DATABASE_URI,
    PAYLOAD_SECRET: !!process.env.PAYLOAD_SECRET,
    RESEND_API_KEY: !!process.env.RESEND_API_KEY,
    RESEND_FROM: process.env.RESEND_FROM ?? 'NOT SET',
    RESEND_NOTIFY_TO: process.env.RESEND_NOTIFY_TO ?? 'NOT SET',
    db_type: process.env.DATABASE_URI ? 'postgres' : 'sqlite (NO DATABASE_URI SET)',
    node_env: process.env.NODE_ENV,
  }

  // Try to init Payload
  try {
    const { getPayloadClient } = await import('@/lib/payload')
    const payload = await getPayloadClient()
    await payload.find({ collection: 'users', limit: 0 })
    checks.payload = 'ok'
    checks.db_connection = 'ok'
  } catch (err) {
    checks.payload = 'error'
    checks.db_connection = err instanceof Error ? err.message : String(err)
  }

  // Try to send a test email via Resend
  if (process.env.RESEND_API_KEY && process.env.RESEND_NOTIFY_TO) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      const result = await resend.emails.send({
        from: process.env.RESEND_FROM ?? 'Nouvo <noreply@nouvo.agency>',
        to: process.env.RESEND_NOTIFY_TO,
        subject: '[Nouvo] Health check test email',
        html: '<p>✅ Resend works correctly.</p>',
      })
      checks.resend = result.error ? `error: ${result.error.message}` : 'ok'
      checks.resend_id = result.data?.id ?? null
    } catch (err) {
      checks.resend = 'exception'
      checks.resend_error = err instanceof Error ? err.message : String(err)
    }
  } else {
    checks.resend = 'skipped (env vars missing)'
  }

  const ok = checks.payload === 'ok'
  return NextResponse.json(checks, { status: ok ? 200 : 500 })
}

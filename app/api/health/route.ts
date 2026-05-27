import { NextResponse } from 'next/server'

export async function GET() {
  const checks: Record<string, unknown> = {
    DATABASE_URI: !!process.env.DATABASE_URI,
    PAYLOAD_SECRET: !!process.env.PAYLOAD_SECRET,
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

  const ok = checks.payload === 'ok'
  return NextResponse.json(checks, { status: ok ? 200 : 500 })
}

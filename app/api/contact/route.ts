import { NextRequest, NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, company, service, message, locale, source } = body

    // Basic validation
    if (!name?.trim() || !email?.trim() || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    const payload = await getPayloadClient()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (payload as any).create({
      collection: 'form-submissions',
      data: {
        source: source ?? 'contact_form',
        locale: locale ?? 'el',
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || undefined,
        company: company?.trim() || undefined,
        service: service?.trim() || undefined,
        message: message?.trim() || undefined,
        status: 'new',
      },
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[/api/contact]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

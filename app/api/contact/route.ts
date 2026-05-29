import { NextRequest, NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'
import { sendSubmissionNotification } from '@/lib/resend'
import { syncToAttio } from '@/lib/attio'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      firstName, lastName,
      email, phone, company, service, message,
      locale, source,
      utmSource, utmMedium, utmCampaign, utmContent, utmTerm,
      _h,
    } = body

    // Honeypot — bots fill hidden fields; silently succeed without saving
    if (_h) return NextResponse.json({ ok: true })

    // Basic validation
    if (!firstName?.trim() || !email?.trim() || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }

    const name = [firstName.trim(), lastName?.trim()].filter(Boolean).join(' ')

    const payload = await getPayloadClient()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (payload as any).create({
      collection: 'form-submissions',
      data: {
        source: source ?? 'contact_form',
        locale: locale ?? 'el',
        name,
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || undefined,
        company: company?.trim() || undefined,
        service: service?.trim() || undefined,
        message: message?.trim() || undefined,
        utmSource: utmSource?.trim() || undefined,
        utmMedium: utmMedium?.trim() || undefined,
        utmCampaign: utmCampaign?.trim() || undefined,
        utmContent: utmContent?.trim() || undefined,
        utmTerm: utmTerm?.trim() || undefined,
        status: 'new',
      },
    })

    // Send email notification (non-blocking)
    sendSubmissionNotification({
      source: source ?? 'contact_form',
      name,
      email: email.trim(),
      phone: phone?.trim(),
      company: company?.trim(),
      service: service?.trim(),
      message: message?.trim(),
      locale: locale ?? 'el',
      utmSource: utmSource?.trim(),
      utmMedium: utmMedium?.trim(),
      utmCampaign: utmCampaign?.trim(),
    }).catch((err) => console.error('[resend]', err))

    // Sync to Attio CRM (non-blocking)
    syncToAttio({
      name,
      email: email.trim().toLowerCase(),
      phone: phone?.trim(),
      company: company?.trim(),
      service: service?.trim(),
      message: message?.trim(),
      source: source ?? 'contact_form',
      locale: locale ?? 'el',
      utmSource: utmSource?.trim(),
      utmMedium: utmMedium?.trim(),
      utmCampaign: utmCampaign?.trim(),
    }).catch((err) => console.error('[attio]', err))

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[/api/contact]', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

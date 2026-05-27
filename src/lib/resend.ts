/**
 * resend.ts — Email notification via Resend
 *
 * Used by /api/contact to send an internal notification email
 * every time a form submission arrives.
 *
 * Env vars (set in Vercel):
 *   RESEND_API_KEY     — from resend.com dashboard
 *   RESEND_FROM        — verified sender, e.g. "Nouvo <noreply@nouvo.agency>"
 *   RESEND_NOTIFY_TO   — where to send notifications, e.g. "hello@nouvo.agency"
 */

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM    = process.env.RESEND_FROM       ?? 'Nouvo <noreply@nouvo.agency>'
const NOTIFY  = process.env.RESEND_NOTIFY_TO  ?? ''

interface SubmissionData {
  source: string
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message?: string
  locale: string
}

export async function sendSubmissionNotification(data: SubmissionData) {
  if (!process.env.RESEND_API_KEY || !NOTIFY) {
    console.warn('[resend] RESEND_API_KEY or RESEND_NOTIFY_TO not set — skipping email')
    return
  }

  const sourceLabel = data.source === 'book_call_modal' ? '📞 Book a Call' : '📬 Φόρμα Επικοινωνίας'
  const localeLabel = data.locale === 'en' ? '🇬🇧 English' : '🇬🇷 Ελληνικά'

  const rows = [
    ['Πηγή',      sourceLabel],
    ['Γλώσσα',    localeLabel],
    ['Όνομα',     data.name],
    ['Email',     data.email],
    data.phone   ? ['Τηλέφωνο',  data.phone]   : null,
    data.company ? ['Εταιρεία',  data.company] : null,
    data.service ? ['Υπηρεσία',  data.service] : null,
    data.message ? ['Μήνυμα',   data.message]  : null,
  ].filter(Boolean) as [string, string][]

  const tableRows = rows
    .map(([label, value]) => `
      <tr>
        <td style="padding:8px 12px;background:#f7f7f7;font-weight:600;white-space:nowrap;border-bottom:1px solid #e5e5e5;width:130px">${label}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5">${value}</td>
      </tr>`)
    .join('')

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#ffffff;margin:0;padding:32px">
  <div style="max-width:560px;margin:0 auto">

    <div style="margin-bottom:24px">
      <span style="display:inline-block;background:#E34F39;color:white;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:4px 12px;border-radius:100px">
        Νέο Μήνυμα
      </span>
    </div>

    <h1 style="font-size:22px;font-weight:700;color:#1E1E1E;margin:0 0 8px">
      ${data.name} έστειλε μήνυμα
    </h1>
    <p style="color:#757474;font-size:14px;margin:0 0 24px">${data.email}</p>

    <table style="width:100%;border-collapse:collapse;border:1px solid #e5e5e5;border-radius:12px;overflow:hidden;font-size:14px">
      ${tableRows}
    </table>

    <div style="margin-top:24px">
      <a href="https://nouvo.agency/admin/collections/form-submissions"
         style="display:inline-block;background:#1E1E1E;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;padding:10px 20px;border-radius:100px">
        Άνοιγμα στο Admin →
      </a>
    </div>

    <p style="margin-top:32px;font-size:12px;color:#AEACAE">
      Αυτό το email στάλθηκε αυτόματα από το nouvo.agency
    </p>

  </div>
</body>
</html>`

  await resend.emails.send({
    from:    FROM,
    to:      NOTIFY,
    subject: `[Nouvo] Νέο μήνυμα από ${data.name}`,
    html,
    replyTo: data.email,
  })
}

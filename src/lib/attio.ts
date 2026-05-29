/**
 * Attio CRM integration
 * Docs: https://developers.attio.com/reference
 *
 * On each form submission:
 * 1. Upsert a Person record (matched by email)
 * 2. Add person to "Clients & Leads" list
 * 3. Create a Deal linked to the person
 * 4. Create a Note with full context
 */

const BASE_URL = 'https://api.attio.com/v2'

function getApiKey(): string {
  const key = process.env.ATTIO_API_KEY
  if (!key) throw new Error('ATTIO_API_KEY is not set')
  return key
}

function headers() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getApiKey()}`,
  }
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface UpsertPersonParams {
  name: string
  email: string
  phone?: string
  company?: string
}

interface CreateNoteParams {
  personRecordId: string
  source: string
  service?: string
  message?: string
  locale: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

interface CreateDealParams {
  personRecordId: string
  name: string
  service?: string
  source?: string
}

// ── Person upsert ─────────────────────────────────────────────────────────────

/**
 * Creates or updates a Person in Attio, matched by email address.
 * Returns the record ID.
 */
export async function upsertPerson(params: UpsertPersonParams): Promise<string | null> {
  const [firstName, ...rest] = params.name.trim().split(' ')
  const lastName = rest.join(' ') || undefined

  const nameValue: Record<string, string> = { first_name: firstName }
  if (lastName) nameValue.last_name = lastName

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const values: Record<string, any> = {
    name: [nameValue],
    email_addresses: [{ email_address: params.email.toLowerCase() }],
  }

  if (params.phone) {
    values.phone_numbers = [{ phone_number: params.phone }]
  }

  if (params.company) {
    values.company = [{ target_object: 'companies', target_record_id: null, name: params.company }]
  }

  try {
    const res = await fetch(`${BASE_URL}/objects/people/records?matching_attribute=email_addresses`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify({ data: { values } }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('[attio] upsertPerson error:', res.status, err)
      return null
    }

    const data = await res.json()
    return data?.data?.id?.record_id ?? null
  } catch (err) {
    console.error('[attio] upsertPerson exception:', err)
    return null
  }
}

// ── Add to Clients & Leads list ───────────────────────────────────────────────

/**
 * Adds a Person to the "Clients & Leads" Attio list.
 * List ID is read from ATTIO_LEADS_LIST_ID env var.
 */
export async function addToLeadsList(personRecordId: string): Promise<void> {
  const LIST_ID = process.env.ATTIO_LEADS_LIST_ID

  if (!LIST_ID) {
    console.error('[attio] ATTIO_LEADS_LIST_ID is not set')
    return
  }

  try {
    const res = await fetch(`${BASE_URL}/lists/${LIST_ID}/entries`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        data: {
          parent_record_id: personRecordId,
          parent_object: 'people',
        },
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      // 409 = already in list — not an error
      if (res.status !== 409) {
        console.error('[attio] addToLeadsList error:', res.status, err)
      }
    }
  } catch (err) {
    console.error('[attio] addToLeadsList exception:', err)
  }
}

// ── Deal creation ─────────────────────────────────────────────────────────────

/**
 * Creates a new Deal in Attio linked to a Person.
 */
export async function createDeal(params: CreateDealParams): Promise<void> {
  const dealName = `${params.name} — ${params.service ?? 'General Inquiry'}`
  const sourceLabel = params.source === 'book_call_modal' ? 'Book a Call' : 'Contact Form'

  try {
    const res = await fetch(`${BASE_URL}/objects/deals/records`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        data: {
          values: {
            name: [{ value: dealName }],
            stage: [{ status: 'New Lead' }],
            associated_people: [{
              target_object: 'people',
              target_record_id: params.personRecordId,
            }],
            // Store source as a note-style field if it exists on your workspace
            // Uncomment if you have a custom "source" attribute on deals:
            // source: [{ value: sourceLabel }],
          },
        },
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('[attio] createDeal error:', res.status, err)
    }
  } catch (err) {
    console.error('[attio] createDeal exception:', err)
  }
}

// ── Note creation ─────────────────────────────────────────────────────────────

/**
 * Creates a Note on a Person record with full submission context.
 */
export async function createNote(params: CreateNoteParams): Promise<void> {
  const sourceLabel = params.source === 'book_call_modal' ? 'Book a Call' : 'Contact Form'
  const localeLabel = params.locale === 'en' ? 'English' : 'Greek'

  const lines: string[] = [
    `**Source:** ${sourceLabel} (${localeLabel})`,
  ]

  if (params.service) lines.push(`**Service:** ${params.service}`)
  if (params.message) lines.push(`\n**Message:**\n${params.message}`)

  const utmParts: string[] = []
  if (params.utmSource) utmParts.push(`source=${params.utmSource}`)
  if (params.utmMedium) utmParts.push(`medium=${params.utmMedium}`)
  if (params.utmCampaign) utmParts.push(`campaign=${params.utmCampaign}`)
  if (utmParts.length) lines.push(`\n**UTM:** ${utmParts.join(' | ')}`)

  try {
    const res = await fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        data: {
          parent_object: 'people',
          parent_record_id: params.personRecordId,
          title: `Form submission — ${new Date().toISOString().split('T')[0]}`,
          content: lines.join('\n'),
        },
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('[attio] createNote error:', res.status, err)
    }
  } catch (err) {
    console.error('[attio] createNote exception:', err)
  }
}

// ── Main entry point ──────────────────────────────────────────────────────────

interface AttioSubmissionParams {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message?: string
  source: string
  locale: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

/**
 * Full sync of a form submission to Attio:
 * 1. Upsert person (matched by email)
 * 2. Add to "Clients & Leads" list
 * 3. Create deal linked to person
 * 4. Create note with full context
 *
 * Non-blocking — call with .catch() to avoid failing the request.
 */
export async function syncToAttio(params: AttioSubmissionParams): Promise<void> {
  // Step 1: upsert person
  const personRecordId = await upsertPerson({
    name: params.name,
    email: params.email,
    phone: params.phone,
    company: params.company,
  })

  if (!personRecordId) {
    console.error('[attio] Could not upsert person for', params.email)
    return
  }

  // Steps 2-4 run in parallel — all non-blocking individually
  await Promise.allSettled([
    // Step 2: add to Clients & Leads list
    addToLeadsList(personRecordId),

    // Step 3: create deal
    createDeal({
      personRecordId,
      name: params.name,
      service: params.service,
      source: params.source,
    }),

    // Step 4: create note
    createNote({
      personRecordId,
      source: params.source,
      service: params.service,
      message: params.message,
      locale: params.locale,
      utmSource: params.utmSource,
      utmMedium: params.utmMedium,
      utmCampaign: params.utmCampaign,
    }),
  ])
}

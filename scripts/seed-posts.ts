/**
 * Seed script: imports blog posts from /Downloads/nouvo-batch/output/blog
 * into Payload CMS via the Local API.
 *
 * Run: npx tsx scripts/seed-posts.ts
 */

import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import { getPayload } from 'payload'
import configPromise from '../src/payload.config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// ── Markdown → Payload Lexical richText (minimal converter) ──────────────────
// Converts markdown to a flat Lexical paragraph node structure suitable for
// Payload's richText field. For a production import you'd use a full parser;
// this handles headings, bold, paragraphs, and horizontal rules.

function mdToLexical(md: string): object {
  const lines = md.split('\n')
  const nodes: object[] = []

  for (const raw of lines) {
    const line = raw.trim()
    if (!line || line === '---') continue

    // Skip the meta description line at top
    if (line.startsWith('**Meta Description:**')) continue

    // Headings
    const h = line.match(/^(#{1,4})\s+(.+)/)
    if (h) {
      const level = h[1].length as 1|2|3|4
      const tag = `h${level}` as 'h1'|'h2'|'h3'|'h4'
      nodes.push({
        type: 'heading',
        tag,
        children: [{ type: 'text', text: h[2].replace(/\*\*/g, '') }],
        version: 1,
        direction: null,
        format: '',
        indent: 0,
      })
      continue
    }

    // Horizontal rule → ignore
    if (line === '---' || line === '***') continue

    // Normal paragraph (strip bold markers for simplicity)
    const text = line
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1')

    if (text) {
      nodes.push({
        type: 'paragraph',
        children: [{ type: 'text', text, version: 1 }],
        version: 1,
        direction: null,
        format: '',
        indent: 0,
      })
    }
  }

  return {
    root: {
      type: 'root',
      children: nodes,
      direction: null,
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

// ── Read a meta-seo.md field ──────────────────────────────────────────────────
function getMeta(metaSeo: string, field: string): string {
  const m = metaSeo.match(new RegExp(`^## ${field}\\n(.+)`, 'm'))
  return m ? m[1].trim() : ''
}

// ── Post definitions ──────────────────────────────────────────────────────────
const BLOG_DIR = '/Users/lefpoge/Downloads/nouvo-batch/output/blog'

const CATEGORY_MAP: Record<string, string> = {
  'Νέα Αναζήτηση':       'nea-anazitisi',
  'AI & Αυτοματισμός':   'ai-aftomatismos',
  'SEO & Ορατότητα':     'seo-oratotita',
  'Marketing & Performance': 'marketing-performance',
}

async function run() {
  const payload = await getPayload({ config: configPromise })

  const posts = fs.readdirSync(BLOG_DIR).filter(d =>
    fs.statSync(path.join(BLOG_DIR, d)).isDirectory() && d.startsWith('post-')
  ).sort()

  console.log(`\nImporting ${posts.length} blog posts...\n`)

  for (const postDir of posts) {
    const dir = path.join(BLOG_DIR, postDir)
    const mdPath = path.join(dir, 'greek.md')
    const seoPath = path.join(dir, 'meta-seo.md')

    if (!fs.existsSync(mdPath) || !fs.existsSync(seoPath)) {
      console.log(`  SKIP ${postDir} (missing files)`)
      continue
    }

    const md = fs.readFileSync(mdPath, 'utf-8')
    const metaSeo = fs.readFileSync(seoPath, 'utf-8')

    // Extract H1 title
    const titleMatch = md.match(/^# (.+)$/m)
    const title = titleMatch ? titleMatch[1].trim() : postDir

    // Extract excerpt (first non-heading paragraph after H1)
    const lines = md.split('\n')
    let excerpt = ''
    let foundH1 = false
    for (const line of lines) {
      const trimmed = line.trim()
      if (!foundH1 && trimmed.startsWith('# ')) { foundH1 = true; continue }
      if (foundH1 && trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('**Meta')) {
        excerpt = trimmed.replace(/\*\*/g, '').substring(0, 250)
        break
      }
    }

    const slug = getMeta(metaSeo, 'Slug').replace('/blog/', '')
    const category = getMeta(metaSeo, 'Category')
    const metaTitle = getMeta(metaSeo, 'Meta Title')
    const metaDescription = getMeta(metaSeo, 'Meta Description')
    const ogTitle = getMeta(metaSeo, 'OG Title')
    const ogDescription = getMeta(metaSeo, 'OG Description')
    const focusKeyword = getMeta(metaSeo, 'Primary Keyword')

    if (!slug) {
      console.log(`  SKIP ${postDir} (no slug)`)
      continue
    }

    // Check if post already exists
    const existing = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    if (existing.totalDocs > 0) {
      console.log(`  EXISTS ${slug} — skipping`)
      continue
    }

    try {
      await payload.create({
        collection: 'posts',
        data: {
          title,
          slug,
          excerpt: excerpt || metaDescription,
          content: mdToLexical(md),
          status: 'draft',
          publishedDate: new Date().toISOString(),
          categories: category ? [{ category: CATEGORY_MAP[category] || category }] : [],
          seo: {
            metaTitle,
            metaDescription,
            ogTitle,
            ogDescription,
            focusKeyword,
          },
        } as any,
      })
      console.log(`  ✅ Created: ${slug}`)
    } catch (err: any) {
      console.log(`  ❌ Error creating ${slug}: ${err.message}`)
    }
  }

  console.log('\nDone.')
  process.exit(0)
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})

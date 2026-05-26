import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { CaseStudies } from './collections/CaseStudies'
import { Testimonials } from './collections/Testimonials'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: '@/admin/Logo#AdminLogo',
        Icon: '@/admin/Icon#AdminIcon',
      },
    },
    meta: {
      titleSuffix: '— Nouvo Admin',
    },
    theme: 'light',
  },
  db: sqliteAdapter({
    client: {
      url: 'file:./payload.db',
    },
  }),
  editor: lexicalEditor(),
  collections: [Pages, Posts, CaseStudies, Testimonials, Media, Users],
  globals: [Header, Footer, SiteSettings],
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  localization: {
    locales: [
      { label: 'Greek', code: 'el' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'el',
  },
})

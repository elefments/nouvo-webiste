import type { Metadata } from 'next'
import Link from 'next/link'
import { getPayloadClient } from '@/lib/payload'
import { Arrow } from '@/components/ui/Arrow'

const copy = {
  el: {
    eyebrow: 'Blog',
    h1: 'Σκέψεις από την πράξη. Χωρίς θόρυβο.',
    subtext: 'Άρθρα για ψηφιακή στρατηγική, SEO, AI, κατασκευή ιστοσελίδων και digital marketing. Γράφουμε μόνο ό,τι έχει πρακτική αξία. Ό,τι έχει δοκιμαστεί. Ό,τι αξίζει τον χρόνο σας.',
    categories: ['Όλα τα Άρθρα', 'Ιστοσελίδες & Eshop', 'SEO & Ορατότητα', 'Marketing', 'AI & Αυτοματισμός', 'IT & Ασφάλεια'],
    recentHeading: 'Πρόσφατα Άρθρα.',
    readMore: 'Διαβάστε Περισσότερα',
    newsletterHeading: 'Μπείτε στη λίστα.',
    newsletterBody: 'Νέα άρθρα, insights και πρακτικές συμβουλές απευθείας στο inbox σας. Καμία spam, καμία διαφήμιση. Μόνο περιεχόμενο που αξίζει.',
    subscribe: 'Εγγραφείτε',
    emptyState: 'Τα πρώτα άρθρα έρχονται σύντομα.',
  },
  en: {
    eyebrow: 'Blog',
    h1: 'Thinking from the field. No noise.',
    subtext: 'Articles on digital strategy, SEO, AI, website development and digital marketing. We write only what has practical value. What has been tested. What is worth your time.',
    categories: ['All Articles', 'Websites & Eshop', 'SEO & Visibility', 'Marketing', 'AI & Automation', 'IT & Security'],
    recentHeading: 'Recent Articles.',
    readMore: 'Read More',
    newsletterHeading: 'Join the list.',
    newsletterBody: 'New articles, insights and practical advice straight to your inbox. No spam, no advertising. Only content worth reading.',
    subscribe: 'Subscribe',
    emptyState: 'First articles coming soon.',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'

  return {
    title: isEn
      ? 'Blog | Digital Strategy & Systems | Nouvo Collective'
      : 'Blog | Ψηφιακή Στρατηγική & Συστήματα | Nouvo Collective',
    description: isEn
      ? 'Articles on digital strategy, SEO, AI, website development and digital marketing. No noise. Only what has practical value for your business.'
      : 'Άρθρα για ψηφιακή στρατηγική, SEO, AI, κατασκευή ιστοσελίδων και digital marketing. Χωρίς θόρυβο. Μόνο ό,τι έχει πρακτική αξία για την επιχείρησή σας.',
    alternates: {
      canonical: isEn ? 'https://nouvo.agency/en/blog' : 'https://nouvo.agency/blog',
      languages: {
        el: 'https://nouvo.agency/blog',
        en: 'https://nouvo.agency/en/blog',
      },
    },
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const loc = locale as 'el' | 'en'
  const t = copy[loc]

  const payload = await getPayloadClient()
  const posts = await payload.find({
    collection: 'posts',
    where: { status: { equals: 'published' } },
    sort: '-publishedDate',
    limit: 12,
    locale: loc,
  })

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
          {t.eyebrow}
        </p>
        <h1
          className="font-snaga font-bold tracking-[-0.02em] text-nc-text"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          {t.h1}
        </h1>
        <p className="mt-4 text-[15px] text-nc-muted-dark max-w-[600px]">
          {t.subtext}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {t.categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                i === 0
                  ? 'bg-nc-text text-white'
                  : 'border border-nc-border text-nc-muted-dark hover:border-nc-muted-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <h2 className="mt-16 font-snaga font-bold text-[28px] tracking-[-0.02em] text-nc-text">
          {t.recentHeading}
        </h2>

        {posts.docs.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.docs.map((post) => {
              const href = loc === 'en' ? `/en/blog/${post.slug}` : `/blog/${post.slug}`
              const category = post.categories?.[0]
              return (
                <Link key={post.id} href={href} className="group">
                  <div className="aspect-[16/10] rounded-xl bg-nc-surface mb-4 overflow-hidden">
                    {post.featuredImage && typeof post.featuredImage === 'object' && (
                      <img
                        src={post.featuredImage.url ?? ''}
                        alt={post.featuredImage.alt ?? ''}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid">
                    {typeof category === 'object' && category?.category ? category.category : ''}{' '}
                    {post.publishedDate && `| ${new Date(post.publishedDate).toLocaleDateString(loc === 'el' ? 'el-GR' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`}
                  </p>
                  <h3 className="mt-1 text-lg font-medium text-nc-text group-hover:text-nc-accent transition-colors duration-200">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-2 text-[14px] text-nc-muted-dark line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-medium text-nc-accent">
                    {t.readMore} <Arrow size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        ) : (
          <p className="mt-8 text-[16px] text-nc-muted-dark">{t.emptyState}</p>
        )}

        <div className="mt-24 rounded-xl bg-nc-surface p-10 max-w-[600px]">
          <h2 className="font-snaga font-bold text-[24px] tracking-[-0.02em] text-nc-text">
            {t.newsletterHeading}
          </h2>
          <p className="mt-3 text-[15px] text-nc-muted-dark">
            {t.newsletterBody}
          </p>
          <form className="mt-6 flex gap-3">
            <input
              type="email"
              placeholder="Email"
              required
              className="flex-1 px-5 py-3 rounded-full border border-nc-border text-[14px] outline-none focus:border-nc-accent transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-nc-accent text-white text-[14px] font-medium tracking-wide hover:bg-[#c93e28] transition-colors"
            >
              {t.subscribe}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

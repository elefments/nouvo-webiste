import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPayloadClient } from '@/lib/payload'
import { Arrow } from '@/components/ui/Arrow'
import { PageView } from '@/components/analytics/PageView'

export const revalidate = 3600

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
      ? 'Blog | SEO, Website Development & Digital Marketing | Nouvo'
      : 'Blog | SEO, Κατασκευή Ιστοσελίδων & Digital Marketing | Nouvo',
    description: isEn
      ? 'Articles on SEO, website development, AI automation and digital marketing. No noise. Only what has practical value for your business.'
      : 'Άρθρα για SEO, κατασκευή ιστοσελίδων, AI και digital marketing. Χωρίς θόρυβο. Μόνο ό,τι έχει πρακτική αξία για την επιχείρησή σας.',
    alternates: {
      canonical: isEn ? 'https://nouvo.agency/en/blog' : 'https://nouvo.agency/blog',
      languages: {
        el: 'https://nouvo.agency/blog',
        en: 'https://nouvo.agency/en/blog',
        'x-default': 'https://nouvo.agency/blog',
      },
    },
    openGraph: {
      title: isEn
        ? 'Nouvo Blog | SEO, Website Development & Digital Marketing'
        : 'Nouvo Blog | SEO, Κατασκευή Ιστοσελίδων & Digital Marketing',
      description: isEn
        ? 'Practical articles on SEO, website development, AI and digital marketing from a boutique digital agency in Athens.'
        : 'Πρακτικά άρθρα για SEO, κατασκευή ιστοσελίδων, AI και digital marketing από boutique digital agency στην Αθήνα.',
      url: isEn ? 'https://nouvo.agency/en/blog' : 'https://nouvo.agency/blog',
      type: 'website',
      siteName: 'Nouvo',
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
    <>
    <PageView pageType="blog" locale={loc} />
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
          {t.eyebrow}
        </p>
        <h1
          className="font-objektiv font-bold tracking-[-0.02em] text-nc-text"
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

        <h2 className="mt-16 font-objektiv font-bold text-[28px] tracking-[-0.02em] text-nc-text">
          {t.recentHeading}
        </h2>

        {posts.docs.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.docs.map((post) => {
              const href = loc === 'en' ? `/en/blog/${post.slug}` : `/blog/${post.slug}`
              const category = post.categories?.[0]
              return (
                <Link key={post.id} href={href} className="group">
                  <div className="relative aspect-[16/10] rounded-xl bg-nc-surface mb-4 overflow-hidden">
                    <Image
                      src={
                        post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url
                          ? post.featuredImage.url
                          : '/images/blog-default.webp'
                      }
                      alt={
                        post.featuredImage && typeof post.featuredImage === 'object'
                          ? (post.featuredImage.alt ?? post.title ?? '')
                          : (post.title ?? '')
                      }
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      quality={85}
                    />
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
          <h2 className="font-objektiv font-bold text-[24px] tracking-[-0.02em] text-nc-text">
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
    </>
  )
}

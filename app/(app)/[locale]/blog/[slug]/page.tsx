import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPayloadClient } from '@/lib/payload'
import { Arrow } from '@/components/ui/Arrow'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const loc = locale as 'el' | 'en'

  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    locale: loc,
    limit: 1,
  })

  const post = result.docs[0]
  if (!post) return {}

  const isEn = loc === 'en'
  const canonical = isEn
    ? `https://nouvo.agency/en/blog/${slug}`
    : `https://nouvo.agency/blog/${slug}`

  return {
    title: `${post.title} | Nouvo Collective`,
    description: post.excerpt ?? undefined,
    alternates: {
      canonical,
      languages: {
        el: `https://nouvo.agency/blog/${slug}`,
        en: `https://nouvo.agency/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: `${post.title} | Nouvo Collective`,
      description: post.excerpt ?? undefined,
      ...(post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url
        ? { images: [{ url: post.featuredImage.url }] }
        : {}),
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const loc = locale as 'el' | 'en'

  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    locale: loc,
    limit: 1,
  })

  const post = result.docs[0]
  if (!post) notFound()

  const category = post.categories?.[0]
  const blogHref = loc === 'en' ? '/en/blog' : '/blog'

  return (
    <article className="px-6 py-24">
      <div className="mx-auto max-w-[720px]">
        <Link
          href={blogHref}
          className="inline-flex items-center gap-2 text-[13px] font-medium text-nc-muted-dark hover:text-nc-accent transition-colors mb-8"
        >
          <Arrow size={14} className="rotate-180" />
          {loc === 'en' ? 'Back to Blog' : 'Πίσω στο Blog'}
        </Link>

        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid">
          {typeof category === 'object' && category?.category ? category.category : ''}{' '}
          {post.publishedDate && `| ${new Date(post.publishedDate).toLocaleDateString(loc === 'el' ? 'el-GR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`}
        </p>

        <h1
          className="mt-4 font-snaga font-bold tracking-[-0.02em] text-nc-text"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
        >
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mt-4 text-[17px] text-nc-muted-dark leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url && (
          <div className="mt-8 aspect-[16/9] rounded-xl overflow-hidden">
            <img
              src={post.featuredImage.url}
              alt={post.featuredImage.alt ?? ''}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {post.content && (
          <div className="mt-10 prose prose-lg max-w-none text-nc-text">
            {/* Lexical rich text rendering would go here */}
            <p className="text-nc-muted-dark">{loc === 'en' ? 'Content coming soon.' : 'Περιεχόμενο σύντομα.'}</p>
          </div>
        )}
      </div>
    </article>
  )
}

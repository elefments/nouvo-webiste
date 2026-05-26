import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPayloadClient } from '@/lib/payload'
import { Arrow } from '@/components/ui/Arrow'

export const revalidate = 3600

const categoryMap: Record<string, { el: string; en: string }> = {
  'websites-eshop': { el: 'Ιστοσελίδες & Eshop', en: 'Websites & Eshop' },
  'seo-visibility': { el: 'SEO & Ορατότητα', en: 'SEO & Visibility' },
  'marketing': { el: 'Marketing', en: 'Marketing' },
  'ai-automation': { el: 'AI & Αυτοματισμός', en: 'AI & Automation' },
  'it-security': { el: 'IT & Ασφάλεια', en: 'IT & Security' },
}

const allCategorySlugs = Object.keys(categoryMap)

function isCategory(slug: string) {
  return slug in categoryMap
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const loc = locale as 'el' | 'en'

  if (isCategory(slug)) {
    const cat = categoryMap[slug]
    return {
      title: `${cat[loc]} | Blog | Nouvo Collective`,
      description: loc === 'el'
        ? `Άρθρα στην κατηγορία ${cat.el}. Πρακτικές συμβουλές και insights από τη Nouvo Collective.`
        : `Articles in the ${cat.en} category. Practical advice and insights from Nouvo Collective.`,
      alternates: {
        canonical: loc === 'en' ? `https://nouvo.agency/en/blog/${slug}` : `https://nouvo.agency/blog/${slug}`,
        languages: {
          el: `https://nouvo.agency/blog/${slug}`,
          en: `https://nouvo.agency/en/blog/${slug}`,
        },
      },
    }
  }

  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    locale: loc,
    limit: 1,
  })

  const post = result.docs[0]
  if (!post) return {}

  const canonical = loc === 'en'
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

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const loc = locale as 'el' | 'en'

  if (isCategory(slug)) {
    return <CategoryArchive locale={loc} categorySlug={slug} />
  }

  return <SinglePost locale={loc} slug={slug} />
}

async function CategoryArchive({ locale, categorySlug }: { locale: 'el' | 'en'; categorySlug: string }) {
  const cat = categoryMap[categorySlug]
  const blogBase = locale === 'en' ? '/en/blog' : '/blog'

  const payload = await getPayloadClient()
  const posts = await payload.find({
    collection: 'posts',
    where: {
      and: [
        { status: { equals: 'published' } },
        { 'categories.category': { equals: cat.en } },
      ],
    },
    sort: '-publishedDate',
    limit: 24,
    locale: locale,
  })

  const readMore = locale === 'en' ? 'Read More' : 'Διαβάστε Περισσότερα'
  const allArticles = locale === 'en' ? 'All Articles' : 'Όλα τα Άρθρα'
  const emptyState = locale === 'en' ? 'No articles in this category yet.' : 'Δεν υπάρχουν ακόμα άρθρα σε αυτή την κατηγορία.'

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#E34F39]">Blog</p>
        <h1
          className="mt-4 font-objektiv font-bold tracking-[-0.02em] text-[#1E1E1E]"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
        >
          {cat[locale]}
        </h1>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={blogBase}
            className="rounded-full border border-[rgba(0,0,0,0.07)] px-4 py-2 text-[13px] font-medium tracking-wide text-[#575657] transition-colors hover:border-[#AEACAE]"
          >
            {allArticles}
          </Link>
          {allCategorySlugs.map((s) => (
            <Link
              key={s}
              href={`${blogBase}/${s}`}
              className={`rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                s === categorySlug
                  ? 'bg-[#1E1E1E] text-white'
                  : 'border border-[rgba(0,0,0,0.07)] text-[#575657] hover:border-[#AEACAE]'
              }`}
            >
              {categoryMap[s][locale]}
            </Link>
          ))}
        </div>

        {posts.docs.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.docs.map((post) => {
              const href = `${blogBase}/${post.slug}`
              const postCat = post.categories?.[0]
              return (
                <Link key={post.id} href={href} className="group">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#F7F7F7] mb-4">
                    {post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url && (
                      <Image
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt ?? ''}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#AEACAE]">
                    {typeof postCat === 'object' && postCat?.category ? postCat.category : ''}{' '}
                    {post.publishedDate && `| ${new Date(post.publishedDate).toLocaleDateString(locale === 'el' ? 'el-GR' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`}
                  </p>
                  <h3 className="mt-1 text-lg font-medium text-[#1E1E1E] transition-colors duration-200 group-hover:text-[#E34F39]">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-2 line-clamp-2 text-[14px] text-[#575657]">{post.excerpt}</p>
                  )}
                  <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-medium text-[#E34F39]">
                    {readMore} <Arrow size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        ) : (
          <p className="mt-12 text-[16px] text-[#575657]">{emptyState}</p>
        )}
      </div>
    </section>
  )
}

async function SinglePost({ locale, slug }: { locale: 'el' | 'en'; slug: string }) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    locale: locale,
    limit: 1,
  })

  const post = result.docs[0]
  if (!post) notFound()

  const category = post.categories?.[0]
  const blogHref = locale === 'en' ? '/en/blog' : '/blog'

  return (
    <article className="px-6 py-24">
      <div className="mx-auto max-w-[720px]">
        <Link
          href={blogHref}
          className="mb-8 inline-flex items-center gap-2 text-[13px] font-medium text-[#575657] transition-colors hover:text-[#E34F39]"
        >
          <Arrow size={14} className="rotate-180" />
          {locale === 'en' ? 'Back to Blog' : 'Πίσω στο Blog'}
        </Link>

        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#AEACAE]">
          {typeof category === 'object' && category?.category ? category.category : ''}{' '}
          {post.publishedDate && `| ${new Date(post.publishedDate).toLocaleDateString(locale === 'el' ? 'el-GR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}`}
        </p>

        <h1
          className="mt-4 font-objektiv font-bold tracking-[-0.02em] text-[#1E1E1E]"
          style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
        >
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mt-4 text-[17px] leading-relaxed text-[#575657]">{post.excerpt}</p>
        )}

        {post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url && (
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt ?? ''}
              fill
              priority
              sizes="(max-width: 720px) 100vw, 720px"
              className="object-cover"
            />
          </div>
        )}

        {post.content && (
          <div className="prose prose-lg mt-10 max-w-none text-[#1E1E1E]">
            <p className="text-[#575657]">{locale === 'en' ? 'Content coming soon.' : 'Περιεχόμενο σύντομα.'}</p>
          </div>
        )}
      </div>
    </article>
  )
}

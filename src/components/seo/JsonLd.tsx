export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': 'https://nouvo.agency/#organization',
    name: 'Nouvo',
    url: 'https://nouvo.agency',
    logo: {
      '@type': 'ImageObject',
      url: 'https://nouvo.agency/favicon.svg',
      width: 512,
      height: 512,
    },
    description:
      'Boutique digital agency in Athens specializing in website development, eshop, SEO, AI automation and digital marketing with architectural thinking and measurable value.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Athens',
      addressCountry: 'GR',
    },
    areaServed: [
      { '@type': 'Country', name: 'Greece' },
      { '@type': 'Country', name: 'Cyprus' },
    ],
    knowsAbout: [
      'Web Development',
      'Eshop Development',
      'Search Engine Optimization',
      'Local SEO',
      'Technical SEO',
      'Answer Engine Optimization',
      'Generative Engine Optimization',
      'Digital Marketing',
      'Google Ads',
      'Meta Ads',
      'AI Automation',
      'Digital Transformation',
      'IT Support',
    ],
    sameAs: [
      'https://www.linkedin.com/company/nouvo-agency',
      'https://www.instagram.com/nouvo.agency',
      'https://www.facebook.com/nouvo.agency',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@nouvo.agency',
      availableLanguage: ['Greek', 'English'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Agency Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development', url: 'https://nouvo.agency/ypiresies/kataskevi-istoselidon' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services', url: 'https://nouvo.agency/ypiresies/anazitisi-oratotita' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing', url: 'https://nouvo.agency/ypiresies/marketing-psifiaki-anaptyxi' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & Digital Transformation', url: 'https://nouvo.agency/ypiresies/psifiakos-metasximatismos-ai' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Support & Maintenance', url: 'https://nouvo.agency/ypiresies/it-support-sintirisi' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function WebSiteJsonLd({ locale }: { locale: 'el' | 'en' }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://nouvo.agency/#website',
    name: 'Nouvo',
    url: 'https://nouvo.agency',
    inLanguage: locale === 'el' ? 'el-GR' : 'en-US',
    publisher: { '@id': 'https://nouvo.agency/#organization' },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function FAQJsonLd({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function ServiceJsonLd({
  name,
  description,
  url,
  provider,
}: {
  name: string
  description: string
  url: string
  provider?: string
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@id': 'https://nouvo.agency/#organization',
      name: provider ?? 'Nouvo',
    },
    areaServed: [
      { '@type': 'Country', name: 'Greece' },
      { '@type': 'Country', name: 'Cyprus' },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

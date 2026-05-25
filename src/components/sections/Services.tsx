import Link from 'next/link'
import { Arrow } from '@/components/ui/Arrow'

const copy = {
  el: {
    eyebrow: 'Υπηρεσίες',
    heading: 'Πέντε επίπεδα. Μία λογική.',
    subtext: 'Κάθε υπηρεσία μπορεί να σταθεί αυτόνομα. Αποδίδει μέγιστα όταν συνδέεται με τις υπόλοιπες.',
    cta: 'Όλες οι Υπηρεσίες',
    ctaHref: '/ypiresies',
    services: [
      { num: '01', title: 'Ιστοσελίδες & Ψηφιακή Παρουσία', desc: 'Κατασκευή ιστοσελίδων, eshop και landing pages με αρχιτεκτονική που μετατρέπει επισκέπτες σε πελάτες.', href: '/ypiresies/kataskevi-istoselidon' },
      { num: '02', title: 'Αναζήτηση & Ορατότητα', desc: 'SEO, Local SEO, Technical SEO, AEO, GEO και HEO ορατότητα σε κάθε μορφή αναζήτησης, συμπεριλαμβανομένης της AI.', href: '/ypiresies/anazitisi-oratotita' },
      { num: '03', title: 'Marketing & Ψηφιακή Ανάπτυξη', desc: 'Google Ads, Meta Ads, TikTok Ads, email marketing και στρατηγική περιεχομένου βασισμένη σε δεδομένα, όχι ένστικτο.', href: '/ypiresies/marketing-psifiaki-anaptyxi' },
      { num: '04', title: 'Ψηφιακός Μετασχηματισμός & AI', desc: 'Εγκατάσταση AI εργαλείων, αυτοματισμός διαδικασιών και ψηφιοποίηση επιχείρησης με πρακτική αξία.', href: '/ypiresies/psifiakos-metasximatismos-ai' },
      { num: '05', title: 'IT Support & Συντήρηση', desc: 'Τεχνική υποστήριξη, συντήρηση ιστοσελίδων, cloud hosting και domain management σταθερότητα χωρίς διακοπές.', href: '/ypiresies/it-support-sintirisi' },
    ],
  },
  en: {
    eyebrow: 'Services',
    heading: 'Five pillars. One logic.',
    subtext: 'Each service stands on its own. Together, they deliver maximum impact.',
    cta: 'All Services',
    ctaHref: '/en/services',
    services: [
      { num: '01', title: 'Websites & Digital Presence', desc: 'Website, eshop and landing page development built with architecture that converts visitors into clients.', href: '/en/services/websites-digital-presence' },
      { num: '02', title: 'Search & Visibility', desc: 'SEO, Local SEO, Technical SEO, AEO, GEO and HEO visibility across every search format, including AI-powered search.', href: '/en/services/search-visibility' },
      { num: '03', title: 'Marketing & Digital Growth', desc: 'Google Ads, Meta Ads, TikTok Ads, email marketing and content strategy driven by data, not intuition.', href: '/en/services/marketing-digital-growth' },
      { num: '04', title: 'Digital Transformation & AI', desc: 'AI tools implementation, process automation and business digitization with real operational value.', href: '/en/services/digital-transformation-ai' },
      { num: '05', title: 'IT Support & Maintenance', desc: 'Technical support, website maintenance, cloud hosting and domain management stability without interruption.', href: '/en/services/it-support-maintenance' },
    ],
  },
}

export function Services({ locale }: { locale: 'el' | 'en' }) {
  const t = copy[locale]

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-nc-muted-mid mb-4">
          {t.eyebrow}
        </p>
        <h2 className="font-snaga font-bold tracking-[-0.02em] text-nc-text" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          {t.heading}
        </h2>
        <p className="mt-4 text-[15px] text-nc-muted-dark max-w-[520px]">
          {t.subtext}
        </p>

        <div className="mt-12">
          {t.services.map((s) => (
            <Link
              key={s.num}
              href={s.href}
              className="group flex items-start gap-5 px-4 py-5 border-t border-nc-border cursor-pointer transition-colors duration-[250ms] hover:bg-nc-accent"
            >
              <span className="font-mono text-sm text-nc-muted-light pt-1.5 w-7 shrink-0 group-hover:text-white/60 transition-colors">
                {s.num}
              </span>
              <div className="flex-1">
                <span className="block text-2xl font-medium text-nc-text tracking-tight group-hover:text-white transition-colors">
                  {s.title}
                </span>
                <span className="block text-sm text-transparent max-h-0 overflow-hidden group-hover:text-white/75 group-hover:max-h-[60px] group-hover:mt-2 transition-all duration-300">
                  {s.desc}
                </span>
              </div>
              <Arrow
                size={20}
                className="mt-1 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-nc-muted-light group-hover:text-white"
              />
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href={t.ctaHref}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-nc-text text-nc-text text-sm font-medium tracking-wide transition-all duration-200 hover:bg-nc-text hover:text-white"
          >
            <span>{t.cta}</span>
            <Arrow size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

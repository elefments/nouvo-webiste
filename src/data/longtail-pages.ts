import type { ServiceSubItem } from './services'

export interface LongtailPage extends ServiceSubItem {
  parentCategoryId: string
}

export const longtailPages: LongtailPage[] = [
  {
    parentCategoryId: 'websites',
    title: { el: 'Ιστοσελίδα για Δικηγόρους', en: 'Website for Lawyers' },
    slug: { el: 'istoselida-gia-dikigorous', en: 'website-for-lawyers' },
    description: { el: 'Κατασκευή ιστοσελίδας δικηγόρου που χτίζει αξιοπιστία πριν την πρώτη επικοινωνία. Custom design, SEO για νομικές υπηρεσίες, online ραντεβού και GDPR compliance.', en: 'Lawyer website development that builds credibility before first contact. Custom design, SEO for legal services, online appointments and GDPR compliance.' },
    includes: {
      el: ['Επαγγελματικό design και brand positioning', 'Αρχιτεκτονική περιεχομένου για τομείς εξειδίκευσης', 'Online ραντεβού και επικοινωνία', 'SEO για νομικές υπηρεσίες και Local SEO', 'GDPR και ασφάλεια δεδομένων', 'E-E-A-T optimization για YMYL pages'],
      en: ['Professional design and brand positioning', 'Content architecture for practice areas', 'Online appointments and contact', 'SEO for legal services and Local SEO', 'GDPR and data security', 'E-E-A-T optimization for YMYL pages'],
    },
    meta: {
      title: { el: 'Ιστοσελίδα Δικηγόρου Αθήνα | ΔΣΑ & YMYL SEO | Nouvo', en: 'Lawyer Website Development Athens | Bar Association Compliant | Nouvo' },
      description: { el: 'Ιστοσελίδες δικηγόρων με ΔΣΑ συμμόρφωση, GDPR Art.9 για ευαίσθητα δεδομένα και YMYL E-E-A-T αρχιτεκτονική. 60+ υλοποιήσεις. Αθήνα. Από €1.500.', en: 'Lawyer websites with Bar Association compliance, GDPR Art.9 for sensitive data and YMYL E-E-A-T architecture. 60+ implementations. Athens. From €1,500.' },
      ogTitle: { el: 'Ιστοσελίδα Δικηγόρου Αθήνα | ΔΣΑ & YMYL SEO | Nouvo', en: 'Lawyer Website Athens | Bar Association Compliant | Nouvo' },
      ogDescription: { el: 'Κατασκευή ιστοσελίδας για δικηγόρους με ΔΣΑ δεοντολογική συμμόρφωση. Custom design, YMYL E-E-A-T, online ραντεβού, GDPR. Αθήνα, από €1.500.', en: 'Lawyer website development with Bar Association compliance. Custom design, YMYL E-E-A-T, online appointments, GDPR. Athens, from €1,500.' },
    },
  },
  {
    parentCategoryId: 'websites',
    title: { el: 'Ιστοσελίδα για Λογιστές', en: 'Website for Accountants' },
    slug: { el: 'istoselida-gia-logistes', en: 'website-for-accountants' },
    description: { el: 'Κατασκευή ιστοσελίδας λογιστή που κερδίζει νέους πελάτες οργανικά. Επαγγελματική παρουσία, SEO για λογιστικές υπηρεσίες και online επικοινωνία.', en: 'Accountant website development that wins new clients organically. Professional presence, SEO for accounting services and online communication.' },
    includes: {
      el: ['Επαγγελματικό design', 'Παρουσίαση φορολογικών και λογιστικών υπηρεσιών', 'Local SEO για τοπική αγορά', 'Online επικοινωνία και ραντεβού', 'Περιεχόμενο για AEO (Google AI Overviews)'],
      en: ['Professional design', 'Presentation of tax and accounting services', 'Local SEO for local market', 'Online communication and appointments', 'Content for AEO (Google AI Overviews)'],
    },
    meta: {
      title: { el: 'Ιστοσελίδα Λογιστή Αθήνα | myDATA & Local SEO | Nouvo', en: 'Accountant Website Athens | myDATA & Local SEO | Nouvo' },
      description: { el: 'Ιστοσελίδα λογιστηρίου με local SEO, myDATA content strategy και AEO βελτιστοποίηση για Google AI Overviews. Για λογιστές και φοροτεχνικούς. Αθήνα, από €1.200.', en: 'Accountant website with local SEO, myDATA content strategy and AEO optimization for Google AI Overviews. For accountants and tax consultants. Athens, from €1,200.' },
      ogTitle: { el: 'Ιστοσελίδα Λογιστή Αθήνα | myDATA & Local SEO | Nouvo', en: 'Accountant Website Athens | myDATA & Local SEO | Nouvo' },
      ogDescription: { el: 'Ιστοσελίδα για λογιστές που αξιοποιεί τα myDATA deadlines για seasonal SEO traffic. Local SEO, AEO, online ραντεβού. Αθήνα, από €1.200.', en: 'Accountant website that leverages myDATA deadlines for seasonal SEO traffic. Local SEO, AEO, online appointments. Athens, from €1,200.' },
    },
  },
  {
    parentCategoryId: 'websites',
    title: { el: 'Ιστοσελίδα για Γιατρούς', en: 'Website for Doctors' },
    slug: { el: 'istoselida-gia-giatrous', en: 'website-for-doctors' },
    description: { el: 'Κατασκευή ιστοσελίδας γιατρού με online ραντεβού, παρουσίαση ειδικότητας και YMYL-compliant αρχιτεκτονική. Ιατρική ιστοσελίδα που εμπνέει εμπιστοσύνη.', en: 'Doctor website development with online appointments, specialisation presentation and YMYL-compliant architecture. Medical website that inspires trust.' },
    includes: {
      el: ['Παρουσίαση ιατρικής ειδικότητας και βιογραφικό', 'Online ραντεβού με calendar integration', 'Local SEO για "γιατρός + περιοχή"', 'YMYL και E-E-A-T compliance', 'Testimonials και before/after (εφόσον επιτρέπεται)', 'GDPR-compliant διαχείριση δεδομένων'],
      en: ['Medical specialisation presentation and biography', 'Online appointments with calendar integration', 'Local SEO for "doctor + area"', 'YMYL and E-E-A-T compliance', 'Testimonials and before/after (where permitted)', 'GDPR-compliant data management'],
    },
    meta: {
      title: { el: 'Ιστοσελίδα Ιατρείου Αθήνα | ΙΣΑ, GDPR & YMYL | Nouvo', en: 'Medical Website Athens | ISA, GDPR & YMYL Compliant | Nouvo' },
      description: { el: 'Ιατρικές ιστοσελίδες με online ραντεβού, ΙΣΑ/ΕΟΠΕ συμμόρφωση και GDPR Article 9. Local SEO για «γιατρός+περιοχή». YMYL standards. Από €2.500. Αθήνα.', en: 'Medical websites with online appointments, ISA/EOPE compliance and GDPR Article 9. Local SEO for "doctor+area". YMYL standards. From €2,500. Athens.' },
      ogTitle: { el: 'Ιστοσελίδα Ιατρείου Αθήνα | ΙΣΑ, GDPR & YMYL | Nouvo', en: 'Medical Website Athens | ISA, GDPR & YMYL Compliant | Nouvo' },
      ogDescription: { el: 'Custom ιατρική ιστοσελίδα με ΙΣΑ δεοντολογική συμμόρφωση, GDPR Art.9 για δεδομένα υγείας, ΕΟΠΥΥ integration και online κρατήσεις. Αθήνα, από €2.500.', en: 'Custom medical website with ISA compliance, GDPR Art.9 for health data, EOPYY integration and online bookings. Athens, from €2,500.' },
    },
  },
  {
    parentCategoryId: 'websites',
    title: { el: 'Ιστοσελίδα για Γυμναστήρια', en: 'Website for Gyms' },
    slug: { el: 'istoselida-gia-gimnastiria', en: 'website-for-gyms' },
    description: { el: 'Κατασκευή ιστοσελίδας γυμναστηρίου με online εγγραφές, πρόγραμμα μαθημάτων και membership management. Ψηφιακή παρουσία που μετατρέπει επισκέπτες σε μέλη.', en: 'Gym website development with online registrations, class schedule and membership management. Digital presence that converts visitors into members.' },
    includes: {
      el: ['Online εγγραφές και membership management', 'Πρόγραμμα μαθημάτων με real-time ενημέρωση', 'Gallery και virtual tour', 'Local SEO για "γυμναστήριο + περιοχή"', 'Social proof και testimonials', 'Mobile-first σχεδιασμός'],
      en: ['Online registrations and membership management', 'Class schedule with real-time updates', 'Gallery and virtual tour', 'Local SEO for "gym + area"', 'Social proof and testimonials', 'Mobile-first design'],
    },
    meta: {
      title: { el: 'Ιστοσελίδα Γυμναστηρίου Αθήνα | Online Κρατήσεις | Nouvo', en: 'Gym Website Athens | Online Bookings & Memberships | Nouvo' },
      description: { el: 'Ιστοσελίδα γυμναστηρίου με online εγγραφές, membership management και local SEO. Conversion-focused design για fitness studios. Αθήνα, από €1.800.', en: 'Gym website with online registrations, membership management and local SEO. Conversion-focused design for fitness studios. Athens, from €1,800.' },
      ogTitle: { el: 'Ιστοσελίδα Γυμναστηρίου Αθήνα | Online Κρατήσεις | Nouvo', en: 'Gym Website Athens | Online Bookings & Memberships | Nouvo' },
      ogDescription: { el: 'Ιστοσελίδα γυμναστηρίου με real-time booking, class schedule, membership management. Local SEO για "γυμναστήριο κοντά μου". Αθήνα, από €1.800.', en: 'Gym website with real-time booking, class schedule, membership management. Local SEO for "gym near me". Athens, from €1,800.' },
    },
  },
  {
    parentCategoryId: 'marketing',
    title: { el: 'Meta Ads για E-shop', en: 'Meta Ads for E-shop' },
    slug: { el: 'meta-ads-eshop', en: 'meta-ads-eshop' },
    description: { el: 'Meta Ads (Facebook & Instagram) εξειδικευμένα για eshop: product catalog ads, dynamic retargeting, lookalike audiences και ROAS optimization.', en: 'Meta Ads (Facebook & Instagram) specialized for eshop: product catalog ads, dynamic retargeting, lookalike audiences and ROAS optimization.' },
    includes: {
      el: ['Product catalog ads setup', 'Dynamic retargeting campaigns', 'Lookalike και custom audiences', 'ROAS tracking και optimization', 'Creative strategy και A/B testing'],
      en: ['Product catalog ads setup', 'Dynamic retargeting campaigns', 'Lookalike and custom audiences', 'ROAS tracking and optimization', 'Creative strategy and A/B testing'],
    },
    meta: {
      title: { el: 'Meta Ads για E-shop Ελλάδα | DPA & Retargeting | Nouvo', en: 'Meta Ads for E-shop Greece | DPA & Retargeting | Nouvo' },
      description: { el: 'Meta Ads για eshop: dynamic product ads, Advantage+ Shopping και Conversions API integration. Διαφανής τιμολόγηση, data-driven optimization. Ελλάδα, από €500/μήνα.', en: 'Meta Ads for eshop: dynamic product ads, Advantage+ Shopping and Conversions API integration. Transparent pricing, data-driven optimization. Greece, from €500/month.' },
      ogTitle: { el: 'Meta Ads για E-shop Ελλάδα | DPA & Retargeting | Nouvo', en: 'Meta Ads for E-shop Greece | DPA & Retargeting | Nouvo' },
      ogDescription: { el: 'Meta Ads management για eshops με product catalog ads, CAPI integration και Advantage+ Shopping. ROAS benchmarks: fashion 2.5-4x, beauty 3-5x. Από €500/μήνα.', en: 'Meta Ads management for eshops with product catalog ads, CAPI integration and Advantage+ Shopping. ROAS benchmarks: fashion 2.5-4x, beauty 3-5x. From €500/month.' },
    },
  },
  {
    parentCategoryId: 'marketing',
    title: { el: 'TikTok Ads για Μικρές Επιχειρήσεις', en: 'TikTok Ads for Small Business' },
    slug: { el: 'tiktok-ads-mikres-epixeiriseis', en: 'tiktok-ads-small-business' },
    description: { el: 'TikTok Ads σχεδιασμένα για μικρές επιχειρήσεις: low budget, high engagement, native content format. Προσέγγιση νεανικού κοινού χωρίς μεγάλα budgets.', en: 'TikTok Ads designed for small businesses: low budget, high engagement, native content format. Reaching younger audiences without large budgets.' },
    includes: {
      el: ['Στρατηγική περιεχομένου για TikTok', 'Campaign setup και targeting', 'Creative production guidelines', 'Performance tracking', 'Budget optimization για μικρές επιχειρήσεις'],
      en: ['Content strategy for TikTok', 'Campaign setup and targeting', 'Creative production guidelines', 'Performance tracking', 'Budget optimization for small businesses'],
    },
    meta: {
      title: { el: 'TikTok Ads Μικρές Επιχειρήσεις Ελλάδα 2026 | Nouvo', en: 'TikTok Ads Small Business Greece 2026 | Nouvo' },
      description: { el: 'TikTok Ads για μικρές επιχειρήσεις: Spark Ads, In-Feed campaigns και low-budget στρατηγική για ελληνική αγορά. Industry fit guide. Από €400/μήνα.', en: 'TikTok Ads for small businesses: Spark Ads, In-Feed campaigns and low-budget strategy for the Greek market. Industry fit guide. From €400/month.' },
      ogTitle: { el: 'TikTok Ads Μικρές Επιχειρήσεις Ελλάδα 2026 | Nouvo', en: 'TikTok Ads Small Business Greece 2026 | Nouvo' },
      ogDescription: { el: 'TikTok Ads management για εστιατόρια, beauty studios, boutiques και fitness. Spark Ads, native content strategy, budget από €400/μήνα. Ελλάδα 2026.', en: 'TikTok Ads management for restaurants, beauty studios, boutiques and fitness. Spark Ads, native content strategy, budget from €400/month. Greece 2026.' },
    },
  },
  {
    parentCategoryId: 'search',
    title: { el: 'Local SEO για Ιατρεία', en: 'Local SEO for Medical Practices' },
    slug: { el: 'local-seo-iatreia', en: 'local-seo-medical' },
    description: { el: 'Local SEO εξειδικευμένο για ιατρεία: Google Business Profile optimization, τοπικές αναζητήσεις "γιατρός + περιοχή", reviews management και YMYL compliance.', en: 'Local SEO specialized for medical practices: Google Business Profile optimization, local "doctor + area" searches, reviews management and YMYL compliance.' },
    includes: {
      el: ['Google Business Profile optimization', 'Local citations και NAP consistency', 'Reviews strategy και management', 'YMYL-compliant content strategy', 'Local schema markup', 'Google Maps ορατότητα'],
      en: ['Google Business Profile optimization', 'Local citations and NAP consistency', 'Reviews strategy and management', 'YMYL-compliant content strategy', 'Local schema markup', 'Google Maps visibility'],
    },
    meta: {
      title: { el: 'Local SEO Ιατρείου Αθήνα | Google Maps & Local Pack | Nouvo', en: 'Local SEO for Medical Practice Athens | Google Maps | Nouvo' },
      description: { el: 'Local SEO για ιατρεία: Google Business Profile, YMYL E-E-A-T content και ΙΣΑ-compliant κριτικές. Εμφάνιση στο Local Pack για «γιατρός+περιοχή». Αθήνα.', en: 'Local SEO for medical practices: Google Business Profile, YMYL E-E-A-T content and ISA-compliant reviews. Appear in Local Pack for "doctor+area". Athens.' },
      ogTitle: { el: 'Local SEO Ιατρείου Αθήνα | Google Maps & Local Pack | Nouvo', en: 'Local SEO for Medical Practice Athens | Google Maps | Nouvo' },
      ogDescription: { el: 'Local SEO για γιατρούς με Doctoranytime citations, ΕΟΠΥΥ keyword optimization, ΙΣΑ-compliant reviews και Google Maps visibility. Αθήνα 2026.', en: 'Local SEO for doctors with Doctoranytime citations, EOPYY keyword optimization, ISA-compliant reviews and Google Maps visibility. Athens 2026.' },
    },
  },
  {
    parentCategoryId: 'search',
    title: { el: 'AEO για Τοπικές Επιχειρήσεις', en: 'AEO for Local Business' },
    slug: { el: 'aeo-answer-engine-optimization-topikes-epixeiriseis', en: 'aeo-answer-engine-optimization-local-business' },
    description: { el: 'Answer Engine Optimization για τοπικές επιχειρήσεις: εμφάνιση ως απάντηση σε AI Overviews, featured snippets και φωνητικές αναζητήσεις για τοπικά queries.', en: 'Answer Engine Optimization for local businesses: appearing as the answer in AI Overviews, featured snippets and voice searches for local queries.' },
    includes: {
      el: ['FAQ schema optimization', 'Featured snippet targeting', 'Voice search optimization', 'AI Overviews strategy', 'Local intent content', 'Structured data implementation'],
      en: ['FAQ schema optimization', 'Featured snippet targeting', 'Voice search optimization', 'AI Overviews strategy', 'Local intent content', 'Structured data implementation'],
    },
  },
  {
    parentCategoryId: 'it',
    title: { el: 'IT Support για Μικρές Επιχειρήσεις', en: 'IT Support for Small Business' },
    slug: { el: 'it-support-mikres-epixeiriseis', en: 'it-support-small-business' },
    description: { el: 'IT support σχεδιασμένο για μικρές επιχειρήσεις: managed services, cloud setup, email management και ongoing υποστήριξη χωρίς enterprise κόστος.', en: 'IT support designed for small businesses: managed services, cloud setup, email management and ongoing support without enterprise cost.' },
    includes: {
      el: ['Managed IT services', 'Cloud setup και migration', 'Email setup (Google Workspace, Microsoft 365)', 'Security basics και SSL management', 'Backup automation', 'Τεχνική υποστήριξη on-demand'],
      en: ['Managed IT services', 'Cloud setup and migration', 'Email setup (Google Workspace, Microsoft 365)', 'Security basics and SSL management', 'Backup automation', 'On-demand technical support'],
    },
  },
  {
    parentCategoryId: 'it',
    title: { el: 'Διαχείριση Επαγγελματικών Email', en: 'Professional Email Management' },
    slug: { el: 'diaxeirisi-epaggelmatikon-email', en: 'professional-email-management' },
    description: { el: 'Setup και διαχείριση επαγγελματικών email: Google Workspace, Microsoft 365, DNS records, SPF/DKIM/DMARC configuration και troubleshooting.', en: 'Setup and management of professional email: Google Workspace, Microsoft 365, DNS records, SPF/DKIM/DMARC configuration and troubleshooting.' },
    includes: {
      el: ['Google Workspace ή Microsoft 365 setup', 'DNS records configuration', 'SPF, DKIM, DMARC setup', 'Email migration', 'Ongoing management και troubleshooting'],
      en: ['Google Workspace or Microsoft 365 setup', 'DNS records configuration', 'SPF, DKIM, DMARC setup', 'Email migration', 'Ongoing management and troubleshooting'],
    },
  },
]

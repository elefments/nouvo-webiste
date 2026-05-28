import { longtailPages } from './longtail-pages'

export interface ServiceSubItem {
  title: { el: string; en: string }
  slug: { el: string; en: string }
  description: { el: string; en: string }
  includes?: { el: string[]; en: string[] }
}

export interface ServiceCategory {
  id: string
  eyebrow: { el: string; en: string }
  title: { el: string; en: string }
  subtitle: { el: string; en: string }
  description: { el: string; en: string }
  roleLabel: { el: string; en: string }
  slug: { el: string; en: string }
  parentSlug: { el: string; en: string }
  meta: {
    title: { el: string; en: string }
    description: { el: string; en: string }
  }
  intro: {
    heading: { el: string; en: string }
    body: { el: string[]; en: string[] }
  }
  subServices: ServiceSubItem[]
  approach: {
    heading: { el: string; en: string }
    steps: { title: { el: string; en: string }; body: { el: string; en: string } }[]
  }
  nonNegotiables: {
    heading: { el: string; en: string }
    items: { title: { el: string; en: string }; body: { el: string; en: string } }[]
  }
  faq: { q: { el: string; en: string }; a: { el: string; en: string } }[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'websites',
    eyebrow: { el: 'Ιστοσελίδες & Ψηφιακή Παρουσία', en: 'Websites & Digital Presence' },
    title: { el: 'Κατασκευή ιστοσελίδων επιχείρησης με αρχιτεκτονική που λειτουργεί.', en: 'Business website development with architecture that works.' },
    subtitle: { el: 'Δεν κατασκευάζουμε απλώς ιστοσελίδες. Σχεδιάζουμε ψηφιακές υποδομές. Εταιρικές σελίδες, eshop, landing pages, portfolio sites και ιστοσελίδες κρατήσεων κάθε project custom, SEO-ready, χωρίς templates.', en: 'We don\'t just build websites. We design digital infrastructure. Corporate sites, eshop, landing pages, portfolio sites and booking websites every project custom, SEO-ready, no templates.' },
    description: { el: 'Κατασκευή ιστοσελίδων, eshop, landing pages και booking sites με αρχιτεκτονική που μετατρέπει επισκέπτες σε πελάτες. Χωρίς templates. Χωρίς συμβιβασμούς στη δομή.', en: 'Website, eshop, landing page and booking site development with architecture that converts visitors into clients. No templates. No compromises on structure.' },
    roleLabel: { el: 'Η βάση κάθε ψηφιακής παρουσίας', en: 'The foundation of every digital presence' },
    slug: { el: 'kataskevi-istoselidon', en: 'websites-digital-presence' },
    parentSlug: { el: 'ypiresies', en: 'services' },
    meta: {
      title: { el: 'Κατασκευή Ιστοσελίδων Αθήνα | Eshop & Landing Pages | Nouvo', en: 'Website Development Athens | Eshop & Landing Pages | Nouvo' },
      description: { el: 'Κατασκευή ιστοσελίδων επιχείρησης, eshop, landing pages και portfolio sites στην Αθήνα. Custom αρχιτεκτονική, SEO-ready δομή, χωρίς templates.', en: 'Business website development, eshop, landing pages and portfolio sites. Custom architecture, SEO-ready structure, no templates. Based in Athens, serving Greece and Cyprus.' },
    },
    intro: {
      heading: { el: 'Η ιστοσελίδα δεν είναι προϊόν. Είναι υποδομή.', en: 'A website is not a product. It\'s infrastructure.' },
      body: {
        el: ['Στην ελληνική αγορά υπάρχουν εκατοντάδες επιλογές για κατασκευή ιστοσελίδας. Η διαφορά δεν βρίσκεται στη φόρμα αίτησης ή στο πακέτο τιμής. Βρίσκεται στο τι γίνεται πριν γραφτεί η πρώτη γραμμή κώδικα.', 'Κάθε ιστοσελίδα που παραδίδουμε έχει σχεδιαστεί με συγκεκριμένη αρχιτεκτονική λογική: ποιος είναι ο στόχος μετατροπής, πώς δομείται το περιεχόμενο για SEO, πώς εξυπηρετεί τον χρήστη σε κάθε συσκευή, πώς κλιμακώνεται καθώς η επιχείρηση μεγαλώνει.'],
        en: ['In the Greek market there are hundreds of options for website development. The difference is not in the inquiry form or the pricing package. It\'s in what happens before the first line of code is written.', 'Every website we deliver is designed with specific architectural logic: what is the conversion goal, how is the content structured for SEO, how does it serve the user across devices, how does it scale as the business grows.'],
      },
    },
    subServices: [
      {
        title: { el: 'Κατασκευή E-shop', en: 'E-shop Development' },
        slug: { el: 'eshop', en: 'eshop' },
        description: { el: 'Ένα eshop δεν είναι απλώς κατάλογος προϊόντων. Είναι ένα πλήρες σύστημα πωλήσεων: αρχιτεκτονική κατηγοριών, δομή checkout, ενσωμάτωση πληρωμών, διαχείριση αποθέματος, logistics και SEO σε επίπεδο προϊόντος.', en: 'An eshop is not just a product catalogue. It\'s a complete sales system: category architecture, checkout structure, payment integration, inventory management, logistics and product-level SEO.' },
        includes: { el: ['Custom αρχιτεκτονική κατηγοριών και προϊόντων', 'Ενσωμάτωση πληρωμών (Stripe, PayPal, αντικαταβολή)', 'SEO σε επίπεδο προϊόντος και κατηγορίας', 'Mobile-first σχεδιασμός', 'Σύνδεση με ERP / αποθήκη εφόσον απαιτείται'], en: ['Custom product and category architecture', 'Payment integration (Stripe, PayPal, cash on delivery)', 'Product and category-level SEO', 'Mobile-first design', 'ERP / warehouse integration when required'] },
      },
      {
        title: { el: 'Εταιρική Ιστοσελίδα', en: 'Corporate Website' },
        slug: { el: 'etairiki-istoselida', en: 'corporate-website' },
        description: { el: 'Η εταιρική ιστοσελίδα είναι το πρώτο σημείο αξιολόγησης για κάθε υποψήφιο πελάτη. Σχεδιάζουμε επαγγελματικές σελίδες με σαφή ιεραρχία πληροφορίας, ισχυρό brand positioning και δομή που οδηγεί σε επικοινωνία.', en: 'The corporate website is the first point of evaluation for every prospective client. We design professional pages with clear information hierarchy, strong brand positioning and structure that drives communication.' },
        includes: { el: ['Αρχιτεκτονική σελίδων και ιεραρχία περιεχομένου', 'Brand-consistent σχεδιασμός', 'SEO-ready δομή και meta tags', 'Contact forms και CTAs με στόχο μετατροπής', 'Πλήρης responsiveness σε όλες τις συσκευές'], en: ['Page architecture and content hierarchy', 'Brand-consistent design', 'SEO-ready structure and meta tags', 'Contact forms and CTAs with conversion goals', 'Full responsiveness across all devices'] },
      },
      {
        title: { el: 'Landing Page', en: 'Landing Page' },
        slug: { el: 'landing-page', en: 'landing-page' },
        description: { el: 'Η κατασκευή landing page είναι η πιο focused επένδυση στη ψηφιακή παρουσία. Μία σελίδα, σχεδιασμένη αποκλειστικά για να μετατρέπει: εγγραφές, αγορές, αιτήσεις, leads.', en: 'Landing page development is the most focused investment in digital presence. One page, designed exclusively to convert: registrations, purchases, applications, leads.' },
        includes: { el: ['Single-goal αρχιτεκτονική', 'Copywriting framework για μετατροπή', 'Fast load κάτω από 2 δευτερόλεπτα', 'Ενσωμάτωση με ad platforms (Meta, Google)', 'Analytics και conversion tracking setup'], en: ['Single-goal architecture', 'Copywriting framework for conversion', 'Fast load under 2 seconds', 'Ad platform integration (Meta, Google)', 'Analytics and conversion tracking setup'] },
      },
      {
        title: { el: 'Portfolio Website', en: 'Portfolio Website' },
        slug: { el: 'portfolio-website', en: 'portfolio-website' },
        description: { el: 'Η κατασκευή ιστοσελίδας portfolio απαιτεί ισορροπία ανάμεσα στην αισθητική και τη λειτουργικότητα. Σχεδιάζουμε portfolio sites για architects, photographers, designers, lawyers, consultants.', en: 'Portfolio website development requires balance between aesthetics and functionality. We design portfolio sites for architects, photographers, designers, lawyers, consultants.' },
        includes: { el: ['Αρχιτεκτονική project gallery και case studies', 'Personal brand positioning', 'SEO για επαγγελματικές αναζητήσεις', 'Fast image loading με WebP optimization', 'Contact και inquiry forms'], en: ['Project gallery and case studies architecture', 'Personal brand positioning', 'SEO for professional searches', 'Fast image loading with WebP optimization', 'Contact and inquiry forms'] },
      },
      {
        title: { el: 'Ιστοσελίδα Κρατήσεων', en: 'Booking Website' },
        slug: { el: 'istoselida-kratiseon', en: 'booking-website' },
        description: { el: 'Η κατασκευή ιστοσελίδας κρατήσεων δίνει πλήρη έλεγχο του booking process. Ξενοδοχεία, εστιατόρια, ιατρεία, γυμναστήρια, beauty salons.', en: 'Booking website development gives full control of the booking process. Hotels, restaurants, medical offices, gyms, beauty salons.' },
        includes: { el: ['Real-time διαθεσιμότητα και calendar management', 'Αυτόματες επιβεβαιώσεις και reminders', 'Ενσωμάτωση πληρωμών ή prepayment', 'Admin panel για διαχείριση κρατήσεων', 'Ειδοποιήσεις SMS και email'], en: ['Real-time availability and calendar management', 'Automatic confirmations and reminders', 'Payment or prepayment integration', 'Admin panel for booking management', 'SMS and email notifications'] },
      },
      {
        title: { el: 'Website Redesign', en: 'Website Redesign' },
        slug: { el: 'website-redesign', en: 'website-redesign' },
        description: { el: 'Η ανακατασκευή ιστοσελίδας είναι η πιο κρίσιμη παρέμβαση στη ψηφιακή παρουσία μιας επιχείρησης. Ξεκινάμε από πλήρη αξιολόγηση: τι λειτουργεί, τι χάνεται, πού φεύγουν οι επισκέπτες.', en: 'Website redesign is the most critical intervention in a business\'s digital presence. We start from a full assessment: what works, what\'s lost, where visitors leave.' },
        includes: { el: ['Audit υπάρχουσας αρχιτεκτονικής και SEO', 'Στρατηγική νέας δομής και περιεχομένου', '301 redirects και SEO continuity plan', 'Performance optimization', 'Παράδοση με πλήρη documentation'], en: ['Existing architecture and SEO audit', 'New structure and content strategy', '301 redirects and SEO continuity plan', 'Performance optimization', 'Delivery with full documentation'] },
      },
    ],
    approach: {
      heading: { el: 'Πώς σχεδιάζουμε κάθε ιστοσελίδα.', en: 'How we design every website.' },
      steps: [
        { title: { el: 'Αξιολόγηση', en: 'Assessment' }, body: { el: 'Κατανοούμε την επιχείρηση, τους στόχους, το κοινό και τον ανταγωνισμό. Καμία γραμμή κώδικα πριν από αυτό το στάδιο.', en: 'We understand the business, the objectives, the audience and the competition. No line of code before this stage.' } },
        { title: { el: 'Αρχιτεκτονική', en: 'Architecture' }, body: { el: 'Σχεδιάζουμε τη δομή των σελίδων, την ιεραρχία περιεχομένου και τους στόχους μετατροπής πριν αγγίξουμε το design.', en: 'We design the page structure, content hierarchy and conversion goals before touching the design.' } },
        { title: { el: 'Σχεδιασμός & Ανάπτυξη', en: 'Design & Development' }, body: { el: 'Custom design και clean κώδικας. SEO-ready από την αρχή. Performance-first υλοποίηση.', en: 'Custom design and clean code. SEO-ready from the start. Performance-first implementation.' } },
        { title: { el: 'Παράδοση & Υποστήριξη', en: 'Delivery & Support' }, body: { el: 'Παράδοση με πλήρη documentation, εκπαίδευση διαχείρισης και πρόβλεψη για συνεχή συντήρηση.', en: 'Delivery with full documentation, management training and provision for ongoing maintenance.' } },
      ],
    },
    nonNegotiables: {
      heading: { el: 'Τρία πράγματα που αρνούμαστε σε κάθε project.', en: 'Three things we refuse on every project.' },
      items: [
        { title: { el: 'Δεν χρησιμοποιούμε templates', en: 'We don\'t use templates' }, body: { el: 'Κάθε ιστοσελίδα κατασκευάζεται από μηδέν. Τα έτοιμα templates περιορίζουν την αρχιτεκτονική, δημιουργούν τεχνικό χρέος και δεν επιτρέπουν τη σωστή SEO δομή.', en: 'Every website is built from scratch. Pre-made templates limit architecture, create technical debt and prevent proper SEO structure.' } },
        { title: { el: 'Δεν ξεκινάμε χωρίς στρατηγική', en: 'We don\'t start without strategy' }, body: { el: 'Κάθε απόφαση σχεδιασμού από τη δομή των σελίδων ως το χρώμα του CTA βασίζεται σε συγκεκριμένο στόχο. Δεν κάνουμε design για εντυπώσεις.', en: 'Every design decision from page structure to CTA colour is based on a specific objective. We don\'t design for impressions.' } },
        { title: { el: 'Δεν παραδίδουμε χωρίς υποστήριξη', en: 'We don\'t deliver without support' }, body: { el: 'Κάθε project συνοδεύεται από πρόβλεψη συντήρησης. Μια ιστοσελίδα χωρίς ongoing υποστήριξη είναι υποδομή χωρίς ασφάλεια.', en: 'Every project includes provision for maintenance. A website without ongoing support is infrastructure without security.' } },
      ],
    },
    faq: [
      { q: { el: 'Πόσο κοστίζει η κατασκευή ιστοσελίδας επιχείρησης;', en: 'How much does business website development cost?' }, a: { el: 'Εξαρτάται από τον τύπο, τις λειτουργίες και την πολυπλοκότητα. Δεν εργαζόμαστε με σταθερά πακέτα κάθε project είναι custom. Επικοινωνήστε μαζί μας για αξιολόγηση και προσφορά χωρίς δέσμευση.', en: 'It depends on the type, features and complexity. We don\'t work with fixed packages every project is custom. Contact us for an assessment and no-commitment quote.' } },
      { q: { el: 'Πόσο χρόνο χρειάζεται η κατασκευή;', en: 'How long does development take?' }, a: { el: 'Μια εταιρική ιστοσελίδα ή επαγγελματική σελίδα χρειάζεται 3 με 6 εβδομάδες. Ένα eshop με πλήρη δομή 6 με 10 εβδομάδες. Το ακριβές χρονοδιάγραμμα καθορίζεται μετά την αρχική αξιολόγηση.', en: 'A corporate website takes 3 to 6 weeks. A fully structured eshop, 6 to 10 weeks. The exact timeline is determined after the initial assessment.' } },
      { q: { el: 'Χρησιμοποιείτε έτοιμα templates;', en: 'Do you use pre-made templates?' }, a: { el: 'Όχι. Κάθε ιστοσελίδα σχεδιάζεται custom από μηδέν. Τα templates δεν επιτρέπουν τη σωστή αρχιτεκτονική που χρειάζεται κάθε επιχείρηση.', en: 'No. Every website is designed custom from scratch. Templates don\'t allow the proper architecture each business needs.' } },
      { q: { el: 'Οι ιστοσελίδες που κατασκευάζετε είναι SEO-ready;', en: 'Are the websites you build SEO-ready?' }, a: { el: 'Ναι. Κάθε ιστοσελίδα παραδίδεται με SEO-ready δομή: σωστή ιεραρχία headings, optimized meta tags, schema markup, Core Web Vitals compliance και clean code. Το SEO είναι μέρος της αρχιτεκτονικής, όχι add-on.', en: 'Yes. Every website is delivered with SEO-ready structure: proper heading hierarchy, optimized meta tags, schema markup, Core Web Vitals compliance and clean code. SEO is part of the architecture, not an add-on.' } },
    ],
  },
  {
    id: 'search',
    eyebrow: { el: 'Αναζήτηση & Ορατότητα', en: 'Search & Visibility' },
    title: { el: 'Ορατότητα σε κάθε μορφή αναζήτησης. Από Google ως AI.', en: 'Visibility across every form of search. From Google to AI.' },
    subtitle: { el: 'SEO, Local SEO, Technical SEO και οι νέες διαστάσεις ορατότητας: AEO για AI Overviews, GEO για Generative Engines και HEO που τα συνδυάζει. Στοχεύουμε εκεί που βρίσκονται πραγματικά οι πελάτες σας.', en: 'SEO, Local SEO, Technical SEO and the new dimensions of visibility: AEO for AI Overviews, GEO for Generative Engines and HEO that combines them. We target where your clients are actually searching.' },
    description: { el: 'SEO, Local SEO, Technical SEO και οι νέες διαστάσεις ορατότητας: AEO, GEO και HEO.', en: 'SEO, Local SEO, Technical SEO and the new dimensions of visibility: AEO, GEO and HEO.' },
    roleLabel: { el: 'Ορατότητα σε κάθε μορφή αναζήτησης', en: 'Visibility across every form of search' },
    slug: { el: 'anazitisi-oratotita', en: 'search-visibility' },
    parentSlug: { el: 'ypiresies', en: 'services' },
    meta: {
      title: { el: 'SEO Υπηρεσίες Ελλάδα | Local SEO, Technical SEO, AEO & GEO | Nouvo', en: 'SEO Services Greece | Local SEO, Technical SEO, AEO & GEO | Nouvo' },
      description: { el: 'SEO, Local SEO, Technical SEO, AEO και GEO για επιχειρήσεις στην Ελλάδα. Ορατότητα σε Google, AI Overviews και generative engines με δομημένη στρατηγική.', en: 'SEO services for businesses in Greece: Local SEO, Technical SEO, AEO and GEO. Visibility across Google, AI Overviews and generative engines, built on structure.' },
    },
    intro: {
      heading: { el: 'Η αναζήτηση αλλάζει. Η ορατότητα πρέπει να ακολουθεί.', en: 'Search is changing. Visibility must follow.' },
      body: {
        el: ['Η Google δεν είναι πλέον μόνο blue links. AI Overviews, featured snippets, voice search, ChatGPT, Perplexity η αναζήτηση γίνεται πολυεπίπεδη. Η ορατότητα δεν εξασφαλίζεται μόνο με κλασικό SEO.', 'Χρειάζεται δομημένη στρατηγική που καλύπτει κάθε μορφή αναζήτησης: παραδοσιακή, AI-powered και generative. Αυτό ακριβώς σχεδιάζουμε.'],
        en: ['Google is no longer just blue links. AI Overviews, featured snippets, voice search, ChatGPT, Perplexity search is becoming multi-layered. Visibility is not ensured by classic SEO alone.', 'It requires a structured strategy that covers every form of search: traditional, AI-powered and generative. That\'s exactly what we design.'],
      },
    },
    subServices: [
      { title: { el: 'SEO Search Engine Optimization', en: 'SEO Search Engine Optimization' }, slug: { el: 'seo-search-engine-optimization', en: 'seo-search-engine-optimization' }, description: { el: 'Βελτιστοποίηση μηχανών αναζήτησης με δομημένη στρατηγική: on-page, off-page, content optimization και technical SEO. Μετρήσιμα αποτελέσματα, όχι υποσχέσεις.', en: 'Search engine optimization with structured strategy: on-page, off-page, content optimization and technical SEO. Measurable results, not promises.' } },
      { title: { el: 'Local SEO', en: 'Local SEO' }, slug: { el: 'local-seo', en: 'local-seo' }, description: { el: 'Τοπική ορατότητα για επιχειρήσεις που εξυπηρετούν συγκεκριμένη περιοχή. Google Business Profile, τοπικές αναφορές, reviews management.', en: 'Local visibility for businesses serving a specific area. Google Business Profile, local citations, reviews management.' } },
      { title: { el: 'Technical SEO', en: 'Technical SEO' }, slug: { el: 'technical-seo', en: 'technical-seo' }, description: { el: 'Τεχνική βελτιστοποίηση: Core Web Vitals, crawlability, indexation, schema markup, site architecture. Η βάση πάνω στην οποία χτίζεται κάθε SEO στρατηγική.', en: 'Technical optimization: Core Web Vitals, crawlability, indexation, schema markup, site architecture. The foundation every SEO strategy is built on.' } },
      { title: { el: 'AEO Answer Engine Optimization', en: 'AEO Answer Engine Optimization' }, slug: { el: 'aeo-answer-engine-optimization', en: 'aeo-answer-engine-optimization' }, description: { el: 'Βελτιστοποίηση για AI Overviews, featured snippets και φωνητικούς βοηθούς. Η επιχείρησή σας ως η απάντηση στην ερώτηση.', en: 'Optimization for AI Overviews, featured snippets and voice assistants. Your business as the answer to the question.' } },
      { title: { el: 'GEO Generative Engine Optimization', en: 'GEO Generative Engine Optimization' }, slug: { el: 'geo-generative-engine-optimization', en: 'geo-generative-engine-optimization' }, description: { el: 'Βελτιστοποίηση ώστε η επιχείρησή σας να αναφέρεται και να προτείνεται από ChatGPT, Perplexity, Gemini και άλλα generative AI engines.', en: 'Optimization so your business is mentioned and recommended by ChatGPT, Perplexity, Gemini and other generative AI engines.' } },
      { title: { el: 'HEO Hybrid Engine Optimization', en: 'HEO Hybrid Engine Optimization' }, slug: { el: 'heo-hybrid-engine-optimization', en: 'heo-hybrid-engine-optimization' }, description: { el: 'Η ολοκληρωμένη προσέγγιση: SEO + AEO + GEO. Ορατότητα σε παραδοσιακή αναζήτηση, AI Overviews και generative engines ταυτόχρονα.', en: 'The complete approach: SEO + AEO + GEO. Visibility across traditional search, AI Overviews and generative engines simultaneously.' } },
    ],
    approach: {
      heading: { el: 'Πώς δομούμε τη στρατηγική ορατότητας.', en: 'How we structure the visibility strategy.' },
      steps: [
        { title: { el: 'Audit', en: 'Audit' }, body: { el: 'Ανάλυση υπάρχουσας κατάστασης: rankings, τεχνικά θέματα, content gaps, ανταγωνιστική θέση.', en: 'Analysis of current state: rankings, technical issues, content gaps, competitive position.' } },
        { title: { el: 'Στρατηγική', en: 'Strategy' }, body: { el: 'Σχέδιο δράσης με προτεραιότητες, στόχους ανά κανάλι αναζήτησης και μετρήσιμα KPIs.', en: 'Action plan with priorities, objectives per search channel and measurable KPIs.' } },
        { title: { el: 'Υλοποίηση', en: 'Implementation' }, body: { el: 'Εκτέλεση on-page, technical, content και off-page ενεργειών σε δομημένο timeline.', en: 'Execution of on-page, technical, content and off-page actions on a structured timeline.' } },
        { title: { el: 'Αναφορά & Βελτίωση', en: 'Reporting & Improvement' }, body: { el: 'Μηνιαία αναφορά αποτελεσμάτων, ανάλυση δεδομένων και προσαρμογή στρατηγικής.', en: 'Monthly results reporting, data analysis and strategy adjustment.' } },
      ],
    },
    nonNegotiables: {
      heading: { el: 'Τι δεν κάνουμε στο SEO.', en: 'What we don\'t do in SEO.' },
      items: [
        { title: { el: 'Δεν υποσχόμαστε θέσεις', en: 'We don\'t promise positions' }, body: { el: 'Καμία εγγύηση "πρώτης σελίδας". Υποσχόμαστε δομημένη διαδικασία, μετρήσιμα αποτελέσματα και συνεχή βελτίωση.', en: 'No "first page" guarantees. We promise structured process, measurable results and continuous improvement.' } },
        { title: { el: 'Δεν κάνουμε SEO χωρίς βάση', en: 'We don\'t do SEO without foundation' }, body: { el: 'Αν η ιστοσελίδα δεν έχει σωστή δομή, πρώτα τη φτιάχνουμε. Δεν τρέχουμε SEO πάνω σε λάθος αρχιτεκτονική.', en: 'If the website doesn\'t have proper structure, we fix that first. We don\'t run SEO on broken architecture.' } },
        { title: { el: 'Δεν αγνοούμε τις νέες μορφές αναζήτησης', en: 'We don\'t ignore new forms of search' }, body: { el: 'Η αναζήτηση δεν είναι μόνο Google blue links. AEO, GEO και HEO είναι μέρος κάθε στρατηγικής μας.', en: 'Search is not just Google blue links. AEO, GEO and HEO are part of every strategy we design.' } },
      ],
    },
    faq: [
      { q: { el: 'Τι είναι το SEO και γιατί χρειάζεται η επιχείρησή μου;', en: 'What is SEO and why does my business need it?' }, a: { el: 'Το SEO είναι η διαδικασία βελτιστοποίησης της ιστοσελίδας σας ώστε να εμφανίζεται στις πρώτες θέσεις της Google για αναζητήσεις σχετικές με την επιχείρησή σας.', en: 'SEO is the process of optimizing your website to appear in the top positions on Google for searches relevant to your business.' } },
      { q: { el: 'Τι διαφορά έχει το AEO από το SEO;', en: 'What\'s the difference between AEO and SEO?' }, a: { el: 'Το SEO στοχεύει στα παραδοσιακά αποτελέσματα αναζήτησης. Το AEO στοχεύει στο να εμφανίζεται η επιχείρησή σας ως απευθείας απάντηση σε AI-powered features.', en: 'SEO targets traditional search results. AEO targets your business appearing as a direct answer in AI-powered features.' } },
      { q: { el: 'Πόσο χρόνο χρειάζεται για να δω αποτελέσματα;', en: 'How long until I see results?' }, a: { el: 'Τα πρώτα μετρήσιμα αποτελέσματα φαίνονται συνήθως σε 3 με 6 μήνες. Η πλήρης απόδοση μιας SEO στρατηγικής χτίζεται σε 6 με 12 μήνες.', en: 'First measurable results typically appear in 3 to 6 months. The full return of an SEO strategy builds over 6 to 12 months.' } },
    ],
  },
  {
    id: 'marketing',
    eyebrow: { el: 'Marketing & Ψηφιακή Ανάπτυξη', en: 'Marketing & Digital Growth' },
    title: { el: 'Ανάπτυξη βασισμένη σε δεδομένα, όχι σε ένστικτο.', en: 'Growth driven by data, not instinct.' },
    subtitle: { el: 'Google Ads, Meta Ads, TikTok Ads, email marketing και στρατηγική περιεχομένου. Marketing που δεν βασίζεται στο ένστικτο βασίζεται σε δομή, στόχους και μετρήσιμο ROI.', en: 'Google Ads, Meta Ads, TikTok Ads, email marketing and content strategy. Marketing that doesn\'t rely on instinct it relies on structure, objectives and measurable ROI.' },
    description: { el: 'Google Ads, Meta Ads, TikTok Ads, email marketing και στρατηγική περιεχομένου. Μετρήσιμο ROI.', en: 'Google Ads, Meta Ads, TikTok Ads, email marketing and content strategy. Measurable ROI.' },
    roleLabel: { el: 'Ανάπτυξη βασισμένη σε δεδομένα', en: 'Growth driven by data' },
    slug: { el: 'marketing-psifiaki-anaptyxi', en: 'marketing-digital-growth' },
    parentSlug: { el: 'ypiresies', en: 'services' },
    meta: {
      title: { el: 'Digital Marketing Ελλάδα | Google Ads, Meta Ads, Email | Nouvo', en: 'Digital Marketing Greece | Google Ads, Meta Ads, Email | Nouvo' },
      description: { el: 'Google Ads, Meta Ads, TikTok Ads, email marketing και content strategy για επιχειρήσεις στην Ελλάδα. Μετρήσιμο ROI και δομημένη στρατηγική βασισμένη σε δεδομένα.', en: 'Google Ads, Meta Ads, TikTok Ads, email marketing and content strategy for businesses in Greece. Measurable ROI and data-driven structured strategy.' },
    },
    intro: {
      heading: { el: 'Το marketing δεν είναι κόστος. Είναι σύστημα ανάπτυξης.', en: 'Marketing is not an expense. It\'s a growth system.' },
      body: {
        el: ['Πολλές επιχειρήσεις ξοδεύουν budget σε ads χωρίς δομή, χωρίς tracking και χωρίς σαφή στόχο. Το αποτέλεσμα: αμφίβολο ROI και η αίσθηση ότι "το marketing δεν δουλεύει".', 'Η προσέγγισή μας είναι διαφορετική: κάθε καμπάνια ξεκινά από στρατηγική, βασίζεται σε δεδομένα και μετράται με συγκεκριμένα KPIs.'],
        en: ['Many businesses spend ad budget without structure, without tracking and without a clear objective. The result: questionable ROI and the feeling that "marketing doesn\'t work".', 'Our approach is different: every campaign starts from strategy, is based on data and is measured with specific KPIs.'],
      },
    },
    subServices: [
      { title: { el: 'Google Ads', en: 'Google Ads' }, slug: { el: 'google-ads', en: 'google-ads' }, description: { el: 'Διαχείριση Google Ads με δομημένη στρατηγική: Search, Display, Shopping και YouTube campaigns. Targeting, bidding και optimization βασισμένα σε δεδομένα.', en: 'Google Ads management with structured strategy: Search, Display, Shopping and YouTube campaigns. Data-driven targeting, bidding and optimization.' } },
      { title: { el: 'Meta Ads', en: 'Meta Ads' }, slug: { el: 'meta-ads', en: 'meta-ads' }, description: { el: 'Διαφήμιση σε Facebook και Instagram με στρατηγική full-funnel: awareness, consideration, conversion. Creative testing και audience optimization.', en: 'Facebook and Instagram advertising with full-funnel strategy: awareness, consideration, conversion. Creative testing and audience optimization.' } },
      { title: { el: 'TikTok Ads', en: 'TikTok Ads' }, slug: { el: 'tiktok-ads', en: 'tiktok-ads' }, description: { el: 'Διαφήμιση στο TikTok για brands που θέλουν να φτάσουν νεανικό κοινό. Native content format, creative-first approach.', en: 'TikTok advertising for brands that want to reach younger audiences. Native content format, creative-first approach.' } },
      { title: { el: 'Email Marketing', en: 'Email Marketing' }, slug: { el: 'email-marketing', en: 'email-marketing' }, description: { el: 'Στρατηγική email marketing: automated flows, campaigns, segmentation και personalization. Το κανάλι με το υψηλότερο ROI στο digital marketing.', en: 'Email marketing strategy: automated flows, campaigns, segmentation and personalization. The channel with the highest ROI in digital marketing.' } },
      { title: { el: 'Στρατηγική Περιεχομένου', en: 'Content Strategy' }, slug: { el: 'stratigiki-periehomenou', en: 'content-strategy' }, description: { el: 'Content strategy που βασίζεται σε keyword research, search intent και business objectives. Περιεχόμενο που φέρνει traffic και μετατρέπει.', en: 'Content strategy based on keyword research, search intent and business objectives. Content that drives traffic and converts.' } },
    ],
    approach: {
      heading: { el: 'Πώς δομούμε κάθε καμπάνια.', en: 'How we structure every campaign.' },
      steps: [
        { title: { el: 'Ανάλυση', en: 'Analysis' }, body: { el: 'Κατανόηση αγοράς, κοινού, ανταγωνισμού και υπάρχοντος digital footprint.', en: 'Understanding market, audience, competition and existing digital footprint.' } },
        { title: { el: 'Στρατηγική', en: 'Strategy' }, body: { el: 'Καθορισμός στόχων, KPIs, καναλιών και budget allocation.', en: 'Setting objectives, KPIs, channels and budget allocation.' } },
        { title: { el: 'Εκτέλεση', en: 'Execution' }, body: { el: 'Launch, monitoring, A/B testing και optimization σε πραγματικό χρόνο.', en: 'Launch, monitoring, A/B testing and real-time optimization.' } },
        { title: { el: 'Αναφορά', en: 'Reporting' }, body: { el: 'Μηνιαία αναφορά με αποτελέσματα, insights και προτάσεις βελτίωσης.', en: 'Monthly report with results, insights and improvement recommendations.' } },
      ],
    },
    nonNegotiables: {
      heading: { el: 'Τι δεν κάνουμε στο marketing.', en: 'What we don\'t do in marketing.' },
      items: [
        { title: { el: 'Δεν τρέχουμε ads χωρίς στρατηγική', en: 'We don\'t run ads without strategy' }, body: { el: 'Κάθε ευρώ που ξοδεύεται πρέπει να εξυπηρετεί συγκεκριμένο στόχο μέσα σε δομημένο πλάνο.', en: 'Every euro spent must serve a specific objective within a structured plan.' } },
        { title: { el: 'Δεν κάνουμε performance σε λάθος βάση', en: 'We don\'t run performance on a broken foundation' }, body: { el: 'Αν η ιστοσελίδα δεν μετατρέπει, πρώτα τη φτιάχνουμε. Δεν στέλνουμε traffic σε σπασμένο σύστημα.', en: 'If the website doesn\'t convert, we fix that first. We don\'t send traffic to a broken system.' } },
        { title: { el: 'Δεν κρύβουμε τα δεδομένα', en: 'We don\'t hide the data' }, body: { el: 'Πλήρης πρόσβαση σε accounts, campaigns και αποτελέσματα. Τα δεδομένα ανήκουν στην επιχείρηση.', en: 'Full access to accounts, campaigns and results. The data belongs to the business.' } },
      ],
    },
    faq: [
      { q: { el: 'Πόσο budget χρειάζεται για Google Ads;', en: 'How much budget is needed for Google Ads?' }, a: { el: 'Εξαρτάται από τον κλάδο, τον ανταγωνισμό και τους στόχους. Ξεκινάμε με ανάλυση και προτείνουμε budget allocation βασισμένο σε δεδομένα.', en: 'It depends on the industry, competition and objectives. We start with analysis and recommend data-based budget allocation.' } },
      { q: { el: 'Ποια πλατφόρμα είναι καλύτερη για εμένα;', en: 'Which platform is best for me?' }, a: { el: 'Δεν υπάρχει universal απάντηση. Η επιλογή πλατφόρμας εξαρτάται από το κοινό, τον κλάδο και τους στόχους σας.', en: 'There\'s no universal answer. Platform choice depends on your audience, industry and objectives.' } },
    ],
  },
  {
    id: 'ai',
    eyebrow: { el: 'Ψηφιακός Μετασχηματισμός & AI', en: 'Digital Transformation & AI' },
    title: { el: 'AI που λειτουργεί στην πράξη, όχι στη θεωρία.', en: 'AI that works in practice, not in theory.' },
    subtitle: { el: 'Εγκατάσταση AI εργαλείων, αυτοματισμός διαδικασιών, ψηφιοποίηση επιχείρησης και AI chatbots. Φιλτράρουμε τον θόρυβο γύρω από το AI και εγκαθιστούμε μόνο ό,τι έχει πρακτική αξία.', en: 'AI tools implementation, process automation, business digitization and AI chatbots. We filter the noise around AI and install only what creates real operational value.' },
    description: { el: 'Εγκατάσταση AI εργαλείων, αυτοματισμός διαδικασιών, ψηφιοποίηση και AI chatbots.', en: 'AI tools implementation, process automation, digitization and AI chatbots.' },
    roleLabel: { el: 'Ο τρόπος που λειτουργεί η επιχείρηση', en: 'How the business actually operates' },
    slug: { el: 'psifiakos-metasximatismos-ai', en: 'digital-transformation-ai' },
    parentSlug: { el: 'ypiresies', en: 'services' },
    meta: {
      title: { el: 'AI Αυτοματισμός & Ψηφιακός Μετασχηματισμός Επιχείρησης | Nouvo', en: 'AI Automation & Digital Transformation for Business | Nouvo' },
      description: { el: 'AI εργαλεία, αυτοματισμός διαδικασιών, ψηφιοποίηση επιχείρησης και AI chatbots. Εγκαθιστούμε μόνο ό,τι μειώνει πραγματικά κόστος ή χρόνο.', en: 'AI tools, process automation, business digitization and AI chatbots. We install only what actually reduces cost or time. Practical value, not hype.' },
    },
    intro: {
      heading: { el: 'Το AI έχει αξία μόνο όταν μειώνει κόστος ή χρόνο.', en: 'AI has value only when it reduces cost or time.' },
      body: {
        el: ['Ο θόρυβος γύρω από το AI είναι τεράστιος. Κάθε εργαλείο υπόσχεται "επανάσταση". Η πραγματικότητα είναι πιο απλή: το AI έχει αξία μόνο όταν εγκαθίσταται σωστά, σε σωστό σημείο, με σωστό σκοπό.', 'Δεν πουλάμε AI ως concept. Εγκαθιστούμε AI ως εργαλείο. Αυτοματισμοί που μειώνουν κόστος, chatbots που εξυπηρετούν πελάτες, workflows που εξοικονομούν ώρες.'],
        en: ['The noise around AI is enormous. Every tool promises "revolution". The reality is simpler: AI has value only when installed correctly, at the right point, with the right purpose.', 'We don\'t sell AI as a concept. We install AI as a tool. Automations that reduce cost, chatbots that serve customers, workflows that save hours.'],
      },
    },
    subServices: [
      { title: { el: 'Αυτοματισμός Διαδικασιών', en: 'Process Automation' }, slug: { el: 'avtomatismos-diadikasion', en: 'process-automation' }, description: { el: 'Αυτοματισμός επαναλαμβανόμενων διαδικασιών: invoicing, reporting, data entry, follow-ups. Μείωση κόστους και ανθρώπινων λαθών.', en: 'Automation of repetitive processes: invoicing, reporting, data entry, follow-ups. Reducing cost and human errors.' } },
      { title: { el: 'Εγκατάσταση AI Εργαλείων', en: 'AI Tools Implementation' }, slug: { el: 'ai-ergaleia', en: 'ai-tools' }, description: { el: 'Εγκατάσταση και παραμετροποίηση AI εργαλείων που ταιριάζουν στις ανάγκες της επιχείρησης. Όχι experiments, μόνο ό,τι αποδίδει.', en: 'Installation and configuration of AI tools that fit business needs. No experiments, only what delivers.' } },
      { title: { el: 'Ψηφιοποίηση Επιχείρησης', en: 'Business Digitization' }, slug: { el: 'psifiopoiisi-epixeirisis', en: 'business-digitization' }, description: { el: 'Μετατροπή manual διαδικασιών σε ψηφιακά συστήματα: CRM, project management, document automation, digital workflows.', en: 'Converting manual processes to digital systems: CRM, project management, document automation, digital workflows.' } },
      { title: { el: 'AI Chatbots & Assistants', en: 'AI Chatbots & Assistants' }, slug: { el: 'ai-chatbots', en: 'ai-chatbots' }, description: { el: 'AI chatbots για εξυπηρέτηση πελατών, lead qualification και support automation. Custom-trained στα δεδομένα της επιχείρησης.', en: 'AI chatbots for customer service, lead qualification and support automation. Custom-trained on business data.' } },
      { title: { el: 'Αυτοματισμός Marketing', en: 'Marketing Automation' }, slug: { el: 'avtomatismos-marketing', en: 'marketing-automation' }, description: { el: 'Email sequences, lead scoring, automated campaigns και CRM workflows. Marketing που τρέχει χωρίς χειροκίνητη παρέμβαση.', en: 'Email sequences, lead scoring, automated campaigns and CRM workflows. Marketing that runs without manual intervention.' } },
    ],
    approach: {
      heading: { el: 'Πώς εγκαθιστούμε AI στην επιχείρηση.', en: 'How we install AI in the business.' },
      steps: [
        { title: { el: 'Αξιολόγηση', en: 'Assessment' }, body: { el: 'Ποιες διαδικασίες μπορούν να αυτοματοποιηθούν; Πού χάνεται χρόνος και χρήμα;', en: 'Which processes can be automated? Where is time and money being lost?' } },
        { title: { el: 'Σχεδιασμός', en: 'Design' }, body: { el: 'Επιλογή εργαλείων, σχεδιασμός workflows και ορισμός KPIs πριν την εγκατάσταση.', en: 'Tool selection, workflow design and KPI definition before installation.' } },
        { title: { el: 'Εγκατάσταση', en: 'Installation' }, body: { el: 'Εφαρμογή, ρύθμιση, testing και εκπαίδευση ομάδας στα νέα εργαλεία.', en: 'Implementation, configuration, testing and team training on new tools.' } },
        { title: { el: 'Παρακολούθηση', en: 'Monitoring' }, body: { el: 'Συνεχής παρακολούθηση απόδοσης και βελτιστοποίηση.', en: 'Continuous performance monitoring and optimization.' } },
      ],
    },
    nonNegotiables: {
      heading: { el: 'Τι δεν κάνουμε με AI.', en: 'What we don\'t do with AI.' },
      items: [
        { title: { el: 'Δεν εγκαθιστούμε AI χωρίς λόγο', en: 'We don\'t install AI without reason' }, body: { el: 'Αν δεν μειώνει κόστος ή χρόνο, δεν το εγκαθιστούμε. Κανένα AI για εντυπωσιασμό.', en: 'If it doesn\'t reduce cost or time, we don\'t install it. No AI for show.' } },
        { title: { el: 'Δεν υποσχόμαστε "επανάσταση"', en: 'We don\'t promise "revolution"' }, body: { el: 'Υποσχόμαστε συγκεκριμένα αποτελέσματα: μείωση χρόνου, μείωση κόστους, βελτίωση εμπειρίας.', en: 'We promise specific outcomes: time reduction, cost reduction, experience improvement.' } },
        { title: { el: 'Δεν πειραματιζόμαστε σε ζωντανές επιχειρήσεις', en: 'We don\'t experiment on live businesses' }, body: { el: 'Κάθε εγκατάσταση περνά από testing πριν γίνει live. Μηδέν risk στη λειτουργία.', en: 'Every installation is tested before going live. Zero risk to operations.' } },
      ],
    },
    faq: [
      { q: { el: 'Πρέπει η επιχείρησή μου να χρησιμοποιεί AI;', en: 'Should my business use AI?' }, a: { el: 'Εξαρτάται. Αν υπάρχουν επαναλαμβανόμενες διαδικασίες που κοστίζουν χρόνο ή χρήμα, τότε ναι. Αν δεν υπάρχει πρακτικός λόγος, τότε όχι.', en: 'It depends. If there are repetitive processes costing time or money, then yes. If there\'s no practical reason, then no.' } },
      { q: { el: 'Πόσο κοστίζει η εγκατάσταση AI;', en: 'How much does AI installation cost?' }, a: { el: 'Εξαρτάται από τα εργαλεία, τις ενσωματώσεις και τις ανάγκες. Ξεκινάμε πάντα με αξιολόγηση.', en: 'It depends on the tools, integrations and needs. We always start with an assessment.' } },
    ],
  },
  {
    id: 'it',
    eyebrow: { el: 'IT Support & Συντήρηση', en: 'IT Support & Maintenance' },
    title: { el: 'Η ανάπτυξη χωρίς σταθερότητα καταρρέει.', en: 'Growth without stability collapses.' },
    subtitle: { el: 'Συντήρηση ιστοσελίδων, τεχνική υποστήριξη, cloud hosting και domain management. Η ανάπτυξη χωρίς σταθερότητα καταρρέει αυτή η υπηρεσία εγγυάται ότι τα συστήματα παραμένουν όρθια.', en: 'Website maintenance, technical support, cloud hosting and domain management. Growth without stability collapses this service ensures your systems stay operational and secure.' },
    description: { el: 'Συντήρηση ιστοσελίδων, τεχνική υποστήριξη, cloud hosting και domain management.', en: 'Website maintenance, technical support, cloud hosting and domain management.' },
    roleLabel: { el: 'Σταθερότητα χωρίς διακοπές', en: 'Stability without interruption' },
    slug: { el: 'it-support-sintirisi', en: 'it-support-maintenance' },
    parentSlug: { el: 'ypiresies', en: 'services' },
    meta: {
      title: { el: 'IT Support & Συντήρηση Ιστοσελίδων Ελλάδα | Nouvo', en: 'IT Support & Website Maintenance Greece | Nouvo' },
      description: { el: 'Συντήρηση ιστοσελίδων, τεχνική υποστήριξη, cloud hosting και domain management για επιχειρήσεις στην Ελλάδα. Σταθερότητα χωρίς διακοπές.', en: 'Website maintenance, technical support, cloud hosting and domain management for businesses in Greece. Stability without interruption.' },
    },
    intro: {
      heading: { el: 'Τα συστήματα χρειάζονται συντήρηση. Πάντα.', en: 'Systems need maintenance. Always.' },
      body: {
        el: ['Μια ιστοσελίδα χωρίς συντήρηση γίνεται αργή, ευάλωτη και ξεπερασμένη. Ένα eshop χωρίς monitoring χάνει πωλήσεις χωρίς να το γνωρίζει.', 'Αυτή η υπηρεσία εξασφαλίζει ότι κάθε σύστημα που σχεδιάζουμε ή διαχειριζόμαστε παραμένει λειτουργικό, ασφαλές και ενημερωμένο.'],
        en: ['A website without maintenance becomes slow, vulnerable and outdated. An eshop without monitoring loses sales without knowing it.', 'This service ensures every system we design or manage stays operational, secure and up to date.'],
      },
    },
    subServices: [
      { title: { el: 'Συντήρηση Ιστοσελίδας', en: 'Website Maintenance' }, slug: { el: 'sintirisi-istoselidon', en: 'website-maintenance' }, description: { el: 'Updates, security patches, backups, performance monitoring και content updates. Η ιστοσελίδα παραμένει γρήγορη, ασφαλής και ενημερωμένη.', en: 'Updates, security patches, backups, performance monitoring and content updates. The website stays fast, secure and up to date.' } },
      { title: { el: 'Τεχνική Υποστήριξη', en: 'Technical Support' }, slug: { el: 'texniki-ypostirixi', en: 'technical-support' }, description: { el: 'Άμεση τεχνική υποστήριξη για bugs, issues και τεχνικές ερωτήσεις. SLA-based response times.', en: 'Immediate technical support for bugs, issues and technical questions. SLA-based response times.' } },
      { title: { el: 'Cloud & Hosting', en: 'Cloud & Hosting' }, slug: { el: 'cloud-hosting', en: 'cloud-hosting' }, description: { el: 'Managed hosting σε αξιόπιστους providers: uptime monitoring, SSL management, server optimization και scalability.', en: 'Managed hosting on reliable providers: uptime monitoring, SSL management, server optimization and scalability.' } },
      { title: { el: 'Domain & Email Management', en: 'Domain & Email Management' }, slug: { el: 'domain-email-management', en: 'domain-email-management' }, description: { el: 'Διαχείριση domains, DNS, email setup (Google Workspace, Microsoft 365) και troubleshooting.', en: 'Domain management, DNS, email setup (Google Workspace, Microsoft 365) and troubleshooting.' } },
    ],
    approach: {
      heading: { el: 'Πώς εξασφαλίζουμε τη σταθερότητα.', en: 'How we ensure stability.' },
      steps: [
        { title: { el: 'Αξιολόγηση', en: 'Assessment' }, body: { el: 'Ανάλυση υπάρχουσας υποδομής, εντοπισμός αδυναμιών και κινδύνων.', en: 'Analysis of existing infrastructure, identification of weaknesses and risks.' } },
        { title: { el: 'Πλάνο', en: 'Plan' }, body: { el: 'Σχεδιασμός πλάνου συντήρησης με προτεραιότητες, SLAs και monitoring.', en: 'Designing a maintenance plan with priorities, SLAs and monitoring.' } },
        { title: { el: 'Εφαρμογή', en: 'Implementation' }, body: { el: 'Εκτέλεση updates, patches, backups και βελτιώσεις σε προγραμματισμένο κύκλο.', en: 'Executing updates, patches, backups and improvements on a scheduled cycle.' } },
        { title: { el: 'Αναφορά', en: 'Reporting' }, body: { el: 'Μηνιαία αναφορά κατάστασης, uptime stats και προτάσεις βελτίωσης.', en: 'Monthly status report, uptime stats and improvement recommendations.' } },
      ],
    },
    nonNegotiables: {
      heading: { el: 'Τι εγγυόμαστε στο IT support.', en: 'What we guarantee in IT support.' },
      items: [
        { title: { el: 'Δεν αφήνουμε κενά ασφαλείας', en: 'We don\'t leave security gaps' }, body: { el: 'Τακτικά updates, security patches και monitoring. Κανένα σύστημα δεν μένει εκτεθειμένο.', en: 'Regular updates, security patches and monitoring. No system is left exposed.' } },
        { title: { el: 'Δεν χρεώνουμε για θόρυβο', en: 'We don\'t charge for noise' }, body: { el: 'Πληρώνετε για πραγματική υποστήριξη, όχι για reports χωρίς περιεχόμενο.', en: 'You pay for real support, not for reports without content.' } },
        { title: { el: 'Δεν εξαρτάστε από εμάς', en: 'You don\'t depend on us' }, body: { el: 'Πλήρης πρόσβαση σε κάθε σύστημα, κωδικό και documentation. Τα assets ανήκουν στην επιχείρηση.', en: 'Full access to every system, credential and documentation. The assets belong to the business.' } },
      ],
    },
    faq: [
      { q: { el: 'Χρειάζεται η ιστοσελίδα μου συντήρηση;', en: 'Does my website need maintenance?' }, a: { el: 'Ναι. Κάθε ιστοσελίδα χρειάζεται τακτικά updates, security patches και performance monitoring. Χωρίς συντήρηση γίνεται αργή και ευάλωτη.', en: 'Yes. Every website needs regular updates, security patches and performance monitoring. Without maintenance it becomes slow and vulnerable.' } },
      { q: { el: 'Τι γίνεται αν υπάρξει πρόβλημα;', en: 'What happens if there\'s a problem?' }, a: { el: 'Λειτουργούμε με SLA-based response times. Η απόκριση εξαρτάται από τη σοβαρότητα του θέματος.', en: 'We operate with SLA-based response times. Response depends on the severity of the issue.' } },
    ],
  },
]

export function findCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug.el === slug || c.slug.en === slug)
}

export function findSubServiceBySlug(categorySlug: string, serviceSlug: string) {
  const category = findCategoryBySlug(categorySlug)
  if (!category) return undefined
  const sub = category.subServices.find((s) => s.slug.el === serviceSlug || s.slug.en === serviceSlug)
  if (sub) return { category, subService: sub }

  const longtail = longtailPages.find(
    (p) => p.parentCategoryId === category.id && (p.slug.el === serviceSlug || p.slug.en === serviceSlug)
  )
  return longtail ? { category, subService: longtail } : undefined
}

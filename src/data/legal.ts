interface LegalSection {
  heading: string
  subHeading?: string
  body: string[]
  items?: string[]
  subsections?: { heading: string; subHeading?: string; body: string[]; items?: string[] }[]
}

interface LegalPage {
  id: string
  slug: { el: string; en: string }
  eyebrow: { el: string; en: string }
  title: { el: string; en: string }
  lastUpdated: { el: string; en: string }
  meta: {
    title: { el: string; en: string }
    description: { el: string; en: string }
  }
  sections: { el: LegalSection[]; en: LegalSection[] }
}

export const legalPages: LegalPage[] = [
  {
    id: 'privacy',
    slug: { el: 'politiki-aporritou', en: 'privacy-policy' },
    eyebrow: { el: 'Νομικα', en: 'Legal' },
    title: { el: 'Πολιτικη Απορρητου', en: 'Privacy Policy' },
    lastUpdated: { el: 'Τελευταια ενημερωση: Μαιος 2026', en: 'Last updated: May 2026' },
    meta: {
      title: { el: 'Πολιτικη Απορρητου | Nouvo Collective', en: 'Privacy Policy | Nouvo Collective' },
      description: {
        el: 'Η πολιτικη απορρητου της Nouvo Collective: πως συλλεγουμε και διαχειριζομαστε τα προσωπικα σας δεδομενα. GDPR-compliant, διαφανης, περιοδικα ενημερωμενη.',
        en: 'The Nouvo Collective privacy policy: how we collect and manage your personal data. GDPR-compliant, transparent and periodically updated.',
      },
    },
    sections: {
      el: [
        {
          heading: '1. Ποιος ειναι ο Υπευθυνος Επεξεργασιας',
          body: ['Υπευθυνος επεξεργασιας των προσωπικων σας δεδομενων ειναι:'],
          items: ['Επωνυμια: Nouvo Collective', 'Domain: nouvo.agency', 'Email επικοινωνιας: contact@nouvo.agency', 'Τοποθεσια: Αθηνα, Ελλαδα'],
        },
        {
          heading: '2. Ποια Δεδομενα Συλλεγουμε',
          body: [],
          subsections: [
            {
              heading: 'Δεδομενα που μας παρεχετε απευθειας',
              body: ['Οταν συμπληρωνετε τη φορμα επικοινωνιας η ζητατε προσφορα, συλλεγουμε: ονομα, email, ονομα επιχειρησης και το μηνυμα σας. Αυτα τα δεδομενα χρησιμοποιουνται αποκλειστικα για να απαντησουμε στο αιτημα σας.'],
            },
            {
              heading: 'Δεδομενα που συλλεγονται αυτοματα',
              body: ['Οταν επισκεπτεστε τον ιστοτοπο μας, τα συστηματα μας καταγραφουν αυτοματα: διευθυνση IP (anonymized), τυπο συσκευης και browser, σελιδες που επισκεφτηκατε και χρονο παραμονης. Αυτα χρησιμοποιουνται αποκλειστικα για αναλυτικους σκοπους.'],
            },
          ],
        },
        {
          heading: '3. Γιατι Επεξεργαζομαστε τα Δεδομενα σας',
          body: [],
          subsections: [
            {
              heading: 'Απαντηση σε αιτηματα επικοινωνιας',
              body: ['Νομικη βαση: Εννομο Συμφερον (GDPR Art. 6(1)(f)). Διατηρηση: εως οτου απαντησουμε στο αιτημα σας.'],
            },
            {
              heading: 'Analytics και βελτιωση ιστοτοπου',
              body: ['Νομικη βαση: Εννομο Συμφερον (GDPR Art. 6(1)(f)) η ρητη συγκαταθεση σας. Διατηρηση: anonymized δεδομενα επ\' αοριστον.'],
            },
            {
              heading: 'Marketing',
              body: ['Εαν εχετε συναινεσει να λαμβανετε επικοινωνιες marketing, τα δεδομενα σας χρησιμοποιουνται μονο με τη ρητη συγκαταθεση σας. Νομικη βαση: Συγκαταθεση (GDPR Art. 6(1)(a)).'],
            },
          ],
        },
        {
          heading: '4. Που Μεταβιβαζουμε τα Δεδομενα σας',
          body: ['Δεν πουλαμε, νοικιαζουμε η ανταλλασσουμε τα προσωπικα σας δεδομενα σε τριτους. Οι μονοι τριτοι που μπορουν να εχουν προσβαση ειναι: providers αναλυτικων (Google Analytics με anonymized IP), email υπηρεσιων για απαντηση σε επικοινωνιες, και hosting providers για τη λειτουργια του ιστοτοπου. Οι τριτοι αυτοι δεσμευονται με GDPR-compliant συμβολαια.'],
        },
        {
          heading: '5. Τα Δικαιωματα σας',
          body: ['Βασει του GDPR, εχετε τα ακολουθα δικαιωματα:'],
          items: [
            'Προσβαση στα προσωπικα σας δεδομενα που κατεχουμε',
            'Διορθωση ανακριβων δεδομενων',
            'Διαγραφη δεδομενων ("right to be forgotten")',
            'Περιορισμο της επεξεργασιας',
            'Μεταφορα δεδομενων',
            'Αντιρρηση στην επεξεργασια',
            'Ανακληση συγκαταθεσης (εαν η επεξεργασια βασιζεται σε συγκαταθεση)',
          ],
        },
        {
          heading: '6. Cookies',
          body: ['Η πολιτικη μας για τα cookies περιγραφεται αναλυτικα στην Πολιτικη Cookies. Μπορειτε να διαχειριστειτε τις προτιμησεις cookies μεσω του cookie banner που εμφανιζεται στην πρωτη επισκεψη.'],
        },
        {
          heading: '7. Ασφαλεια Δεδομενων',
          body: ['Εφαρμοζουμε καταλληλα τεχνικα και οργανωτικα μετρα ασφαλειας: SSL κρυπτογραφηση, περιορισμενη προσβαση δεδομενων και περιοδικες αξιολογησεις ασφαλειας.'],
        },
        {
          heading: '8. Ενημερωσεις Πολιτικης',
          body: ['Η παρουσα πολιτικη μπορει να ενημερωθει περιοδικα. Οι αλλαγες θα αναρτηθουν σε αυτη τη σελιδα με ενημερωμενη ημερομηνια. Σε περιπτωση σημαντικων αλλαγων, θα σας ενημερωσουμε αμεσα.'],
        },
        {
          heading: '9. Επικοινωνια',
          body: ['Για ερωτησεις σχετικα με την επεξεργασια των δεδομενων σας: contact@nouvo.agency'],
        },
      ],
      en: [
        {
          heading: '1. Who is the Data Controller',
          body: ['The data controller for your personal data is:'],
          items: ['Name: Nouvo Collective', 'Domain: nouvo.agency', 'Contact email: contact@nouvo.agency', 'Location: Athens, Greece'],
        },
        {
          heading: '2. What Data We Collect',
          body: [],
          subsections: [
            {
              heading: 'Data you provide directly',
              body: ['When you complete the contact form or request a quote, we collect: your name, email, company name and your message. This data is used exclusively to respond to your request.'],
            },
            {
              heading: 'Data collected automatically',
              body: ['When you visit our website, our systems automatically record: IP address (anonymized), device and browser type, pages visited and time on site. These are used exclusively for analytics purposes.'],
            },
          ],
        },
        {
          heading: '3. Why We Process Your Data',
          body: [],
          subsections: [
            {
              heading: 'Responding to contact requests',
              body: ['Legal basis: Legitimate Interest (GDPR Art. 6(1)(f)). Retention: until we have responded to your request.'],
            },
            {
              heading: 'Analytics and website improvement',
              body: ['Legal basis: Legitimate Interest (GDPR Art. 6(1)(f)) or your explicit consent. Retention: anonymized data retained indefinitely.'],
            },
            {
              heading: 'Marketing',
              body: ['If you have agreed to receive marketing communications, your data is used only with your explicit consent. Legal basis: Consent (GDPR Art. 6(1)(a)).'],
            },
          ],
        },
        {
          heading: '4. Where We Transfer Your Data',
          body: ['We do not sell, rent or exchange your personal data with third parties. The only third parties that may have access are: analytics providers (Google Analytics with anonymized IP), email services for responding to communications, and hosting providers for website operation. These third parties are bound by GDPR-compliant contracts.'],
        },
        {
          heading: '5. Your Rights',
          body: ['Under the GDPR, you have the following rights:'],
          items: [
            'Access to your personal data we hold',
            'Correction of inaccurate data',
            'Deletion of data (right to be forgotten)',
            'Restriction of processing',
            'Data portability',
            'Objection to processing',
            'Withdrawal of consent (where processing is based on consent)',
          ],
        },
        {
          heading: '6. Cookies',
          body: ['Our cookie policy is described in detail in the Cookie Policy. You can manage your cookie preferences through the cookie banner displayed on first visit.'],
        },
        {
          heading: '7. Data Security',
          body: ['We apply appropriate technical and organisational security measures: SSL encryption, restricted data access and periodic security assessments.'],
        },
        {
          heading: '8. Policy Updates',
          body: ['This policy may be updated periodically. Changes will be posted on this page with an updated date. For significant changes, we will notify you directly.'],
        },
        {
          heading: '9. Contact',
          body: ['For questions regarding the processing of your data: contact@nouvo.agency'],
        },
      ],
    },
  },
  {
    id: 'cookies',
    slug: { el: 'politiki-cookies', en: 'cookie-policy' },
    eyebrow: { el: 'Νομικα', en: 'Legal' },
    title: { el: 'Πολιτικη Cookies', en: 'Cookie Policy' },
    lastUpdated: { el: 'Τελευταια ενημερωση: Μαιος 2026', en: 'Last updated: May 2026' },
    meta: {
      title: { el: 'Πολιτικη Cookies | Nouvo Collective', en: 'Cookie Policy | Nouvo Collective' },
      description: {
        el: 'Η πολιτικη cookies της Nouvo Collective: τι cookies χρησιμοποιουμε, για ποιον λογο και πως μπορειτε να τα διαχειριστειτε. GDPR-compliant.',
        en: 'The Nouvo Collective cookie policy: which cookies we use, why and how you can manage them. GDPR-compliant.',
      },
    },
    sections: {
      el: [
        {
          heading: 'Τι ειναι τα cookies;',
          body: ['Τα cookies ειναι μικρα αρχεια κειμενου που αποθηκευονται στη συσκευη σας οταν επισκεπτεστε εναν ιστοτοπο. Επιτρεπουν στον ιστοτοπο να θυμαται τις προτιμησεις σας και να βελτιωνει την εμπειρια σας.'],
        },
        {
          heading: 'Ποιες κατηγοριες cookies χρησιμοποιουμε',
          body: [],
          subsections: [
            {
              heading: 'Απαραιτητα Cookies (Cookies Λειτουργιας)',
              subHeading: 'Σκοπος: Απαραιτητα για τη βασικη λειτουργια του ιστοτοπου.',
              body: ['Αυτα τα cookies ειναι απαραιτητα για την ευκολη χρηση του ιστοτοπου. Περιλαμβανουν: cookie banner preferences (θυμουνται την επιλογη σας), session management (αναγνωριση συνεδριας οταν πλοηγειστε), και ασφαλεια (προστασια απο CSRF attacks). Δεν απαιτειται η συγκαταθεση σας για αυτα τα cookies.'],
              items: ['cookie_consent: Θυμαται την επιλογη σας για cookies (1 χρονο)', 'session_id: Διαχειριση συνεδριας χρηστη (session)'],
            },
            {
              heading: 'Analytics Cookies',
              subHeading: 'Σκοπος: Κατανοηση του τροπου χρησης του ιστοτοπου.',
              body: ['Χρησιμοποιουμε Google Analytics (με anonymized IP) για να κατανοησουμε πως οι επισκεπτες χρησιμοποιουν τον ιστοτοπο μας: ποιες σελιδες επισκεφτηκαν, ποση ωρα εμειναν, πως κατεληξαν στον ιστοτοπο μας. Αυτα τα δεδομενα ειναι anonymized και δεν συνδεονται με προσωπικες ταυτοτητες. Αυτα τα cookies απαιτουν τη συγκαταθεση σας.'],
              items: ['_ga: Google Analytics (2 χρονια)', '_ga_[ID]: Google Analytics session (2 χρονια)'],
            },
            {
              heading: 'Marketing Cookies',
              subHeading: 'Σκοπος: Διαφημιση και retargeting.',
              body: ['Εαν εχετε δωσει τη συγκαταθεση σας, μπορουν να ενσωματωθουν cookies για retargeting campaigns (Google Ads, Meta Pixel). Αυτα τα cookies παρακολουθουν τη δραστηριοτητα σας σε αλλα websites για να σας εμφανισουν σχετικες διαφημισεις. Αυτα τα cookies απαιτουν τη συγκαταθεση σας.'],
            },
          ],
        },
        {
          heading: 'Διαχειριση Cookies',
          body: ['Εχετε πληρη ελεγχο στα cookies που δεχεστε:'],
          subsections: [
            {
              heading: 'Μεσω του Cookie Banner',
              body: ['Στην πρωτη επισκεψη στον ιστοτοπο μας, εμφανιζεται cookie banner που σας επιτρεπει να αποδεχτειτε η να αρνηθειτε:'],
              items: ['Απαραιτητα Cookies (δεν μπορουν να απενεργοποιηθουν)', 'Analytics Cookies', 'Marketing Cookies'],
            },
            {
              heading: 'Μεσω του Browser σας',
              body: ['Μπορειτε να διαχειριστειτε η να διαγραψετε cookies απευθειας απο τον browser σας. Οδηγιες για τους κυριοτερους browsers:'],
              items: ['Chrome: Ρυθμισεις > Απορρητο & Ασφαλεια > Cookies', 'Firefox: Ρυθμισεις > Απορρητο & Ασφαλεια', 'Safari: Ρυθμισεις > Safari > Απορρητο'],
            },
            {
              heading: 'Ανακληση συγκαταθεσης',
              body: ['Μπορειτε να ανακαλεσετε τη συγκαταθεση σας οποιαδηποτε στιγμη μεσω του cookie banner (κλικαροντας το cookie icon στην κατω αριστερα), η να διαχειριστειτε τις προτιμησεις σας.'],
            },
          ],
        },
        {
          heading: 'Αλλαγες στην πολιτικη cookies',
          body: ['Η παρουσα πολιτικη μπορει να ενημερωθει περιοδικα αναλογα με τις τεχνολογικες αλλαγες η τις νομοθετικες απαιτησεις. Οι αλλαγες θα αναρτηθουν σε αυτη τη σελιδα με ενημερωμενη ημερομηνια.'],
        },
        {
          heading: 'Επικοινωνια',
          body: ['Για ερωτησεις σχετικα με τη χρηση cookies: contact@nouvo.agency'],
        },
      ],
      en: [
        {
          heading: 'What are cookies?',
          body: ['Cookies are small text files stored on your device when you visit a website. They allow the website to remember your preferences and improve your experience.'],
        },
        {
          heading: 'Which cookie categories we use',
          body: [],
          subsections: [
            {
              heading: 'Essential Cookies (Functional Cookies)',
              subHeading: 'Purpose: Required for basic website functionality.',
              body: ['These cookies are essential for easy use of the website. They include: cookie banner preferences (remembering your choice), session management (recognising your session as you navigate), and security (protecting against CSRF attacks). Your consent is not required for these cookies.'],
              items: ['cookie_consent: Remembers your cookie choice (1 year)', 'session_id: User session management (session)'],
            },
            {
              heading: 'Analytics Cookies',
              subHeading: 'Purpose: Understanding how the website is used.',
              body: ['We use Google Analytics (with anonymized IP) to understand how visitors use our website: which pages were visited, how long they stayed, how they arrived at our website. This data is anonymized and not linked to personal identities. These cookies require your consent.'],
              items: ['_ga: Google Analytics (2 years)', '_ga_[ID]: Google Analytics session (2 years)'],
            },
            {
              heading: 'Marketing Cookies',
              subHeading: 'Purpose: Advertising and retargeting.',
              body: ['If you have given consent, retargeting cookies may be activated (Google Ads, Meta Pixel). These cookies track your activity on other websites to show you relevant advertising. These cookies require your consent.'],
            },
          ],
        },
        {
          heading: 'Managing Cookies',
          body: ['You have full control over the cookies you accept:'],
          subsections: [
            {
              heading: 'Through the Cookie Banner',
              body: ['On your first visit, a cookie banner allows you to accept or decline:'],
              items: ['Essential Cookies (cannot be disabled)', 'Analytics Cookies', 'Marketing Cookies'],
            },
            {
              heading: 'Through Your Browser',
              body: ['You can manage or delete cookies directly from your browser settings:'],
              items: ['Chrome: Settings > Privacy and Security > Cookies', 'Firefox: Settings > Privacy and Security', 'Safari: Settings > Safari > Privacy'],
            },
            {
              heading: 'Withdrawing consent',
              body: ['You can withdraw your consent at any time through the cookie banner (clicking the cookie icon at the bottom left), or manage your preferences.'],
            },
          ],
        },
        {
          heading: 'Changes to the cookie policy',
          body: ['This policy may be updated periodically based on technology changes or legal requirements. Changes will be posted on this page with an updated date.'],
        },
        {
          heading: 'Contact',
          body: ['For questions about cookie usage: contact@nouvo.agency'],
        },
      ],
    },
  },
]

export function findLegalPageBySlug(slug: string) {
  return legalPages.find((p) => p.slug.el === slug || p.slug.en === slug)
}

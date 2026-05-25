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
    eyebrow: { el: 'Nomika', en: 'Legal' },
    title: { el: 'Politiki Aporrytoy', en: 'Privacy Policy' },
    lastUpdated: { el: 'Teleftaia enimerosi: Mai 2026', en: 'Last updated: May 2026' },
    meta: {
      title: { el: 'Politiki Aporrytoy | Nouvo Collective', en: 'Privacy Policy | Nouvo Collective' },
      description: {
        el: 'I politiki aporrytoy tis Nouvo Collective: pos syllegyoyme kai diacheirizzomasste ta prosopika sas dedommaata. GDPR-compliant, diafani, periodikoos enimerommeni.',
        en: 'The Nouvo Collective privacy policy: how we collect and manage your personal data. GDPR-compliant, transparent and periodically updated.',
      },
    },
    sections: {
      el: [
        {
          heading: '1. Poios einai o Ypeythynos Epexergasias',
          body: ['Ypeythnos epexergasias ton prosopikon sas dedommaaton einai:'],
          items: ['Eponymia: Nouvo Collective', 'Domain: nouvo.agency', 'Email epikoinonias: contact@nouvo.agency', 'Topotithesia: Athina, Ellada'],
        },
        {
          heading: '2. Poia Dedommaata Syllegyoyme',
          body: [],
          subsections: [
            {
              heading: 'Dedommaata pou mas paradidetai apeytheias',
              body: ['Otan sympleronete ti forma epikoinonias i zitate prosfora, syllegyoyme: onoma, email, onoma epixeirisis kai to minima sas. Afta ta dedommaata xrisimopoiountai apokleiistika gia na apantisssoyme sto aitima sas.'],
            },
            {
              heading: 'Dedommaata pou syllegyontai aytomata',
              body: ['Otan episkeptestai ton istoopo mas, ta sistimata mas katagrafoun aftomatoos: dieuthinsi IP (anonymized), typos syskevis kai browser, selides pou episkeftikate kai xronos paramoneis. Afta xrisimopoiountai apokleiistika gia analytika skopouss.'],
            },
          ],
        },
        {
          heading: '3. Giati Epexergazomasste ta Dedommaata sas',
          body: [],
          subsections: [
            {
              heading: 'Apantisi se aitimata epikoinonias',
              body: ['Nomiki vasi: Symferon (GDPR Art. 6(1)(f)). Diasirisi: eos oti apantissoyme sto aitima sas.'],
            },
            {
              heading: 'Analytics kai veltiosi istotoopoy',
              body: ['Nomiki vasi: Symferon (GDPR Art. 6(1)(f)) i Apo expresi to zymphonia sas. Diasirisi: anonymized dedommaata eis aoriston.'],
            },
            {
              heading: 'Marketing',
              body: ['Ean exete dyskerastei na lambannete epikoinonies marketing, ta dedommaata sas xrisimopoiountai mono me tin exressti apo sas. Nomiki vasi: Zymphonia (GDPR Art. 6(1)(a)).'],
            },
          ],
        },
        {
          heading: '4. Pou Metevivazoyme ta Dedommaata sas',
          body: ['Den pooolame, nomizzoume i allazzoyme ta prosopika sas dedommaata se trites. Oi monoi trittoi pooy mporoun na echoun prosvasi einai: providers analytikon (Google Analytics me anonymized IP), email ypiresion gia apantisi se epikoinonies, kai hosting providers gia tin leitoyrgeia toy istootoopoy. Oi trittoi afti dessinevontai me GDPR-compliant symbolia.'],
        },
        {
          heading: '5. Ta Dikaiomata sas',
          body: ['Bazei tou GDPR, exete ta akoloytha dikaiomata:'],
          items: [
            'Prosvasis sti ta prosopika sas dedommaata pou katechame',
            'Diorthoosis anakorikeon dedommaaton',
            'Diagrafis dedommaaton ("right to be forgotten")',
            'Periorismoy tis epexergasias',
            'Metaferesis dedommaaton',
            'Antirisi stin epexergasiia',
            'Anakliisis zymphonias (ean i epexergasia vazettai se zymphonia)',
          ],
        },
        {
          heading: '6. Cookies',
          body: ['I politiki mas gia ta cookies perrigraaftai analitika stin Politiki Cookies. Mporeitai na diacheiristite tis protymseis cookies meso toy cookie banner poy emfanizetai stin proooti episkepsi.'],
        },
        {
          heading: '7. Asfaleia Dedommaaton',
          body: ['Efarmozoyme katallila technika kai organotikotica metra assfaleias: SSL kryptografisi, periorismeni prosvasi dedommaaton kai periodikes axiologiseis assfaleias.'],
        },
        {
          heading: '8. Etaireiki Plirofories kai Allagges',
          body: ['I parousa politiki mporei na enimerothei periodikoos. Oi allagges tha anartithoun se afti ti selida me enimerommeni imerominia. Se periptosi simantikon allagoon, tha sas enimeroonoume expreses.'],
        },
        {
          heading: '9. Epikoinonia',
          body: ['Gia erotiseis sxetika me tin epexergasiia ton dedommaaton sas: contact@nouvo.agency'],
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
    eyebrow: { el: 'Nomika', en: 'Legal' },
    title: { el: 'Politiki Cookies', en: 'Cookie Policy' },
    lastUpdated: { el: 'Teleftaia enimerosi: Mai 2026', en: 'Last updated: May 2026' },
    meta: {
      title: { el: 'Politiki Cookies | Nouvo Collective', en: 'Cookie Policy | Nouvo Collective' },
      description: {
        el: 'I politiki cookies tis Nouvo Collective: ti cookies xrisimopoioyme, gia poion logo kai pos mporeitai na tis diacheiristei. GDPR-compliant.',
        en: 'The Nouvo Collective cookie policy: which cookies we use, why and how you can manage them. GDPR-compliant.',
      },
    },
    sections: {
      el: [
        {
          heading: 'Ti einai ta cookies;',
          body: ['Ta cookies einai mikra arxeia keimenoy pou apothikevoyntai sti syskeyi sas otan episkepestai enan istotoopo. Epittrepoun ston istotoopo na thimizetai tis protymseis sas kai na syntelesei tin empeiria sas.'],
        },
        {
          heading: 'Poies kategoryes cookies xrisimopoioyme',
          body: [],
          subsections: [
            {
              heading: 'Aparaititta Cookies (Cookies Leitoyrgiias)',
              subHeading: 'Skopos: Apairyta gia tin vasiki leitoyrgeia toy istootoopoy.',
              body: ['Afta ta cookies einai apairyta gia tin eykoli xrisi toy istootoopoy. Perilamvanoun: cookie banner preferences (thimoyntai tin epilogi sas), session management (anagnorisi sinedrias otan navigarete), kai asfaleia (prostasia apo CSRF attacks). Den apaiteitai i zymmphonia sas gia afta ta cookies.'],
              items: ['cookie_consent: Thimaatai tin epilogi sas gia cookies (1 chrono)', 'session_id: Diacheirisi sinedrias xristi (session)'],
            },
            {
              heading: 'Analytics Cookies',
              subHeading: 'Skopos: Katanoisi toy tropou xrisis toy istootoopoy.',
              body: ['Xrisimopoiooyme Google Analytics (me anonymized IP) gia na katanoisssoyme pos oi episkeptes xrisimopoioyn ton istotoopo mas: pies selides episkepthikan, poso wri emeinan, poos kataleegian ston istotoopo mas. Afta ta dedommaata einai anonymized kai den syndeontai me prossopikes taytotites. Afta ta cookies apaitoyn tin zymmphonia sas.'],
              items: ['_ga: Google Analytics (2 chronia)', '_ga_[ID]: Google Analytics session (2 chronia)'],
            },
            {
              heading: 'Marketing Cookies',
              subHeading: 'Skopos: Diafimisi kai retargeting.',
              body: ['Ean exete dynnysei tin zymmphonia sas, mporoun na ensomaatothoun cookies gia retargeting campaigns (Google Ads, Meta Pixel). Afta ta cookies parascoloythounn tin perigrafii i se alla websites gia na sas emfanisoun sxetikes diafimiseis. Afta ta cookies apaitoyn tin zymmphonia sas.'],
            },
          ],
        },
        {
          heading: 'Diacheirisi Cookies',
          body: ['Exete pliris elegcho me ta cookies poy dyrechzestai:'],
          subsections: [
            {
              heading: 'Meso toy Cookie Banner',
              body: ['Stin prooti episkepsi ston istotoopo mas, emfanizzetai cookie banner pou sas epittrepei na ephirmosete i na arnitheitai:'],
              items: ['Aparaitetta Cookies (den mporoun na apennergkopiizoontai)', 'Analytics Cookies', 'Marketing Cookies'],
            },
            {
              heading: 'Meso toy Browser sas',
              body: ['Mporeitai na diacheiristite i na diagraphsete cookies apeytheias apo ton browser sas. Odiges gia tous kyriterous browsers:'],
              items: ['Chrome: Rythmiseis > Aporryton & Asfaleia > Cookies', 'Firefox: Rythmiseis > Aporryton & Asfaleia', 'Safari: Rythmiseis > Safari > Aporryton'],
            },
            {
              heading: 'Apostoli synkatathesis',
              body: ['Mporeitai na anaklaasite tin zymmphonia sas opoiadipote stigmi meso toy cookie banner (klikaarontass to cookie icon sti katoo aristeraa), i na diacheiristite tis protymseis sas.'],
            },
          ],
        },
        {
          heading: 'Allagges stin politiki cookies',
          body: ['I parousa politiki mporei na enimerothei perioddikoos analoga me tis technologikees allagges i tis noomotheetikes apaitiseis. Oi allagges tha anartithoun se afti ti selida me enimerommeni imerominia.'],
        },
        {
          heading: 'Epikoinonia',
          body: ['Gia erotiseis sxetika me ti chrissi cookies: contact@nouvo.agency'],
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

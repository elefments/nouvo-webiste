# Nouvo.agency — E-E-A-T & Content Quality Analysis
**Ανάλυση: Μάιος 2026 | Βάση: Google QRG September 2025**

---

## ΣΥΝΟΛΙΚΟ ΣΚΟΡ: 61 / 100

**Verdict:** Το copy είναι στρατηγικά συνεκτικό, καλά branded και δομικά σωστό. Η φωνή είναι consistent και το positioning διαφοροποιημένο. Αποτυγχάνει όμως στην πιο κρίσιμη διάσταση E-E-A-T (Trustworthiness) γιατί δεν υπάρχει καμία επαληθεύσιμη απόδειξη — zero social proof, zero case studies, zero client outcomes, και ένα stat discrepancy που υπονομεύει την αξιοπιστία.

---

## 1. E-E-A-T SCORE ΑΝΑ ΣΕΛΙΔΑ

| Σελίδα / Section | Experience | Expertise | Authority | Trust | **Σύνολο** |
|---|---|---|---|---|---|
| Homepage Hero | 4/10 | 5/10 | 3/10 | 4/10 | **16/40** |
| About Page | 6/10 | 5/10 | 3/10 | 6/10 | **20/40** |
| Services Overview | 4/10 | 6/10 | 3/10 | 5/10 | **18/40** |
| Websites Category | 5/10 | 7/10 | 3/10 | 6/10 | **21/40** |
| Search Category | 5/10 | 7/10 | 2/10 | 6/10 | **20/40** |
| Marketing Category | 4/10 | 6/10 | 2/10 | 5/10 | **17/40** |
| AI Category | 5/10 | 6/10 | 2/10 | 7/10 | **20/40** |
| IT Support | 6/10 | 6/10 | 2/10 | 7/10 | **21/40** |
| **Doctor Longtail** | **2/10** | **4/10** | **1/10** | **2/10** | **🔴 9/40** |
| **Lawyer Longtail** | **2/10** | **4/10** | **1/10** | **2/10** | **🔴 9/40** |
| Accountant Longtail | 3/10 | 4/10 | 1/10 | 3/10 | **11/40** |
| Gym Longtail | 3/10 | 5/10 | 2/10 | 2/10 | **12/40** |
| Marketing Longtails | 3/10 | 5/10 | 2/10 | 4/10 | **14/40** |
| Contact Page | 6/10 | 5/10 | 4/10 | 7/10 | **22/40** ✅ |
| Case Studies | — | — | — | — | **Κενό — Κρίσιμο** |
| Blog | — | — | — | — | **Κενό — Υψηλό** |

**AI Citation Readiness Score: 52 / 100**

---

## 2. ΚΡΙΣΙΜΑ ΠΡΟΒΛΗΜΑΤΑ ΑΝΑ ΣΕΛΙΔΑ

### 🔴 ΚΡΙΣΙΜΟ: Discrepancy χρόνων εμπειρίας

**Το πρόβλημα:**
- `about.ts` stats: `{ to: 20, suffix: '+', label: 'Χρόνια εμπειρίας' }` → **20+**
- `nouvo-homepage-copy-v2.md`: `"16 χρόνια | Τεχνική εμπειρία"` → **16**
- Schema `foundingDate: "2010"` → **15-16 χρόνια από 2026**

Τριπλό contradiction. Κάποιος που συγκρίνει About page με Homepage βλέπει διαφορετικούς αριθμούς και χάνει εμπιστοσύνη και στους δύο.

**Λύση:** Αποφασίστε έναν αριθμό. Αν το 20+ αφορά εμπειρία ιδρυτών πριν τη Nouvo, το copy πρέπει να το εξηγεί. Αλλιώς, align σε 16+ και ενημερώστε όλα τα αρχεία.

---

### 🔴 ΚΡΙΣΙΜΟ: YMYL Longtail Pages (Γιατροί & Δικηγόροι)

**Γιατρός — Τρέχον content:** ~120 λέξεις (1 πρόταση + 6 bullets)

Αυτές είναι YMYL-adjacent σελίδες. Ο Google QRG Sept 2025 απαιτεί demonstrable expertise AND experience για medical-sector pages. Η λίστα "YMYL and E-E-A-T compliance" στα includes σημαίνει ότι η Nouvo ξέρει την απαίτηση — αλλά δεν την πληροί στο ίδιο της το site.

**Ελάχιστο για συμμόρφωση:** 600+ λέξεις με:
- GDPR Art. 9 specifics (ευαίσθητα ιατρικά δεδομένα)
- ΕΟΠΕ κανονισμοί για διαφήμιση ιατρικών υπηρεσιών
- Consent forms και encryption standards
- Παρουσίαση ειδικότητας / βιογραφικό αρχιτεκτονική

**Δικηγόρος — Λείπει:**
- ΔΣΑ compliance considerations για διαφήμιση
- Attorney-client privilege στο σχεδιασμό contact forms
- Practice areas website architecture

---

### 🟠 ΥΨΗΛΟ: Zero Social Proof σε ολόκληρο το site

Κανένα testimonial. Κανένα case study. Κανένα client outcome.

Η κεντρική claim του site — "measurable results, systems that work" — είναι αναπόδεικτη. Ο Google QRG 2025 βαραίνει ιδιαίτερα third-party validation γιατί είναι το πιο δύσκολο να πλαστογραφηθεί.

**Ελάχιστο action:**
- 1 case study per pillar (5 total) — ανώνυμα κατά sector αν χρειάζεται
- 1 testimonial per service category page
- Format για schema:
```json
{
  "@type": "Review",
  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
  "author": { "@type": "Person", "name": "Ιδιοκτήτης e-shop, Αθήνα" },
  "reviewBody": "Σε 6 μήνες τριπλασιάσαμε τις online πωλήσεις."
}
```

---

### 🟠 ΥΨΗΛΟ: Pricing Transparency — Brand Promise vs Reality

**Το contradiction:**
- Contact page λέει: "No vague contact us for pricing"
- Κάθε service page FAQ λέει: "Επικοινωνήστε μαζί μας για αξιολόγηση" — χωρίς κανένα range

**Rewrite για Websites FAQ:**
> "Δεν δουλεύουμε με σταθερά πακέτα — κάθε project είναι custom. Ενδεικτικά, μια επαγγελματική εταιρική ιστοσελίδα ξεκινά από €1.500-2.500, ενώ ένα πλήρες eshop από €3.000-5.000, ανάλογα με τις λειτουργίες. Ζητήστε αξιολόγηση για ακριβή προσφορά χωρίς δέσμευση."

Αυτό επίσης δημιουργεί featured snippet opportunity για "κόστος κατασκευής ιστοσελίδας Ελλάδα".

---

### 🟠 ΥΨΗΛΟ: Repetitive Phrases — AI Content Flag

Φράσεις που εμφανίζονται verbatim σε 3+ διαφορετικές σελίδες:
- "Consultants who design and disappear" / "Σύμβουλοι που σχεδιάζουν και εξαφανίζονται" — 3 φορές
- "We don't run experiments on live businesses" / "Δεν κάνουμε πειράματα σε ζωντανές επιχειρήσεις" — 4 φορές

Ο Google QRG 2025 flaggει repetitive structure ως σήμα templated/low-quality content.

**Λύση:**
- About page: Κράτα το original — είναι η origin story context
- Homepage: Άλλαξε σε "Επιχειρήσεις που πλήρωσαν για στρατηγική και δεν είδαν ποτέ υλοποίηση."
- Remaining pages: "Στρατηγικές που παρέμειναν σε slides και ποτέ δεν μετατράπηκαν σε συστήματα."

---

### 🟡 ΜΕΤΡΙΟ: AI Category — Zero Specific Tool Names

Τρέχον: "AI chatbots for customer service, lead qualification and support automation."

**Rewrite:**
> "AI chatbots για εξυπηρέτηση πελατών, lead qualification και support automation. Δουλεύουμε με Voiceflow, Botpress, και OpenAI API integrations — custom-trained στα δεδομένα της επιχείρησης μέσω RAG (Retrieval-Augmented Generation)."

**Για process automation:**
> "Αυτοματισμός διαδικασιών μέσω Make (πρώην Integromat), n8n και Zapier: invoicing, reporting, data entry, follow-ups. Μέσος όρος εξοικονόμησης: 4-8 ώρες/εβδομάδα ανά αυτοματοποιημένη διαδικασία."

---

### 🟡 ΜΕΤΡΙΟ: Email Marketing Uncited Claim

Τρέχον: "Το κανάλι με το υψηλότερο ROI στο digital marketing."

**Rewrite:**
> "Σύμφωνα με έρευνα της Litmus (2024), το email marketing αποδίδει κατά μέσο όρο $36 για κάθε $1 που επενδύεται — το υψηλότερο ROI από κάθε άλλο ψηφιακό κανάλι."

---

### 🟡 ΜΕΤΡΙΟ: Search Category — "No Guarantees" είναι θαμμένο

Το "Δεν υποσχόμαστε πρώτη σελίδα" είναι ο ισχυρότερος differentiator στην ελληνική αγορά SEO — αλλά βρίσκεται στο τρίτο bullet του `nonNegotiables` section.

**Προσθήκη στο intro της κατηγορίας:**
> "Δεν υποσχόμαστε πρώτη σελίδα — δεν το κάνει κανένας αξιόπιστος. Υποσχόμαστε δομημένη διαδικασία και μετρήσιμη βελτίωση."

---

### 🟡 ΜΕΤΡΙΟ: Contact Page — Missing Address & Registration

Το schema ορίζει `LocalBusiness` αλλά χωρίς `streetAddress` — τεχνικά ατελές για local pack results.

**Λείπει:**
- Συγκεκριμένη γειτονιά/περιοχή Αθήνας (έστω "Κεντρική Αθήνα")
- ΑΦΜ ή αριθμός ΓΕΜΗ (standard για B2B professional services στην Ελλάδα)

---

## 3. ΚΕΝΑ ΣΕ ΣΧΕΣΗ ΜΕ ΑΝΤΑΓΩΝΙΣΤΕΣ

| Στοιχείο | Ανταγωνιστές με E-E-A-T | Nouvo |
|---|---|---|
| Team/Specialists section | ✅ | ❌ |
| Published portfolio (case studies) | ✅ | ❌ |
| Pricing ranges | ✅ (πολλοί) | ❌ |
| Client testimonials | ✅ | ❌ |
| YMYL vertical credentials | ✅ (ειδικοί) | ❌ |
| Blog content | ✅ | ❌ |
| External authority signals | ✅ | ❌ |
| AggregateRating schema | ✅ (seomarketer.gr) | ❌ |

---

## 4. TOP 10 PRIORITY FIXES

| # | Fix | Impact | Effort | Αρχείο |
|---|---|---|---|---|
| 1 | Resolve years discrepancy (20+ vs 16+) | 🔴 Critical | Trivial | `about.ts` + homepage copy + schema |
| 2 | Publish 2-3 case studies | 🔴 Critical | High | New content |
| 3 | Expand doctor + lawyer longtails to 600+ words | 🔴 Critical | Medium | `longtail-pages.ts` |
| 4 | Add pricing signals to service FAQs | 🟠 High | Low | `services.ts` |
| 5 | Add testimonials (1 per service category) | 🟠 High | Medium | `services.ts` |
| 6 | Stop repeating verbatim phrases across pages | 🟠 High | Low | Multiple files |
| 7 | Name specific AI tools in AI category | 🟡 Medium | Low | `services.ts` |
| 8 | Surface "no guarantees" in SEO category intro | 🟡 Medium | Trivial | `services.ts` |
| 9 | Add email marketing ROI citation | 🟡 Medium | Trivial | `services.ts` |
| 10 | Add address + ΑΦΜ to contact page | 🟡 Medium | Trivial | `contact.ts` |

---

## 5. READABILITY ASSESSMENT

**Γενικά:** Καλή δομή, σωστό register για SME owners. Τα κυριότερα προβλήματα:

**Jargon που χρειάζεται plain-language support (για longtail pages):**
- "E-E-A-T optimization for YMYL pages" → "Δομή που χτίζει εμπιστοσύνη στην Google για επαγγελματικές υπηρεσίες"
- "SPF/DKIM/DMARC configuration" → Προσθήκη parenthetical: "(ρυθμίσεις που εμποδίζουν το spam spoofing του domain σας)"

**Η καλύτερη πρόταση στο site:**
> "Μια ιστοσελίδα χωρίς συντήρηση γίνεται αργή, ευάλωτη και ξεπερασμένη." (IT category)

Αυτό είναι το register που πρέπει να έχουν όλες οι σελίδες: concrete, credible, plainly stated.

**Missing FAQ για AEO (high featured snippet potential):**
- "Πόσο κοστίζει ένα digital agency στην Ελλάδα;"
- "Πόσο χρόνο χρειάζεται να δω αποτελέσματα από SEO;"
- "Τι διαφορά έχει AEO από SEO;"

---

## AI CITATION READINESS: 52 / 100

**Τι λειτουργεί:** FAQ schema σε category pages, answerable claims με numbers, Organization schema στο homepage.

**Τι μπλοκάρει:**
- No AggregateRating schema (χρειάζεται reviews)
- Service pages χωρίς Service schema (`offers`, `areaServed`)
- Longtail pages χωρίς κανένα schema
- Uncited factual claims
- Zero HowTo schema (τα process steps είναι natural candidates)

---

*Βασισμένο σε Google Quality Rater Guidelines September 2025 | SearchFit.ai Content Quality Agent | Μάιος 2026*

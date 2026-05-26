import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'service', 'featured', 'status', 'order'],
    description: 'Μαρτυρίες πελατών. Εμφανίζονται στην αρχική σελίδα και στις υπηρεσίες.',
  },
  fields: [
    // ── Main fields ──────────────────────────────────
    {
      name: 'name',
      type: 'text',
      label: 'Όνομα',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      label: 'Θέση / Ρόλος',
      admin: { description: 'π.χ. CEO, Marketing Manager, Ιδιοκτήτης' },
    },
    {
      name: 'company',
      type: 'text',
      label: 'Εταιρεία',
    },
    {
      name: 'companyUrl',
      type: 'text',
      label: 'Website εταιρείας (προαιρετικό)',
      admin: { description: 'https://...' },
    },
    {
      name: 'quote',
      type: 'textarea',
      label: 'Μαρτυρία',
      required: true,
      localized: true,
      admin: {
        description: 'Το κείμενο της μαρτυρίας. Γράψτε σε πρώτο πρόσωπο.',
        rows: 4,
      },
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Βαθμολογία (1–5)',
      defaultValue: 5,
      min: 1,
      max: 5,
      admin: { description: 'Αριθμός αστεριών. Αφήστε 5 αν δεν υπάρχει συγκεκριμένη βαθμολογία.' },
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media',
      label: 'Φωτογραφία (προαιρετικό)',
    },
    {
      name: 'service',
      type: 'select',
      label: 'Υπηρεσία',
      admin: { description: 'Σε ποια υπηρεσία αφορά η μαρτυρία;' },
      options: [
        { label: 'Ιστοσελίδες & Eshop', value: 'websites' },
        { label: 'SEO & Ορατότητα', value: 'seo' },
        { label: 'Marketing & Ανάπτυξη', value: 'marketing' },
        { label: 'AI & Αυτοματισμός', value: 'ai' },
        { label: 'IT & Υποστήριξη', value: 'it' },
      ],
    },
    // ── Sidebar fields ────────────────────────────────
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Εμφάνιση στην αρχική',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Αν επιλεγεί, εμφανίζεται στο testimonials section της αρχικής.',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Σειρά εμφάνισης',
      defaultValue: 99,
      admin: {
        position: 'sidebar',
        description: 'Μικρότερος αριθμός = εμφανίζεται πρώτο.',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Κατάσταση',
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
}

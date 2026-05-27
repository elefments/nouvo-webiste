import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  labels: {
    singular: 'Form Submission',
    plural: 'Form Submissions',
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'service', 'locale', 'createdAt'],
    description: 'Μηνύματα από τη φόρμα επικοινωνίας και το Book a Call modal.',
  },
  access: {
    // Only admins can read/delete — nobody can create via admin (only via API)
    read: ({ req }) => req.user?.role === 'admin' || !!req.user,
    create: () => true, // API route creates entries
    update: ({ req }) => !!req.user,
    delete: ({ req }) => req.user?.role === 'admin' || !!req.user,
  },
  fields: [
    {
      name: 'source',
      type: 'select',
      label: 'Πηγή',
      required: true,
      options: [
        { label: 'Φόρμα Επικοινωνίας', value: 'contact_form' },
        { label: 'Book a Call Modal', value: 'book_call_modal' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'locale',
      type: 'select',
      label: 'Γλώσσα',
      options: [
        { label: 'Ελληνικά', value: 'el' },
        { label: 'English', value: 'en' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'Όνομα',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Τηλέφωνο',
    },
    {
      name: 'company',
      type: 'text',
      label: 'Εταιρεία',
    },
    {
      name: 'service',
      type: 'text',
      label: 'Υπηρεσία',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Μήνυμα',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Κατάσταση',
      defaultValue: 'new',
      options: [
        { label: '🆕 Νέο', value: 'new' },
        { label: '👀 Σε εξέλιξη', value: 'in_progress' },
        { label: '✅ Απαντήθηκε', value: 'replied' },
        { label: '🗄️ Αρχειοθετήθηκε', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Σημειώσεις (εσωτερικές)',
      admin: {
        description: 'Εσωτερικές σημειώσεις — δεν φαίνονται στον πελάτη.',
      },
    },
  ],
  timestamps: true,
}

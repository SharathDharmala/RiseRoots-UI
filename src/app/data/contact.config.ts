/* ======================================================
   CONTACT CONFIG – SINGLE SOURCE OF TRUTH
====================================================== */

export interface ContactItem {
  type: 'phone' | 'whatsapp' | 'email';
  label: string;
  value: string;
  link: string;
}

export const CONTACT_CONFIG: ContactItem[] = [
  {
    type: 'whatsapp',
    label: 'WhatsApp',
    value: '+91 7801021056',
    link: 'https://wa.me/917801021056',
  },
  {
    type: 'phone',
    label: 'Call',
    value: '+91 7801021056',
    link: 'tel:+917801021056',
  },
  {
    type: 'phone',
    label: 'Call',
    value: '+91 7036238999',
    link: 'tel:+917036238999',
  },
  {
    type: 'whatsapp',
    label: 'WhatsApp',
    value: '+91 7036238999',
    link: 'https://wa.me/917036238999',
  },
  {
    type: 'email',
    label: 'Reach us @',
    value: 'riseroots@outlook.com',
    link: 'mailto:riseroots@outlook.com',
  },
];

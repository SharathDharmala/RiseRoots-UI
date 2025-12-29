/* ======================================================
   CONTACT CONFIG – SINGLE SOURCE OF TRUTH (FINAL)
====================================================== */

/* =========================
   PHONE CONTACT
========================= */
export interface PhoneContact {
  label: string;
  value: string;
  callLink: string;
  whatsappLink: string;
  notifyOnLead?: boolean; // 🔥 backend / automation usage
}

/* =========================
   EMAIL CONTACT
========================= */
export interface EmailContact {
  label?: string; // optional → hidden emails won’t need label
  value: string;
  mailto?: string; // optional → hidden emails won’t expose mailto
  visibleInUI?: boolean; // 🔥 control visibility
  notifyOnLead?: boolean;
}

/* =========================
   GOOGLE FORM TYPES
========================= */
export interface GoogleFormEntries {
  name: string;
  phone: string;
  email: string;
  address: string;
  message: string;
}

export interface GoogleFormConfig {
  formId: string;
  submitUrl: string;
  entries: GoogleFormEntries;
  buildMessage: (ctx: { projectName?: string; category?: string }) => string;
}

/* =========================
   ROOT CONTACT CONFIG
========================= */
export interface ContactConfig {
  phones: PhoneContact[];
  emails: EmailContact[];
  googleForm: GoogleFormConfig;
}

/* ======================================================
   CONFIG IMPLEMENTATION
====================================================== */

export const CONTACT_CONFIG: ContactConfig = {
  /* =========================
     PHONE NUMBERS
  ========================= */
  phones: [
    {
      label: 'Primary',
      value: '+91 7036238999',
      callLink: 'tel:+917036238999',
      whatsappLink: 'https://wa.me/917036238999',
      notifyOnLead: true,
    },
    {
      label: 'Secondary',
      value: '+91 7801021056',
      callLink: 'tel:+917801021056',
      whatsappLink: 'https://wa.me/917801021056',
      notifyOnLead: true,
    },
  ],

  /* =========================
     EMAILS
  ========================= */
  emails: [
    {
      label: ' reach us at',
      value: 'riseroots@outlook.com',
      mailto: 'mailto:riseroots@outlook.com',
      visibleInUI: true,
      notifyOnLead: true,
    },
    {
      // 🔒 hidden tracking / admin email
      value: 'leads@riseroots.in',
      visibleInUI: false,
      notifyOnLead: true,
    },
  ],

  /* =========================
     GOOGLE FORM (SILENT SUBMIT)
  ========================= */
  googleForm: {
    /** 🔥 Google Form ID */
    formId: '1FAIpQLSenyt5emwNwNHDtXVt8dxPvevsltiB6Mhuk_U1uxVa2ztp8cg',

    /** 🔥 Silent submit endpoint (NO iframe) */
    submitUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSenyt5emwNwNHDtXVt8dxPvevsltiB6Mhuk_U1uxVa2ztp8cg/formResponse',

    /**
     * 🔥 REAL entry IDs from your Google Form
     * (Stable – safe to keep as constants)
     */
    entries: {
      name: 'entry.891386708',
      phone: 'entry.2113848421',
      email: 'entry.1493932461',
      address: 'entry.1650627275',
      message: 'entry.83128240',
    },

    /**
     * 🔥 Centralized message builder
     * Change wording here → reflected everywhere
     */
    buildMessage: ({ projectName, category }) =>
      `I am interested in ${projectName || 'your real estate offerings'}${
        category ? ' (' + category + ')' : ''
      }.
Please contact me with pricing and availability.`,
  },
};

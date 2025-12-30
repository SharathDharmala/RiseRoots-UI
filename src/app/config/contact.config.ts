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
  enabled: boolean;

  targets: GoogleFormTarget[];

  buildMessage: (ctx: { projectName?: string; category?: string }) => string;
}

export interface GoogleFormTarget {
  /** primary | secondary */
  key: 'primary' | 'secondary';

  /** priority: 1 = primary, 2 = secondary */
  priority: number;

  /** enable / disable individually */
  enabled: boolean;

  /** Owner / purpose (optional, for clarity) */
  owner?: 'riseroots' | 'sharath' | string;

  formId: string;
  submitUrl: string;

  /** 🔥 Each form has its OWN entry IDs */
  entries: GoogleFormEntries;
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
      value: 'riserootsenterprises@gmail.com',
      mailto: 'mailto:riserootsenterprises@gmail.com',
      visibleInUI: true,
      notifyOnLead: true,
    },
    {
      value: 'leads@riseroots.in',
      visibleInUI: false,
      notifyOnLead: true,
    },
  ],

  /* =========================
     GOOGLE FORM (PRIMARY / SECONDARY)
  ========================= */
  googleForm: {
    enabled: true,

    targets: [
      {
        key: 'primary',
        priority: 1,
        enabled: true,
        owner: 'riseroots',

        formId: '1FAIpQLScU1YSMOhhkDXf2QNTNouHmrN96YI7G4Xus-im4jr0Negem8g',
        submitUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLScU1YSMOhhkDXf2QNTNouHmrN96YI7G4Xus-im4jr0Negem8g/formResponse',

        entries: {
          name: 'entry.1931623791',
          phone: 'entry.1018557472',
          email: 'entry.447083350',
          address: 'entry.1572425089',
          message: 'entry.1861503164',
        },
      },

      {
        key: 'secondary',
        priority: 2,
        enabled: true,
        owner: 'sharath',

        formId: '1FAIpQLSenyt5emwNwNHDtXVt8dxPvevsltiB6Mhuk_U1uxVa2ztp8cg',
        submitUrl:
          'https://docs.google.com/forms/d/e/1FAIpQLSenyt5emwNwNHDtXVt8dxPvevsltiB6Mhuk_U1uxVa2ztp8cg/formResponse',

        entries: {
          name: 'entry.891386708',
          phone: 'entry.2113848421',
          email: 'entry.1493932461',
          address: 'entry.1650627275',
          message: 'entry.83128240',
        },
      },
    ],

    buildMessage: ({ projectName, category }) =>
      `I am interested in ${projectName || 'your real estate offerings'}${
        category ? ' (' + category + ')' : ''
      }.
Please contact me with pricing and availability.`,
  },
};

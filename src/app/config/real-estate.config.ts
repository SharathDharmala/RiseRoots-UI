/* ======================================================
   MEDIA CONFIG MODELS
====================================================== */

export interface MediaSourceConfig {
  basePath: string;
  count: number;
  ext?: string; // jpeg | jpg | png | mp4 | pdf
}

export interface AreaConfig {
  key: string;
  name: string;
  enabled: boolean;
  description?: string;
  images: string[]; // resolved media list
}

export interface CategoryConfig {
  key:
    | 'farmLands'
    | 'plots'
    | 'flats'
    | 'leasing'
    | 'resale'
    | 'commercial'
    | 'propertyManagement'
    | 'jointVentures'
    | 'legalSupport';

  banner?: string;
  label: { en: string; te: string; hi: string };
  subtitle?: { en: string; te: string; hi: string };
  disabled?: boolean;
  videos?: string[];
}

/* ======================================================
   BASE PATH CONSTANTS (🔥 SINGLE SOURCE)
====================================================== */

const BANNERS = {
  FARM: 'banners/farm-lands.jpg',
  PLOTS: 'banners/open-plots.jpg',
  FLATS: 'banners/residential-flats.jpg',
};

const FARM = 'farm-lands';
const PLOTS = 'open-plots';
const FLATS = 'residential-flats';

/* ======================================================
   MEDIA GENERATOR
====================================================== */

export function generateMedia(banner: string[], sources: MediaSourceConfig[] = []): string[] {
  const generated = sources.flatMap((src) => {
    const ext = src.ext ?? 'jpeg';
    return Array.from({ length: src.count }, (_, i) => `${src.basePath}/${i + 1}.${ext}`);
  });

  return [...banner, ...generated];
}

/* ======================================================
   REAL ESTATE CONFIG (FULLY PRESERVED)
====================================================== */

export const REAL_ESTATE_CONFIG: Record<string, AreaConfig[]> = {
  /* ===============================
     FARM LANDS
  ============================== */
  farmLands: [
    {
      key: 'anakapalli',
      name: 'Anakapalli',
      description: 'Tattabandha – Prime agricultural belt',
      enabled: true,
      images: generateMedia([BANNERS.FARM]),
    },
    {
      key: 'devarapalli-chandan',
      name: 'Devarapalli – Chandan Valley',
      description: '10-Year-Old Red & White Sandalwood',
      enabled: true,
      images: generateMedia(
        [BANNERS.FARM],
        [
          { basePath: `${FARM}/devarapalli-chandanvalley`, count: 6 },
          { basePath: `${FARM}/devarapalli-chandanvalley`, count: 0, ext: 'mp4' },
        ]
      ),
    },
    {
      key: 'devarapalli-phenix',
      name: 'Devarapalli – Phenix Valley',
      description: 'Karjur, Agarwood',
      enabled: true,
      images: generateMedia(
        [BANNERS.FARM],
        [
          { basePath: `${FARM}/devarapalli-phenixvalley`, count: 3 },
          { basePath: `${FARM}/devarapalli-phenixvalley`, count: 0, ext: 'pdf' },
        ]
      ),
    },
    {
      key: 'gajapathinagaram',
      name: 'Gajapathinagaram',
      description: 'White Sandalwood',
      enabled: true,
      images: generateMedia(
        [BANNERS.FARM],
        [
          { basePath: `${FARM}/gajapathinagaram`, count: 6 },
          { basePath: `${FARM}/gajapathinagaram`, count: 0, ext: 'mp4' },
          { basePath: `${FARM}/gajapathinagaram`, count: 0, ext: 'pdf' },
        ]
      ),
    },
  ],

  /* ===============================
     OPEN PLOTS
  ============================== */
  plots: [
    {
      key: 'anandapuram',
      name: 'Anandapuram',
      enabled: true,
      images: generateMedia([BANNERS.PLOTS]),
    },
    {
      key: 'tagarapuvalasa-utkarsha',
      name: 'Tagarapuvalasa – Utkarsha Vajradhaara',
      enabled: true,
      images: generateMedia(
        [BANNERS.PLOTS],
        [
          { basePath: `${PLOTS}/tagarapuvalasa-utakrsha`, count: 3 },
          { basePath: `${PLOTS}/tagarapuvalasa-utakrsha`, count: 0, ext: 'pdf' },
        ]
      ),
    },
    {
      key: 'tagarapuvalasa-truecapital',
      name: 'Tagarapuvalasa – TrueCapital',
      enabled: true,
      images: generateMedia(
        [BANNERS.PLOTS],
        [
          { basePath: `${PLOTS}/tagarapuvalasa-bbg-truecapital`, count: 7 },
          { basePath: `${PLOTS}/tagarapuvalasa-bbg-truecapital`, count: 1, ext: 'mp4' },
        ]
      ),
    },
    {
      key: 'gandigundam',
      name: 'Gandigundam',
      enabled: true,
      images: generateMedia([BANNERS.PLOTS], [{ basePath: `${PLOTS}/gandigundam`, count: 6 }]),
    },
    {
      key: 'vizianagaram',
      name: 'Vizianagaram – AKR Garden City (Chelluru)',
      enabled: true,
      images: generateMedia(
        [BANNERS.PLOTS],
        [
          { basePath: `${PLOTS}/vizianagaram`, count: 25 },
          { basePath: `${PLOTS}/vizianagaram`, count: 1, ext: 'mp4' },
        ]
      ),
    },
    {
      key: 'dakamarri',
      name: 'Dakamarri',
      enabled: true,
      images: generateMedia(
        [BANNERS.PLOTS],
        [
          { basePath: `${PLOTS}/dakamarri`, count: 13 },
          { basePath: `${PLOTS}/dakamarri`, count: 1, ext: 'mp4' },
        ]
      ),
    },
    {
      key: 'bhogapuram-aerodestiny',
      name: 'Bhogapuram – Aero Destiny',
      enabled: true,
      images: generateMedia(
        [BANNERS.PLOTS],
        [{ basePath: `${PLOTS}/bhogapuram-aerodestiny`, count: 1 }]
      ),
    },
    {
      key: 'bhogapuram-kohinoor',
      name: 'Bhogapuram – Kohinoor',
      enabled: true,
      images: generateMedia(
        [BANNERS.PLOTS],
        [{ basePath: `${PLOTS}/bhogapuram-kohinoor`, count: 11 }]
      ),
    },
    {
      key: 'kothavalasa',
      name: 'Kothavalasa',
      enabled: true,
      images: generateMedia(
        [BANNERS.PLOTS],
        [
          { basePath: `${PLOTS}/kothavalasa`, count: 2 },
          { basePath: `${PLOTS}/kothavalasa`, count: 1, ext: 'mp4' },
        ]
      ),
    },
    {
      key: 'dabbanda',
      name: 'Dabbanda(Simhachalam)',
      enabled: true,
      images: generateMedia([BANNERS.PLOTS], [{ basePath: '/open-plots/dabbanda', count: 8 }]),
    },
    {
      key: 'polipilli-aerogateway',
      name: 'Aeroateway - Polipilli',
      enabled: false,
      images: generateMedia(
        [BANNERS.PLOTS],
        [{ basePath: '/open-plots/polipilli-aerogateway', count: 9 }]
      ),
    },
  ],

  /* ===============================
     RESIDENTIAL FLATS
  ============================== */
  flats: [
    {
      key: 'madhurawada',
      name: 'Madhurawada – Utkarsha Apartments',
      description: 'Ready & under-construction flats',
      enabled: true,
      images: generateMedia(
        [BANNERS.FLATS],
        [
          { basePath: `${FLATS}/madhurawada`, count: 18 },
          { basePath: `${FLATS}/madhurawada`, count: 4, ext: 'mp4' },
        ]
      ),
    },
  ],
};

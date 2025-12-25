/* ======================================================
   MEDIA CONFIG MODELS
====================================================== */

export interface MediaSourceConfig {
  basePath: string;

  /** Number of files: 1.ext ... n.ext */
  count: number;

  /** File extension (default: jpeg) */
  ext?: string; // jpeg | jpg | png | mp4 | pdf
}

export interface AreaConfig {
  key: string;
  name: string;
  description?: string;

  /** Always resolved – safe for UI */
  images: string[];
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
}

/* ======================================================
   MEDIA GENERATOR (COUNT-BASED ONLY)
====================================================== */

export function generateMedia(
  banner: string[],
  sources: MediaSourceConfig[] = []
): string[] {
  const generated = sources.flatMap((src) => {
    const ext = src.ext ?? 'jpeg';

    return Array.from({ length: src.count }, (_, i) => {
      return `${src.basePath}/${i + 1}.${ext}`;
    });
  });

  // Banner always comes first
  return [...banner, ...generated];
}

/* ======================================================
   REAL ESTATE CONFIG
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
      images: generateMedia(['banners/farm-lands.jpg']),
    },
    {
      key: 'devarapalli-chandan',
      name: 'Devarapalli – Chandan Valley',
      description: '10-Year-Old Red & White Sandalwood',
      images: generateMedia(
        ['banners/farm-lands.jpg'],
        [
          { basePath: 'farm-lands/devarapalli-chandanvalley', count: 6 },        // images
          { basePath: 'farm-lands/devarapalli-chandanvalley', count: 1, ext: 'mp4' }, // videos
          { basePath: 'farm-lands/devarapalli-chandanvalley', count: 0, ext: 'pdf' }, // pdf
        ]
      ),
    },
    {
      key: 'devarapalli-phenix',
      name: 'Devarapalli – Phenix Valley',
      description: 'Karjur, Agarwood',
      images: generateMedia(
        ['banners/farm-lands.jpg'],
        [{ basePath: 'farm-lands/devarapalli-phenixvalley', count: 3 },
          { basePath: 'farm-lands/devarapalli-phenixvalley', count: 0 , ext: 'mp4'},
          { basePath: 'farm-lands/devarapalli-phenixvalley', count: 1 , ext: 'pdf'}
        ]
      ),
    },
    {
      key: 'gajapathinagaram',
      name: 'Gajapathinagaram',
      description: 'White Sandalwood',
      images: generateMedia(
        ['banners/farm-lands.jpg'],
        [{ basePath: 'farm-lands/gajapathinagaram', count: 0 },
          { basePath: 'farm-lands/gajapathinagaram', count: 1 , ext: 'mp4'},
          { basePath: 'farm-lands/gajapathinagaram', count: 2 , ext: 'pdf'}]
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
      images: generateMedia(['banners/open-plots.jpg']),
    },
    {
      key: 'tagarapuvalasa-utkarsha',
      name: 'Tagarapuvalasa – Utkarsha Vajradhaara',
      images: generateMedia(
        ['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/tagarapuvalasa-utakrsha', count: 3 },
          { basePath: 'open-plots/tagarapuvalasa-utakrsha', count: 0 , ext: 'mp4'},
          { basePath: 'open-plots/tagarapuvalasa-utakrsha', count: 2 , ext: 'pdf'}]
      ),
    },
    {
      key: 'tagarapuvalasa-truecapital',
      name: 'Tagarapuvalasa – TrueCapital',
      images: generateMedia(
        ['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/tagarapuvalasa-bbg-truecapital', count: 7 },
          { basePath: 'open-plots/tagarapuvalasa-bbg-truecapital', count: 1 , ext: 'mp4'},
          { basePath: 'open-plots/tagarapuvalasa-bbg-truecapital', count: 0 , ext: 'pdf'}]
      ),
    },
    {
      key: 'gandigundam',
      name: 'Gandigundam',
      images: generateMedia(
        ['banners/open-plots.jpg'],
        [
          { basePath: 'open-plots/gandigundam', count: 6 },        // images
          { basePath: 'open-plots/gandigundam', count: 0, ext: 'mp4' }, // video
          { basePath: 'open-plots/gandigundam', count: 0, ext: 'pdf' }, // pdf
        ]
      ),
    },
    {
      key: 'vizianagaram',
      name: 'Vizianagaram – AKR Garden City (Chelluru)',
      images: generateMedia(
        ['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/vizianagaram', count: 25 },
          { basePath: 'open-plots/vizianagaram', count: 1 , ext: 'mp4'},
          { basePath: 'open-plots/vizianagaram', count: 0 , ext: 'pdf'}]
      ),
    },
    {
      key: 'dakamarri',
      name: 'Dakamarri',
      images: generateMedia(
        ['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/dakamarri', count: 13 },
          { basePath: 'open-plots/dakamarri', count: 1 , ext: 'mp4'},
          { basePath: 'open-plots/dakamarri', count: 0 , ext: 'pdf'}]
      ),
    },
    {
      key: 'bhogapuram-aerodestiny',
      name: 'Bhogapuram – Aero Destiny',
      images: generateMedia(
        ['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/bhogapuram-aerodestiny', count: 1 },
          { basePath: 'open-plots/bhogapuram-aerodestiny', count: 0 , ext: 'mp4'},
          { basePath: 'open-plots/bhogapuram-aerodestiny', count: 0 , ext: 'pdf'}]
      ),
    },
    {
      key: 'bhogapuram-kohinoor',
      name: 'Bhogapuram – Kohinoor',
      images: generateMedia(
        ['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/bhogapuram-kohinoor', count: 11 },
          { basePath: 'open-plots/bhogapuram-kohinoor', count: 0 , ext: 'mp4'},
          { basePath: 'open-plots/bhogapuram-kohinoor', count: 0 , ext: 'pdf'}]
      ),
    },
    {
      key: 'kothavalasa',
      name: 'Kothavalasa',
      images: generateMedia(
        ['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/kothavalasa', count: 2 },
          { basePath: 'open-plots/kothavalasa', count: 1 , ext: 'mp4'},
          { basePath: 'open-plots/kothavalasa', count: 0 , ext: 'pdf'}]
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
      images: generateMedia(
        ['banners/residential-flats.jpg'],
        [
          { basePath: 'residential-flats/madhurawada', count: 18 },       // images
          { basePath: 'residential-flats/madhurawada', count: 4, ext: 'mp4' }, // video
          { basePath: 'residential-flats/madhurawada', count: 0, ext: 'pdf' }, // pdf
        ]
      ),
    },
  ],
};
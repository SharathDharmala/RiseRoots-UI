/* ======================================================
   IMAGE CONFIG MODELS
====================================================== */

export interface ImageSourceConfig {
  basePath: string;
  count: number;
  ext?: string; // default: jpeg
}

export interface AreaConfig {
  key: string;
  name: string;
  description?: string;

  staticImages?: string[];
  imageSources?: ImageSourceConfig[];

  /** ALWAYS resolved – safe for UI */
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
   IMAGE GENERATOR HELPER
====================================================== */

export function generateImages(banner: string[], sources: ImageSourceConfig[] = []): string[] {
  const generated = sources.flatMap((src) => {
    const ext = src.ext ?? 'jpeg';
    return Array.from({ length: src.count }, (_, i) => `${src.basePath}/${i + 1}.${ext}`);
  });

  return [...banner, ...generated]; // 🔥 banner always first
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
      images: generateImages(
        ['banners/farm-lands.jpg']
        /*[{ basePath: 'banners/farm/anakapalli', count: 2 }]*/
      ),
    },
    {
      key: 'devarapalli',
      name: 'Devarapalli Chandan Valley',
      description: '**10-Year-Old Red & White Sandalwood',
      images: generateImages(
        ['banners/farm-lands.jpg'],
        [{ basePath: 'farm-lands/devarapalli-chandanvalley', count: 6 }]
      ),
    },
    {
      key: 'devarapalli',
      name: 'Devarapalli Phenix Valley',
      description: '**Karjur, Agarwood',
      images: generateImages(
        ['banners/farm-lands.jpg'],
        [{ basePath: 'farm-lands/devarapalli-phenixvalley', count: 2 }]
      ),
    },
    {
      key: 'gajapathinagaram',
      name: 'Gajapathinagaram',
      description: '**White Sandle',
      images: generateImages(
        ['banners/farm-lands.jpg'],
        [{ basePath: 'farm-lands/gajapathinagaram', count: 2 }]
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
      images: generateImages(['banners/open-plots.jpg']),
    },
    {
      key: 'tagarapuvalasa',
      name: 'Tagarapuvalasa, Utkarsha Vajradhaara',
      images: generateImages(['banners/open-plots.jpg'],
      [{ basePath: 'open-plots/tagarapuvalasa-utakrsha', count: 3 }])
    },
    {
      key: 'tagarapuvalasa',
      name: 'Tagarapuvalasa,TrueCapital ',
      images: generateImages(['banners/open-plots.jpg'],
      [{ basePath: 'open-plots/tagarapuvalasa-bbg-truecapital', count: 8 }])
    },
    {
      key: 'gandigundam',
      name: 'Gandigundam',
      images: generateImages(['banners/open-plots.jpg'],
      [{ basePath: 'open-plots/gandigundam', count: 6 }]),
    },
    {
      key: 'vizianagaram',
      name: 'Vizianagaram',
      description: 'AKR-GardenCity-Vizianagaram (Chelluru)',
      images: generateImages(
        ['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/vizianagaram', count: 24 }]
      ),
    },
    {
      key: 'dakamarri',
      name: 'Dakamarri',
      images: generateImages(
        ['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/dakamarri', count: 8 }]
      ),
    },
    {
      key: 'bhogapuram',
      name: 'Bhogapuram, AeroDestiny',
      images: generateImages(['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/bhogapuram-aerodestiny', count: 1 }]
      ),
    },
    {
      key: 'bhogapuram',
      name: 'Bhogapuram, Kohinoor',
      images: generateImages(['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/bhogapuram-kohinoor', count: 11 }]
      ),
    },
    {
      key: 'kothavalasa',
      name: 'Kothavalasa-',
      images: generateImages(['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/kothavalasa', count: 3 }]
      ),
    },
  ],
  /* ===============================
     RESIDENTIAL FLATS
  ============================== */
  flats: [
    {
      key: 'madhurawada',
      name: 'Madhurawada, Utkarsha Apartments',
      description: 'Ready & under-construction flats',
      images: generateImages(
        ['banners/residential-flats.jpg'],
        [{ basePath: 'residential-flats/madhurawada', count: 22 }]
      ),
    },
  ],
};

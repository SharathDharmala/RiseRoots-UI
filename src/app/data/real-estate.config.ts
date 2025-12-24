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
  key: 'farmLands' | 'plots' | 'flats' | 'leasing' | 'resale' | 'commercial';
  banner?: string;
  label: { en: string; te: string; hi: string };
  subtitle?: { en: string; te: string; hi: string };
  disabled?: boolean;   // 🔥 NEW
}

/* ======================================================
   IMAGE GENERATOR HELPER
====================================================== */

export function generateImages(
  staticImages: string[] = [],
  sources: ImageSourceConfig[] = []
): string[] {
  const generated = sources.flatMap(src => {
    const ext = src.ext ?? 'jpeg';
    return Array.from({ length: src.count }, (_, i) =>
      `${src.basePath}/${i + 1}.${ext}`
    );
  });

  return [...staticImages, ...generated];
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
        ['banners/farm-lands.jpg'],
        [{ basePath: 'banners/farm/anakapalli', count: 25 }]
      )
    }
  ],

  /* ===============================
     OPEN PLOTS
  ============================== */
  plots: [
    {
      key: 'anandapuram',
      name: 'Anandapuram',
      images: generateImages(['banners/open-plots.jpg'])
    },
    {
      key: 'tagarapuvalasa',
      name: 'Tagarapuvalasa',
      images: generateImages(['banners/open-plots.jpg'])
    },
    {
      key: 'gandigundam',
      name: 'Gandigundam',
      images: generateImages(['banners/open-plots.jpg'])
    },
    {
      key: 'vizianagaram',
      name: 'Vizianagaram',
      description: 'AKR-GardenCity-Vizianagaram (Chelluru)',
      images: generateImages(
        ['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/vizianagaram', count: 25 }]
      )
    },
    {
      key: 'dakamarri',
      name: 'Dakamarri',
      images: generateImages(
        ['banners/open-plots.jpg'],
        [{ basePath: 'open-plots/dakamarri', count: 8 }]
      )
    },
    {
      key: 'bhogapuram',
      name: 'Bhogapuram',
      images: generateImages(['banners/open-plots.jpg'])
    },
    {
      key: 'kothavalasa',
      name: 'Kothavalasa',
      images: generateImages(['banners/open-plots.jpg'])
    }
  ],

  /* ===============================
     RESIDENTIAL FLATS
  ============================== */
  flats: [
    {
      key: 'madhurawada',
      name: 'Madhurawada',
      description: 'Ready & under-construction flats',
      images: generateImages(
        ['banners/residential-flats.jpg'],
        [{ basePath: 'banners/flats/madhurawada', count: 1 }]
      )
    }
  ]
};

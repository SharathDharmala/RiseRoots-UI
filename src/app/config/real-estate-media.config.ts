import { MediaSourceConfig } from '../data/media.config.model';

export const REAL_ESTATE_BANNER_MEDIA = {
  enabled: true, // 🔥 master switch (everything off)

  /* =========================
     VIDEO CONTROL
  ========================= */
  videoEnabled: true, // 🔥 individual toggle
  video: {
    playbackRate: 1.5,
    maxItemsToPlay: 4,
    source: {
      basePath: 'assets/videos/video', // image1.mp4...
      count: 4,
      ext: 'mp4',
    } as MediaSourceConfig,
  },

  /* =========================
     IMAGE SLIDER CONTROL
  ========================= */
  imageEnabled: false, // 🔥 individual toggle
  image: {
    autoSlide: true,
    slideInterval: 2500,
    source: {
      basePath: 'assets/images/image', // image1.jpg...
      count: 4,
      ext: 'jpg',
    } as MediaSourceConfig,
  },
  watermarkText: 'RiseRoots – Golden City, Vizag',
};

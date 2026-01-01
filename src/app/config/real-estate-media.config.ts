import { MediaSourceConfig } from './media.config.model';

export const REAL_ESTATE_BANNER_MEDIA = {
  enabled: true, // 🔥 master switch (everything off)

  /* =========================
     VIDEO CONTROL
  ========================= */
  videoEnabled: true, // 🔥 individual toggle
  video: {
    playbackRate: 1.1,
    maxItemsToPlay: 7,   // 🔥 MUST match actual files
    source: {
      basePath: 'assets/videos/video', // video1.mp4...
      count: 7,    //count can be configure, how many wanted to play..
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

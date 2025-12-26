import { MediaSourceConfig } from '../data/media.config.model';

export const REAL_ESTATE_BANNER_MEDIA = {
  enabled: true,                 // 🔥 master switch
  playbackRate: 2.5,
  maxVideosToPlay: 11,            // 🔥 engagement control
  source: {
    basePath: 'assets/videos/vizag', // vizag1.mp4, vizag2.mp4...
    count: 8,
    ext: 'mp4'
  } as MediaSourceConfig,
  watermarkText: 'RiseRoots'
};
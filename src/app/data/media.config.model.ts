export interface MediaSourceConfig {
  basePath: string;     // e.g. 'assets/videos/vizag'
  count: number;        // number of files
  ext?: 'mp4' | 'webm'; // default mp4
}

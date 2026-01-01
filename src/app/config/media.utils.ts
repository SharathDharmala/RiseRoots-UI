import { MediaSourceConfig } from './media.config.model';

export function resolveMediaSources(
  source: MediaSourceConfig
): string[] {
  const ext = source.ext ?? 'mp4';

  return Array.from({ length: source.count }, (_, i) =>
    `${source.basePath}${i + 1}.${ext}`
  );
}

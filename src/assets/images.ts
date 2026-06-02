import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

/**
 * Central image registry.
 *
 * All portfolio photos were downloaded from i.ibb.co into ./images and are
 * referenced in the data files by their original remote URL. This module maps
 * each remote URL back to the locally-imported ImageMetadata so Astro can
 * resize and re-encode them (AVIF/WebP) at build time.
 *
 * Eager glob import — every source image is known at build time.
 */
const modules = import.meta.glob<{ default: ImageMetadata }>(
  './images/*.{jpg,jpeg,png,JPG,JPEG,PNG}',
  { eager: true },
);

const byId: Record<string, ImageMetadata> = {};
for (const path in modules) {
  const file = path.split('/').pop()!; // e.g. "ZzXZv83W.jpg"
  const id = file.replace(/\.[^.]+$/, ''); // e.g. "ZzXZv83W"
  byId[id] = modules[path].default;
}

/** Extract the i.ibb.co image id from a full URL (the first path segment). */
function ibbId(url: string): string | null {
  const m = url.match(/i\.ibb\.co\/([^/]+)\//);
  return m ? m[1] : null;
}

/**
 * Resolve a remote i.ibb.co URL to the locally downloaded ImageMetadata.
 * Returns null when no local copy exists (caller may fall back to the URL).
 */
export function localImage(url: string): ImageMetadata | null {
  const id = ibbId(url);
  return id && byId[id] ? byId[id] : null;
}

/** Transform options for the hero LCP image — shared so the <head> preload and
 * the rendered <img> resolve to the exact same optimized file URL. */
export const HERO_IMAGE_OPTS = { width: 1920, format: 'webp' as const, quality: 72 };

/** Build the optimized hero image (used by both BaseLayout preload and Hero). */
export async function getHeroImage(url: string) {
  const src = localImage(url);
  if (!src) return null;
  return getImage({ src, ...HERO_IMAGE_OPTS });
}

/** Content for the About section: portrait, bio paragraphs, and the photo grid. */

export const aboutPortrait = {
  src: 'https://i.ibb.co/XxDCkS4S/Whats-App-Image-2026-03-07-at-3-45-09-AM-2.jpg',
  alt: 'Yousef Salman',
};

/**
 * Bio paragraphs. `html` is trusted, hand-authored markup (it contains a few
 * inline <span> highlights) — rendered with set:html in the About component.
 */
export const aboutParagraphs: string[] = [
  'Experienced filmmaker and studio operator with a strong background in <span class="text-white font-bold">cinematography, directing, camera operating</span>, and visual storytelling.',
  'Worked on <span class="text-[#E7A51A] font-bold">130+ projects</span>, including documentaries, TV commercials, music videos, and films across diverse production environments.',
  'Skilled in studio operations, on-set collaboration, and delivering high quality visual content that enhances brand and narrative identity.',
];

export interface AboutGalleryImage {
  src: string;
  /** Responsive visibility classes preserved from the original markup. */
  visibility?: string;
}

export const aboutGallery: AboutGalleryImage[] = [
  { src: 'https://i.ibb.co/4RnwdLgQ/IMG-2204-JPG.jpg' },
  { src: 'https://i.ibb.co/YBsZgCkJ/IMG-3909-JPG.jpg' },
  { src: 'https://i.ibb.co/x8SynJNd/IMG-8402-JPG.jpg', visibility: 'hidden sm:block' },
  { src: 'https://i.ibb.co/j9QQxR9b/IMG-8533-JPG.jpg', visibility: 'hidden md:block' },
  { src: 'https://i.ibb.co/kgq6kcFd/IMG-8658-JPG.jpg', visibility: 'hidden md:block' },
  { src: 'https://i.ibb.co/kV8kmkmJ/IMG-8849-JPG.jpg', visibility: 'hidden md:block' },
  { src: 'https://i.ibb.co/b5k1zNqz/IMG-9990-JPG.jpg' },
];

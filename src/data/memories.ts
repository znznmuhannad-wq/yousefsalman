/**
 * Image URL lists for the Memories marquee rows and the B3EED behind-the-scenes
 * strip. Each marquee row renders its list twice (the second copy marked
 * aria-hidden) to create a seamless infinite loop.
 */

export interface MemoryRow {
  /** Marquee direction — maps to the animate-track-left/right CSS class. */
  direction: 'left' | 'right';
  /** Optional animation-duration override (e.g. "50s"). */
  durationOverride?: string;
  images: string[];
}

export const memoryRows: MemoryRow[] = [
  {
    direction: 'left',
    images: [
      'https://i.ibb.co/ZzXZv83W/IMG-9377-JPG.jpg',
      'https://i.ibb.co/zTSZsf1N/IMG-8852-JPG.jpg',
      'https://i.ibb.co/DDyKnWhJ/IMG-8664-JPG.jpg',
      'https://i.ibb.co/CsJr0cCh/IMG-5424.png',
      'https://i.ibb.co/3m7n3bB5/IMG-4969-JPG.jpg',
      'https://i.ibb.co/KzqsMvgf/IMG-4557-JPG.jpg',
    ],
  },
  {
    direction: 'right',
    images: [
      'https://i.ibb.co/hFMq1wpt/IMG-3910-JPG.jpg',
      'https://i.ibb.co/yBhT5r47/IMG-2205-JPG.jpg',
      'https://i.ibb.co/p6g9s8SV/IMG-1344.jpg',
      'https://i.ibb.co/YBsZgCkJ/IMG-3909-JPG.jpg',
      'https://i.ibb.co/DDyKnWhJ/IMG-8664-JPG.jpg',
      'https://i.ibb.co/ZzXZv83W/IMG-9377-JPG.jpg',
    ],
  },
  {
    direction: 'left',
    durationOverride: '50s',
    images: [
      'https://i.ibb.co/3m7n3bB5/IMG-4969-JPG.jpg',
      'https://i.ibb.co/KzqsMvgf/IMG-4557-JPG.jpg',
      'https://i.ibb.co/CsJr0cCh/IMG-5424.png',
      'https://i.ibb.co/zTSZsf1N/IMG-8852-JPG.jpg',
      'https://i.ibb.co/DDyKnWhJ/IMG-8664-JPG.jpg',
      'https://i.ibb.co/hFMq1wpt/IMG-3910-JPG.jpg',
    ],
  },
];

/** Behind-the-scenes strip for the B3EED section (rendered twice for the loop). */
export const btsImages: string[] = [
  'https://i.ibb.co/p6g9s8SV/IMG-1344.jpg',
  'https://i.ibb.co/jk5vmrsb/IMG-1347.jpg',
  'https://i.ibb.co/ksKsyQpL/IMG-1349.jpg',
  'https://i.ibb.co/N2NryCfT/IMG-1351.jpg',
  'https://i.ibb.co/qLf6Nvxp/IMG-1346.jpg',
  'https://i.ibb.co/nqWW8HtL/IMG-1355.jpg',
];

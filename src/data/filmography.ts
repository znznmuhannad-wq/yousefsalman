import type { FilmographyColumn } from '../types';

/** The three columns of the Full Filmography section. */
export const filmography: FilmographyColumn[] = [
  {
    title: 'FEATURE FILMS & TV',
    accentHeading: true,
    entries: [
      { name: 'Rawabi School for Girls 2', tag: 'NETFLIX', accentTag: true },
      { name: 'Boomeh', tag: 'FEATURE' },
      { name: 'B3eed', tag: 'SHORT', accentTag: true },
      { name: 'Way Home', tag: 'SHORT' },
      { name: 'Riyadh Rendezvous', tag: 'FILM' },
      { name: 'Kees Dam', tag: 'SHORT' },
      { name: 'AMBUSH', tag: 'SHORT' },
      { name: 'S.A.S Who Dares to Win', tag: 'SERIES', accentTag: true },
      { name: 'Dubai Documentary', tag: 'DOC' },
    ],
  },
  {
    title: 'COMMERCIAL CAMPAIGNS',
    entries: [
      { name: 'Dior', tag: 'GLOBAL', accentTag: true },
      { name: 'Louis Vuitton', tag: 'GLOBAL', accentTag: true },
      { name: 'De Beers', tag: 'LUXURY' },
      { name: 'Talabat', tag: 'TVC' },
      { name: 'Orange', tag: 'TVC' },
      { name: 'Zain', tag: 'TVC' },
      { name: 'Geely', tag: 'AUTO' },
      { name: 'Arab Bank', tag: 'FINANCE' },
      { name: 'Challenge 71', tag: 'DUBAI', accentTag: true },
    ],
  },
  {
    title: 'MUSIC VIDEOS',
    entries: [
      { name: 'Rajieen', tag: 'MV', accentTag: true },
      { name: 'Balak', tag: 'MV' },
      { name: 'Asli Ana', tag: 'MV' },
      { name: 'Tal Abib', tag: 'MV' },
      { name: 'Ya Baghia', tag: 'MV' },
      { name: 'Kayan', tag: 'MV' },
    ],
  },
];

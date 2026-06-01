/** Shared domain types for the portfolio content. */

/** A single navigation entry in the dropdown menu. */
export interface NavLink {
  label: string;
  href: string;
}

/** A skill discipline card in the Skills section. */
export interface SkillCategory {
  /** id of the SVG <symbol> in the icon sprite, e.g. "i-camera". */
  icon: string;
  title: string;
  /** Title colour: white by default, accent for the highlighted card. */
  accentTitle?: boolean;
  items: string[];
}

/** A column of titles in the Full Filmography section. */
export interface FilmographyColumn {
  title: string;
  /** Whether the column heading is rendered in the accent colour. */
  accentHeading?: boolean;
  entries: FilmographyEntry[];
}

export interface FilmographyEntry {
  name: string;
  /** Short tag shown on the right, e.g. "NETFLIX", "MV". */
  tag: string;
  /** Whether the tag is highlighted in the accent colour. */
  accentTag?: boolean;
}

/** A project shown in the draggable cinematic carousel. */
export interface CarouselProject {
  title: string;
  /** Utility classes controlling the title's colour/typography. */
  titleClass: string;
  role: string;
  desc: string;
  img: string;
  /** Optional inline style applied to the title (e.g. custom font-family). */
  titleStyle?: string;
}

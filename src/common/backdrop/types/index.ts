/* the template artwork a section (or the footer) paints behind its content */
export type BackdropPattern = "architectural" | "shingles" | "tiles" | "pantiles" | "roof";

export interface BackdropProps {
  pattern: BackdropPattern;
}

/* how one artwork reads: its strength by theme and how it covers the section */
export interface BackdropLook {
  strength: string;
  cover: string;
}

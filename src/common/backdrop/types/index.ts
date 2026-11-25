/* the template artwork a section paints behind its content */
export type BackdropPattern = "structure" | "shingles" | "tiles" | "coils";

export interface BackdropProps {
  pattern: BackdropPattern;
}

/* how one artwork reads: its strength by theme and how it covers the section */
export interface BackdropLook {
  strength: string;
  cover: string;
}

/* the artwork a section (or the footer) paints behind its content */
export type BackdropPattern = "octagonal" | "shingles" | "pantiles" | "roof";

export interface BackdropProps {
  pattern: BackdropPattern;
}

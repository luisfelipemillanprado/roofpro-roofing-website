/* the artwork a section (or the footer) paints behind its content */
export type BackdropPattern = "architectural" | "shingles" | "tiles" | "pantiles" | "roof";

export interface BackdropProps {
  pattern: BackdropPattern;
}

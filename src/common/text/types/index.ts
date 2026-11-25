import type { ReactNode } from "react";

export type TextSize = "subhead" | "lead" | "body" | "caption" | "note" | "label";
export type TextTone = "default" | "muted" | "white" | "primary" | "accent";
export type TextWeight = "medium" | "semibold" | "bold";
export type TextTracking = "wide" | "subtle";

export interface TextProps {
  as?: "p" | "span";
  size?: TextSize;
  tone?: TextTone;
  weight?: TextWeight;
  tracking?: TextTracking;
  truncate?: boolean;
  text: ReactNode; /* a string, or rich text from t.rich (the footer copyright) */
}

export type TextNumberSize = "base" | "price" | "stat" | "headline" | "display";

export interface TextNumberProps {
  as?: "p" | "span";
  size?: TextNumberSize;
  text: string;
}

import type { ReactNode } from "react";
import type { TitleSize } from "@/common/title/types";

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  size?: TitleSize; /* forwarded to Title */
  align?: "left" | "center"; /* center: left on tablet; left: cluster from sm; omit: split bands, from lg */
  flushFrom?: "md"; /* stays centered while stacked, goes left-flush once the CTA sits beside it */
}

export interface SectionHeaderProps extends Pick<
  SectionHeadingProps,
  "eyebrow" | "title" | "accent" | "description"
> {
  children: ReactNode; /* the call to action beside the heading */
}

import type { ReactNode } from "react";
import type { BackdropPattern } from "@/common/backdrop/types";

export type SectionWrapperTone = "base" | "muted";

export interface SectionWrapperProps {
  children: ReactNode;
  tone?: SectionWrapperTone;
  id?: string;
  backdrop?: BackdropPattern /* texture behind the content; the page shows it on every other section */;
}

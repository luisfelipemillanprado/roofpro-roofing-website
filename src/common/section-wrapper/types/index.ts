import type { ReactNode } from "react";
import type { BackdropPattern } from "@/common/backdrop/types";

export type SectionWrapperTone = "base" | "muted";

export interface SectionWrapperProps {
  children: ReactNode;
  tone?: SectionWrapperTone;
  id?: string;
  backdrop?: BackdropPattern /* template texture behind the content, on every other section */;
}

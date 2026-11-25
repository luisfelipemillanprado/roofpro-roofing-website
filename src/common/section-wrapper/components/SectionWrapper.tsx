import clsx from "clsx";
import { Backdrop } from "@/common/backdrop/components/Backdrop";
import type { SectionWrapperProps, SectionWrapperTone } from "@/common/section-wrapper/types";

/* section wrapper — the surface tone and an optional backdrop vary */
const tones: Record<SectionWrapperTone, string> = {
  base: "bg-surface-base" /* white in light, night in dark */,
  muted: "bg-surface-muted" /* cream in light, charcoal in dark */,
};

/* clip, not hidden: a hidden overflow would turn the section into a scroller and break sticky columns */
export const SectionWrapper = ({ children, tone = "base", id, backdrop }: SectionWrapperProps) => (
  <section
    id={id}
    data-backdrop={backdrop}
    className={clsx(tones[tone], "py-18 lg:py-28", backdrop && "relative isolate overflow-clip")}
  >
    {backdrop && <Backdrop pattern={backdrop} />}
    {children}
  </section>
);

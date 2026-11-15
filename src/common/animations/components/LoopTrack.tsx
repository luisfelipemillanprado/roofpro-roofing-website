import clsx from "clsx";
import type { LoopSpeed, LoopTrackProps } from "@/common/animations/types";

/* animation utility per key */
const speeds: Record<LoopSpeed, string> = {
  base: "animate-marquee" /* badge strip */,
  slow: "animate-marquee-slow" /* logo strip; a gentler drift */,
};

/* seamless -50% loop: repeated copies, only the first exposed to screen readers */
export const LoopTrack = ({ children, copies, speed, direction = "left" }: LoopTrackProps) => (
  <div
    className={clsx(
      "grid w-max grid-flow-col items-center justify-start",
      speeds[speed],
      /* the same loop played backwards travels the other way */
      direction === "right" && "[animation-direction:reverse]",
    )}
  >
    {Array.from({ length: copies }, (_, copy) => (
      <div key={copy} aria-hidden={copy > 0} className="grid grid-flow-col items-center justify-start">
        {children}
      </div>
    ))}
  </div>
);

import type { MarqueeSpeed, MarqueeTrackProps } from "@/common/animations/types";

/* animation utility per key */
const speeds: Record<MarqueeSpeed, string> = {
  base: "animate-marquee" /* badge strip */,
  slow: "animate-marquee-slow" /* wider track, same drift */,
};

/* seamless -50% loop: repeated copies, only the first exposed to screen readers */
export const MarqueeTrack = ({ children, copies, speed }: MarqueeTrackProps) => (
  <div className={`grid w-max ${speeds[speed]} grid-flow-col items-center justify-start`}>
    {Array.from({ length: copies }, (_, copy) => (
      <div key={copy} aria-hidden={copy > 0} className="grid grid-flow-col items-center justify-start">
        {children}
      </div>
    ))}
  </div>
);

"use client";

import { useNearViewport } from "@/utils/hooks/viewport/useNearViewport";
import type { VideoLoopProps } from "@/common/media-video/types";

/* the clip alone, mounted once its frame nears the viewport, so autoplay costs nothing off screen */
export const VideoLoop = ({ src }: VideoLoopProps) => {
  /* no lead: the home frame sits ~120px under the fold, so any margin would load it with the page */
  const { ref, near } = useNearViewport("0px");

  return (
    <div ref={ref} className="absolute inset-0">
      {near && (
        <video
          autoPlay
          muted
          loop
          playsInline
          /* kept beside the gated source: it is what stops the motion where media is ignored */
          className="size-full object-cover motion-reduce:hidden"
        >
          {/* gated: an unmatched source is never fetched, so reduced motion costs no bytes */}
          <source src={src} type="video/webm" media="(prefers-reduced-motion: no-preference)" />
        </video>
      )}
    </div>
  );
};

import { Media } from "@/common/media/components/Media";
import type { MediaVideoProps } from "@/common/media-video/types";

/* muted autoplay loop that fills its frame; the parent owns the box and the clip */
export const MediaVideo = ({ src, poster, alt, sizes }: MediaVideoProps) => (
  <div className="relative size-full">
    {/* the poster goes through next/image and carries the name, so the video needs neither */}
    <Media src={poster} alt={alt} shape="fill" sizes={sizes} />
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      /* kept beside the gated source: it is what stops the motion where media is ignored */
      className="absolute inset-0 size-full object-cover motion-reduce:hidden"
    >
      {/* gated: an unmatched source is never fetched, so reduced motion costs no bytes */}
      <source src={src} type="video/webm" media="(prefers-reduced-motion: no-preference)" />
    </video>
  </div>
);

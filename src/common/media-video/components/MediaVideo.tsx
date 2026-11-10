import { Media } from "@/common/media/components/Media";
import type { MediaVideoProps } from "@/common/media-video/types";

/* muted autoplay loop that fills its frame; the parent owns the box and the clip */
export const MediaVideo = ({ src, poster, alt, sizes }: MediaVideoProps) => (
  <div className="relative size-full">
    {/* the poster sits under the video, so it can go through next/image as the attribute cannot */}
    <Media src={poster} alt={alt} shape="fill" sizes={sizes} />
    <video
      src={src}
      aria-label={alt}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 size-full object-cover"
    />
  </div>
);

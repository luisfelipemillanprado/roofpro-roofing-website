import { Media } from "@/common/media/components/Media";
import { VideoLoop } from "@/common/media-video/components/VideoLoop";
import type { MediaVideoProps } from "@/common/media-video/types";

/* muted autoplay loop that fills its frame; the parent owns the box and the clip */
export const MediaVideo = ({ src, poster, alt, sizes }: MediaVideoProps) => (
  <div className="relative size-full">
    {/* the poster goes through next/image and carries the name, so the video needs neither */}
    <Media src={poster} alt={alt} shape="fill" sizes={sizes} />
    {/* only the clip is client side: until it mounts, the server-rendered poster is the frame */}
    <VideoLoop src={src} />
  </div>
);

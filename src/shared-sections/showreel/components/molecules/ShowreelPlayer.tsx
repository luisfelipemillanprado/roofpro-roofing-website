"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Media } from "@/common/media/components/Media";
import { MediaVideo } from "@/common/media-video/components/MediaVideo";
import { CarouselViewer } from "@/common/carousel-viewer/components/CarouselViewer";
import { MosaicList } from "@/common/mosaic/components/MosaicList";
import { IconButton } from "@/common/call-to-actions/components/IconButton";
import type { ShowreelPlayerProps } from "@/shared-sections/showreel/types";

/* the mosaic plus the viewer its discs open; a reel is heavy, so none mounts until asked */
export const ShowreelPlayer = ({ items, closeLabel, previousLabel, nextLabel }: ShowreelPlayerProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* the mosaic card carries no clip, so the disc reaches back for it by index */}
      <MosaicList
        cards={items}
        pattern="centered"
        renderAction={(_card, index) => (
          <IconButton
            icon={<Play className="size-5 fill-white text-white" />}
            label={items[index]!.playLabel}
            onClick={() => setOpenIndex(index)}
            pulse
          />
        )}
      />

      {openIndex !== null && (
        <CarouselViewer
          slides={items}
          startIndex={openIndex}
          fit="tall"
          onClose={() => setOpenIndex(null)}
          closeLabel={closeLabel}
          previousLabel={previousLabel}
          nextLabel={nextLabel}
          renderSlide={(index, selected) => {
            const reel = items[index]!;

            return (
              /* 9:16 frame capped by the viewport; its 72svh is what the viewer's 81svh track doubles */
              <div className="relative aspect-9/16 h-[72svh] max-w-[88vw] overflow-hidden rounded-media border border-line shadow-md">
                {/* only the slide in view holds a player; the rest stay on their poster */}
                {selected ? (
                  <MediaVideo src={reel.video} poster={reel.image} alt={reel.videoAlt} sizes="365px" />
                ) : (
                  <Media src={reel.image} alt={reel.title} shape="fill" sizes="365px" />
                )}
              </div>
            );
          }}
        />
      )}
    </>
  );
};

"use client";

import { useState } from "react";
import { Media } from "@/common/media/components/Media";
import { MediaVideo } from "@/common/media-video/components/MediaVideo";
import { CarouselViewer } from "@/common/carousel-viewer/components/CarouselViewer";
import { MosaicList } from "@/common/mosaic/components/MosaicList";
import { PlayButton } from "@/common/call-to-actions/components/PlayButton";
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
          <PlayButton label={items[index]!.playLabel} onClick={() => setOpenIndex(index)} pulse />
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
              /* the frame follows the 9:16 source and is capped by the viewport */
              <div className="relative aspect-9/16 h-[72svh] max-w-[88vw] overflow-hidden rounded-media shadow-md">
                {/* only the slide in view holds a player; the rest stay on their poster */}
                {selected ? (
                  <MediaVideo src={reel.video} poster={reel.image} alt={reel.videoAlt} />
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

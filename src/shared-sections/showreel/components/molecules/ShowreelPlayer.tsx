"use client";

import { useState } from "react";
import { MediaVideo } from "@/common/media-video/components/MediaVideo";
import { Modal } from "@/common/modal/components/Modal";
import { MosaicList } from "@/common/mosaic/components/MosaicList";
import { PlayButton } from "@/common/call-to-actions/components/PlayButton";
import type { ShowreelPlayerProps } from "@/shared-sections/showreel/types";

/* the mosaic plus the dialog its discs open; a reel is heavy, so none mounts until asked */
export const ShowreelPlayer = ({ items, closeLabel }: ShowreelPlayerProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reel = openIndex === null ? undefined : items[openIndex];

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

      {reel && (
        <Modal label={reel.videoAlt} closeLabel={closeLabel} onClose={() => setOpenIndex(null)}>
          {/* frame follows the 9:16 source, capped by the viewport so it never overflows */}
          <div className="relative aspect-9/16 h-[72svh] max-w-[88vw] overflow-hidden rounded-media shadow-md">
            <MediaVideo src={reel.video} poster={reel.image} alt={reel.videoAlt} />
          </div>
        </Modal>
      )}
    </>
  );
};

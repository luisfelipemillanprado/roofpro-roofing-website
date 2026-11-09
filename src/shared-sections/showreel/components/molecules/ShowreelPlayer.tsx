"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { MediaVideo } from "@/common/media-video/components/MediaVideo";
import { MosaicList } from "@/common/mosaic/components/MosaicList";
import { PlayButton } from "@/common/call-to-actions/components/PlayButton";
import { ViewerControl } from "@/common/image-viewer/components/ViewerControl";
import type { ShowreelPlayerProps } from "@/shared-sections/showreel/types";

/* the mosaic plus the dialog its discs open; a reel is heavy, so none mounts until asked */
export const ShowreelPlayer = ({ items, closeLabel }: ShowreelPlayerProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reel = openIndex === null ? undefined : items[openIndex];

  /* only escape: this dialog holds one reel, with no track to step through */
  useEffect(() => {
    if (!reel) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [reel]);

  /* the focus target is the dialog's own close button, so it stays here */
  useEffect(() => {
    if (reel) closeRef.current?.focus();
  }, [reel]);

  return (
    <>
      {/* the disc opens the reel behind the index, so the clip comes from the card */}
      <MosaicList
        cards={items}
        pattern="centered"
        renderAction={(_card, index) => (
          <PlayButton label={items[index]!.playLabel} onClick={() => setOpenIndex(index)} pulse />
        )}
      />

      {reel &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={reel.videoAlt}
            className="theme-dark fixed inset-0 z-(--z-modal) grid place-items-center p-4"
          >
            {/* backdrop: click to close */}
            <div
              onClick={() => setOpenIndex(null)}
              className="absolute inset-0 bg-contrast/70 backdrop-blur-md"
            />

            {/* frame follows the 9:16 source, capped by the viewport so it never overflows */}
            <div className="relative aspect-9/16 h-[72svh] max-w-[88vw] overflow-hidden rounded-media shadow-md">
              <MediaVideo src={reel.video} poster={reel.image} alt={reel.videoAlt} />
            </div>

            {/* controls: paint above the reel */}
            <ViewerControl
              ref={closeRef}
              placement="close"
              label={closeLabel}
              icon={<X className="size-5 text-white" />}
              onClick={() => setOpenIndex(null)}
            />
          </div>,
          document.body,
        )}
    </>
  );
};

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";
import { blurs } from "@/data/blurs";
import { MediaVideo } from "@/common/media-video/components/MediaVideo";
import { PulseRing } from "@/common/animations/components/PulseRing";
import { ViewerControl } from "@/common/image-viewer/components/ViewerControl";
import type { ShowreelPlayerProps } from "@/shared-sections/showreel/types";

/* poster band + the dialog it opens; the reel is heavy, so it mounts on open and never on load */
export const ShowreelPlayer = ({
  poster,
  posterAlt,
  video,
  videoAlt,
  playLabel,
  closeLabel,
}: ShowreelPlayerProps) => {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* only escape: this dialog holds one reel, with no track to step through */
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* the focus target is the dialog's own close button, so it stays here */
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <>
      {/* the disc alone is the control, so the poster keeps its own alt */}
      <div className="relative grid aspect-video w-full place-items-center overflow-hidden rounded-card border border-line shadow-md">
        <Image
          src={poster}
          alt={posterAlt}
          fill
          sizes="(min-width: 1536px) 1280px, 100vw"
          placeholder="blur"
          blurDataURL={blurs.image}
          className="object-cover"
        />
        <button
          type="button"
          aria-label={playLabel}
          onClick={() => setOpen(true)}
          className="relative isolate grid size-22 place-items-center rounded-full bg-secondary shadow-md transition-transform duration-300 hover:scale-90"
        >
          <PulseRing color="secondary" rounded />
          <Play aria-hidden className="size-7 fill-white text-white" />
        </button>
      </div>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={videoAlt}
            className="theme-dark fixed inset-0 z-(--z-modal) grid place-items-center p-4"
          >
            {/* backdrop: click to close */}
            <div
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-contrast/70 backdrop-blur-md"
            />

            {/* frame follows the 9:16 source, capped by the viewport so it never overflows */}
            <div className="relative aspect-9/16 h-[72svh] max-w-[88vw] overflow-hidden rounded-media shadow-md">
              <MediaVideo src={video} poster={poster} alt={videoAlt} />
            </div>

            {/* controls: paint above the reel */}
            <ViewerControl
              ref={closeRef}
              placement="close"
              label={closeLabel}
              icon={<X className="size-5 text-white" />}
              onClick={() => setOpen(false)}
            />
          </div>,
          document.body,
        )}
    </>
  );
};

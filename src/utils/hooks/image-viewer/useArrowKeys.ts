"use client";

import { useEffect } from "react";
import type { ArrowKeys } from "@/common/image-viewer/types";

/* arrows step the viewer's track; escape belongs to the modal shell around it */
export const useArrowKeys = ({ onPrev, onNext }: ArrowKeys) => {
  /* named options, so the two identical signatures cannot be passed in the wrong order */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") onPrev();
      else if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onPrev, onNext]);
};

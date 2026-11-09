"use client";

import { useEffect } from "react";

/* left and right step whatever is open; escape belongs to the shell around it */
export const useArrowKeys = ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => {
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

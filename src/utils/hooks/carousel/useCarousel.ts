import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useSelectedSnap } from "@/utils/hooks/carousel/useSelectedSnap";
import type { Carousel, CarouselOptions } from "@/carousel/types";

/* carousel state: a looping track stepped by hand */
export const useCarousel = ({ startSnap = 0 }: CarouselOptions = {}): Carousel => {
  /* reduced motion keeps the snapping but drops the travel */
  const reducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  /* centre-aligned so the neighbouring slides peek at both edges */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    startSnap,
    ...(reducedMotion ? { duration: 0 } : {}),
  });

  /* seeded so the caption matches the opening slide on the first frame */
  const selectedIndex = useSelectedSnap(emblaApi, startSnap);

  const goToPrev = useCallback(() => emblaApi?.goToPrev(), [emblaApi]);
  const goToNext = useCallback(() => emblaApi?.goToNext(), [emblaApi]);

  return { emblaRef, selectedIndex, goToPrev, goToNext };
};

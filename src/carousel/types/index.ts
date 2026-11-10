/* type-only derivations; avoids importing embla-carousel */
export type EmblaApi = NonNullable<ReturnType<typeof import("embla-carousel-react").default>[1]>;
type EmblaRef = ReturnType<typeof import("embla-carousel-react").default>[0];

/* per-view behaviour */
export interface CarouselOptions {
  startSnap?: number; /* opens on a given slide, e.g. the tile that launched a viewer */
}

/* all a carousel view needs; logic lives in the hook */
export interface Carousel {
  emblaRef: EmblaRef;
  selectedIndex: number;
  goToPrev: () => void;
  goToNext: () => void;
}

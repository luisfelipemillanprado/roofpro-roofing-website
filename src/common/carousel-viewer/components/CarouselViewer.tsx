"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import { Modal } from "@/common/modal/components/Modal";
import { ModalControl } from "@/common/modal/components/ModalControl";
import { useCarousel } from "@/utils/hooks/carousel/useCarousel";
import { useArrowKeys } from "@/utils/hooks/keyboard/useArrowKeys";
import type { CarouselViewerProps, ViewerFit } from "@/common/carousel-viewer/types";

/* track sized off the viewport so slide and track scale together; 81 = a 72svh 9:16 frame, doubled */
const figureWidths: Record<ViewerFit, string> = {
  wide: "max-w-[min(64rem,100vh)]",
  tall: "max-w-[81svh]",
};
/* 70% leaves a peek at both edges; a portrait slide sizes itself from its own height */
const slideWidths: Record<ViewerFit, string> = { wide: "flex-[0_0_70%]", tall: "flex-none" };

/* swipeable track and its caption, inside the shared dialog shell */
export const CarouselViewer = ({
  slides,
  startIndex,
  fit = "wide",
  onClose,
  closeLabel,
  previousLabel,
  nextLabel,
  renderSlide,
}: CarouselViewerProps) => {
  /* opens on the tile that was clicked */
  const { emblaRef, selectedIndex, goToPrev, goToNext } = useCarousel({ startSnap: startIndex });

  useArrowKeys({ onPrev: goToPrev, onNext: goToNext });

  const slide = slides[selectedIndex];
  if (!slide) return null;

  return (
    <Modal label={slide.title} closeLabel={closeLabel} onClose={onClose}>
      {/* relative lifts the whole figure over the backdrop, caption included */}
      <figure className={clsx("relative grid w-full justify-items-center gap-6", figureWidths[fit])}>
        {/* anchors the steps, so they centre on the media instead of on media plus caption */}
        <div className="relative grid w-full gap-6">
          <div ref={emblaRef} className="w-full overflow-hidden">
            {/* embla's required shape; the gap is slide padding, which its resize observer can measure */}
            <div className="-ml-6 flex [touch-action:pan-y_pinch-zoom]">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={clsx(
                    "min-w-0 pl-6 transition-opacity duration-200",
                    slideWidths[fit],
                    index !== selectedIndex && "opacity-60",
                  )}
                >
                  {renderSlide(index, index === selectedIndex)}
                </div>
              ))}
            </div>
          </div>

          {/* their own row under the media; contents dissolves it once they flank the figure */}
          <div className="grid grid-flow-col justify-center gap-6 xl:landscape:contents">
            <ModalControl
              placement="prev"
              label={previousLabel}
              icon={<ChevronLeft className="size-6 text-white" />}
              onClick={goToPrev}
            />
            <ModalControl
              placement="next"
              label={nextLabel}
              icon={<ChevronRight className="size-6 text-white" />}
              onClick={goToNext}
            />
          </div>
        </div>

        <figcaption className="grid justify-items-center gap-1 text-center">
          <Text as="span" size="body" weight="bold" text={slide.title} />
          <Text as="span" size="body" tone="muted" text={slide.description} />
        </figcaption>
      </figure>
    </Modal>
  );
};

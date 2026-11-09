"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import { Modal } from "@/common/modal/components/Modal";
import { ModalControl } from "@/common/modal/components/ModalControl";
import { useCarousel } from "@/utils/hooks/carousel/useCarousel";
import { useArrowKeys } from "@/utils/hooks/keyboard/useArrowKeys";
import type { CarouselViewerProps, ViewerFit } from "@/common/carousel-viewer/types";

/* the track: narrower for a portrait source, so its neighbours still only peek */
const figureWidths: Record<ViewerFit, string> = { wide: "max-w-5xl", tall: "max-w-2xl" };
/* 70% peeks at both edges as the class names example does; a portrait slide sizes itself */
const slideWidths: Record<ViewerFit, string> = { wide: "flex-[0_0_70%]", tall: "flex-[0_0_auto]" };

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
  /* a viewer never advances on its own, and it opens on the tile that was clicked */
  const { emblaRef, selectedIndex, goToPrev, goToNext } = useCarousel({
    autoplay: false,
    startSnap: startIndex,
    align: "center",
  });

  useArrowKeys({ onPrev: goToPrev, onNext: goToNext });

  const slide = slides[selectedIndex];
  if (!slide) return null;

  return (
    <Modal label={slide.title} closeLabel={closeLabel} onClose={onClose}>
      <figure className={clsx("relative grid w-full justify-items-center gap-4", figureWidths[fit])}>
        <div ref={emblaRef} className="w-full overflow-hidden">
          {/* embla's required shape; the gap is slide padding, which its resize observer can measure */}
          <div className="-ml-4 flex [touch-action:pan-y_pinch-zoom]">
            {slides.map((_, index) => (
              <div
                key={index}
                className={clsx(
                  "min-w-0 pl-4 transition-opacity duration-200",
                  slideWidths[fit],
                  index !== selectedIndex && "opacity-60",
                )}
              >
                {renderSlide(index, index === selectedIndex)}
              </div>
            ))}
          </div>
        </div>
        <figcaption className="grid justify-items-center gap-1 text-center">
          <Text as="span" size="body" weight="bold" text={slide.title} />
          <Text as="span" size="body" tone="muted" text={slide.description} />
        </figcaption>
      </figure>

      {/* siblings of the figure, or they would anchor to it instead of the viewport */}
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
    </Modal>
  );
};

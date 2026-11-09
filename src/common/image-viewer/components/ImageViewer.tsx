import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Media } from "@/common/media/components/Media";
import { Text } from "@/common/text/components/Text";
import { Modal } from "@/common/modal/components/Modal";
import { ModalControl } from "@/common/modal/components/ModalControl";
import { useCarousel } from "@/utils/hooks/carousel/useCarousel";
import { useArrowKeys } from "@/utils/hooks/image-viewer/useArrowKeys";
import type { ImageViewerProps } from "@/common/image-viewer/types";

/* lightbox: a swipeable track and its caption, inside the shared dialog shell */
export const ImageViewer = ({
  cards,
  startIndex,
  onClose,
  closeLabel,
  previousLabel,
  nextLabel,
}: ImageViewerProps) => {
  /* a lightbox never advances on its own, and it opens on the tile that was clicked */
  const { emblaRef, selectedIndex, goToPrev, goToNext } = useCarousel({
    autoplay: false,
    startSnap: startIndex,
    align: "center",
  });

  useArrowKeys({ onPrev: goToPrev, onNext: goToNext });

  const card = cards[selectedIndex];
  if (!card) return null;

  return (
    <Modal label={card.title} closeLabel={closeLabel} onClose={onClose}>
      <figure className="relative grid w-full max-w-5xl justify-items-center gap-4">
        <div ref={emblaRef} className="w-full overflow-hidden">
          {/* embla's required shape; the gap is slide padding, which its resize observer can measure */}
          <div className="-ml-4 flex [touch-action:pan-y_pinch-zoom]">
            {cards.map((slide, index) => (
              <div
                key={index}
                className={clsx(
                  /* 70% leaves the neighbours peeking at both edges, as the class names example does */
                  "min-w-0 flex-[0_0_70%] pl-4 transition-opacity duration-200",
                  index !== selectedIndex && "opacity-60",
                )}
              >
                <Media
                  src={slide.image}
                  alt={slide.title}
                  shape="showcase"
                  sizes="(max-width: 1024px) 70vw, 717px"
                />
              </div>
            ))}
          </div>
        </div>
        <figcaption className="grid justify-items-center gap-1 text-center">
          <Text as="span" size="body" weight="bold" text={card.title} />
          <Text as="span" size="body" tone="muted" text={card.description} />
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

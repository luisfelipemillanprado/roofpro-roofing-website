import { Media } from "@/common/media/components/Media";
import { CarouselViewer } from "@/common/carousel-viewer/components/CarouselViewer";
import type { ImageViewerProps } from "@/common/image-viewer/types";

/* lightbox: the shared viewer with a square image filling each slide */
export const ImageViewer = ({
  cards,
  startIndex,
  onClose,
  closeLabel,
  previousLabel,
  nextLabel,
}: ImageViewerProps) => (
  <CarouselViewer
    slides={cards}
    startIndex={startIndex}
    onClose={onClose}
    closeLabel={closeLabel}
    previousLabel={previousLabel}
    nextLabel={nextLabel}
    renderSlide={(index) => (
      <Media
        src={cards[index]!.image}
        alt={cards[index]!.title}
        shape="showcase"
        sizes="(max-width: 1024px) 70vw, 717px"
      />
    )}
  />
);

import type { ReactNode } from "react";

/* square sources fill a wide slide; portrait ones are sized by height and set their own */
export type ViewerFit = "wide" | "tall";

/* only what the caption reads: the slide body comes from the consumer */
interface ViewerSlide {
  title: string;
  description: string;
}

export interface CarouselViewerProps {
  slides: ViewerSlide[];
  startIndex: number;
  fit?: ViewerFit;
  onClose: () => void;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  /* selected marks the slide the track is on, so a heavy one can stay a poster off it */
  renderSlide: (index: number, selected: boolean) => ReactNode;
}

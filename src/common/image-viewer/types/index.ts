import type { ReactNode } from "react";

/* one viewable image: full-bleed tile caption + lightbox slide */
interface ViewerCard {
  image: string;
  title: string;
  description: string;
}

export interface ImageViewerProps {
  cards: ViewerCard[];
  startIndex: number;
  onClose: () => void;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}

export interface ExpandButtonProps {
  label: string;
  onClick: () => void;
  pulse?: boolean;
}

/* holds the open index for a grid whose tiles are rendered on the server */
export interface ViewerProviderProps {
  cards: ViewerCard[];
  children: ReactNode;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}

/* tile control wired to the provider: only the index and the label cross */
export interface ViewerExpandButtonProps {
  index: number;
  label: string;
}

/* the two track actions the arrow keys drive */
export interface ArrowKeys {
  onPrev: () => void;
  onNext: () => void;
}

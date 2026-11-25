import type { CSSProperties } from "react";
import { backdropsData } from "@/data/global/backdrops";
import type { BackdropLook, BackdropPattern, BackdropProps } from "@/common/backdrop/types";

/* per artwork: strength by theme (dark reads louder) and how it covers the section */
const looks: Record<BackdropPattern, BackdropLook> = {
  /* the framework thins out to the right in the photo: mirrored so it opens toward the left */
  structure: { strength: "opacity-3 in-[.light]:opacity-5", cover: "-scale-x-100 mask-cover mask-top" },
  contours: { strength: "opacity-3 in-[.light]:opacity-6", cover: "mask-cover mask-center" },
  tiles: { strength: "opacity-3 in-[.light]:opacity-6", cover: "mask-cover mask-center" },
  coils: { strength: "opacity-3 in-[.light]:opacity-5", cover: "mask-cover mask-center" },
};

/* template artwork in the text color, so it follows the theme; the page css keeps it to every other section */
export const Backdrop = ({ pattern }: BackdropProps) => (
  <div
    aria-hidden="true"
    data-backdrop-layer="cover"
    className={`pointer-events-none absolute inset-0 z-(--z-behind) bg-foreground mask-(--backdrop) mask-no-repeat ${looks[pattern].strength} ${looks[pattern].cover}`}
    style={{ "--backdrop": `url(${backdropsData[pattern]})` } as CSSProperties}
  />
);

import type { CSSProperties } from "react";
import { backdropsData } from "@/data/global/backdrops";
import type { BackdropLook, BackdropPattern, BackdropProps } from "@/common/backdrop/types";

/* per artwork: strength by theme (dark reads louder) and how it covers the section */
/* fixed scales (0.85x mobile, 1.35x desktop), so a tall section never zooms the art */
const looks: Record<BackdropPattern, BackdropLook> = {
  /* foot crossfaded into its head, so it repeats down without a seam; mirrored so the framework opens left */
  structure: {
    strength: "opacity-3 in-[.light]:opacity-5",
    cover: "-scale-x-100 mask-top mask-repeat-y mask-size-[1224px_auto] lg:mask-size-[max(100%,1944px)_auto]",
  },
  /* 2 tabs wide, scaled down from the photo, whose tabs read too large */
  shingles: {
    strength: "opacity-3 in-[.light]:opacity-6",
    cover: "mask-repeat mask-size-[214px_auto] lg:mask-size-[333px_auto]",
  },
  /* one exact period: 3 tiles by 2 courses */
  tiles: {
    strength: "opacity-3 in-[.light]:opacity-6",
    cover: "mask-repeat mask-size-[197px_auto] lg:mask-size-[313px_auto]",
  },
  /* foot crossfaded into its head, so it repeats down without a seam */
  coils: {
    strength: "opacity-3 in-[.light]:opacity-5",
    cover: "mask-top mask-repeat-y mask-size-[1224px_auto] lg:mask-size-[max(100%,1944px)_auto]",
  },
  /* footer only, always dark: one strength; a single roof cut-out sitting on the bottom-left corner */
  roof: {
    strength: "opacity-6",
    cover: "mask-bottom-left mask-no-repeat mask-size-[430px_auto] lg:mask-size-[810px_auto]",
  },
};

/* template artwork in the text color, so it follows the theme; the page css keeps it to every other section */
export const Backdrop = ({ pattern }: BackdropProps) => (
  <div
    aria-hidden="true"
    data-backdrop-layer="cover"
    className={`pointer-events-none absolute inset-0 z-(--z-behind) bg-foreground mask-(--backdrop) ${looks[pattern].strength} ${looks[pattern].cover}`}
    style={{ "--backdrop": `url(${backdropsData[pattern]})` } as CSSProperties}
  />
);

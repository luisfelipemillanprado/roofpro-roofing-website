import { backdropsData } from "@/data/global/backdrops";
import type { BackdropPattern, BackdropProps } from "@/common/backdrop/types";

/* per artwork: mask size and repeat; fixed pixel sizes, so a tall section never zooms the art */
const masks: Record<BackdropPattern, string> = {
  /* six courses cut on their joints */
  architectural: "mask-repeat mask-size-[330px_auto] lg:mask-size-[516px_auto]",
  /* two tabs across, six courses down */
  shingles: "mask-repeat mask-size-[214px_auto] lg:mask-size-[333px_auto]",
  /* one exact period: three tiles by two courses */
  tiles: "mask-repeat mask-size-[197px_auto] lg:mask-size-[313px_auto]",
  /* one exact period: two tiles across (the tile pitch falls between pixels), one course down */
  pantiles: "mask-repeat mask-size-[253px_auto] lg:mask-size-[401px_auto]",
  /* a single roof cut-out on the footer's bottom-left corner */
  roof: "mask-bottom-left mask-no-repeat mask-size-[430px_auto] lg:mask-size-[810px_auto]",
};

/* artwork painted in the text color, so it follows the theme; the page css keeps it to every other section */
export const Backdrop = ({ pattern }: BackdropProps) => (
  <div
    aria-hidden="true"
    data-backdrop-layer
    className={`pointer-events-none absolute inset-0 z-(--z-behind) bg-foreground ${pattern === "roof" ? "opacity-6" : "opacity-4 in-[.light]:opacity-7"} ${masks[pattern]}`}
    style={{ maskImage: `url(${backdropsData[pattern]})` }}
  />
);

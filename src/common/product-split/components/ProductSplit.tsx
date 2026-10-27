import type { ProductSplitProps } from "@/common/product-split/types";

/* product split band: gallery left, heading/points/assurances/stats/action right */
export const ProductSplit = ({ media, heading, points, assurances, stats, action }: ProductSplitProps) => (
  /* 2xl drops the gutter: the media column holds its width so the extra goes to the copy, not the gap */
  <div className="grid items-center gap-13 lg:grid-cols-2 2xl:grid-cols-[36rem_1fr]">
    {/* gallery side */}
    {media}
    {/* copy side */}
    <div className="grid gap-7 text-center lg:text-left">
      {heading}
      {points}
      {assurances}
      {/* stats and action take extra top margin beyond the gap for progressive spacing */}
      <div className="mt-2">{stats}</div>
      <div className="mt-2.5">{action}</div>
    </div>
  </div>
);

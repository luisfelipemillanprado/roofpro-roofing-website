import { IconPill } from "@/common/icon-pill/components/IconPill";
import type { SellingPointsProps } from "@/shared-sections/about/types";

/* About selling points: a ragged row of pills, each one as wide as the label it carries */
export const SellingPoints = ({ items }: SellingPointsProps) => (
  /* flex, not grid: whole pills have to wrap at their own width, which auto columns cannot do */
  <ul className="flex flex-wrap gap-x-4 gap-y-5.5">
    {items.map((item) => (
      <li key={item.key}>
        <IconPill text={item.label} />
      </li>
    ))}
  </ul>
);

import { CheckItem } from "@/common/check-item/components/CheckItem";
import type { CheckListProps } from "@/common/check-item/types";

/* checked list; the text is its own key, so a repeated line would collide */
export const CheckList = ({ items, tone }: CheckListProps) => (
  <ul className="grid gap-4">
    {items.map((item) => (
      <CheckItem key={item} tone={tone} text={item} />
    ))}
  </ul>
);

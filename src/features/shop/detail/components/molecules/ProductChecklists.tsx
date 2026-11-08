import { Title } from "@/common/title/components/Title";
import { CheckList } from "@/common/check-item/components/CheckList";
import type { ProductChecklistsProps } from "@/features/shop/detail/types";

/* a fragment keeps the band's gap reaching each block; check list as in about */
export const ProductChecklists = ({ lists }: ProductChecklistsProps) => (
  <>
    {lists.map(({ key, label, items }) => (
      <div key={key} className="grid gap-3">
        <Title as="h3" size="panel" weight="bold" text={label} />
        <CheckList tone="default" items={items} />
      </div>
    ))}
  </>
);

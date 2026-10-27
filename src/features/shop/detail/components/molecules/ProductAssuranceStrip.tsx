import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Text } from "@/common/text/components/Text";
import type { ProductAssuranceStripProps } from "@/features/shop/detail/types";

/* promise row between the price and the data banner */
export const ProductAssuranceStrip = ({ items }: ProductAssuranceStripProps) => (
  /* two per row while the column is wide; at lg it halves, so they stack again */
  <div className="grid gap-x-4 gap-y-7 sm:max-lg:grid-cols-2 xl:grid-cols-2">
    {items.map(({ key, icon, title, description }) => (
      /* left aligned even where the column centres, and the chip rides level with the pair of lines */
      <div key={key} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 text-left">
        {/* panel, like the home stat rows: the chip tone for an icon sitting on a base section */}
        <IconBadge icon={icon} size="stat" tone="panel" />
        <div className="grid gap-1">
          <Text as="span" size="subhead" weight="bold" text={title} />
          <Text as="span" size="caption" tone="muted" text={description} />
        </div>
      </div>
    ))}
  </div>
);

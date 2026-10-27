import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Text } from "@/common/text/components/Text";
import type { ProductAssuranceStripProps } from "@/features/shop/detail/types";

/* promises that close the copy column, over the rule the follow row left behind */
export const ProductAssuranceStrip = ({ items }: ProductAssuranceStripProps) => (
  /* two per row from sm; the third drops to its own row at the same width */
  <div className="grid gap-4 border-t border-line pt-7 sm:grid-cols-2">
    {items.map(({ key, icon, title, description }) => (
      /* left aligned even where the column centres, and the chip rides level with the pair of lines */
      <div key={key} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 text-left">
        {/* panel, like the home stat rows: the chip tone for an icon sitting on a base section */}
        <IconBadge icon={icon} size="stat" tone="panel" />
        {/* caps the measure so the description always reads as two lines, never one long one */}
        <div className="grid max-w-56">
          <Text as="span" size="subhead" weight="bold" text={title} />
          <Text as="span" size="note" tone="muted" text={description} />
        </div>
      </div>
    ))}
  </div>
);

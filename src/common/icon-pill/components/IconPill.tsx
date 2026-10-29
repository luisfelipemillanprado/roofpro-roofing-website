import { Check } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { IconPillProps } from "@/common/icon-pill/types";

/* two welded segments: the parent rounds and clips, so the seam between them stays straight */
export const IconPill = ({ text }: IconPillProps) => (
  <span className="grid grid-cols-[auto_1fr] overflow-hidden rounded-badge">
    {/* the chip squares to the pill's own height, so the gold reads as one solid block */}
    <span className="grid w-9.5 place-items-center bg-primary">
      <Check className="size-4 text-white" strokeWidth={3} />
    </span>
    <span className="grid items-center bg-surface-panel px-3.5 py-1.5">
      <Text as="span" size="body" text={text} />
    </span>
  </span>
);

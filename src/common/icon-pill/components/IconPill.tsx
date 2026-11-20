import { Check } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { IconPillProps } from "@/common/icon-pill/types";

/* two welded segments: the parent rounds and clips, so the seam between them stays straight */
export const IconPill = ({ text }: IconPillProps) => (
  <span className="grid grid-cols-[auto_1fr] overflow-hidden rounded-pill border border-line-neutral">
    {/* chip squares to the pill's height; its own token, deep enough to carry the white check */}
    <span className="grid w-9.5 place-items-center bg-pill-chip">
      <Check className="size-4 text-white" strokeWidth={3} />
    </span>
    {/* seam on this side, not the chip's: here the line composites over the panel, not the chip */}
    <span className="grid items-center border-l border-line-neutral bg-surface-panel px-3.5 py-1.5">
      <Text as="span" size="body" text={text} />
    </span>
  </span>
);

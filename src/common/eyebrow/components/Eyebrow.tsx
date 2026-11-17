import { Text } from "@/common/text/components/Text";
import type { EyebrowProps } from "@/common/eyebrow/types";

/* Section eyebrow: an accent dash plus the label, uppercase from the copy */
export const Eyebrow = ({ text }: EyebrowProps) => (
  <span className="inline-flex items-center gap-2">
    <span className="h-0.5 w-6 bg-heading-accent" />
    <Text as="span" size="label" tone="accent" weight="bold" tracking="wide" text={text} />
  </span>
);

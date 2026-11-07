import { Text } from "@/common/text/components/Text";
import { Link } from "@/i18n/navigation";
import type { FooterCreditsProps } from "@/layout/footer/types";

/* credits bar: copyright + builder credit left, legal links right */
export const FooterCredits = ({ copyright, builtByLabel, builder, legal }: FooterCreditsProps) => (
  <div className="grid justify-items-center gap-3 py-6 sm:grid-flow-col sm:justify-between">
    {/* stacked below lg; one continued line from lg */}
    <div className="grid justify-items-center gap-1 sm:justify-items-start lg:grid-flow-col lg:items-center lg:justify-start lg:justify-items-center lg:gap-1.5">
      <Text as="span" size="body" tone="muted" text={copyright} />
      <div className="grid grid-flow-col items-center justify-start gap-1.5">
        <Text as="span" size="body" tone="muted" text={builtByLabel} />
        <a href={builder.href}>
          <Text as="span" size="body" tone="muted" weight="medium" text={builder.label} />
        </a>
      </div>
    </div>
    {/* flex, not grid: three labels have to wrap on a phone and grid would not let them */}
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
      {legal.map((link) => (
        <Link key={link.key} href={link.href}>
          <Text as="span" size="body" tone="muted" text={link.label} />
        </Link>
      ))}
    </div>
  </div>
);

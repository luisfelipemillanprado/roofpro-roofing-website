import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { CheckList } from "@/common/check-item/components/CheckList";
import type { LegalSectionListProps } from "@/shared-sections/legal/types";

/* prose sections; each paragraph is its own entry so the copy stays translatable */
export const LegalSectionList = ({ items }: LegalSectionListProps) => (
  /* multi-column, not a grid: columns balance themselves, so no section leaves a hole */
  <div className="lg:columns-2 lg:gap-x-10">
    {items.map(({ key, title, lead, body, bullets }) => (
      /* a section split at the column break would read as two separate ones */
      <section key={key} className="mb-10 grid break-inside-avoid gap-4 last:mb-0">
        {/* h2: the hero holds the page h1 and this section has no heading above these */}
        <Title as="h2" size="feature" text={title} />
        {lead && <Text size="lead" tone="muted" text={lead} />}
        {body.map((paragraph) => (
          <Text key={paragraph} size="lead" tone="muted" text={paragraph} />
        ))}
        {bullets.length > 0 && <CheckList tone="muted" items={bullets} />}
      </section>
    ))}
  </div>
);

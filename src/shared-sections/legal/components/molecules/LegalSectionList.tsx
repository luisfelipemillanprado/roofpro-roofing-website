import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { CheckItem } from "@/common/check-item/components/CheckItem";
import type { LegalSectionListProps } from "@/shared-sections/legal/types";

/* prose sections; each paragraph is its own entry so the copy stays translatable */
export const LegalSectionList = ({ items }: LegalSectionListProps) => (
  /* multi-column, not a grid: columns balance themselves, so no section leaves a hole */
  <div className="lg:columns-2 lg:gap-x-10">
    {items.map(({ key, title, body, bullets }) => (
      /* break-inside-avoid keeps a section whole; last:mb-0 drops the trailing gap */
      <section key={key} className="mb-10 grid break-inside-avoid gap-4 last:mb-0">
        {/* h2: the hero holds the page h1 and this section has no heading above these */}
        <Title as="h2" size="feature" text={title} />
        {body.map((paragraph) => (
          <Text key={paragraph} size="lead" tone="muted" text={paragraph} />
        ))}
        {bullets.length > 0 && (
          /* check list as in the product features tab */
          <ul className="grid gap-4">
            {bullets.map((bullet) => (
              <CheckItem key={bullet} tone="muted" text={bullet} />
            ))}
          </ul>
        )}
      </section>
    ))}
  </div>
);

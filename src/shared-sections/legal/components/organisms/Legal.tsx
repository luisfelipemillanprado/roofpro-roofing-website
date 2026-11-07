import { getTranslations } from "next-intl/server";
import { Container } from "@/common/container/components/Container";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { LegalSectionList } from "@/shared-sections/legal/components/molecules/LegalSectionList";
import { legalData } from "@/data/shared-sections/legal";
import type { LegalProps } from "@/shared-sections/legal/types";

/* legal body; the page title lives in the hero above, so this section carries none */
export const Legal = async ({ variant, tone = "base" }: LegalProps) => {
  const t = await getTranslations("legal");
  /* data: per-variant sections; text by full key */
  const items = legalData[variant].items.map((item) => ({
    key: item.key,
    title: t(`${item.key}.title`),
    body: t.raw(`${item.key}.body`) as string[],
    /* only sections whose copy enumerates carry items; the rest stay prose */
    bullets: t.has(`${item.key}.items`) ? (t.raw(`${item.key}.items`) as string[]) : [],
  }));

  return (
    <SectionWrapper tone={tone}>
      <Container>
        {/* full container width: the two columns need it to keep a readable measure */}
        <article>
          <LegalSectionList items={items} />
        </article>
      </Container>
    </SectionWrapper>
  );
};

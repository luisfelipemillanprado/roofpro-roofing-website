import { getTranslations } from "next-intl/server";
import { Container } from "@/common/container/components/Container";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { LegalSectionList } from "@/shared-sections/legal/components/molecules/LegalSectionList";
import { legalData } from "@/data/shared-sections/legal";
import { company } from "@/data/site";
import type { LegalProps } from "@/shared-sections/legal/types";

/* facts the copy names: company and conformance target feed their placeholders */
const values = {
  name: company.name,
  state: company.state,
  county: company.county,
  ...legalData.standard,
};

/* legal body; the page title lives in the hero above, so this section carries none */
export const Legal = async ({ variant, tone = "base" }: LegalProps) => {
  const t = await getTranslations("legal");
  /* data: per-variant sections; text by full key */
  const items = legalData[variant].items.map((item) => ({
    key: item.key,
    title: t(`${item.key}.title`),
    /* the opening line names company facts, so it is its own key and takes them as args */
    lead: t.has(`${item.key}.lead`) ? t(`${item.key}.lead`, values) : "",
    body: t.raw(`${item.key}.body`) as string[],
    /* only sections whose copy enumerates carry bullets; the rest stay prose */
    bullets: t.has(`${item.key}.bullets`) ? (t.raw(`${item.key}.bullets`) as string[]) : [],
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

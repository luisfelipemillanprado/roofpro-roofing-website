import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/common/section-header/components/SectionHeader";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { Button } from "@/common/call-to-actions/components/Button";
import { MosaicList } from "@/common/mosaic/components/MosaicList";
import { ViewerProvider, ViewerExpandButton } from "@/common/image-viewer/components/ViewerProvider";
import { resultsData } from "@/data/shared-sections/results";
import type { ResultsProps } from "@/shared-sections/results/types";

const { heading, ctaHref, items, viewer } = resultsData;

/* finished jobs that show how one material looks once installed */
export const Results = async ({ category, tone = "base", limit }: ResultsProps) => {
  const t = await getTranslations("result");
  const pool = items.filter((item) => item.categories.some((material) => material === category));
  /* data: order + image; text by key */
  const cards = pool.slice(0, limit).map((item) => ({
    key: item.key,
    image: item.image,
    title: t(`items.${item.key}.title`),
    description: t(`items.${item.key}.description`),
  }));

  return (
    <SectionWrapper id="results" tone={tone} backdrop="octagonal">
      <Container>
        <div className="grid gap-13">
          <SectionHeader
            eyebrow={t(heading.eyebrow)}
            title={t(heading.titleLead)}
            accent={t(heading.titleAccent)}
            description={t(heading.description)}
          >
            <Button href={ctaHref.href} variant="secondary" pulse>
              {t(ctaHref.key)}
            </Button>
          </SectionHeader>

          <ViewerProvider
            cards={cards}
            closeLabel={t(viewer.close)}
            previousLabel={t(viewer.previous)}
            nextLabel={t(viewer.next)}
          >
            <MosaicList
              cards={cards}
              renderAction={(card, index) => (
                <ViewerExpandButton index={index} label={`${card.description} ${t("action.viewImage")}`} />
              )}
            />
          </ViewerProvider>
        </div>
      </Container>
    </SectionWrapper>
  );
};

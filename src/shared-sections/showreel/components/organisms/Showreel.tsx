import { getTranslations } from "next-intl/server";
import { Container } from "@/common/container/components/Container";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { ShowreelPlayer } from "@/shared-sections/showreel/components/molecules/ShowreelPlayer";
import { showreelData } from "@/data/shared-sections/showreel";
import type { ShowreelProps } from "@/shared-sections/showreel/types";

const { items, playKey, closeKey } = showreelData;

/* reel row, section width rather than full bleed; no heading, the footage carries it */
export const Showreel = async ({ tone = "base" }: ShowreelProps) => {
  const t = await getTranslations("showreel");
  const play = t(playKey);
  /* data: order, poster and clip; text by key */
  const reels = items.map((item) => {
    /* the disc names its own reel, as the service arrow names its own card */
    const title = t(`items.${item.key}.title`);

    return {
      key: item.key,
      image: item.image,
      video: item.video,
      title,
      description: t(`items.${item.key}.description`),
      videoAlt: t(`items.${item.key}.videoAlt`),
      playLabel: `${title} ${play}`,
    };
  });

  return (
    <SectionWrapper tone={tone}>
      <Container>
        <ShowreelPlayer items={reels} closeLabel={t(closeKey)} />
      </Container>
    </SectionWrapper>
  );
};

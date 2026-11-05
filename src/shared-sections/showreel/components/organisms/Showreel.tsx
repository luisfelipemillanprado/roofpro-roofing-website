import { getTranslations } from "next-intl/server";
import { Container } from "@/common/container/components/Container";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { ShowreelPlayer } from "@/shared-sections/showreel/components/molecules/ShowreelPlayer";
import { showreelData } from "@/data/shared-sections/showreel";
import type { ShowreelProps } from "@/shared-sections/showreel/types";

const { video, posterAltKey, videoAltKey, playKey, closeKey } = showreelData;

/* bare 16:9 band, section width rather than full bleed; no heading, the footage carries it */
export const Showreel = async ({ tone = "base" }: ShowreelProps) => {
  const t = await getTranslations("showreel");

  return (
    <SectionWrapper tone={tone}>
      <Container>
        <ShowreelPlayer
          poster={video.poster}
          posterAlt={t(posterAltKey)}
          video={video.src}
          videoAlt={t(videoAltKey)}
          playLabel={t(playKey)}
          closeLabel={t(closeKey)}
        />
      </Container>
    </SectionWrapper>
  );
};

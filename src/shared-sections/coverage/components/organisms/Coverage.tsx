import { getTranslations } from "next-intl/server";
import { MarqueeTrack } from "@/common/animations/components/MarqueeTrack";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { Eyebrow } from "@/common/eyebrow/components/Eyebrow";
import { Title } from "@/common/title/components/Title";
import { CoverageList } from "@/shared-sections/coverage/components/molecules/CoverageList";
import { coverageData } from "@/data/shared-sections/coverage";
import type { CoverageProps } from "@/shared-sections/coverage/types";

const { areas, trackCopies } = coverageData;

/* bare areas strip: the lead-in h2 is the section heading, so no SectionHeading block */
export const Coverage = async ({ tone = "base" }: CoverageProps) => {
  const t = await getTranslations("coverage");

  return (
    <SectionWrapper tone={tone}>
      <Container>
        <div className="grid grid-cols-[auto_1fr] items-center gap-6">
          {/* fixed block: the count is the list length, so the copy never states a stale figure */}
          <div className="grid gap-1 border-r border-line pr-6">
            <Eyebrow text={t("plus")} />
            <Title as="h2" size="feature" weight="bold" text={t("areas", { count: areas.length })} />
          </div>
          {/* clipped track, both edges faded so names arrive and leave without a hard cut */}
          <div className="overflow-hidden mask-x-from-95% mask-x-to-100%">
            <MarqueeTrack copies={trackCopies} speed="slow">
              <CoverageList areas={areas} />
            </MarqueeTrack>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

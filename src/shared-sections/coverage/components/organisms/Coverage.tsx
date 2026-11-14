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
        {/* stacked on phones, where side by side leaves the names window too narrow to read */}
        <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
          {/* gap-6 (not 5.25): a smaller half-leading here, so the optical gap matches a section heading */}
          <div className="grid gap-6 max-sm:justify-items-center sm:border-r sm:border-line sm:pr-6">
            <Eyebrow text={t("plus")} />
            {/* the count is the list length, so the copy never states a stale figure */}
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

import { LoopTrack } from "@/common/animations/components/LoopTrack";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Container } from "@/common/container/components/Container";
import { BrandsList } from "@/shared-sections/brands/components/molecules/BrandsList";
import { brandsData } from "@/data/shared-sections/brands";
import type { BrandsProps } from "@/shared-sections/brands/types";

const { items, trackCopies } = brandsData;
/* halved so the two tracks never share a logo; ceil keeps an odd count from landing in both */
const half = Math.ceil(items.length / 2);

/* bare brand strip: no heading on purpose, the logos carry the section */
export const Brands = ({ tone = "base" }: BrandsProps) => (
  <SectionWrapper tone={tone} backdrop="shingles">
    <Container>
      {/* logos ship light for the dark default; one flip here beats one per logo */}
      <div className="grid gap-12 in-[.light]:invert">
        {/* clipped track, both edges faded so logos arrive and leave without a hard cut */}
        <div className="overflow-hidden mask-x-from-95% mask-x-to-100%">
          <LoopTrack copies={trackCopies} speed="slow">
            <BrandsList items={items.slice(0, half)} />
          </LoopTrack>
        </div>
        <div className="overflow-hidden mask-x-from-95% mask-x-to-100%">
          <LoopTrack copies={trackCopies} speed="slow" direction="right">
            <BrandsList items={items.slice(half)} />
          </LoopTrack>
        </div>
      </div>
    </Container>
  </SectionWrapper>
);

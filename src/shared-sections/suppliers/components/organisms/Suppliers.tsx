import { Container } from "@/common/container/components/Container";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { SuppliersList } from "@/shared-sections/suppliers/components/molecules/SuppliersList";
import { suppliersData } from "@/data/shared-sections/suppliers";
import type { SuppliersProps } from "@/shared-sections/suppliers/types";

const { items, trackCopies } = suppliersData;

/* bare brand strip: no heading on purpose, the logos carry the section */
export const Suppliers = ({ tone = "base" }: SuppliersProps) => (
  <SectionWrapper tone={tone}>
    <Container>
      {/* clipped track, both edges faded so logos arrive and leave without a hard cut */}
      <div className="overflow-hidden mask-x-from-95% mask-x-to-100%">
        <SuppliersList items={items} copies={trackCopies} />
      </div>
    </Container>
  </SectionWrapper>
);

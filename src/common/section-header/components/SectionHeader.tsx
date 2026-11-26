import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import type { SectionHeaderProps } from "@/common/section-header/types";

/* centered heading with its call to action: stacked, side by side from md until xl */
export const SectionHeader = ({ eyebrow, title, accent, description, children }: SectionHeaderProps) => (
  <div className="grid justify-items-center gap-6 md:max-xl:mr-5 md:max-xl:grid-cols-[1fr_auto] md:max-xl:items-center md:max-xl:justify-items-stretch md:max-xl:gap-x-6">
    <SectionHeading
      align="center"
      flushFrom="md"
      eyebrow={eyebrow}
      title={title}
      accent={accent}
      description={description}
    />
    <div className="mt-2 md:max-xl:mt-0">{children}</div>
  </div>
);

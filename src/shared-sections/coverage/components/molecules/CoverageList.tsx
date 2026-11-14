import { Text } from "@/common/text/components/Text";
import type { CoverageListProps } from "@/shared-sections/coverage/types";

/* one copy of the area row; MarqueeTrack repeats it to close the loop */
export const CoverageList = ({ areas }: CoverageListProps) => (
  <>
    {areas.map((area) => (
      <div key={area} className="grid grid-flow-col items-center justify-start gap-7 px-3.5">
        {/* nowrap guard; the wrapper also sets the row line box (+2px) */}
        <span className="whitespace-nowrap">
          <Text as="span" size="caption" weight="bold" tracking="wide" text={area.toUpperCase()} />
        </span>
        {/* dot separator between areas */}
        <span className="size-1.5 rounded-full bg-primary" />
      </div>
    ))}
  </>
);

import { Play } from "lucide-react";
import { PulseRing } from "@/common/animations/components/PulseRing";
import type { PlayButtonProps } from "@/common/call-to-actions/types";

/* round icon button over a poster; scales down so a short band is not swallowed by it */
export const PlayButton = ({ label, onClick }: PlayButtonProps) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="relative isolate grid size-14 place-items-center rounded-full bg-primary shadow-md transition-transform duration-300 hover:scale-90 md:size-18 lg:size-22"
  >
    <PulseRing color="primary" rounded />
    <Play aria-hidden className="size-5 fill-white text-white md:size-6 lg:size-7" />
  </button>
);

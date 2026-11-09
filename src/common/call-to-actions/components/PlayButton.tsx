import { Play } from "lucide-react";
import { PulseRing } from "@/common/animations/components/PulseRing";
import type { PlayButtonProps } from "@/common/call-to-actions/types";

/* ArrowLink's twin for a card that opens a reel instead of navigating */
export const PlayButton = ({ label, onClick, pulse = false }: PlayButtonProps) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="relative isolate grid size-10 place-items-center rounded-full bg-primary shadow-md transition-transform duration-300 group-hover:translate-x-1"
  >
    {pulse && <PulseRing color="primary" rounded />}
    <Play className="size-5 fill-white text-white" />
  </button>
);

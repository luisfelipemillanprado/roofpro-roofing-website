import { Expand } from "lucide-react";
import { PulseRing } from "@/common/animations/components/PulseRing";
import type { ExpandButtonProps } from "@/common/image-viewer/types";

/* card control: opens the image viewer (needs a group parent for hover) */
export const ExpandButton = ({ label, onClick, pulse = false }: ExpandButtonProps) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="relative isolate grid size-10 place-items-center rounded-full bg-primary shadow-md transition-transform duration-300 group-hover:translate-x-1"
  >
    {pulse && <PulseRing color="primary" rounded />}
    <Expand className="size-5 text-white" />
  </button>
);

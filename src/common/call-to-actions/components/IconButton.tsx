import { PulseRing } from "@/common/animations/components/PulseRing";
import type { IconButtonProps } from "@/common/call-to-actions/types";

/* ArrowLink's button twin: a card's round affordance (needs a group parent for hover) */
export const IconButton = ({ icon, label, onClick, pulse = false }: IconButtonProps) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="relative isolate grid size-10 place-items-center rounded-full bg-primary shadow-md transition-transform duration-300 group-hover:translate-x-1"
  >
    {pulse && <PulseRing color="primary" rounded />}
    {icon}
  </button>
);

import clsx from "clsx";
import type { ModalControlProps } from "@/common/modal/types";

/* placement within the modal overlay */
const placementClass: Record<ModalControlProps["placement"], string> = {
  close: "top-4 right-4",
  prev: "top-1/2 left-4 -translate-y-1/2",
  next: "top-1/2 right-4 -translate-y-1/2",
};

/* round overlay control: close / prev / next */
export const ModalControl = ({ ref, placement, label, icon, onClick }: ModalControlProps) => (
  <button
    ref={ref}
    type="button"
    aria-label={label}
    onClick={onClick}
    className={clsx(
      "absolute grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20",
      placementClass[placement],
    )}
  >
    {icon}
  </button>
);

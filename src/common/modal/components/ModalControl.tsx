import clsx from "clsx";
import type { ModalControlProps } from "@/common/modal/types";

/* close pins to the dialog; the steps sit outside the figure, only where it leaves room beside it */
const placementClass: Record<ModalControlProps["placement"], string> = {
  close: "fixed top-4 right-4",
  prev: "xl:landscape:absolute xl:landscape:top-1/2 xl:landscape:-left-17 xl:landscape:-translate-y-1/2",
  next: "xl:landscape:absolute xl:landscape:top-1/2 xl:landscape:-right-17 xl:landscape:-translate-y-1/2",
};

/* round overlay control: close / prev / next */
export const ModalControl = ({ ref, placement, label, icon, onClick }: ModalControlProps) => (
  <button
    ref={ref}
    type="button"
    aria-label={label}
    onClick={onClick}
    className={clsx(
      "grid size-11 place-items-center rounded-full border bg-white/10 transition-colors hover:bg-white/20",
      /* borrowed from the hero badges: 20% for the steps, 10% for close */
      placement === "close" ? "border-white/10" : "border-white/20",
      placementClass[placement],
    )}
  >
    {icon}
  </button>
);

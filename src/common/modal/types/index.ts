import type { ReactNode, Ref } from "react";

export interface ModalProps {
  label: string; /* names the dialog, since it has no visible heading */
  closeLabel: string;
  onClose: () => void;
  children: ReactNode;
}

export interface ModalControlProps {
  placement: "close" | "prev" | "next";
  label: string;
  icon: ReactNode;
  onClick: () => void;
  ref?: Ref<HTMLButtonElement>; /* focus target for the close control */
}

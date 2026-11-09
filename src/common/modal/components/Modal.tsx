"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { ModalControl } from "@/common/modal/components/ModalControl";
import type { ModalProps } from "@/common/modal/types";

/* dialog shell: portal, backdrop and close; mounting it is what opens it */
export const Modal = ({ label, closeLabel, onClose, children }: ModalProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  /* escape closes; the page lock is in globals.css, keyed on the two aria attributes below */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  /* the focus target is this dialog's own close control, so focus stays here */
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="theme-dark fixed inset-0 z-(--z-modal) grid place-items-center p-4"
    >
      <div onClick={onClose} className="absolute inset-0 bg-contrast/70 backdrop-blur-md" />

      {/* a control anchors to this fixed box, so any extra one is a child here, not of the content */}
      {children}

      <ModalControl
        ref={closeRef}
        placement="close"
        label={closeLabel}
        icon={<X className="size-5 text-white" />}
        onClick={onClose}
      />
    </div>,
    document.body,
  );
};

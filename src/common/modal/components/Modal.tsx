"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { ModalControl } from "@/common/modal/components/ModalControl";
import type { ModalProps } from "@/common/modal/types";

/* dialog shell: portal, backdrop and close; mounting it is what opens it */
export const Modal = ({ label, closeLabel, onClose, children }: ModalProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  /* escape closes; the page lock is in globals.css, keyed on the two aria attributes below */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  /* focus lands on close and goes back to the opener; the page behind is inert while it is open */
  useEffect(() => {
    const opener = document.activeElement;
    /* inert is what aria-modal only promises: out of the tab order and out of the a11y tree */
    const blocked = [...document.body.children].filter((element) => element !== dialogRef.current);
    blocked.forEach((element) => element.setAttribute("inert", ""));
    closeRef.current?.focus();

    /* released before the opener is focused, since inert would refuse the focus */
    return () => {
      blocked.forEach((element) => element.removeAttribute("inert"));
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, []);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="theme-dark fixed inset-0 z-(--z-modal) grid place-items-center overflow-y-auto p-4"
    >
      {/* fixed, not absolute: an absolute child of a scrolling dialog scrolls away with it */}
      <div onClick={onClose} className="fixed inset-0 bg-contrast/70 backdrop-blur-md" />

      {/* content owns its own controls; only close belongs to the shell, pinned past the scroll */}
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

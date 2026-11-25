"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { Text } from "@/common/text/components/Text";
import type { TabsProps } from "@/common/tabs/types";

export const Tabs = ({ label, tabs }: TabsProps) => {
  const id = useId();
  const [active, setActive] = useState(tabs[0]!.key);

  /* wai-aria tabs: arrows wrap, home and end jump; the tab gains focus and activates */
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = tabs.findIndex((tab) => tab.key === active);
    const targets: Record<string, number> = {
      ArrowRight: (index + 1) % tabs.length,
      ArrowLeft: (index - 1 + tabs.length) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    };
    const next = tabs[targets[event.key] ?? -1];
    if (!next) return;
    event.preventDefault();
    setActive(next.key);
    const tab = document.getElementById(`${id}-tab-${next.key}`);
    tab?.focus();
    tab?.scrollIntoView({ inline: "nearest", block: "nearest" });
  };

  return (
    <div className="grid gap-6">
      {/* the track hugs its segments and scrolls inside itself once the labels outgrow the column */}
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="grid w-fit max-w-full scroll-p-1 scrollbar-none grid-flow-col justify-start overflow-x-auto rounded-full border border-line bg-surface-panel p-1"
      >
        {tabs.map(({ key, label }, index) => (
          <button
            key={key}
            id={`${id}-tab-${key}`}
            type="button"
            role="tab"
            aria-selected={active === key}
            aria-controls={`${id}-panel-${key}`}
            /* roving tabindex: tab reaches the chosen one, the arrows do the rest */
            tabIndex={active === key ? 0 : -1}
            /* a tap never scrolls its container, so the chosen one brings itself into view */
            onClick={(event) => {
              setActive(key);
              event.currentTarget.scrollIntoView({ inline: "nearest", block: "nearest" });
            }}
            /* the chip tone the cards use for their icons, so the chosen one sinks into the track */
            className={`relative rounded-full px-5 py-3 transition-colors *:transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light ${
              active === key ? "bg-surface-muted" : ""
            }`}
          >
            {/* hairline between two unchosen segments; next to the chosen one the pill divides them */}
            {index > 0 && active !== key && active !== tabs[index - 1]!.key && (
              <span aria-hidden className="absolute top-1/2 left-0 h-6 w-px -translate-y-1/2 bg-line" />
            )}
            <Text
              as="span"
              size="subhead"
              weight="semibold"
              tone={active === key ? "default" : "muted"}
              text={label}
            />
          </button>
        ))}
      </div>

      {/* every panel stays mounted so each tab's aria-controls resolves */}
      {tabs.map(({ key, panel }) => (
        <div
          key={key}
          id={`${id}-panel-${key}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${key}`}
          hidden={active !== key}
          /* caps the panel's reading measure; this column never reaches it, a wider one would */
          className="max-w-3xl"
        >
          {panel}
        </div>
      ))}
    </div>
  );
};

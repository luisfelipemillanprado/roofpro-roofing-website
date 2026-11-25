"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("navbar");

  return (
    <button
      type="button"
      aria-label={t("toggleTheme")}
      /* read on click only, past hydration */
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="group grid size-10 place-items-center rounded-control border border-line bg-eclipse"
    >
      {/* both icons, css picks: same markup on server and client */}
      <Sun className="size-4.5 text-foreground transition-colors group-hover:text-primary in-[.light]:hidden" />
      <Moon className="hidden size-4.5 text-foreground transition-colors group-hover:text-primary in-[.light]:block" />
    </button>
  );
};

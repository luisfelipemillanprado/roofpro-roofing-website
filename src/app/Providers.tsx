"use client";

import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export interface ProvidersProps {
  children: ReactNode;
  /* Forwarded to next-themes' ThemeProvider */
  themeProps?: ThemeProviderProps;
}

/* theme provider; the choice persists in localStorage across locales */
export const Providers = ({ children, themeProps }: ProvidersProps) => {
  return (
    <NextThemesProvider
      {...themeProps}
      /* next docs InlineScript: runs from the server html, inert when the client renders it */
      scriptProps={{ type: typeof window === "undefined" ? "text/javascript" : "text/plain" }}
    >
      {children}
    </NextThemesProvider>
  );
};

import { Inter, Plus_Jakarta_Sans } from "next/font/google";

/* variable fonts, loaded once: shared by the root layout and the global 404 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

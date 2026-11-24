import { Inter, Plus_Jakarta_Sans } from "next/font/google";

/* font definitions file: loaded once, shared by the root layout and the global 404 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

import type { BackdropPattern } from "@/common/backdrop/types";

export interface ProductsProps {
  tone?: "base" | "muted" /* section surface; keeps page section alternation correct */;
  limit?: number;
  backdrop?: BackdropPattern /* section art; a page sets it to keep its backdrop order */;
}

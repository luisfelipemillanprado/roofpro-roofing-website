/* one brand logo: image path + the brand name, which is the alt */
interface BrandItem {
  key: string;
  label: string;
  image: string;
}

/* one copy of a track row, non-interactive */
export interface BrandsListProps {
  items: readonly BrandItem[];
}

export interface BrandsProps {
  tone?: "base" | "muted" /* section surface; keeps page section alternation correct */;
}

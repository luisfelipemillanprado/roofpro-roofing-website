/* one collaborating brand: logo path + the brand name, which is the alt */
export interface SupplierData {
  key: string;
  label: string;
  image: string;
}

export interface SuppliersListProps {
  items: readonly SupplierData[];
  copies: number;
}

export interface SuppliersProps {
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
}

type LegalVariant = "privacy" | "terms" | "accessibility";

export interface LegalProps {
  variant: LegalVariant;
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
}

/* one translated section; lead is "" and bullets empty when that copy has none */
interface LegalSectionItem {
  key: string;
  title: string;
  lead: string;
  body: string[];
  bullets: string[];
}

export interface LegalSectionListProps {
  items: LegalSectionItem[];
}

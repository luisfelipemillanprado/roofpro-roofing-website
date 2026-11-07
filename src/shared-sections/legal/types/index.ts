type LegalVariant = "privacy" | "terms" | "accessibility";

export interface LegalProps {
  variant: LegalVariant;
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
}

/* one resolved section: heading, lead-in paragraphs, then the bullets that close it */
interface LegalSectionItem {
  key: string;
  title: string;
  body: string[];
  bullets: string[];
}

export interface LegalSectionListProps {
  items: LegalSectionItem[];
}

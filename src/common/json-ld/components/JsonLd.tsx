import type { JsonLdProps } from "@/common/json-ld/types";

/* schema.org data for crawlers; "<" escaped so no string can close the script (next docs) */
export const JsonLd = ({ data }: JsonLdProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);

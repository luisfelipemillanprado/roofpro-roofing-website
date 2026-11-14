import { company } from "@/data/site";

/* Coverage strip: the served areas, looped as a marquee */
export const coverageData = {
  trackCopies: 2,
  areas: Object.values(company.coverageAreas),
} as const;

import { company } from "@/data/site";

/* Service detail: shared four-phase process, text by key */
export const serviceDetailData = {
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.contact", href: "#contact" },
  /* brand stats, identical for every service: value from company, label by key */
  stats: [
    { key: "years", icon: "award", value: `${company.yearsExperience}+` },
    { key: "projects", icon: "hammer", value: `${company.projectsCompleted / 1000}k+` },
    { key: "licensed", icon: "shield", value: "100%" },
  ],
  /* four-phase skeleton shared by every service; only the copy varies */
  process: [
    { key: "inspect", icon: "clipboard" },
    { key: "quote", icon: "document" },
    { key: "work", icon: "hammer" },
    { key: "warranty", icon: "shield" },
  ],
} as const;

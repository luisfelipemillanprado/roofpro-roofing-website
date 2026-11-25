import { pageHeaderData } from "@/data/shared-sections/page-header";

/* 404 page: the hero background plus the way back home; text by key */
export const notFoundData = {
  image: pageHeaderData.images.default,
  heading: { titleLead: "titleLead", titleAccent: "titleAccent", description: "description" },
  /* page CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.home", href: "/" },
} as const;

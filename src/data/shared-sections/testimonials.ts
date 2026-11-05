import { company } from "@/data/site";

/* Testimonials section: ordered items (avatar), text by key */
export const testimonialsData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    viewAll: { key: "action.viewAll", href: "/about" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* Google review badge: score plus review count with a + suffix */
  rating: { score: `${company.googleScore}`, count: `${company.googleReviews}+` },
  /* Google logo asset, rendered by the GoogleMark atom */
  google: "/images/google/google.webp",
  /* per-page groups of six, gender mixed; about reuses six picks */
  items: {
    /* company: quality and commitment */
    company: [
      { key: "paula", avatar: "/images/avatars/paula.webp" },
      { key: "greg", avatar: "/images/avatars/greg.webp" },
      { key: "vanessa", avatar: "/images/avatars/vanessa.webp" },
      { key: "curtis", avatar: "/images/avatars/curtis.webp" },
      { key: "owen", avatar: "/images/avatars/owen.webp" },
      { key: "marcus", avatar: "/images/avatars/marcus.webp" },
    ],
    /* services: repairs and replacements */
    services: [
      { key: "carmen", avatar: "/images/avatars/carmen.webp" },
      { key: "dennis", avatar: "/images/avatars/dennis.webp" },
      { key: "sofia", avatar: "/images/avatars/sofia.webp" },
      { key: "howard", avatar: "/images/avatars/howard.webp" },
      { key: "bradley", avatar: "/images/avatars/bradley.webp" },
      { key: "frank", avatar: "/images/avatars/frank.webp" },
    ],
    /* projects: finished results and curb appeal */
    projects: [
      { key: "diana", avatar: "/images/avatars/diana.webp" },
      { key: "victor", avatar: "/images/avatars/victor.webp" },
      { key: "grace", avatar: "/images/avatars/grace.webp" },
      { key: "nathan", avatar: "/images/avatars/nathan.webp" },
      { key: "elliot", avatar: "/images/avatars/elliot.webp" },
      { key: "tyler", avatar: "/images/avatars/tyler.webp" },
    ],
    /* about: curated 3-type mix (2 company, 2 services, 2 projects) */
    about: [
      { key: "greg", avatar: "/images/avatars/greg.webp" },
      { key: "marcus", avatar: "/images/avatars/marcus.webp" },
      { key: "dennis", avatar: "/images/avatars/dennis.webp" },
      { key: "howard", avatar: "/images/avatars/howard.webp" },
      { key: "diana", avatar: "/images/avatars/diana.webp" },
      { key: "grace", avatar: "/images/avatars/grace.webp" },
    ],
  },
} as const;

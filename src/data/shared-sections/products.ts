/* Products section: heading + CTA; cards from the shop catalog */
export const productsData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.viewAll", href: "/shop" },
  /* teaser picks by slug: shingles lead, then a spread, since the catalog is ordered in blocks */
  featured: [
    "timberline-hdz-pewter-gray",
    "steeldash-snap-lock-slate-gray",
    "dupont-tyvek-120",
    "broan-634",
    "oatey-11872",
    "titebond-61001",
  ],
} as const;

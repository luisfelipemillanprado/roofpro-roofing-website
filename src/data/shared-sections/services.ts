/* Services section: ordered items (image), text by key */
export const servicesData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    viewAll: { key: "action.viewAll", href: "/services" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* slug = detail route id (/services/[slug]); first six lead, shown by the home limit */
  items: [
    { key: "repair", slug: "roof-repair", image: "/images/services/roof-repair.webp" },
    { key: "replacement", slug: "roof-replacement", image: "/images/services/roof-replacement.webp" },
    { key: "storm", slug: "storm-damage-repair", image: "/images/services/storm-damage-repair.webp" },
    { key: "inspections", slug: "roof-inspections", image: "/images/services/roof-inspections.webp" },
    { key: "gutters", slug: "gutters", image: "/images/services/gutters.webp" },
    { key: "commercial", slug: "commercial-roofing", image: "/images/services/commercial-roofing.webp" },
    { key: "residential", slug: "residential-roofing", image: "/images/services/residential-roofing.webp" },
    { key: "metal", slug: "metal", image: "/images/services/metal.webp" },
    { key: "tile", slug: "tile-roofing", image: "/images/services/tile-roofing.webp" },
    { key: "flat", slug: "flat-roofing", image: "/images/services/flat-roofing.webp" },
    { key: "skylights", slug: "skylight-installation", image: "/images/services/skylight-installation.webp" },
    { key: "solar", slug: "solar-roofing", image: "/images/services/solar-roofing.webp" },
  ],
} as const;

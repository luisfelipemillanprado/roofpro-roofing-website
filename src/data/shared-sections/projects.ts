/* Projects section: ordered items (image), text by key */
export const projectsData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    viewAll: { key: "action.viewAll", href: "/projects" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* image viewer controls: labels by key */
  viewer: { close: "action.close", previous: "action.previous", next: "action.next" },
  /* first six on the home, next six on about, rest on /projects */
  items: [
    { key: "cedarHeights", image: "/images/projects/silver-seam.webp" },
    { key: "sunsetRidge", image: "/images/projects/slate-concrete.webp" },
    { key: "summitBungalow", image: "/images/projects/grey-asphalt.webp" },
    { key: "condoComplex", image: "/images/projects/metal-mansard.webp" },
    { key: "solarResidence", image: "/images/projects/solar-panels.webp" },
    { key: "coastalMetal", image: "/images/projects/flat-skylights.webp" },
    { key: "lakeviewContemporary", image: "/images/projects/steel-seam.webp" },
    { key: "northgateRanch", image: "/images/projects/terracotta-seam.webp" },
    { key: "stonebridge", image: "/images/projects/bright-seam.webp" },
    { key: "greystoneFarmhouse", image: "/images/projects/charcoal-seam.webp" },
    { key: "blackpineEstate", image: "/images/projects/black-seam.webp" },
    { key: "modernBlueMetal", image: "/images/projects/navy-seam.webp" },
    { key: "estateMetal", image: "/images/projects/graphite-seam.webp" },
    { key: "maroonMetal", image: "/images/projects/maroon-seam.webp" },
    { key: "harborMetal", image: "/images/projects/grey-seam.webp" },
    { key: "ranchMetal", image: "/images/projects/pewter-seam.webp" },
    { key: "mapleGrove", image: "/images/projects/clay-barrel.webp" },
    { key: "tilePlaza", image: "/images/projects/coral-barrel.webp" },
    { key: "gardenResidences", image: "/images/projects/aged-asphalt.webp" },
    { key: "skylightHome", image: "/images/projects/shingle-skylight.webp" },
    { key: "carportMetal", image: "/images/projects/roof-lantern.webp" },
  ],
} as const;

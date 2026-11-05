/* Results section: finished jobs filed by the material they show off, text by key.
   Shares the project photography; categories mirror the shop category keys. */
export const resultsData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* single CTA: the contact form, same wording as every other section */
  ctaHref: { key: "action.contact", href: "#contact" },
  /* image viewer controls: labels by key */
  viewer: { close: "action.close", previous: "action.previous", next: "action.next" },
  /* a job fits several materials; each category resolves to exactly six tiles */
  items: [
    {
      key: "silverSeam",
      image: "/images/projects/silver-seam.webp",
      categories: ["accessories", "tools"],
    },
    {
      key: "slateConcrete",
      image: "/images/projects/slate-concrete.webp",
      categories: ["shingles", "underlayment", "tools"],
    },
    {
      key: "greyAsphalt",
      image: "/images/projects/grey-asphalt.webp",
      categories: ["shingles", "underlayment", "tools"],
    },
    {
      key: "metalMansard",
      image: "/images/projects/metal-mansard.webp",
      categories: ["flashing", "tools", "supplies"],
    },
    {
      key: "solarPanels",
      image: "/images/projects/solar-panels.webp",
      categories: ["flashing", "accessories"],
    },
    {
      key: "flatSkylights",
      image: "/images/projects/flat-skylights.webp",
      categories: ["flashing", "accessories"],
    },
    { key: "steelSeam", image: "/images/projects/steel-seam.webp", categories: ["metal"] },
    { key: "terracottaSeam", image: "/images/projects/terracotta-seam.webp", categories: ["metal"] },
    { key: "brightSeam", image: "/images/projects/bright-seam.webp", categories: ["metal"] },
    { key: "charcoalSeam", image: "/images/projects/charcoal-seam.webp", categories: ["metal"] },
    {
      key: "blackSeam",
      image: "/images/projects/black-seam.webp",
      categories: ["underlayment", "supplies"],
    },
    { key: "navySeam", image: "/images/projects/navy-seam.webp", categories: ["metal"] },
    { key: "graphiteSeam", image: "/images/projects/graphite-seam.webp", categories: ["metal"] },
    {
      key: "maroonSeam",
      image: "/images/projects/maroon-seam.webp",
      categories: ["tools", "supplies"],
    },
    { key: "greySeam", image: "/images/projects/grey-seam.webp", categories: ["flashing"] },
    {
      key: "pewterSeam",
      image: "/images/projects/pewter-seam.webp",
      categories: ["tools", "supplies"],
    },
    {
      key: "clayBarrel",
      image: "/images/projects/clay-barrel.webp",
      categories: ["shingles", "underlayment"],
    },
    {
      key: "coralBarrel",
      image: "/images/projects/coral-barrel.webp",
      categories: ["shingles", "underlayment"],
    },
    {
      key: "agedAsphalt",
      image: "/images/projects/aged-asphalt.webp",
      categories: ["shingles", "underlayment", "accessories", "supplies"],
    },
    {
      key: "shingleSkylight",
      image: "/images/projects/shingle-skylight.webp",
      categories: ["shingles", "flashing", "accessories"],
    },
    {
      key: "roofLantern",
      image: "/images/projects/roof-lantern.webp",
      categories: ["flashing", "accessories", "supplies"],
    },
  ],
} as const;

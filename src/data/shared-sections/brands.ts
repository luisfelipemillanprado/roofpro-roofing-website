/* Brands strip: logos only, non-interactive; label is the alt. Placeholders until the client's own arrive */
export const brandsData = {
  /* loop track copies; keep even for the -50% restart */
  trackCopies: 2,
  /* the organism splits these in two: keep each half wider than the 1280px container or the loop shows its seam */
  items: [
    { key: "theCompanyStore", label: "The Company Store", image: "/images/brands/the-company-store.webp" },
    { key: "vissani", label: "Vissani", image: "/images/brands/vissani.webp" },
    {
      key: "homeDecoratorsCollection",
      label: "Home Decorators Collection",
      image: "/images/brands/home-decorators-collection.webp",
    },
    { key: "hamptonBay", label: "Hampton Bay", image: "/images/brands/hampton-bay.webp" },
    { key: "husky", label: "Husky", image: "/images/brands/husky.webp" },
    { key: "lifeproof", label: "Lifeproof Flooring", image: "/images/brands/lifeproof.webp" },
    {
      key: "lifeproofPetproof",
      label: "Lifeproof with Petproof Technology Carpet",
      image: "/images/brands/lifeproof-petproof.webp",
    },
    { key: "glacierBay", label: "Glacier Bay", image: "/images/brands/glacier-bay.webp" },
    { key: "everbilt", label: "Everbilt", image: "/images/brands/everbilt.webp" },
    { key: "stylewell", label: "StyleWell", image: "/images/brands/stylewell.webp" },
    { key: "hdx", label: "HDX", image: "/images/brands/hdx.webp" },
    { key: "vigoro", label: "Vigoro", image: "/images/brands/vigoro.webp" },
    { key: "trafficmaster", label: "TrafficMaster", image: "/images/brands/trafficmaster.webp" },
    { key: "defiant", label: "Defiant", image: "/images/brands/defiant.webp" },
    { key: "ecosmart", label: "Ecosmart", image: "/images/brands/ecosmart.webp" },
    {
      key: "homeAccentsHoliday",
      label: "Home Accents Holiday",
      image: "/images/brands/home-accents-holiday.webp",
    },
    {
      key: "commercialElectric",
      label: "Commercial Electric",
      image: "/images/brands/commercial-electric.webp",
    },
    { key: "hubspace", label: "Hubspace Smart Home", image: "/images/brands/hubspace.webp" },
  ],
} as const;

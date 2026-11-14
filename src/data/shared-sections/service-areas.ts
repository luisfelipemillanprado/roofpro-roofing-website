/* Service Areas section: branch office photos + the interactive Miami map */
export const serviceAreasData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.contact", href: "#contact" },
  /* image viewer controls: labels by key */
  viewer: { close: "action.close", previous: "action.previous", next: "action.next" },
  /* branch offices: card photo + map pin; name and address by key. Coordinates are placeholders */
  offices: [
    { key: "northMiami", image: "/images/offices/north-miami.webp", position: [25.8905, -80.1733] },
    {
      key: "downtownMiami",
      image: "/images/offices/downtown-miami.webp",
      position: [25.7754, -80.1922],
    },
    { key: "coralGables", image: "/images/offices/coral-gables.webp", position: [25.7603, -80.2594] },
    { key: "miamiBeach", image: "/images/offices/miami-beach.webp", position: [25.7916, -80.1414] },
    { key: "hialeah", image: "/images/offices/hialeah.webp", position: [25.8665, -80.3102] },
    { key: "westchester", image: "/images/offices/westchester.webp", position: [25.7347, -80.3398] },
  ],
  /* offices map: MapLibre style url (swap provider by changing it) + Miami-only geography */
  map: {
    styleUrl: "https://tiles.openfreemap.org/styles/liberty",
    /* map region + control labels: by key */
    labels: {
      region: "mapAlt",
      zoomIn: "map.zoomIn",
      zoomOut: "map.zoomOut",
      closePopup: "map.closePopup",
      toggleAttribution: "map.toggleAttribution",
    },
    /* opening frame, and the zoom floor: the area of the previous static map (North Miami to Coral Gables, the bay, Miami Beach) */
    view: { west: -80.345, south: 25.715, east: -80.105, north: 25.9 },
    /* drag limit once zoomed in: room to pan inside Miami-Dade, north kept short of Broward */
    limit: { west: -80.6, south: 25.6, east: -79.88, north: 25.945 },
  },
} as const;

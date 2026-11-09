/* Showreel section: one reel per card, poster + the clip its play disc opens; text by key */
export const showreelData = {
  /* the centered mosaic makes the last card the large one */
  items: [
    { key: "blue", image: "/videos/showcase/blue-seam.webp", video: "/videos/showcase/blue-seam.webm" },
    {
      key: "silver",
      image: "/videos/showcase/silver-seam.webp",
      video: "/videos/showcase/silver-seam.webm",
    },
    {
      key: "graphite",
      image: "/videos/showcase/graphite-seam.webp",
      video: "/videos/showcase/graphite-seam.webm",
    },
  ],
  playKey: "action.play",
  /* reel viewer controls: labels by key */
  viewer: { close: "action.close", previous: "action.previous", next: "action.next" },
} as const;

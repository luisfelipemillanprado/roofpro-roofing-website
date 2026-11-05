/* Showreel section: a poster band that opens the aerial reel in a dialog; text by key */
export const showreelData = {
  /* vertical 9:16 reel + the still the band shows in its place */
  video: { src: "/videos/showcase/video.webm", poster: "/videos/showcase/poster.webp" },
  posterAltKey: "posterAlt",
  videoAltKey: "videoAlt",
  /* controls: i18n keys for the play trigger and the dialog's close */
  playKey: "action.play",
  closeKey: "action.close",
} as const;

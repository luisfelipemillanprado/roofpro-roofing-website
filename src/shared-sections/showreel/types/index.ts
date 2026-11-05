export interface ShowreelPlayerProps {
  /* every label is resolved on the server; the client half only holds the open state */
  poster: string;
  posterAlt: string;
  video: string;
  videoAlt: string;
  playLabel: string;
  closeLabel: string;
}

export interface ShowreelProps {
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
}

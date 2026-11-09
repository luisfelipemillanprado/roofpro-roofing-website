/* one resolved reel: the card face plus the clip its disc opens, every label server side */
interface ShowreelItem {
  key: string;
  image: string;
  video: string;
  title: string;
  description: string;
  videoAlt: string;
  playLabel: string;
}

export interface ShowreelPlayerProps {
  items: ShowreelItem[];
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}

export interface ShowreelProps {
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
}

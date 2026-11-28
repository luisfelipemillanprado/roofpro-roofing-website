import type { BackdropPattern } from "@/common/backdrop/types";

type TestimonialGroup = "company" | "services" | "projects" | "about";

export interface TestimonialsProps {
  variant: "viewAll" | "contact";
  tone?: "base" | "muted"; /* section surface; keeps page section alternation correct */
  group: TestimonialGroup; /* which testimonial set this page renders */
  backdrop?: BackdropPattern; /* section art; a page sets it to keep its backdrop order */
}

export interface TestimonialCardProps {
  avatar: string;
  quote: string;
  name: string;
  location: string;
  logo: string;
}

/* resolved per-card item for the list */
interface TestimonialCardItem extends Pick<TestimonialCardProps, "avatar" | "quote" | "name" | "location"> {
  key: string;
}

export interface TestimonialListProps {
  cards: TestimonialCardItem[];
  logo: string;
}

export interface RatingBadgeProps {
  score: string;
  count: string;
  reviews: string;
  logo: string;
}

export interface GoogleMarkProps {
  src: string;
}

import type { TextNumberProps, TextNumberSize } from "@/common/text/types";

/* number size per tier */
const sizes: Record<TextNumberSize, string> = {
  base: "text-body leading-relaxed" /* inline numbers: testimonials rating */,
  price: "text-price leading-tight" /* product card price */,
  stat: "text-xl" /* 20px — pitch stats (all variants) + service-detail process stats */,
  headline: "text-headline sm:text-3xl" /* 30px from sm — About stats */,
  display: "text-figure" /* shop price, About years */,
};

export const TextNumber = ({ as: Tag = "span", size = "stat", text }: TextNumberProps) => (
  <Tag className={`font-extrabold ${sizes[size]} text-foreground`}>{text}</Tag>
);

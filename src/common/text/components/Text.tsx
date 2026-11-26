import type { TextProps, TextSize, TextTone, TextTracking, TextWeight } from "@/common/text/types";

const sizes: Record<TextSize, string> = {
  subhead:
    "text-subhead leading-relaxed" /* FAQ questions, shop tab labels, shop sort label, product spec values and assurance titles */,
  lead: "text-lead leading-relaxed" /* section/page descriptions, footer tagline, shop tabs, legal page prose */,
  body: "text-body leading-relaxed" /* card body, buttons, navbar, footer, hero rating, contact phone, shop tab prose, product price unit, stock, rating and about pills */,
  caption:
    "text-caption leading-relaxed" /* marquee, stat captions, contact/years labels, shop card meta (brand, stock, rating, unit), icon highlights, shop category chips, assurance descriptions */,
  note: "text-note leading-relaxed" /* hero availability badge, navbar locale code */,
  label: "text-label leading-relaxed" /* eyebrows, hero material labels */,
};

const tones: Record<TextTone, string> = {
  default:
    "text-foreground" /* navy/white per theme — phone, mobile menu, shop sort label and chosen option */,
  muted: "text-foreground-muted" /* slate/stone — descriptions (most common), unchosen sort options */,
  white: "text-white" /* badges over dark imagery (hero, marquee) */,
  primary: "text-primary" /* accent labels — icon card highlights */,
  accent: "text-heading-accent" /* section eyebrows — darker gold in light */,
};

const weights: Record<TextWeight, string> = {
  medium: "font-medium" /* navbar links */,
  semibold: "font-semibold" /* buttons, badges, emphasized copy */,
  bold: "font-bold" /* titles, eyebrows and short emphasis labels */,
};

const trackings: Record<TextTracking, string> = {
  wide: "tracking-wide" /* eyebrows and badges */,
  subtle:
    "tracking-subtle" /* short labels, e.g. the locale code, availability badge, contact card, years badge */,
};

export const Text = ({
  as: Tag = "p",
  size = "body",
  tone = "default",
  weight,
  tracking,
  truncate = false,
  text,
}: TextProps) => (
  <Tag
    className={`${sizes[size]} ${tones[tone]}${weight ? ` ${weights[weight]}` : ""}${tracking ? ` ${trackings[tracking]}` : ""} ${truncate ? "truncate" : ""}`}
  >
    {text}
  </Tag>
);

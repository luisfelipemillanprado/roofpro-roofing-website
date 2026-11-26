import clsx from "clsx";
import type { TitleProps, TitleSize, TitleTone, TitleWeight, TitleAccentTone } from "@/common/title/types";

const sizes: Record<TitleSize, string> = {
  display: "text-display sm:text-display-sm leading-none" /* hero h1 */,
  banner: "text-banner lg:text-5xl leading-heading" /* 48px from lg — CTA banner h2 */,
  section: "text-section sm:text-section-sm leading-heading" /* section headings */,
  feature: "text-feature leading-heading" /* service detail included panel, legal page section headings */,
  card: "text-card leading-heading" /* service, product, project and icon card titles */,
  panel: "text-subhead leading-heading" /* block headings inside the shop tabs */,
  micro: "text-body leading-heading" /* footer columns */,
};

const tones: Record<TitleTone, string> = {
  default: "text-foreground" /* theme-aware: white in dark, neutral black in light */,
  white: "text-white" /* forced white off theme-dark — titles over images */,
};

const weights: Record<TitleWeight, string> = {
  bold: "font-bold" /* cards and micro titles */,
  extrabold: "font-extrabold" /* hero, page, section headings */,
};

const accentTones: Record<TitleAccentTone, string> = {
  primary: "text-heading-accent" /* the common case: gold in dark, ochre in light */,
  faint: "text-white/35" /* hero accent */,
};

export const Title = ({
  as: Tag = "h2",
  size = "section",
  tone = "default",
  weight = "extrabold",
  tracking = false,
  truncate = false,
  text,
  accent,
  accentTone = "primary",
  accentInline = false,
}: TitleProps) => (
  <Tag
    className={clsx(
      sizes[size],
      tones[tone],
      weights[weight],
      tracking && "tracking-wide",
      truncate && "truncate",
    )}
  >
    <span>{text}</span>
    {accent && (
      <>
        {/* space between lead and accent when they share a line */}{" "}
        <span
          className={clsx(
            "block",
            accentInline && "sm:inline",
            accentInline === "until-lg" && "md:block lg:inline",
            accentTones[accentTone],
          )}
        >
          {accent}
        </span>
      </>
    )}
  </Tag>
);

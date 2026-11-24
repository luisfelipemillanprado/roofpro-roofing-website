import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { metadataFacts, shareImage } from "@/i18n/metadata";
import { pageHeaderData } from "@/data/shared-sections/page-header";
import { company } from "@/data/site";

/* share card for every route of a locale: the home hero, as a png */
export const alt = shareImage.alt;
export const size = shareImage.size;
export const contentType = "image/png";

/* satori takes inline styles only, no css variables: these mirror the --color-contrast scrim and white text */
const SCRIM = "linear-gradient(to right, rgba(29,34,38,0.92), rgba(29,34,38,0.7) 55%, rgba(29,34,38,0.25))";
const FAINT = "rgba(255,255,255,0.35)";
const MUTED = "rgba(255,255,255,0.82)";
const LOGO_SIZE = 64;

/* satori cannot draw webp, so sharp hands it jpeg (photo) or png (logo, keeps its alpha) as a data url */
const asset = async (path: string, width: number, height: number, format: "jpeg" | "png") => {
  const image = sharp(join(process.cwd(), "public", path)).resize(width, height, { fit: "cover" });
  const buffer = await (format === "jpeg" ? image.jpeg({ quality: 82 }) : image.png()).toBuffer();
  return `data:image/${format};base64,${buffer.toString("base64")}`;
};

/* the site's own faces as ttf (satori reads no woff2): jakarta for display, inter for body */
const font = (file: string) => readFile(join(process.cwd(), "src/app/styles/og-fonts", file));

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tHero = await getTranslations({ locale: locale as Locale, namespace: "page-header.pages.home" });
  const tMeta = await getTranslations({ locale: locale as Locale, namespace: "metadata" });
  const [hero, logo, jakartaExtraBold, interRegular] = await Promise.all([
    asset(pageHeaderData.images.default.src, size.width, size.height, "jpeg"),
    asset(company.logo, LOGO_SIZE * 2, LOGO_SIZE * 2, "png"),
    font("PlusJakartaSans-ExtraBold.ttf"),
    font("Inter-Regular.ttf"),
  ]);

  return new ImageResponse(
    <div style={{ display: "flex", position: "relative", width: "100%", height: "100%" }}>
      <img src={hero} alt="" width={size.width} height={size.height} style={{ position: "absolute" }} />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundImage: SCRIM,
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "64px 72px",
          color: "white",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <img src={logo} alt="" width={LOGO_SIZE} height={LOGO_SIZE} />
          <span style={{ fontFamily: "Plus Jakarta Sans", fontSize: 44, fontWeight: 800 }}>
            {company.name}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 820 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Plus Jakarta Sans",
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            <span>{tHero("titleLead")}</span>
            <span style={{ color: FAINT }}>{tHero("titleAccent")}</span>
          </div>
          <span style={{ fontSize: 30, lineHeight: 1.4, color: MUTED }}>
            {tMeta("ogDescription", metadataFacts)}
          </span>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Plus Jakarta Sans", data: jakartaExtraBold, weight: 800, style: "normal" },
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
      ],
    },
  );
}

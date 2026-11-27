import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { company } from "@/data/site";

/* figures the metadata copy names, fed as ICU args */
export const metadataFacts = {
  years: company.yearsExperience,
  projects: company.projectsCompleted.toLocaleString("en-US"),
};

/* a route's absolute url in one locale: sitemap entries and structured data */
export const absoluteUrl = (href: string, locale: Locale) =>
  `${company.siteUrl}${getPathname({ href, locale })}`;

/* the [locale]/opengraph-image card: its size and alt, shared with the route that draws it */
export const shareImage = { size: { width: 1200, height: 630 }, alt: company.name };

/* a route's own title and description; the home omits it and keeps the brand card */
interface RouteCopy {
  title: string;
  description: string;
}

/* per-route canonical, hreflang, og:url and share card via next-intl getPathname */
export const routeMetadata = async (locale: Locale, href: string, copy?: RouteCopy): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: "metadata" });
  const url = getPathname({ href, locale });
  /* openGraph and twitter merge shallowly, so every route sets them whole */
  const title = copy ? t("titleTemplate").replace("%s", copy.title) : t("ogTitle");
  const description = copy ? copy.description : t("ogDescription", metadataFacts);
  /* the locale's card, repeated per route: a page's own openGraph would otherwise drop it */
  const images = [
    {
      /* the path next generates for [locale]/opengraph-image; the proxy lets it through */
      url: `/${locale}/opengraph-image`,
      ...shareImage.size,
      alt: shareImage.alt,
      type: "image/png",
    },
  ];

  return {
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, getPathname({ href, locale: l })])),
        /* the default-locale url, as the proxy's Link header already names it */
        "x-default": getPathname({ href, locale: routing.defaultLocale }),
      },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: company.name,
      /* og wants language_TERRITORY: each locale of the US business */
      locale: `${locale}_${company.address.country}`,
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => `${l}_${company.address.country}`),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
};

import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { absoluteUrl, metadataFacts } from "@/i18n/metadata";
import { company } from "@/data/site";
import { layoutData } from "@/data/global/layout";
import { pageHeaderData } from "@/data/shared-sections/page-header";
import type { shopProductsData } from "@/data/features/shop/products";
import { priceCurrency } from "@/utils/helpers/price";

type ShopProduct = (typeof shopProductsData.items)[number];

/* the business node's id: the site and every product offer point back to it */
const businessId = `${company.siteUrl}/#business`;

/* the open days, from the hours the footer prints; a closed (null) day is left out */
const openingHours = [
  { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], hours: company.weekdayHours },
  { days: ["Saturday"], hours: company.saturdayHours },
  { days: ["Sunday"], hours: company.sundayHours },
].flatMap(({ days, hours }) =>
  hours
    ? [{ "@type": "OpeningHoursSpecification", dayOfWeek: days, opens: hours.open, closes: hours.close }]
    : [],
);

/* schema.org stock states for the data's availability */
const availability: Record<ShopProduct["availability"], string> = {
  "in-stock": "https://schema.org/InStock",
  "limited-stock": "https://schema.org/LimitedAvailability",
  "out-of-stock": "https://schema.org/OutOfStock",
};

/* the roofing business, on every page; no sameAs while the social profiles are reserved names */
export const businessJsonLd = async (locale: Locale) => {
  const t = await getTranslations({ locale, namespace: "metadata" });
  const { street, city, region, postalCode, country } = company.address;

  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": businessId,
    name: company.name,
    url: absoluteUrl("/", locale),
    logo: `${company.siteUrl}${company.logo}`,
    image: `${company.siteUrl}${pageHeaderData.images.default.src}`,
    description: t("description", metadataFacts),
    telephone: company.phoneHref.replace("tel:", ""),
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      addressLocality: city,
      addressRegion: region,
      postalCode,
      addressCountry: country,
    },
    areaServed: Object.values(company.offices).map((office) => office.name),
    openingHoursSpecification: openingHours,
  };
};

/* the site itself, on the home: its name for search results */
export const websiteJsonLd = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.name,
  url: absoluteUrl("/", locale),
  inLanguage: locale,
  publisher: { "@id": businessId },
});

/* home, then the section a detail page sits in (named like its navbar link), then the page */
export const breadcrumbJsonLd = async (
  locale: Locale,
  sectionHref: string,
  page: { name: string; href: string },
) => {
  const t = await getTranslations({ locale, namespace: "navbar" });
  const trail = layoutData.navbar.links
    .filter((link) => link.href === "/" || link.href === sectionHref)
    .map((link) => ({ name: t(`links.${link.key}`), href: link.href }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [...trail, page].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.href, locale),
    })),
  };
};

/* a shop item, its offer and the rating its page shows */
export const productJsonLd = (
  locale: Locale,
  product: ShopProduct,
  copy: { name: string; description: string },
) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: copy.name,
  description: copy.description,
  image: [product.image, ...product.gallery].map((src) => `${company.siteUrl}${src}`),
  sku: product.sku,
  brand: { "@type": "Brand", name: product.brand },
  aggregateRating: { "@type": "AggregateRating", ratingValue: product.rating, reviewCount: product.reviews },
  offers: {
    "@type": "Offer",
    url: absoluteUrl(`/shop/${product.slug}`, locale),
    price: product.price,
    priceCurrency,
    availability: availability[product.availability],
    seller: { "@id": businessId },
  },
});

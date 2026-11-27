import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { absoluteUrl } from "@/i18n/metadata";
import { layoutData } from "@/data/global/layout";
import { servicesData } from "@/data/shared-sections/services";
import { shopProductsData } from "@/data/features/shop/products";

/* every route the site links to, read from the same data the navbar, footer and sections use */
const hrefs = [
  ...layoutData.navbar.links.map((link) => link.href),
  ...layoutData.footer.legal.map((link) => link.href),
  ...servicesData.items.map((service) => `/services/${service.slug}`),
  ...shopProductsData.items.map((product) => `/shop/${product.slug}`),
];

/* localized sitemap: one entry per route, each listing its url in every locale */
export default function sitemap(): MetadataRoute.Sitemap {
  return hrefs.map((href) => ({
    url: absoluteUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(routing.locales.map((locale) => [locale, absoluteUrl(href, locale)])),
    },
  }));
}

import type { MetadataRoute } from "next";
import { company } from "@/data/site";

/* crawl everything but the api, and point crawlers at the sitemap */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${company.siteUrl}/sitemap.xml`,
  };
}

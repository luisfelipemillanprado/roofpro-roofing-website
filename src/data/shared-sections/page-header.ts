import { company } from "@/data/site";

/* Shared hero band data: image variants, social proof, and the i18n key contract */
export const pageHeaderData = {
  /* hero backgrounds by variant: image path + its alt key */
  images: {
    default: { src: "/images/hero/default.webp", altKey: "imageAlt" },
    shop: { src: "/images/hero/shop.webp", altKey: "imageAltShop" },
  },
  /* availability badge: label by key + the city it names (from site) */
  badgeKey: "badge",
  badgeCity: company.city,
  /* hero copy: explicit i18n keys, read from page-header.pages.<page> per page */
  titleLeadKey: "titleLead",
  titleAccentKey: "titleAccent",
  descriptionKey: "description",
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.upgrade", href: "#contact" },
  /* rotating ghost CTA per page: i18n key (text) + href (destination) */
  secondaryCtaHref: {
    services: { key: "action.viewServices", href: "/services" },
    projects: { key: "action.viewProjects", href: "/projects" },
    shop: { key: "action.viewShop", href: "/shop" },
    work: { key: "action.viewWork", href: "#projects" },
  },
  /* hero-side material teaser: three cards (central one links out) + a shop banner */
  showcase: {
    /* per variant: product shots everywhere, service work on the shop heroes */
    materials: {
      default: [
        {
          key: "showcase.shingles",
          image:
            "/images/products/roof-shingles/timberline-hdz-pewter-gray/timberline-hdz-pewter-gray-1.webp",
        },
        {
          key: "showcase.metal",
          image: "/images/products/metal-roofing/brakki-19pc/brakki-19pc-1.webp",
          linked: true,
        },
        {
          key: "showcase.underlayment",
          image: "/images/products/underlayment/dupont-tyvek-120/dupont-tyvek-120-1.webp",
        },
      ],
      shop: [
        { key: "showcase.repairService", image: "/images/services/roof-repair.webp" },
        { key: "showcase.stormService", image: "/images/services/storm-damage-repair.webp", linked: true },
        { key: "showcase.replacementService", image: "/images/services/roof-replacement.webp" },
      ],
    },
    /* per variant: the catalog pitch everywhere, an advice pitch on the shop heroes */
    bannerKey: { default: "showcase.banner", shop: "showcase.bannerShop" },
    /* route-aware CTA: the shop hero funnels to contact, every other hero to the shop */
    shopCta: { key: "action.shopNow", href: "/shop" },
    contactCta: { key: "action.getQuote", href: "#contact" },
  },
  /* social proof: avatars + rating label by key + the count it names (from site) */
  avatars: [
    "/images/avatars/paula.webp",
    "/images/avatars/dennis.webp",
    "/images/avatars/carmen.webp",
    "/images/avatars/howard.webp",
  ],
  customersKey: "customers",
  customersCount: company.customersServed,
} as const;

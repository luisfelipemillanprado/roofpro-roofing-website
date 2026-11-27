/* Locale-independent company facts, ordered by render top to bottom */
export const company = {
  /* metadata: canonical base url for every canonical, hreflang and og:url */
  siteUrl: "https://roofpro-roofing-website.vercel.app",
  /* navbar: brand badge, name, contact phone */
  logo: "/images/logo/logo.webp",
  name: "Roofpro",
  phone: "(305) 628-9696",
  /* hero: availability badge city + social-proof rating count */
  city: "MIAMI, FL" /* hand-cased uppercase for the badge */,
  customersServed: 1500,
  /* marquee: years-in-business figure */
  yearsExperience: 25,
  /* about: stat figures */
  projectsCompleted: 1500,
  homesProtected: 1000,
  satisfaction: 98,
  /* why-choose: certified roofers stat figure */
  certifiedRoofers: 40,
  /* pitch stats + testimonials badge: Google rating score and review count */
  googleScore: 4.9,
  googleReviews: 820,
  /* areas: branch name and street address, by the key the section's photo and pin share */
  offices: {
    northMiami: { name: "North Miami", address: "1250 NE 125th St, North Miami, FL" },
    downtownMiami: { name: "Downtown Miami", address: "100 NE 1st Ave, Miami, FL 33132" },
    coralGables: { name: "Coral Gables", address: "1200 Ponce de Leon Blvd, FL 33134" },
    miamiBeach: { name: "Miami Beach", address: "1688 Alton Rd, Miami Beach, FL" },
    hialeah: { name: "Hialeah", address: "1350 W 49th St, Hialeah, FL 33012" },
    westchester: { name: "Westchester", address: "8900 SW 38th St, Miami, FL 33165" },
  },
  /* legal: the jurisdiction the terms name and the courts that hear a dispute */
  state: "Florida",
  county: "Miami-Dade",
  /* footer brand: the roofpro profiles, reserved names until the accounts exist */
  facebookHref: "https://www.facebook.com/roofpro",
  xHref: "https://x.com/roofpro",
  instagramHref: "https://www.instagram.com/roofpro/",
  youtubeHref: "https://www.youtube.com/@roofpro",
  /* footer contact: address (in parts, as structured data reads it) + linked phone + linked email */
  address: { street: "300 NW 127 Ave", city: "Miami", region: "FL", postalCode: "33182", country: "US" },
  phoneHref: "tel:+13056289696",
  email: "info@roofpro.com",
  emailHref: "mailto:info@roofpro.com",
  /* footer hours: 24h opening and closing times, formatted per locale; null means closed */
  weekdayHours: { open: "07:00", close: "16:00" },
  saturdayHours: null,
  sundayHours: null,
  /* footer credits: the site the builder credit links to */
  builderHref: "https://remiux.com",
  /* floating contact: whatsapp deep link */
  whatsappHref: "https://wa.me/13052069717",
};

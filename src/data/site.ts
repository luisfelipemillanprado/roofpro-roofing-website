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
  /* footer brand: the builder's own profiles stand in until the client's accounts exist */
  facebookHref: "https://www.facebook.com/remiuxsoft",
  xHref: "https://x.com/remiuxsoft",
  instagramHref: "https://www.instagram.com/remiuxsoft",
  youtubeHref: "https://www.youtube.com/@remiuxsoft",
  /* footer contact: address + linked phone + linked email */
  address: "300 NW 127 Ave, Miami, FL 33182",
  phoneHref: "tel:+13056289696",
  email: "info@designbuilderroofs.com",
  emailHref: "mailto:info@designbuilderroofs.com",
  /* footer hours: opening times (a null value means closed) */
  weekdayHours: "7:00 AM – 4:00 PM",
  saturdayHours: null,
  sundayHours: null,
  /* footer credits: the site the builder credit links to */
  builderHref: "https://remiux.com",
  /* floating contact: whatsapp deep link */
  whatsappHref: "https://wa.me/13056289696" /* the builder's number, standing in */,
};

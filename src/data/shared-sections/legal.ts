/* Legal pages: per-variant sections, text by full key */
export const legalData = {
  /* accessibility conformance target, named in the copy of accessibility.standard */
  standard: { version: "2.2", level: "AA" },
  privacy: {
    items: [
      { key: "privacy.items.scope" },
      { key: "privacy.items.collect" },
      { key: "privacy.items.use" },
      { key: "privacy.items.sharing" },
      { key: "privacy.items.storage" },
      { key: "privacy.items.security" },
      { key: "privacy.items.retention" },
      { key: "privacy.items.rights" },
      { key: "privacy.items.thirdParty" },
      { key: "privacy.items.children" },
      { key: "privacy.items.changes" },
      { key: "privacy.items.contact" },
    ],
  },
  terms: {
    items: [
      { key: "terms.items.scope" },
      { key: "terms.items.acceptance" },
      { key: "terms.items.estimates" },
      { key: "terms.items.catalog" },
      { key: "terms.items.work" },
      { key: "terms.items.use" },
      { key: "terms.items.content" },
      { key: "terms.items.links" },
      { key: "terms.items.availability" },
      { key: "terms.items.warranty" },
      { key: "terms.items.liability" },
      { key: "terms.items.law" },
      { key: "terms.items.changes" },
      { key: "terms.items.contact" },
    ],
  },
  accessibility: {
    items: [
      { key: "accessibility.items.commitment" },
      { key: "accessibility.items.standard" },
      { key: "accessibility.items.navigation" },
      { key: "accessibility.items.presentation" },
      { key: "accessibility.items.testing" },
      { key: "accessibility.items.limits" },
      { key: "accessibility.items.alternatives" },
      { key: "accessibility.items.feedback" },
    ],
  },
} as const;

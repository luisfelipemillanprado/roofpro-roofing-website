import type { SupplierData } from "@/shared-sections/suppliers/types";

/* Suppliers strip: ordered brand logos, image only and non-interactive; label is the alt */
export const suppliersData = {
  /* loop track copies; keep even for the -50% restart */
  trackCopies: 2,
  items: [
    { key: "tejasBorja", label: "Tejas Borja", image: "/images/suppliers/tejas-borja.webp" },
    { key: "crown", label: "Crown Roof Tiles", image: "/images/suppliers/crown.webp" },
    { key: "johnsManville", label: "Johns Manville", image: "/images/suppliers/johns-manville.webp" },
    { key: "owensCorning", label: "Owens Corning", image: "/images/suppliers/owens-corning.webp" },
    { key: "certainTeed", label: "CertainTeed", image: "/images/suppliers/certainteed.webp" },
    { key: "tremco", label: "Tremco", image: "/images/suppliers/tremco.webp" },
    { key: "terraCottaGres", label: "Terra Cotta Gres", image: "/images/suppliers/terra-cotta-gres.webp" },
    { key: "gaf", label: "GAF", image: "/images/suppliers/gaf.webp" },
    { key: "boral", label: "Boral", image: "/images/suppliers/boral.webp" },
    { key: "verea", label: "Verea", image: "/images/suppliers/verea.webp" },
    { key: "gaco", label: "Gaco Elastomeric", image: "/images/suppliers/gaco.webp" },
    { key: "eagle", label: "Eagle Roofing Products", image: "/images/suppliers/eagle.webp" },
    { key: "atlas", label: "Atlas Roofing", image: "/images/suppliers/atlas.webp" },
    { key: "malarkey", label: "Malarkey Roofing Products", image: "/images/suppliers/malarkey.webp" },
    { key: "firestone", label: "Firestone Building Products", image: "/images/suppliers/firestone.webp" },
    { key: "carlisle", label: "Carlisle SynTec Systems", image: "/images/suppliers/carlisle.webp" },
    { key: "polyglass", label: "Polyglass", image: "/images/suppliers/polyglass.webp" },
    { key: "englert", label: "Englert", image: "/images/suppliers/englert.webp" },
    { key: "sika", label: "Sika", image: "/images/suppliers/sika.webp" },
    { key: "tamko", label: "TAMKO Building Products", image: "/images/suppliers/tamko.webp" },
    { key: "iko", label: "IKO", image: "/images/suppliers/iko.webp" },
    { key: "nowMetals", label: "Now Metals", image: "/images/suppliers/now-metals.webp" },
  ] satisfies SupplierData[],
} as const;

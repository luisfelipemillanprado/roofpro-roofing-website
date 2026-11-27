/* the shop's one currency: the printed prices and the structured data offers */
export const priceCurrency = "USD";

/* the shop's one price format: US dollars in both locales, since es-US renders identically */
export const formatPrice = (price: number) =>
  price.toLocaleString("en-US", { style: "currency", currency: priceCurrency });

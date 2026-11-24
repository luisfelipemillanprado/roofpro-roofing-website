import { NotFound } from "@/shared-sections/not-found/components/NotFound";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { Products } from "@/shared-sections/products/components/Products";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";

/* localized 404: inside the shell, with the closing sections every page carries */
export default function LocaleNotFound() {
  return (
    <>
      <NotFound />
      <Marquee />
      <Products tone="muted" limit={6} />
      {/* the navbar quote cta targets #contact */}
      <Contact tone="base" />
    </>
  );
}

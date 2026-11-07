import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { routeMetadata } from "@/i18n/metadata";
import { PageHeader } from "@/shared-sections/page-header/components/organisms/PageHeader";
import { pageHeaderData } from "@/data/shared-sections/page-header";
import { Marquee } from "@/shared-sections/marquee/components/organisms/Marquee";
import { Legal } from "@/shared-sections/legal/components/organisms/Legal";
import { Products } from "@/shared-sections/products/components/Products";
import { Contact } from "@/shared-sections/contact/components/organisms/Contact";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "metadata.pages.terms",
  });
  return {
    title: t("title"),
    description: t("description"),
    ...(await routeMetadata(locale as Locale, "/terms")),
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("page-header.pages.terms");

  return (
    <>
      <PageHeader
        titleLead={t(pageHeaderData.titleLeadKey)}
        titleAccent={t(pageHeaderData.titleAccentKey)}
        description={t(pageHeaderData.descriptionKey)}
        secondaryCta="shop"
      />
      <Marquee />
      <Legal variant="terms" />
      <Products limit={6} />
      <Contact />
    </>
  );
}

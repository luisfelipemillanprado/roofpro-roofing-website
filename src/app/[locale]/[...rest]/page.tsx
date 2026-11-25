import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

/* the 404 head, since a not-found file takes no metadata; noindex replaces the layout's index */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "not-found" });
  return { title: t("title"), robots: { index: false, follow: true } };
}

/* unknown paths inside a locale: hand them to the localized not-found */
export default function CatchAllPage() {
  notFound();
}

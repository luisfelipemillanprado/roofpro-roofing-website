import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { inter, jakarta } from "@/app/styles/fonts";
import { NotFound } from "@/shared-sections/not-found/components/NotFound";
import "./globals.css";

/* no locale in the url: the default one */
const locale = routing.defaultLocale;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "not-found" });
  return { title: t("title") };
}

/* unmatched urls: no layout above, so it brings its own html, styles and fonts */
export default function GlobalNotFound() {
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${jakarta.variable}`}>
      <body className="antialiased">
        <NextIntlClientProvider locale={locale}>
          <main>
            <NotFound />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

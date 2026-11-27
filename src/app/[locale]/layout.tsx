import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { metadataFacts, routeMetadata } from "@/i18n/metadata";
import { businessJsonLd } from "@/i18n/structured-data";
import { JsonLd } from "@/common/json-ld/components/JsonLd";
import { Providers } from "@/app/Providers";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { FloatingContact } from "@/layout/floating-contact/components/organisms/FloatingContact";
import { company } from "@/data/site";
import { inter, jakarta } from "@/app/styles/fonts";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

/* Server-rendered <meta>: dark browser chrome + color-scheme hint */
export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#1a2126",
};

/* fixed locale set: unknown ones fall to the global 404 */
export const dynamicParams = false;

/* SSG: prerender each locale */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* Static metadata */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "metadata",
  });

  return {
    metadataBase: new URL(company.siteUrl),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description", metadataFacts),
    authors: [{ name: company.name }],
    /* home canonical, alternates and brand share card; pages override with their own route */
    ...(await routeMetadata(locale as Locale, "/")),
  };
}

/* root layout: <html lang> from the route, right in the static HTML */
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  /* Reject unknown locales */
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  /* Cache locale for static rendering */
  setRequestLocale(locale);
  /* the client only reads the navbar copy (theme and language toggles); the rest stays on the server */
  const { navbar } = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jakarta.variable}`}
    >
      <body className="antialiased">
        <JsonLd data={await businessJsonLd(locale)} />
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
            enableSystem: false,
            disableTransitionOnChange: true,
          }}
        >
          <NextIntlClientProvider messages={{ navbar }}>
            {/* Site-wide chrome: shared across every locale route */}
            <Navbar />
            <main>{children}</main>
            <Footer />
            {/* Site-wide quick-contact */}
            <FloatingContact />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

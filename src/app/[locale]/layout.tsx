import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { routeMetadata } from "@/i18n/metadata";
import { Providers } from "@/app/Providers";
import { Navbar } from "@/layout/navbar/components/organisms/Navbar";
import { Footer } from "@/layout/footer/components/organisms/Footer";
import { FloatingContact } from "@/layout/floating-contact/components/organisms/FloatingContact";
import { inter, jakarta } from "@/app/styles/fonts";
import "../globals.css";

const siteUrl = "https://roofpro.example.com";

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
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: [
      "roofing",
      "roof repair",
      "roof installation",
      "commercial roofing",
      "residential roofing",
      "energy efficient roofing",
    ],
    authors: [{ name: "Roofpro" }],
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    robots: { index: true, follow: true },
    /* home canonical/alternates/og:url; pages override with their own route */
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

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jakarta.variable}`}
    >
      <body className="antialiased">
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
            enableSystem: false,
            disableTransitionOnChange: true,
          }}
        >
          <NextIntlClientProvider>
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

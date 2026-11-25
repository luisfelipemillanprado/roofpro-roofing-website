import { getFormatter, getTranslations } from "next-intl/server";
import { Title } from "@/common/title/components/Title";
import { Container } from "@/common/container/components/Container";
import { FooterBrand } from "@/layout/footer/components/molecules/FooterBrand";
import { FooterLinks } from "@/layout/footer/components/molecules/FooterLinks";
import { FooterContact } from "@/layout/footer/components/molecules/FooterContact";
import { FooterHours } from "@/layout/footer/components/molecules/FooterHours";
import { FooterCredits } from "@/layout/footer/components/molecules/FooterCredits";
import { CurrentYear } from "@/layout/footer/components/atoms/CurrentYear";
import { layoutData } from "@/data/global/layout";
import { company } from "@/data/site";
import { servicesData } from "@/data/shared-sections/services";

const { certifications } = layoutData;
const { topLinks, services, contact, hours, legal, builder } = layoutData.footer;
const { name, address, phone, phoneHref, email, emailHref } = company;

/* a 24h "HH:MM" as a utc instant, so only the clock time reaches the formatter */
const atTime = (time: string) => new Date(`1970-01-01T${time}:00Z`);

export const Footer = async () => {
  const t = await getTranslations("footer");
  const tService = await getTranslations("service");
  const format = await getFormatter();

  /* top links: route from data, label by key */
  const topLinkItems = topLinks.items.map((link) => ({
    key: link.key,
    href: link.href,
    label: t(`topLinks.${link.key}`),
  }));
  /* services column: route from the service's own slug, label reused from the service namespace */
  const serviceItems = services.items.flatMap((item) => {
    const service = servicesData.items.find((entry) => entry.key === item.key);
    return service
      ? [{ key: item.key, href: `/services/${service.slug}`, label: tService(`items.${item.key}.title`) }]
      : [];
  });
  /* hours: day label by key; the range in the locale's own clock (12h en, 24h es); null means closed */
  const hourItems = hours.map((row) => ({
    key: row.key,
    day: t(`hours.${row.key}`),
    time: row.time
      ? format.dateTimeRange(atTime(row.time.open), atTime(row.time.close), {
          hour: "numeric",
          minute: "2-digit",
          timeZone: "UTC",
        })
      : t(contact.closedKey),
  }));
  /* legal bar: route from data, label by key */
  const legalItems = legal.map((link) => ({ key: link.key, href: link.href, label: t(link.key) }));

  return (
    <footer className="theme-dark bg-surface-muted text-foreground">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12 lg:py-20">
          {/* brand full-width on mobile; shares the first row with links from sm */}
          <div className="col-span-2 sm:col-span-1">
            <FooterBrand description={t("description", { name })} certifications={certifications} />
          </div>

          <FooterLinks title={t(topLinks.titleKey)} links={topLinkItems} />
          <FooterLinks title={t(services.titleKey)} links={serviceItems} />

          {/* Contact + hours: full-width under the two link cols until sm */}
          <div className="col-span-2 grid content-start justify-items-center gap-5 sm:col-span-1 sm:justify-items-start">
            <Title as="h2" size="micro" weight="bold" tracking text={t(contact.titleKey)} />
            <FooterContact
              address={address}
              phone={phone}
              phoneHref={phoneHref}
              email={email}
              emailHref={emailHref}
            />
            <div className="mt-1 w-full border-t border-line pt-5">
              <FooterHours rows={hourItems} />
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container>
          <FooterCredits
            copyright={t.rich("copyright", { name, year: () => <CurrentYear /> })}
            builtByLabel={t(builder.key)}
            builder={{ label: builder.name, href: builder.href }}
            legal={legalItems}
          />
        </Container>
      </div>
    </footer>
  );
};

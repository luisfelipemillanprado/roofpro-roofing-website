import { SectionHeader } from "@/common/section-header/components/SectionHeader";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { MosaicList } from "@/common/mosaic/components/MosaicList";
import { ArrowLink } from "@/common/call-to-actions/components/ArrowLink";
import { getTranslations } from "next-intl/server";
import { servicesData } from "@/data/shared-sections/services";
import type { ServicesProps } from "@/shared-sections/services/types";
import { Container } from "@/common/container/components/Container";

const { heading, ctaHref, items } = servicesData;

export const Services = async ({ variant, tone = "muted", limit }: ServicesProps) => {
  const t = await getTranslations("service");
  /* data: order + image; text by key */
  /* limit: home summary, full on /services */
  const cards = items.slice(0, limit).map((service) => ({
    key: service.key,
    image: service.image,
    href: `/services/${service.slug}`,
    title: t(`items.${service.key}.title`),
    description: t(`items.${service.key}.description`),
  }));
  const viewDetails = t("action.viewDetails");

  return (
    <SectionWrapper id="services" tone={tone} backdrop="architectural">
      <Container>
        <div className="grid gap-13">
          <SectionHeader
            eyebrow={t(heading.eyebrow)}
            title={t(heading.titleLead)}
            accent={t(heading.titleAccent)}
            description={t(heading.description)}
          >
            <Button href={ctaHref[variant].href} variant="secondary" pulse>
              {t(ctaHref[variant].key)}
            </Button>
          </SectionHeader>

          {/* the arrow opens the service detail, so the href comes from the card behind the index */}
          <MosaicList
            cards={cards}
            pattern="centered"
            renderAction={(card, index) => (
              <ArrowLink href={cards[index]!.href} label={`${card.title} ${viewDetails}`} pulse />
            )}
          />
        </div>
      </Container>
    </SectionWrapper>
  );
};

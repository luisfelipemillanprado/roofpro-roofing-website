import { getTranslations } from "next-intl/server";
import { HeroWrapper } from "@/common/hero-wrapper/components/HeroWrapper";
import { Title } from "@/common/title/components/Title";
import { Text } from "@/common/text/components/Text";
import { Button } from "@/common/call-to-actions/components/Button";
import { notFoundData } from "@/data/shared-sections/not-found";

const { image, heading, ctaHref } = notFoundData;

/* 404 hero: the page header band with a single way back home */
export const NotFound = async () => {
  const t = await getTranslations("not-found");
  const tHeader = await getTranslations("page-header");

  return (
    <HeroWrapper image={image.src} imageAlt={tHeader(image.altKey)}>
      <div className="grid grid-cols-1 justify-items-start gap-6.5 sm:max-w-120 md:max-[1440px]:ml-5">
        <Title
          as="h1"
          size="display"
          tone="white"
          accentTone="faint"
          text={t(heading.titleLead)}
          accent={t(heading.titleAccent)}
        />
        <Text size="lead" tone="muted" text={t(heading.description)} />
        <div className="mt-1">
          <Button href={ctaHref.href} variant="primary" pulse>
            {t(ctaHref.key)}
          </Button>
        </div>
      </div>
    </HeroWrapper>
  );
};

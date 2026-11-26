import { SectionHeader } from "@/common/section-header/components/SectionHeader";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { ProductCardList } from "@/common/product-card-list/components/ProductCardList";
import { getTranslations } from "next-intl/server";
import { productsData } from "@/data/shared-sections/products";
import { shopProductsData } from "@/data/features/shop/products";
import { formatPrice } from "@/utils/helpers/price";
import type { ProductsProps } from "@/shared-sections/products/types";
import { Container } from "@/common/container/components/Container";

const { heading, ctaHref, featured } = productsData;
const { items } = shopProductsData;

export const Products = async ({ tone = "muted", limit }: ProductsProps) => {
  const t = await getTranslations("products");
  const tShop = await getTranslations("shop-page");
  /* teaser of the shop catalog: product data and labels read from the shop on purpose */
  /* limit: how many of the picks a route shows; flatMap drops a slug the catalog no longer carries */
  const products = featured
    .slice(0, limit)
    .flatMap((slug) => items.filter((item) => item.slug === slug))
    .map((product) => ({
      slug: product.slug,
      href: `/shop/${product.slug}`,
      title: tShop(`items.${product.slug}.title`),
      cardTitle: tShop(`items.${product.slug}.cardTitle`),
      brand: product.brand,
      image: product.image,
      priceLabel: formatPrice(product.price),
      unit: tShop(product.unitKey),
      rating: product.rating,
      ratingLabel: tShop("reviewCount", { rating: product.rating, count: product.reviews }),
      availability: product.availability,
      availabilityLabel: tShop(`availability.${product.availability}`),
    }));

  return (
    <SectionWrapper id="products" tone={tone} backdrop="shingles">
      <Container>
        <div className="grid gap-13">
          <SectionHeader
            eyebrow={t(heading.eyebrow)}
            title={t(heading.titleLead)}
            accent={t(heading.titleAccent)}
            description={t(heading.description)}
          >
            <Button href={ctaHref.href} variant="secondary" pulse>
              {t(ctaHref.key)}
            </Button>
          </SectionHeader>

          <ProductCardList
            cards={products}
            viewLabel={tShop("action.view")}
            trimLastOnMobile={products.length === 6}
          />
        </div>
      </Container>
    </SectionWrapper>
  );
};

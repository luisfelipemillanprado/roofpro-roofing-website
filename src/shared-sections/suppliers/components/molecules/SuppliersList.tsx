import Image from "next/image";
import { blurs } from "@/data/blurs";
import type { SuppliersListProps } from "@/shared-sections/suppliers/types";

/* repeated tracks keep the -50% loop seamless */
export const SuppliersList = ({ items, copies }: SuppliersListProps) => (
  <div className="grid w-max animate-marquee-slow grid-flow-col items-center justify-start">
    {Array.from({ length: copies }, (_, copy) => (
      /* only the first copy is exposed to screen readers */
      <div key={copy} aria-hidden={copy > 0} className="grid grid-flow-col items-center justify-start">
        {items.map(({ key, label, image }) => (
          <span key={key} className="relative mx-4 size-30 lg:mx-5">
            <Image
              src={image}
              alt={label}
              fill
              sizes="120px"
              /* eager: a clipped track moved by transform never intersects, so lazy never fires */
              loading="eager"
              placeholder="blur"
              blurDataURL={blurs.logo}
              className="object-contain"
            />
          </span>
        ))}
      </div>
    ))}
  </div>
);

import Image from "next/image";
import { blurs } from "@/data/blurs";
import type { BrandsListProps } from "@/shared-sections/brands/types";

/* one copy of the logo row; LoopTrack repeats it to close the loop */
export const BrandsList = ({ items }: BrandsListProps) => (
  <>
    {items.map(({ key, label, image }) => (
      <span key={key} className="relative mx-3 h-14 w-32">
        <Image
          src={image}
          alt={label}
          fill
          sizes="128px"
          /* eager: a clipped track moved by transform never intersects, so lazy never fires */
          loading="eager"
          placeholder="blur"
          blurDataURL={blurs.logo}
          className="object-contain"
        />
      </span>
    ))}
  </>
);

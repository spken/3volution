import Image, { type StaticImageData } from "next/image";
import { ImageReveal } from "./motion";

/** Square-cut photo; the work speaks for itself, so no caption (alt text carries the description). */
export function Figure({
  src,
  alt,
  sizes,
  className = "",
  frameClassName = "aspect-[4/5]",
  imageClassName = "object-cover",
  delay = 0,
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  className?: string;
  frameClassName?: string;
  imageClassName?: string;
  delay?: number;
}) {
  return (
    <figure className={`group ${className}`}>
      <ImageReveal className={`bg-latte ${frameClassName}`} delay={delay}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          placeholder="blur"
                quality={90}
          className={`transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.035] ${imageClassName}`}
        />
      </ImageReveal>
    </figure>
  );
}

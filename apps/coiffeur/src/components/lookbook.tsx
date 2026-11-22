import type { Dictionary } from "@/i18n/dictionaries/de";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { ArrowUpRight } from "./brand";
import { Chapter, Title } from "./chapter";
import { Figure } from "./figure";
import { Reveal } from "./motion";

/**
 * The centrepiece: real work, large, set as a spread. Rows on desktop:
 * big + medium, a staggered three-up, medium + bridal, then the two lash close-ups.
 * Mobile alternates one full-width image with two half-width ones.
 */
const layout = [
  { slot: "col-span-2 lg:col-span-7", frame: "aspect-[4/5]" },
  { slot: "col-span-1 lg:col-span-5 lg:self-end", frame: "aspect-[4/5]" },
  { slot: "col-span-1 lg:col-span-4", frame: "aspect-[3/4]" },
  { slot: "col-span-2 lg:col-span-4 lg:mt-24", frame: "aspect-[3/4]" },
  { slot: "col-span-1 lg:col-span-4", frame: "aspect-[3/4]" },
  { slot: "col-span-1 lg:col-span-5 lg:self-center", frame: "aspect-[3/4]" },
  { slot: "col-span-2 lg:col-span-7", frame: "aspect-square", image: "object-cover object-top" },
  { slot: "col-span-1 lg:col-span-5 lg:col-start-2", frame: "aspect-square" },
  { slot: "col-span-1 lg:col-span-5 lg:col-start-7 lg:mt-32", frame: "aspect-square" },
] as const;

export function Lookbook({ t }: { t: Dictionary["lookbook"] }) {
  return (
    <section id="lookbook" className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Reveal>
            <Chapter n={1} label={t.label} className="mb-6 text-rust" />
          </Reveal>
          <Title text={t.title} />
        </div>
        <Reveal delay={0.1}>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2 text-sm underline-offset-[6px] hover:underline"
          >
            {t.more} {site.instagramHandle}
            <ArrowUpRight className="size-3.5 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12">
        {t.items.map((item, i) => {
          const l = layout[i % layout.length];
          return (
            <Figure
              key={item.alt}
              src={images.lookbook[i]}
              alt={item.alt}
              sizes="(min-width: 1024px) 55vw, (min-width: 640px) 50vw, 92vw"
              className={l.slot}
              frameClassName={l.frame}
              imageClassName={"image" in l ? l.image : "object-cover"}
              delay={(i % 2) * 0.1}
            />
          );
        })}
      </div>
    </section>
  );
}

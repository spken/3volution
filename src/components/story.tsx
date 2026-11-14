import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { ArrowUpRight, LogoMark, Wave } from "./brand";
import { ParallaxImageFrame, Reveal, SplitReveal } from "./motion";

export function Story({ t }: { t: Dictionary["story"] }) {
  return (
    <section id="story" className="relative text-cream">
      <Wave className="-mb-px text-espresso" />
      <div className="relative overflow-hidden bg-espresso">
        {/* Oversized mark as texture */}
        <LogoMark className="pointer-events-none absolute -right-[12%] top-10 w-[70%] text-mocha/45 lg:w-[48%]" />

        <div className="relative mx-auto grid max-w-[1600px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-28">
          <div className="lg:col-span-6">
            <ParallaxImageFrame className="aspect-[4/5] rounded-[2rem] bg-mocha sm:aspect-[5/6]">
              <Image
                src={images.storyPour}
                alt={t.imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 92vw"
                placeholder="blur"
                className="object-cover"
              />
            </ParallaxImageFrame>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5 lg:col-start-8">
            <Reveal>
              <p className="eyebrow mb-6 flex items-center gap-3 text-latte">
                <span className="h-px w-10 bg-current" />
                {t.eyebrow}
              </p>
            </Reveal>
            <SplitReveal text={t.title} className="text-display-lg" />

            <div className="mt-10 space-y-5 text-lg leading-relaxed text-cream/80">
              {t.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.1}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <a
                href={site.hairdresserUrl}
                target="_blank"
                rel="noopener"
                className="group mt-10 inline-flex items-center gap-3 border-b border-cream/30 pb-1 text-sm tracking-wide transition-colors hover:border-cream"
              >
                {t.link}
                <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>
        </div>

        <dl className="relative mx-auto grid max-w-[1600px] grid-cols-3 border-t border-cream/15 px-5 sm:px-8 lg:px-12">
          {t.facts.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 0.1}
              className={`flex flex-col-reverse gap-2 py-10 lg:py-14 ${i > 0 ? "border-l border-cream/15 pl-4 sm:pl-8" : ""}`}
            >
              <dt className="text-xs leading-snug tracking-wide text-cream/65 sm:text-sm">{f.label}</dt>
              <dd className="font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-none">{f.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
      <Wave flip className="-mt-px text-espresso" />
    </section>
  );
}

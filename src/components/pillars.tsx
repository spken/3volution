import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { images } from "@/lib/images";
import { Reveal, SplitReveal } from "./motion";

export function Pillars({ t }: { t: Dictionary["pillars"] }) {
  return (
    <section id="philosophy" className="mx-auto max-w-[1600px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-6 flex items-center gap-3 text-mocha">
              <span className="h-px w-10 bg-current" />
              {t.eyebrow}
            </p>
          </Reveal>
          <SplitReveal text={t.title} className="text-display-lg" />
        </div>
        <Reveal delay={0.15} className="self-end lg:col-span-4 lg:col-start-9">
          <p className="text-lg leading-relaxed text-espresso/80">{t.intro}</p>
        </Reveal>
      </div>

      <ol className="grid gap-px overflow-hidden rounded-[1.75rem] border border-espresso/15 bg-espresso/15 md:grid-cols-3">
        {t.items.map((item, i) => (
          <li key={item.numeral} className="group bg-cream">
            <Reveal delay={i * 0.12} className="flex h-full flex-col p-6 sm:p-8 lg:p-10">
              <div className="flex items-start justify-between">
                <span className="font-display text-[clamp(3.5rem,6vw,5.5rem)] font-semibold leading-none tracking-tight">
                  {item.numeral}
                </span>
                <span className="eyebrow mt-3 text-espresso/50">0{i + 1} / 03</span>
              </div>

              <div className="relative my-8 aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-latte">
                <Image
                  src={images.pillars[i]}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 90vw"
                  placeholder="blur"
                  className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.06]"
                />
              </div>

              <h3 className="text-display-md">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-espresso/75">{item.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

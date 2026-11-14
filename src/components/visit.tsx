import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { ArrowUpRight } from "./brand";
import { ParallaxImageFrame, Reveal, SplitReveal } from "./motion";

export function Visit({ t }: { t: Dictionary["visit"] }) {
  return (
    <section id="visit" className="mx-auto max-w-[1600px] px-5 pb-28 pt-12 sm:px-8 lg:px-12 lg:pb-40">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-6 text-mocha">
              {t.eyebrow}
            </p>
          </Reveal>
          <SplitReveal text={t.title} className="text-display-xl" />

          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-espresso/15 bg-espresso/15 sm:grid-cols-2 lg:mt-20">
            {/* Address */}
            <div className="bg-cream"><Reveal className="h-full p-6 sm:p-8">
              <h3 className="eyebrow mb-5 text-espresso/55">{t.addressLabel}</h3>
              <address className="font-display text-2xl not-italic leading-snug">
                {site.street}
                <br />
                {site.zip} {site.city}
              </address>
              <p className="mt-2 text-sm text-espresso/65">{t.addressNote}</p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-3 text-sm text-cream transition-colors hover:bg-mocha"
              >
                {t.maps}
                <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal></div>

            {/* Hours */}
            <div className="bg-cream"><Reveal delay={0.08} className="h-full p-6 sm:p-8">
              <h3 className="eyebrow mb-5 text-espresso/55">{t.hoursLabel}</h3>
              <dl className="space-y-2.5">
                {t.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 border-b border-dotted border-espresso/25 pb-2.5">
                    <dt>{h.days}</dt>
                    <dd className="tabular-nums text-espresso/80">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-caramel">
                {t.hoursNote}
              </p>
            </Reveal></div>

            {/* Contact */}
            <div className="bg-cream sm:col-span-2"><Reveal delay={0.16} className="p-6 sm:p-8">
              <h3 className="eyebrow mb-5 text-espresso/55">{t.contactLabel}</h3>
              <ul className="flex flex-col gap-x-10 gap-y-3 font-display text-xl sm:flex-row sm:flex-wrap sm:text-2xl">
                <li>
                  <a href={site.phoneHref} className="underline-offset-4 hover:underline">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="break-all underline-offset-4 hover:underline">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.instagram} target="_blank" rel="noopener" className="underline-offset-4 hover:underline">
                    {site.instagramHandle}
                  </a>
                </li>
              </ul>
            </Reveal></div>
          </div>
        </div>

        {/* Visual + neighbour card */}
        <div className="relative lg:col-span-4 lg:col-start-9">
          <ParallaxImageFrame className="aspect-[3/4] rounded-t-[999px] rounded-b-[2rem] bg-latte">
            <Image
              src={images.visitWindow}
              alt={t.imageAlt}
              fill
              sizes="(min-width: 1024px) 32vw, 92vw"
              placeholder="blur"
              className="object-cover"
            />
          </ParallaxImageFrame>

          <Reveal delay={0.2} className="relative -mt-24 ml-auto w-[85%] sm:w-[70%] lg:-ml-16 lg:w-[90%]">
            <a
              href={site.hairdresserUrl}
              target="_blank"
              rel="noopener"
              className="group block rounded-[1.5rem] bg-roast p-6 text-cream shadow-[0_30px_60px_-30px_rgba(32,16,9,.7)] sm:p-8"
            >
              <p className="eyebrow text-latte/70">{t.neighbour.eyebrow}</p>
              <p className="mt-3 font-display text-3xl font-semibold">{t.neighbour.title}</p>
              <p className="mt-1 text-sm tracking-[0.2em] text-cream/70">{t.neighbour.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm">
                {t.neighbour.cta}
                <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

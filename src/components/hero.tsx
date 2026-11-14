import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { Badge } from "./badge";
import { Bean } from "./brand";
import { Parallax, ParallaxImageFrame } from "./motion";

/** Load animations are pure CSS so they run before hydration. */
const d = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section className="relative mx-auto max-w-[1600px] px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-40">
      <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <div className="relative z-10 lg:col-span-7">
          <p className="eyebrow mb-8 flex animate-fade items-center gap-3 text-mocha" style={d(150)}>
            <span className="h-px w-10 bg-current" />
            {t.eyebrow}
          </p>

          <h1 className="text-display-xl">
            <span className="line-mask">
              <span className="inline-flex animate-rise items-center gap-[0.18em]" style={d(250)}>
                {t.lineA}
                <span className="relative inline-block h-[0.72em] w-[1.5em] overflow-hidden rounded-full align-middle">
                  <Image
                    src={images.heroLatteTop}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 240px, 30vw"
                    className="object-cover"
                    placeholder="blur"
                    loading="eager"
                  />
                </span>
              </span>
            </span>
            <span className="line-mask">
              <span className="block animate-rise pl-[0.55em] font-medium italic text-mocha" style={d(370)}>
                {t.lineB}
              </span>
            </span>
            <span className="line-mask">
              <span className="block animate-rise" style={d(490)}>
                {t.lineC}
              </span>
            </span>
          </h1>

          <div className="mt-10 flex animate-fade flex-col gap-8 sm:flex-row sm:items-end lg:mt-14" style={d(800)}>
            <p className="max-w-sm text-base leading-relaxed text-espresso/80 sm:text-lg">{t.lead}</p>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full bg-espresso px-6 py-3.5 text-sm text-cream transition-colors duration-300 hover:bg-mocha"
              >
                {t.primary}
              </a>
              <a
                href="#visit"
                className="rounded-full border border-espresso/30 px-6 py-3.5 text-sm transition-colors duration-300 hover:border-espresso hover:bg-espresso hover:text-cream"
              >
                {t.secondary}
              </a>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] animate-fade sm:aspect-[3/4]" style={d(450)}>
            <ParallaxImageFrame className="size-full rounded-t-[999px] rounded-b-[2rem] bg-latte">
              <Image
                src={images.heroIcedLatte}
                alt={t.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                placeholder="blur"
                loading="eager"
                fetchPriority="high"
              />
            </ParallaxImageFrame>

            <Badge
              text={t.badge}
              href="#menu"
              label={t.badgeLabel}
              className="absolute -left-4 bottom-10 sm:-left-14 lg:-left-20"
            />

            {/* Floating beans */}
            <Parallax offset={120} className="pointer-events-none absolute -right-2 top-[8%] w-9 text-espresso sm:-right-8">
              <Bean className="w-full rotate-[28deg]" />
            </Parallax>
            <Parallax offset={60} className="pointer-events-none absolute -right-6 top-[46%] w-5 text-mocha sm:-right-14">
              <Bean className="w-full -rotate-[40deg]" />
            </Parallax>
            <Parallax offset={180} className="pointer-events-none absolute -left-8 top-[18%] hidden w-7 text-roast sm:block">
              <Bean className="w-full rotate-[70deg]" />
            </Parallax>
          </div>
        </div>
      </div>

      {/* Bottom rail */}
      <div
        className="mt-16 flex animate-fade items-center justify-between gap-6 border-t border-espresso/15 pt-5 text-xs tracking-wide text-espresso/70 lg:mt-20"
        style={d(1000)}
      >
        <span className="flex items-center gap-3">
          <span className="relative block h-8 w-px overflow-hidden bg-espresso/20">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-scrollcue bg-espresso" />
          </span>
          {t.scroll}
        </span>
        <span className="hidden sm:inline">
          {site.street}, {site.zip} {site.city}
        </span>
        <span className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-caramel" />
          {t.note}
        </span>
      </div>
    </section>
  );
}

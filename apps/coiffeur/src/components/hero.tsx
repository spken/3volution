import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { images } from "@/lib/images";
import { ArrowDown } from "./brand";

/** Load animations are pure CSS so they run before hydration. */
const d = (ms: number) => ({ animationDelay: `${ms}ms` });

/**
 * Cover: three results edge to edge (one on mobile), the title set over them like a
 * magazine cover. The work is the headline; the copy is two words and a button.
 */
export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section className="relative h-svh min-h-[620px] overflow-hidden bg-oxblood text-cream">
      <div className="absolute inset-0 grid grid-cols-1 gap-1 lg:grid-cols-3">
        {t.panels.map((panel, i) => {
          const center = i === 1;
          return (
            <figure
              key={i}
              className={`relative animate-fade overflow-hidden bg-rust-deep ${center ? "" : "hidden lg:block"}`}
              style={d(100 + i * 140)}
            >
              <Image
                src={images.hero[i]}
                alt={panel.alt}
                fill
                sizes={center ? "(min-width: 1024px) 34vw, 100vw" : "34vw"}
                className="object-cover object-[50%_30%]"
                placeholder="blur"
                quality={90}
                {...(center ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
              />
            </figure>
          );
        })}
      </div>

      {/* Scrim so the title reads on any photo */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-oxblood/90 via-oxblood/15 via-45% to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-linear-to-b from-oxblood/70 to-transparent" />

      <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-10 sm:px-8 lg:px-12 lg:pb-14">
        <p className="eyebrow mb-5 animate-fade text-senf" style={d(450)}>
          {t.eyebrow}
        </p>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="text-display-xl">
            <span className="line-mask">
              <span className="block animate-rise" style={d(500)}>
                {t.lineA} <span className="font-light">&amp;</span> <em className="italic text-senf">{t.lineB}</em>
              </span>
            </span>
          </h1>

          <div className="flex animate-fade flex-wrap items-center gap-x-8 gap-y-4 lg:pb-4" style={d(850)}>
            <a
              href="#termin"
              className="bg-cream px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-senf"
            >
              {t.primary}
            </a>
            <a href="#lookbook" className="group inline-flex items-center gap-2 text-sm underline-offset-[6px] hover:underline">
              {t.secondary}
              <ArrowDown className="size-3.5 transition-transform duration-500 ease-out-expo group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

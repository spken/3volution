import type { Dictionary } from "@/i18n/dictionaries/de";
import { site } from "@/lib/site";
import { ArrowUpRight } from "./brand";
import { Chapter, Title } from "./chapter";
import { Reveal } from "./motion";

/** Contact as a colophon: three tidy columns, then a slim link to the café. */
export function Visit({ t }: { t: Dictionary["visit"] }) {
  return (
    <section id="kontakt" className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Reveal>
            <Chapter n={5} label={t.label} className="mb-6 text-rust" />
          </Reveal>
          <Title text={t.title} />
        </div>

        <div className="grid gap-12 sm:grid-cols-3 sm:gap-8 lg:col-span-8 lg:pt-3">
          <Reveal>
            <h3 className="eyebrow mb-5 text-ink/70">{t.addressLabel}</h3>
            <address className="font-display text-2xl not-italic leading-snug">
              {site.street}
              <br />
              {site.zip} {site.city}
            </address>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener"
              className="group mt-5 inline-flex items-center gap-1.5 text-sm text-rust underline-offset-[6px] hover:underline"
            >
              {t.maps}
              <ArrowUpRight className="size-3.5 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="eyebrow mb-5 text-ink/70">{t.hoursLabel}</h3>
            <dl>
              {t.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 border-t border-ink/15 py-2.5 last:border-b">
                  <dt>{h.days}</dt>
                  <dd className="tabular-nums text-ink/80">{h.time}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs leading-relaxed text-senf-deep">{t.hoursNote}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="eyebrow mb-5 text-ink/70">{t.contactLabel}</h3>
            <ul className="space-y-1.5 font-display text-xl">
              <li>
                <a href={site.phoneHref} className="underline-offset-[6px] hover:underline">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all underline-offset-[6px] hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener" className="italic underline-offset-[6px] hover:underline">
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Sister site */}
      <Reveal>
        <a
          href={site.coffeeUrl}
          className="group mt-20 flex items-center justify-between gap-6 border-y border-ink/15 py-6 transition-colors hover:text-rust lg:mt-28"
        >
          <span className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
            <span className="eyebrow text-ink/70">{t.sister.eyebrow}</span>
            <span className="font-display text-3xl italic">{t.sister.title}</span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-2 text-sm">
            <span className="hidden sm:inline">{t.sister.cta}</span>
            <ArrowUpRight className="size-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </Reveal>
    </section>
  );
}

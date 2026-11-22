import type { Dictionary } from "@/i18n/dictionaries/de";
import { ArrowUpRight } from "./brand";
import { Chapter, Title } from "./chapter";
import { Reveal } from "./motion";

/**
 * Services as a menu: the categories of the Shore booking tool, a few names each.
 * Each service shows Shore's starting price; full prices and durations stay in Shore.
 */
export function Services({ t }: { t: Dictionary["services"] }) {
  return (
    <section id="leistungen" className="bg-foam">
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <Chapter n={2} label={t.label} className="mb-6 text-rust" />
            </Reveal>
            <Title text={t.title} />
          </div>
          <Reveal delay={0.1}>
            <a
              href="#termin"
              className="group inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-rust"
            >
              {t.book}
              <ArrowUpRight className="size-3.5 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-y-16">
          {t.groups.map((group, i) => (
            <Reveal key={group.id} delay={(i % 4) * 0.06}>
              <h3 className="border-b border-ink/80 pb-4 font-display text-[clamp(1.35rem,1.75vw,1.65rem)] leading-tight tracking-[-0.01em] [font-variation-settings:'opsz'_72] lg:whitespace-nowrap">
                {group.title}
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-4 border-b border-ink/15 py-3 text-[0.98rem] leading-snug">
                    <span>{item.name}</span>
                    <span className="shrink-0 whitespace-nowrap text-sm text-ink/70">
                      {t.from} <span className="font-semibold tabular-nums text-ink">{item.from}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-14 max-w-xl text-sm text-ink/70">{t.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

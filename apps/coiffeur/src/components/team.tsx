import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { images } from "@/lib/images";
import { team } from "@/lib/site";
import { ArrowUpRight } from "./brand";
import { Chapter, Title } from "./chapter";
import { ImageReveal, Reveal } from "./motion";

/** Team as two large plates: each artist shown through their work, name set below. */
export function Team({ t }: { t: Dictionary["team"] }) {
  return (
    <section id="team" className="bg-oxblood text-cream">
      <div className="mx-auto max-w-[1600px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <Reveal>
          <Chapter n={3} label={t.label} className="mb-6 text-senf" />
        </Reveal>
        <Title text={t.title} accent="text-senf" />

        <ul className="mt-14 grid gap-14 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          {team.map((member, i) => (
            <li
              key={member.key}
              className={i === 1 ? "sm:mt-24 lg:col-span-5 lg:col-start-8 lg:mt-40" : "lg:col-span-5 lg:col-start-2"}
            >
              <a href={member.instagram} target="_blank" rel="noopener" className="group block">
                <ImageReveal className="aspect-[4/5] bg-rust-deep" delay={i * 0.1}>
                  <Image
                    src={images.team[member.key]}
                    alt={t.imageAlts[member.key]}
                    fill
                    sizes="(min-width: 640px) 48vw, 92vw"
                    placeholder="blur"
                quality={90}
                    className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.035]"
                  />
                </ImageReveal>
                <div className="mt-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
                  <div>
                    <p className="eyebrow text-senf">{t.roles[member.key]}</p>
                    <p className="mt-2 font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-none tracking-[-0.02em] transition-colors duration-500 group-hover:italic group-hover:text-senf">
                      {member.name}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm text-cream/80 group-hover:text-cream">
                    {member.handle}
                    <ArrowUpRight className="size-3.5 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-cream/75">{t.note}</p>
      </div>
    </section>
  );
}

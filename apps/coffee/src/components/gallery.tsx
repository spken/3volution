"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { images } from "@/lib/images";
import { Reveal, SplitReveal } from "./motion";

type Shot = { src: StaticImageData; alt: string; aspect: string };

// Fixed row height, varying widths
const aspects = ["aspect-[4/3]", "aspect-[4/5]", "aspect-[3/2]", "aspect-square"];

export function Gallery({ t }: { t: Dictionary["gallery"] }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const xA = useTransform(scrollYProgress, [0, 1], ["2%", "-22%"]);
  const xB = useTransform(scrollYProgress, [0, 1], ["-24%", "0%"]);

  const shots: Shot[] = images.gallery.map((src, i) => ({ src, alt: t.alts[i], aspect: aspects[i % aspects.length] }));
  const rowA = shots.slice(0, 4);
  const rowB = [...shots.slice(4), shots[0]];

  return (
    <section ref={ref} id="gallery" aria-label={t.title} className="overflow-hidden py-28 lg:py-40">
      <div className="mx-auto mb-14 flex max-w-[1600px] flex-col justify-between gap-6 px-5 sm:px-8 lg:mb-20 lg:flex-row lg:items-end lg:px-12">
        <div>
          <Reveal>
            <p className="eyebrow mb-6 text-rust">
              {t.eyebrow}
            </p>
          </Reveal>
          <SplitReveal text={t.title} className="text-display-lg max-w-3xl" />
        </div>
        <Reveal delay={0.1}>
          <p className="text-sm text-ink/60">{t.note}</p>
        </Reveal>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <Row shots={rowA} x={xA} />
        <Row shots={rowB} x={xB} offset />
      </div>
    </section>
  );
}

function Row({ shots, x, offset = false }: { shots: Shot[]; x: MotionValue<string>; offset?: boolean }) {
  return (
    <motion.ul style={{ x }} className={`flex w-max gap-4 will-change-transform sm:gap-6 ${offset ? "pl-[18vw]" : ""}`}>
      {shots.map((s, i) => (
        <li
          key={i}
          className={`group relative h-[clamp(200px,40vh,460px)] shrink-0 overflow-hidden rounded-[1.5rem] bg-latte ${s.aspect}`}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="(min-width: 640px) 40vw, 70vw"
            placeholder="blur"
            className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.05]"
          />
        </li>
      ))}
    </motion.ul>
  );
}

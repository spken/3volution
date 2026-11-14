"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { images } from "@/lib/images";
import { Reveal, SplitReveal } from "./motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Menu({ t }: { t: Dictionary["menu"] }) {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  const tab = t.tabs[active];
  const image = images.menu[tab.id as keyof typeof images.menu];

  const onKeyDown = (e: KeyboardEvent) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + t.tabs.length) % t.tabs.length;
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <section id="menu" className="mx-auto max-w-[1600px] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
        <div>
          <Reveal>
            <p className="eyebrow mb-6 text-mocha">
              {t.eyebrow}
            </p>
          </Reveal>
          <SplitReveal text={t.title} className="text-display-lg" />
        </div>
      </div>

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Visual */}
        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[2rem] bg-latte">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={tab.id}
                initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.15 }}
                animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                exit={{ opacity: 0.6 }}
                transition={{ duration: 1.1, ease: EASE }}
                className="absolute inset-0"
              >
                <Image src={image} alt={tab.imageAlt} fill sizes="40vw" placeholder="blur" className="object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* List */}
        <div className="lg:col-span-7">
          <div
            role="tablist"
            aria-label={t.eyebrow}
            onKeyDown={onKeyDown}
            className="relative mb-10 flex gap-8 overflow-x-auto border-b border-espresso/15 [scrollbar-width:none]"
          >
            {t.tabs.map((tb, i) => {
              const selected = i === active;
              return (
                <button
                  key={tb.id}
                  ref={(el) => {
                    tabsRef.current[i] = el;
                  }}
                  role="tab"
                  type="button"
                  id={`${uid}-tab-${tb.id}`}
                  aria-selected={selected}
                  aria-controls={`${uid}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`relative whitespace-nowrap pb-4 font-display text-xl font-medium transition-colors duration-300 ${
                    selected ? "text-espresso" : "text-espresso/45 hover:text-espresso"
                  }`}
                >
                  {tb.label}
                  {selected && (
                    <motion.span
                      layoutId={`${uid}-indicator`}
                      className="absolute inset-x-0 -bottom-px h-0.5 bg-espresso"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${tab.id}`} className="min-h-[34rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.ul
                key={tab.id}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={{ show: { transition: { staggerChildren: 0.05 } }, exit: { opacity: 0, transition: { duration: 0.2 } } }}
              >
                {tab.items.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="group border-b border-espresso/15 py-5 first:pt-0"
                  >
                    <div className="flex items-baseline gap-4">
                      <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.85rem)] font-medium transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5">
                        {item.name}
                      </h3>
                      <span aria-hidden="true" className="mb-1.5 flex-1 border-b border-dotted border-espresso/30" />
                      <span className="font-display text-xl tabular-nums">
                        <span className="sr-only">{t.currency} </span>
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-espresso/65">{item.desc}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          <p className="mt-8 flex flex-wrap justify-between gap-2 text-xs tracking-wide text-espresso/60">
            <span>{t.milk}</span>
            <span>
              {t.currency} · {t.note}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

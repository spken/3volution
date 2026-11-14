"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { locales, type Locale } from "@/i18n/config";
import { site } from "@/lib/site";
import { ArrowUpRight, Wordmark } from "./brand";

type Props = { lang: Locale; nav: Dictionary["nav"] };

const EASE = [0.76, 0, 0.24, 1] as const;

export function Header({ lang, nav }: Props) {
  const pathname = usePathname();
  const onHome = pathname === `/${lang}`;
  const home = `/${lang}`;
  const anchor = (hash: string) => (onHome ? hash : `${home}${hash}`);

  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 32);
    setHidden(y > 480 && y > prev + 2);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Same page in the other language
  const switchTo = (l: Locale) => pathname.replace(new RegExp(`^/${lang}(?=/|$)`), `/${l}`);

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[80] rounded-full bg-espresso px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {nav.skip}
      </a>

      <motion.header
        initial={false}
        animate={{ y: hidden && !open ? "-110%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 transition-[padding,background-color,box-shadow] duration-500 sm:px-8 lg:px-12 ${
            scrolled && !open
              ? "bg-cream/85 py-3 shadow-[0_1px_0_0_var(--color-latte)] backdrop-blur-md"
              : "py-5 lg:py-7"
          }`}
        >
          <Link href={home} aria-label={nav.home} className={`relative z-10 ${open ? "text-cream" : ""}`}>
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.links.map((l) => (
                <li key={l.href}>
                  <a href={anchor(l.href)} className="group relative py-1 text-sm tracking-wide">
                    {l.label}
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-right scale-x-0 bg-current transition-transform duration-500 ease-out-expo group-hover:origin-left group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={`relative z-10 flex items-center gap-4 sm:gap-6 ${open ? "text-cream" : ""}`}>
            <a
              href={site.hairdresserUrl}
              target="_blank"
              rel="noopener"
              className="hidden items-center gap-1 text-sm opacity-80 transition-opacity hover:opacity-100 xl:inline-flex"
            >
              {nav.hairdresser}
              <ArrowUpRight className="size-3.5" />
            </a>

            <LangSwitch lang={lang} label={nav.language} hrefFor={switchTo} />

            <a
              href={anchor("#visit")}
              className="hidden rounded-full bg-espresso px-5 py-2.5 text-sm text-cream transition-colors duration-300 hover:bg-mocha sm:inline-block"
            >
              {nav.cta}
            </a>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? nav.close : nav.open}
              className="relative grid size-11 place-items-center lg:hidden"
            >
              <span
                className={`absolute h-px w-6 bg-current transition-transform duration-500 ease-out-expo ${open ? "rotate-45" : "-translate-y-1"}`}
              />
              <span
                className={`absolute h-px w-6 bg-current transition-transform duration-500 ease-out-expo ${open ? "-rotate-45" : "translate-y-1"}`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-espresso px-5 pb-10 pt-28 text-cream sm:px-8 lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {nav.links.map((l, i) => (
                  <li key={l.href} className="overflow-hidden">
                    <motion.a
                      href={anchor(l.href)}
                      onClick={() => setOpen(false)}
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.06 }}
                      className="flex items-baseline gap-4 py-1 font-display text-[clamp(2.75rem,12vw,5rem)] font-semibold leading-none"
                    >
                      <span className="font-sans text-xs font-bold tracking-widest text-latte">0{i + 1}</span>
                      {l.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              className="flex flex-wrap items-end justify-between gap-6 border-t border-cream/20 pt-6 text-sm"
            >
              <div className="space-y-1 text-cream/75">
                <p>{site.street}</p>
                <p>
                  {site.zip} {site.city}
                </p>
              </div>
              <a href={site.hairdresserUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                {nav.hairdresser} 3volution <ArrowUpRight className="size-3.5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LangSwitch({
  lang,
  label,
  hrefFor,
}: {
  lang: Locale;
  label: string;
  hrefFor: (l: Locale) => string;
}) {
  return (
    <div role="group" aria-label={label} className="flex items-center text-xs font-bold tracking-[0.18em]">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1.5 opacity-30">/</span>}
          {l === lang ? (
            <span aria-current="true" className="uppercase">
              {l}
            </span>
          ) : (
            <Link href={hrefFor(l)} hrefLang={l} lang={l} className="uppercase opacity-45 transition-opacity hover:opacity-100">
              {l}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}

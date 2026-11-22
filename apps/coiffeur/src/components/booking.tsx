import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/de";
import type { Locale } from "@/i18n/config";
import { shore, site } from "@/lib/site";
import { ArrowUpRight } from "./brand";
import { Chapter, Title } from "./chapter";
import { Reveal } from "./motion";

type Props = { t: Dictionary["booking"]; lang: Locale };

/**
 * Embeds the salon's existing Shore booking widget (the chrome-less URL the old site iframes).
 * `data-booking` re-enables pointer events that Lenis turns off on iframes (see globals.css),
 * and `data-lenis-prevent` keeps Lenis from hijacking the wheel over the widget.
 */
export function Booking({ t, lang }: Props) {
  return (
    <section id="termin" className="bg-foam">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-36">
        {/* Copy */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Chapter n={4} label={t.label} className="mb-8 text-rust" />
            </Reveal>
            <Title text={t.title} />

            <Reveal delay={0.15}>
              <div className="mt-12">
                <p className="eyebrow text-ink/70">{t.phoneTitle}</p>
                <a href={site.phoneHref} className="mt-3 inline-block font-display text-3xl underline-offset-[6px] hover:underline">
                  {site.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Widget */}
        <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
          <div data-lenis-prevent className="border border-ink/15 bg-cream">
            <iframe
              data-booking
              src={shore.embedUrl}
              title={t.frameTitle}
              loading="lazy"
              className="block h-[760px] w-full border-0 sm:h-[820px]"
              allow="payment"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm text-ink/70">
            <p>
              {t.poweredBy}{" "}
              <Link href={`/${lang}/datenschutz`} className="underline underline-offset-4 hover:text-ink">
                {t.privacyLink}
              </Link>
            </p>
            <a
              href={shore.bookingUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 underline-offset-4 hover:text-ink hover:underline"
            >
              {t.newTab}
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

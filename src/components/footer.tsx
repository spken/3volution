import Link from "next/link";
import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries/de";
import type { Locale } from "@/i18n/config";
import { site } from "@/lib/site";
import { ArrowUpRight, LogoLockup } from "./brand";

type Props = { lang: Locale; t: Dictionary["footer"]; nav: Dictionary["nav"]; onHome?: boolean };

export function Footer({ lang, t, nav, onHome = true }: Props) {
  const anchor = (hash: string) => (onHome ? hash : `/${lang}${hash}`);
  const year = 2026;

  return (
    <footer className="relative overflow-hidden rounded-t-[2.5rem] bg-roast text-cream sm:rounded-t-[3.5rem]">
      <div className="mx-auto max-w-[1600px] px-5 pt-16 sm:px-8 lg:px-12 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <LogoLockup className="w-44 text-cream sm:w-52" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/65">{t.tagline}</p>
          </div>

          <FooterCol title={t.navTitle} className="lg:col-span-2 lg:col-start-6">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={anchor(l.href)} className="hover:text-cream">
                  {l.label}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title={t.contactTitle} className="lg:col-span-3">
            <li>
              {site.street}, {site.zip} {site.city}
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-cream">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener" className="inline-flex items-center gap-1 hover:text-cream">
                Instagram <ArrowUpRight className="size-3" />
              </a>
            </li>
          </FooterCol>

          <FooterCol title={t.legalTitle} className="lg:col-span-2">
            <li>
              <Link href={`/${lang}/impressum`} className="hover:text-cream">
                {t.impressum}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/datenschutz`} className="hover:text-cream">
                {t.privacy}
              </Link>
            </li>
            <li>
              <a href={site.hairdresserUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 hover:text-cream">
                Coiffeur 3volution <ArrowUpRight className="size-3" />
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 py-6 text-xs text-cream/50">
          <p>
            © {year} {site.name}. {t.rights}
          </p>
          <p>{t.credit}</p>
          <a href="#top" className="hover:text-cream">
            {t.top} ↑
          </a>
        </div>
      </div>

      {/* Giant wordmark */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.2em] select-none text-center font-display text-[20.5vw] font-semibold leading-[0.8] tracking-[-0.04em] text-mocha/70"
      >
        3volution
      </p>
    </footer>
  );
}

function FooterCol({ title, className, children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <div className={className}>
      <h2 className="eyebrow mb-5 text-latte/60">{title}</h2>
      <ul className="space-y-2.5 text-sm text-cream/75">{children}</ul>
    </div>
  );
}

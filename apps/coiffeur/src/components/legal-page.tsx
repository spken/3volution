import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/de";
import { Header } from "./header";
import { Footer } from "./footer";

/** Shared shell for Impressum / Datenschutz. */
export function LegalPage({
  lang,
  t,
  title,
  children,
}: {
  lang: Locale;
  t: Dictionary;
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <div id="top" />
      <Header lang={lang} nav={t.nav} />
      <main id="main" className="mx-auto max-w-3xl px-5 pb-28 pt-36 sm:px-8 lg:pt-48">
        <Link href={`/${lang}`} className="eyebrow mb-10 inline-flex items-center gap-3 text-rust hover:text-ink">
          <span aria-hidden="true">←</span> {t.legal.back}
        </Link>
        <h1 className="text-display-lg mb-12">{title}</h1>
        <div className="space-y-10 leading-relaxed text-ink/85">{children}</div>
      </main>
      <Footer lang={lang} t={t.footer} nav={t.nav} onHome={false} />
    </>
  );
}

export function Todo({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-senf/30 px-1.5 py-0.5 text-sm text-ink">
      TODO: {children}
    </mark>
  );
}

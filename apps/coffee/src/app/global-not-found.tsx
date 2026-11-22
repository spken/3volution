import type { Metadata } from "next";
import Link from "next/link";
import { Lato, Zilla_Slab } from "next/font/google";
import "./globals.css";
import { de } from "@/i18n/dictionaries/de";
import { en } from "@/i18n/dictionaries/en";
import { LogoMark } from "@/components/brand";

const zilla = Zilla_Slab({ variable: "--font-zilla", subsets: ["latin"], weight: ["600"] });
const lato = Lato({ variable: "--font-lato", subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "404 · 3volution Coffee",
};

// Bypasses the [lang] layout, so it is bilingual by design.
export default function GlobalNotFound() {
  return (
    <html lang="de-CH" className={`${zilla.variable} ${lato.variable}`}>
      <body className="grain grid min-h-dvh place-items-center bg-cream px-5 text-ink antialiased">
        <main className="max-w-xl text-center">
          <LogoMark className="mx-auto mb-10 h-10 w-auto text-rust" />
          <p className="font-display text-[clamp(6rem,22vw,12rem)] font-semibold leading-none tracking-tight">404</p>
          <h1 className="mt-6 font-display text-3xl font-semibold">{de.notFound.title}</h1>
          <p className="mt-1 text-ink/60">{en.notFound.title}</p>
          <div className="mt-10 flex justify-center gap-3">
            <Link href="/de" className="rounded-full bg-rust px-6 py-3 text-sm text-cream hover:bg-rust-deep">
              Startseite
            </Link>
            <Link href="/en" className="rounded-full border border-ink/30 px-6 py-3 text-sm hover:border-rust hover:bg-rust hover:text-cream">
              Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}

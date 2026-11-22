import type { Metadata } from "next";
import Link from "next/link";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";
import { de } from "@/i18n/dictionaries/de";
import { en } from "@/i18n/dictionaries/en";
import { LogoMark } from "@/components/brand";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});
const figtree = Figtree({ variable: "--font-text", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "404 · Coiffeur 3volution",
};

// Bypasses the [lang] layout, so it is bilingual by design.
export default function GlobalNotFound() {
  return (
    <html lang="de-CH" className={`${fraunces.variable} ${figtree.variable}`}>
      <body className="grid min-h-dvh place-items-center bg-cream px-5 text-ink antialiased">
        <main className="max-w-xl text-center">
          <LogoMark className="mx-auto mb-10 h-10 w-auto text-rust" />
          <p className="font-display text-[clamp(6rem,22vw,12rem)] italic leading-none tracking-tight">404</p>
          <h1 className="mt-6 font-display text-3xl">{de.notFound.title}</h1>
          <p className="mt-1 text-ink/70">{en.notFound.title}</p>
          <div className="mt-10 flex justify-center gap-3">
            <Link href="/de" className="bg-ink px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-cream hover:bg-rust">
              Startseite
            </Link>
            <Link href="/en" className="border border-ink/30 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] hover:border-ink hover:bg-ink hover:text-cream">
              Home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}

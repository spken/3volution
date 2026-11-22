import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Figtree, Fraunces } from "next/font/google";
import "lenis/dist/lenis.css";
import "../globals.css";
import { hasLocale, locales, siteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SmoothScroll } from "@/components/smooth-scroll";

// Self-hosted at build time by next/font: no requests to Google from the browser.
// Fraunces + Figtree: the alternative pairing in BRAND-INFO.md. Sturdier than a didone,
// so headlines stay legible over photos and on beige.
const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-text",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#faf6ec",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    title: { default: dict.meta.title, template: `%s · Coiffeur 3volution` },
    description: dict.meta.description,
    // Canonical + hreflang only once a domain exists (SITE_URL), see BRAND-INFO.md §3.
    ...(siteUrl && {
      metadataBase: new URL(siteUrl),
      alternates: {
        canonical: `/${lang}`,
        languages: { de: "/de", en: "/en", "x-default": "/de" },
      },
    }),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: "Coiffeur 3volution",
      locale: lang === "de" ? "de_CH" : "en_GB",
      type: "website",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang === "de" ? "de-CH" : "en"} className={`${fraunces.variable} ${figtree.variable}`}>
      <body className="min-h-dvh antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Lato, Zilla_Slab } from "next/font/google";
import "lenis/dist/lenis.css";
import "../globals.css";
import { hasLocale, locales, siteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SmoothScroll } from "@/components/smooth-scroll";

// Self-hosted at build time by next/font: no requests to Google from the browser.
const zilla = Zilla_Slab({
  variable: "--font-zilla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: "#f7efca",
};

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);

  return {
    title: { default: dict.meta.title, template: `%s · 3volution Coffee` },
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
      siteName: "3volution Coffee",
      locale: lang === "de" ? "de_CH" : "en_GB",
      type: "website",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang === "de" ? "de-CH" : "en"} className={`${zilla.variable} ${lato.variable}`}>
      <body className="grain min-h-dvh antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

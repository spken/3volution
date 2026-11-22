import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { openingHours, site } from "@/lib/site";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Pillars } from "@/components/pillars";
import { Story } from "@/components/story";
import { Menu } from "@/components/menu";
import { Statement } from "@/components/statement";
import { Gallery } from "@/components/gallery";
import { Booking } from "@/components/booking";
import { Visit } from "@/components/visit";
import { Footer } from "@/components/footer";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getDictionary(lang);

  // Structured data
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: site.name,
    description: t.meta.description,
    telephone: site.phone,
    email: site.email,
    servesCuisine: "Coffee",
    acceptsReservations: true,
    priceRange: "CHF",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: site.zip,
      addressLocality: "Opfikon",
      addressRegion: "ZH",
      addressCountry: site.country,
    },
    openingHoursSpecification: Object.entries(openingHours).flatMap(([day, hours]) =>
      hours
        ? [{ "@type": "OpeningHoursSpecification", dayOfWeek: dayNames[Number(day)], opens: hours[0], closes: hours[1] }]
        : [],
    ),
    sameAs: [site.instagram],
  };

  return (
    <>
      <div id="top" />
      <Header lang={lang} nav={t.nav} />
      <main id="main">
        <Hero t={t.hero} />
        <Marquee items={t.marquee} />
        <Pillars t={t.pillars} />
        <Story t={t.story} />
        <Menu t={t.menu} />
        <Statement text={t.statement} />
        <Gallery t={t.gallery} />
        <Booking t={t.booking} lang={lang} />
        <Visit t={t.visit} />
      </main>
      <Footer lang={lang} t={t.footer} nav={t.nav} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}

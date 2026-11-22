import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { openingHours, shore, site } from "@/lib/site";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { Lookbook } from "@/components/lookbook";
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
    "@type": "HairSalon",
    name: site.name,
    description: t.meta.description,
    telephone: site.phone,
    email: site.email,
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
    potentialAction: {
      "@type": "ReserveAction",
      target: { "@type": "EntryPoint", urlTemplate: shore.bookingUrl },
    },
    sameAs: [site.instagram],
  };

  return (
    <>
      <div id="top" />
      <Header lang={lang} nav={t.nav} overDark />
      <main id="main">
        <Hero t={t.hero} />
        <Lookbook t={t.lookbook} />
        <Services t={t.services} />
        <Team t={t.team} />
        <Booking t={t.booking} lang={lang} />
        <Visit t={t.visit} />
      </main>
      <Footer lang={lang} t={t.footer} nav={t.nav} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }}
      />
    </>
  );
}

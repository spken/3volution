import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LegalPage } from "@/components/legal-page";

export async function generateMetadata({ params }: PageProps<"/[lang]/datenschutz">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = await getDictionary(lang);
  return { title: t.legal.privacy.title, robots: { index: false } };
}

export default async function Datenschutz({ params }: PageProps<"/[lang]/datenschutz">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const p = t.legal.privacy;

  return (
    <LegalPage lang={lang} t={t} title={p.title}>
      {/* Generic draft, flagged for client/legal review (BRAND-INFO.md §3) */}
      <p className="rounded-2xl border border-caramel/40 bg-foam px-5 py-4 text-sm text-caramel">{p.draft}</p>
      {p.sections.map((s) => (
        <section key={s.title}>
          <h2 className="text-display-md mb-3">{s.title}</h2>
          <p>{s.text}</p>
        </section>
      ))}
    </LegalPage>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { site } from "@/lib/site";
import { LegalPage, Todo } from "@/components/legal-page";

export async function generateMetadata({ params }: PageProps<"/[lang]/impressum">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = await getDictionary(lang);
  return { title: t.legal.impressum.title, robots: { index: false } };
}

export default async function Impressum({ params }: PageProps<"/[lang]/impressum">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getDictionary(lang);
  const l = t.legal.impressum;

  return (
    <LegalPage lang={lang} t={t} title={l.title}>
      <section>
        <h2 className="eyebrow mb-3 text-mocha">{l.operatorLabel}</h2>
        <address className="not-italic">
          3volution
          <br />
          {site.street}
          <br />
          CH-{site.zip} {site.city}
        </address>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="eyebrow mb-3 text-mocha">{l.ownerLabel}</h2>
          {/* Owner name unknown: do not invent (BRAND-INFO.md §3) */}
          <Todo>{t.legal.todo}</Todo>
        </div>
        <div>
          <h2 className="eyebrow mb-3 text-mocha">{l.uidLabel}</h2>
          <Todo>{t.legal.todo}</Todo>
        </div>
      </section>

      <section>
        <h2 className="eyebrow mb-3 text-mocha">{l.contactLabel}</h2>
        <p>
          <a href={site.phoneHref} className="underline underline-offset-4">
            {site.phone}
          </a>
          <br />
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-display-md mb-3">{l.disclaimerTitle}</h2>
        <p>{l.disclaimer}</p>
      </section>

      <section>
        <h2 className="text-display-md mb-3">{l.photosTitle}</h2>
        <p>{l.photos}</p>
      </section>
    </LegalPage>
  );
}

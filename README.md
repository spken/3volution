# 3volution Coffee

Landing page for 3volution Coffee, Boulevard Lilienthal 39, Glattpark. Next.js 16 (App Router, Cache Components), Tailwind v4, Motion and Lenis.
Brand facts and decisions: see [BRAND-INFO.md](./BRAND-INFO.md).

## Where things live

| What | File |
|---|---|
| All copy (DE / EN) | `src/i18n/dictionaries/de.ts` (source of truth), `en.ts` |
| Address, phone, links | `src/lib/site.ts` |
| Photos | `src/assets/images/*.jpg`, wired in `src/lib/images.ts` |
| Colours, fonts, type scale | `src/app/globals.css` (`@theme`) |
| Sections | `src/components/*.tsx`, composed in `src/app/[lang]/page.tsx` |
| Locale redirect (`/` → `/de` or `/en`) | `src/proxy.ts` |

## Placeholders to replace before launch

- **Photos**: Unsplash stock. Replace the files in `src/assets/images/` and keep the same names.
- **Menu and prices**: `menu.tabs` in both dictionaries. Remove `menu.note` once the prices are real.
- **Opening hours**: `visit.hours` and `visit.hoursNote`. Add `openingHours` to the JSON-LD in `page.tsx`.
- **Story copy**: draft, needs client approval.
- **Impressum**: owner name and UID (TODO markers in `src/app/[lang]/impressum/page.tsx`).
- **Datenschutz**: generic draft that needs legal review.
- **Domain**: set `SITE_URL=https://…` to enable the canonical URL and hreflang alternates.
- **Footer year**: hard-coded to 2026 in `src/components/footer.tsx`.

## Develop

```bash
npm run dev
```

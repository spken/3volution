# Coiffeur 3volution

Landing page for the salon. Next.js 16 (App Router, Cache Components), Tailwind v4, Motion and Lenis. Same stack as `apps/coffee`, own design: fashion-editorial (Bodoni Moda headlines, square-cut captioned photos, numbered chapters). See BRAND-INFO.md §3a-2.
Brand facts and decisions: see [BRAND-INFO.md](../../BRAND-INFO.md).

## Where things live

| What | File |
|---|---|
| All copy (DE / EN) | `src/i18n/dictionaries/de.ts` (source of truth), `en.ts` |
| Address, phone, team, Shore URLs | `src/lib/site.ts` |
| Photos | `src/assets/images/*.jpg`, wired in `src/lib/images.ts` |
| Colours, fonts, type scale | `src/app/globals.css` (`@theme`) |
| Sections | `src/components/*.tsx`, composed in `src/app/[lang]/page.tsx` |
| Editorial building blocks | `chapter.tsx` (numbered labels, Bodoni titles with `*italic*` accents), `figure.tsx` (captioned photos) |

## Booking (Shore)

The salon already books through Shore (`connect.shore.com/widget/3volution`). `src/components/booking.tsx` embeds the chrome-less widget (`/widget/nolayout/3volution`, the same URL the old site iframes). It loads with the page (`loading="lazy"`); the Datenschutz page discloses this. Services, prices, staff and availability are managed in Shore; this site only lists service names.

## Placeholders to replace before launch

- **Copy**: everything is a draft (the old site had almost no text). Service list is an example selection.
- **Team**: names from Instagram; cards show work photos instead of portraits. Confirm names and roles; add portraits.
- **Photos**: taken from the client's current site (coiffeur3volution.ch, 2016–2019 phone shots), resized into `src/assets/images/`, wired in `src/lib/images.ts`. Swap for newer shots anytime, keeping file names.
- **Impressum**: owner name and UID. **Datenschutz**: draft incl. Shore section, needs legal review.
- **Domain**: set `SITE_URL` and `NEXT_PUBLIC_COFFEE_URL`.

## Develop

```bash
npm run dev:coiffeur   # from the repo root
```

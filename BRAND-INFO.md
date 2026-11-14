# 3volution Coffee – Brand & Site Info

Source: https://coiffeur3volution.ch/ (hairdresser sister shop), scraped 2026-11-14.
The source site contains **nothing about the coffee shop**. Only brand, location and shared-business info is reusable. Coffee-specific content (menu, hours, photos, copy) must come from the client.

## 1. Business (shared with hairdresser)

| Field | Value |
|---|---|
| Brand name | 3volution (logo wordmark: "3VOLUTION", the "3" is styled like a lowercase "ვ/3") |
| Hairdresser name | Coiffeur 3volution – Hair · Beauty · Nail |
| Address (hairdresser) | Boulevard Lilienthal 39, CH-8152 Glattpark (Opfikon), near Zürich |
| Phone (hairdresser) | +41 44 829 30 33 |
| E-mail (hairdresser) | 333volution@gmail.com |
| Instagram (hairdresser) | https://www.instagram.com/3volution_/ |
| Other Instagram accounts | https://www.instagram.com/2ba_special/ , https://www.instagram.com/derya_3volution/ (staff/personal? unclear) |
| Language of site | German (de), Swiss context (CH, "ss" is used as "ß" in places, e.g. "außerhalb" – Swiss standard would be "ausserhalb") |
| Site credit | "Website by SHORE" (shore.com – booking software vendor, not a designer) |
| Legal pages | /datenschutz (privacy policy) exists, no Impressum found, no owner name/UID found |

### Hairdresser opening hours (for reference, NOT coffee shop)
- Mo: closed
- Di–Fr: 09:00–19:00
- Sa: 09:00–16:00
- Appointments outside hours by arrangement

### Hairdresser site structure (one-pager, `/willkommen/`)
Nav: WILLKOMMEN · HAIR · BEAUTY · LEISTUNGEN & PREISE · KONTAKT · TERMIN ONLINE BUCHEN
Sections: hero/welcome → Hair (+book button) → Beauty (+book button) → Leistungen & Preise (embedded Shore booking iframe, prices live only inside the widget, not in the HTML) → Kontakt (address, phone, mail, IG, hours, map-less) → footer (© 3volution, Shore credit, Datenschutz).
Booking: Shore widget `https://connect.shore.com/widget/3volution` (hair/beauty only; irrelevant for coffee unless client wants table reservations).

SEO meta (hairdresser): "Herzlich willkommen zu Coiffeur 3volution in Glattpark bei Zürich, Ihrem Spezialisten für Hair, Beauty & Nails."

## 2. Visual identity (worth keeping)

Logo (500×500 PNG, RGBA, dark-brown tile): https://coiffeur3volution.ch/wp-content/uploads/2016/07/2016-07-06-17_56_13-Tugba-Özel-e1467900900313.png
- Cream "III" slab-serif blocks (top/bottom) framing the word "3VOLUTION" in thin humanist sans caps
- Tagline "HAIR · BEAUTY · NAIL", then address, tel, URL in wide-tracked small caps
- Colors: dark brown background + cream foreground

### Color palette (extracted from theme CSS + logo)

| Role | Hex | Evidence |
|---|---|---|
| Brand brown (primary, text on light, logo bg) | `#42321b` | 158 uses in theme CSS, logo bg |
| Cream (brand light / logo foreground / sections) | `#f7efca` | 231 uses, most used color in theme |
| Brown, lighter (hover/secondary) | `#53432c` | 13 uses |
| Brown, darkest | `#201009` | 5 uses |
| Cream, darker (borders/muted) | `#d5cda8` | 11 uses |
| Pale green-cream (accent/link tint) | `#f8ffdb` / `#f9ffec` | 38 / 4 uses |
| Black (sections, text) | `#000000` | hero/service sections use black + `#111111` panels |
| Near-black panel | `#111111` | content boxes |
| Off-white | `#f8f8f8`, `#fcfcfc`, `#ffffff` | footer/text |
| Grey | `#666666`, `#dddddd`, `#d6d6d6` | minor UI |

(`#f78da7`, `#cf2e2e`, `#ff6900`, `#fcb900`, `#7bdcb5`, `#00d084`, `#8ed1fc`, `#0693e3`, `#9b51e0` in the HTML are just WordPress default palette presets, NOT brand colors.)

**Suggested coffee palette:** brown `#42321b` + cream `#f7efca` fits coffee naturally. Keep those two as core; use `#201009` for dark surfaces, `#53432c` for hover, `#d5cda8` for borders. Avoid black/`#111`-heavy look of the hairdresser site.

### Typography
- Hairdresser site uses theme default Helvetica Neue / Arial. **Decision: do NOT use Helvetica/Arial on the coffee site.**
- Logo uses a slab serif for the "III" and a thin humanist sans for text.
- **Chosen pairing (Google Fonts, self-host for CH/GDPR):** headings **Zilla Slab** (echoes the logo slabs), body/UI **Lato** (warm humanist sans, close to logo text). Alternative if we want more character: Fraunces (headings) + Figtree (body).

### Imagery
- Gallery on site = 20 photos of hair work/salon (e.g. https://coiffeur3volution.ch/wp-content/uploads/2016/05/image1-1-845x684.jpeg), phone-shot iPhone photos. **Not usable for coffee shop.**
- Background texture: https://coiffeur3volution.ch/wp-content/uploads/2016/05/3volution-background-300x300.jpg (300×300 tile, not viewed in detail)
- Logo above is the only reusable asset (needs client OK + ideally a vector version).

## 3. Decisions (confirmed by developer, 2026-11-14)

- **Address:** same as hairdresser: Boulevard Lilienthal 39, CH-8152 Glattpark (coffee bar is inside the salon – one shop, not next door; confirmed by client 2026-11-14).
- **Photos:** stock coffee photos as placeholders (e.g. Unsplash/Pexels, swap for real photos later).
- **Logo:** reuse the existing 3volution logo for now (tagline "HAIR · BEAUTY · NAIL" is wrong for coffee; crop or replace later).
- **Languages:** German + English (DE default, EN toggle; use Swiss spelling "ss", no "ß").
- **Scope:** informational only. No ordering, reservations or booking.
- **Domain:** none yet. Build domain-agnostic (relative URLs, no hardcoded canonical until domain is set).
- **Fonts:** Zilla Slab + Lato (see Typography). No Helvetica/Arial.
- **Palette:** brown `#42321b` + cream `#f7efca` core (see section 2).
- **Name:** "3volution Coffee".
- **Contact:** shares hairdresser phone (+41 44 829 30 33) and e-mail (333volution@gmail.com).
- **Hours:** unknown; use placeholder hours, marked clearly as TBC (do not copy hairdresser hours as fact).
- **Menu:** placeholder items and prices, marked as examples until client supplies real menu.
- **Cross-link:** link to hairdresser site (https://coiffeur3volution.ch/) from header/footer/contact. Hairdresser site linking back is the client's call, not our work.
- **Impressum:** build from known details only: 3volution, Boulevard Lilienthal 39, CH-8152 Glattpark, tel, e-mail. Owner name and UID unknown; leave visible TODO placeholders, don't invent. Datenschutz: generic draft, flag for client/legal review.

## 3b. Instagram @3volution_ (read 2026-11-14)

Shared account for the whole shop (display name "3Volution |", 954 followers, 6 posts). Spelling on IG is **"3Volution"** (capital V); site keeps "3volution" (decided 2026-11-14).

- **Bio:** "HAIR • BEAUTY • SPECIALTY COFFE ☕️ • MATCHA AND MORE · 📍 Glattpark Zürich · ✂️ @2ba_special • 💄 @derya_3volution". Highlights: HAIR, BEAUTY, COFFEE, MENU, TEAM, INFO (stories, need login).
- **Concept:** "HAIR • BEAUTY • COFFEE – Drei Welten. Ein Ort." / "Alles an einem Ort." "3Volution wächst – und wird mehr als Hair & Beauty." "Ein Ort zum Ankommen, Wohlfühlen, Verschönern und Geniessen." Sign-off "Welcome to 3Volution. 🤎"
- **Coffee offer (grand-opening post):** Specialty Coffee, Matcha, Iced Coffee, türkischer Çay, feine Desserts. Hashtag #3VolutionCoffee.
- **Grand opening:** Sunday 8 Nov 2026, 13:00–17:00, every coffee CHF 1.–, guest "Helva on Ice" (one-off, not on the regular menu), DJ.
- **Team:** hair = @2ba_special (Tugba Cakmak); beauty = lashes & brows by @derya_3volution. No nails mentioned on IG (hairdresser site still says "Nail").
- **Reel line used on site:** "Erst Beauty. Dann Hair. Und zum Schluss? Coffee."
- Not on IG: opening hours, prices, full menu (MENU highlight is login-only).

## 4. Still missing (need from client; use placeholders meanwhile)

Nothing of the following exists on the hairdresser site:
- Coffee shop name (e.g. "3volution Coffee"?), tagline
- Opening hours, phone, e-mail, Instagram/Google Maps listing for the coffee shop (phone/mail may be shared with hairdresser)
- Menu (full list, prices, allergens), beans/roaster. Known from IG: specialty coffee, matcha, iced coffee, Turkish çay, desserts
- About text / story / team
- Impressum details (owner, UID) and Datenschutz text
- Cross-links to the hairdresser site (undecided)

## 5. (superseded) Original missing-info list

Nothing of the following exists on the hairdresser site:
- Coffee shop name (e.g. "3volution Coffee"? exact spelling, subtitle)
- Address (same building/Boulevard Lilienthal 39, or different?)
- Opening hours, phone, e-mail, Instagram/Google Maps listing
- Menu (drinks, food, prices, allergens), beans/roaster, specialties
- Photos (interior, drinks, team) and logo/vector files
- About text / story / team, tagline
- Features: online ordering, reservations, take-away, events, gift cards, newsletter?
- Languages (DE only, or DE+EN)
- Domain + hosting, Impressum details (owner, UID), Datenschutz

## 6. (answered above, remaining open: Q2, Q4, Q5) Open questions for the client / dev

1. Is the coffee shop at the same address as the hairdresser, or a separate location?
2. Should the coffee site link to / cross-promote the hairdresser (and vice versa)?
3. Reuse the existing logo, or does the coffee shop get its own logo (variation with "COFFEE" instead of "HAIR · BEAUTY · NAIL")?
4. Is the 3volution brown/cream palette final, or just a starting point?
5. Menu: need pricing on site? Provided as PDF/photos/text?
6. Any ordering/booking functionality, or purely informational one-pager?
7. German only or also English?
8. Domain name (e.g. 3volution-coffee.ch / cafe3volution.ch)?

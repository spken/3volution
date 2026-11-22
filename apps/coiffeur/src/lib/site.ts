/** Language-independent business facts. Source: BRAND-INFO.md (repo root). */
export const site = {
  name: "Coiffeur 3volution",
  street: "Boulevard Lilienthal 39",
  zip: "8152",
  city: "Glattpark (Opfikon)",
  country: "CH",
  phone: "+41 44 829 30 33",
  phoneHref: "tel:+41448293033",
  email: "333volution@gmail.com",
  instagram: "https://www.instagram.com/3volution_/",
  instagramHandle: "@3volution_",
  /** Sister site on its own subdomain. Set NEXT_PUBLIC_COFFEE_URL per environment. */
  coffeeUrl: process.env.NEXT_PUBLIC_COFFEE_URL || "http://localhost:3000",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Boulevard+Lilienthal+39%2C+8152+Opfikon",
} as const;

/**
 * Online booking runs on Shore (shore.com), the salon's existing booking software.
 * `embedUrl` is the chrome-less widget the current site iframes; `bookingUrl` is the
 * full-page version for "open in new tab" and no-JS fallbacks. Services, prices,
 * staff and availability are managed in Shore, not here.
 */
export const shore = {
  embedUrl: "https://connect.shore.com/widget/nolayout/3volution",
  bookingUrl: "https://connect.shore.com/widget/3volution",
} as const;

/** Team. Names/handles from Instagram (BRAND-INFO.md §3b): confirm with the client before launch. */
export const team = [
  { key: "hair", name: "Tugba Cakmak", initials: "TC", instagram: "https://www.instagram.com/2ba_special/", handle: "@2ba_special" },
  { key: "beauty", name: "Derya", initials: "D", instagram: "https://www.instagram.com/derya_3volution/", handle: "@derya_3volution" },
] as const;

/** Opening hours by JS weekday (0 = Sunday), `null` = closed. coiffeur3volution.ch, checked 2026-11-18. */
export const openingHours: Record<number, readonly [open: string, close: string] | null> = {
  0: null,
  1: null,
  2: ["09:00", "19:00"],
  3: ["09:00", "19:00"],
  4: ["09:00", "19:00"],
  5: ["09:00", "19:00"],
  6: ["09:00", "16:00"],
};

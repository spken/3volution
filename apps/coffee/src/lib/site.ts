/** Language-independent business facts. Source: BRAND-INFO.md */
export const site = {
  name: "3volution Coffee",
  street: "Boulevard Lilienthal 39",
  zip: "8152",
  city: "Glattpark (Opfikon)",
  country: "CH",
  phone: "+41 44 829 30 33",
  phoneHref: "tel:+41448293033",
  email: "333volution@gmail.com",
  /** Bookings and enquiries. Digits only in `whatsappNumber` (wa.me format).
   *  PLACEHOLDER test number: replace with the shop's WhatsApp number before launch. */
  whatsapp: "+41 76 243 13 88",
  whatsappNumber: "41762431388",
  instagram: "https://www.instagram.com/3volution_/",
  instagramHandle: "@3volution_",
  /** Sister site. Set NEXT_PUBLIC_COIFFEUR_URL once the coiffeur subdomain is live; falls back to the current salon site. */
  hairdresserUrl: process.env.NEXT_PUBLIC_COIFFEUR_URL || "https://coiffeur3volution.ch/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Boulevard+Lilienthal+39%2C+8152+Opfikon",
} as const;

/**
 * Opening hours by JS weekday (0 = Sunday), `null` = closed. Same as the salon
 * (Google listing / coiffeur3volution.ch, checked 2026-11-18). Drives the booking
 * date picker, time slots and JSON-LD; keep in sync with `visit.hours` in both dictionaries.
 */
export const openingHours: Record<number, readonly [open: string, close: string] | null> = {
  0: null,
  1: null,
  2: ["09:00", "19:00"],
  3: ["09:00", "19:00"],
  4: ["09:00", "19:00"],
  5: ["09:00", "19:00"],
  6: ["09:00", "16:00"],
};

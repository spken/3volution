export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/**
 * Absolute site URL, only known once a domain exists.
 * Set SITE_URL (e.g. https://3volution-coffee.ch) to enable canonical + hreflang.
 */
export const siteUrl = process.env.SITE_URL?.replace(/\/$/, "") || undefined;

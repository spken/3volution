import type { Locale } from "./config";

const dictionaries = {
  de: () => import("./dictionaries/de").then((m) => m.de),
  en: () => import("./dictionaries/en").then((m) => m.en),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();

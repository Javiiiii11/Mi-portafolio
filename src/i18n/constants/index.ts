export const LOCALES = {
  es: {
    iso: "es-ES",
    name: "Español",
  },
  en: {
    iso: "en-US",
    name: "English",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "es";

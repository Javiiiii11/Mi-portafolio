import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";
import { onMounted } from "vue";

import type { Locale } from "../types";

export const useTranslations = () => {
  const normalizeLocale = (value: string | null | undefined): Locale | null => {
    if (value === "de") return "es";
    if (value === "en" || value === "es") return value;
    return null;
  };

  onMounted(() => {
    const storedLocale = normalizeLocale(window.localStorage.getItem("portfolio-locale"));
    locale.value = storedLocale ?? "es";
  });

  watch(locale, () => {
    if (!locale.value) return;
    window.localStorage.setItem("portfolio-locale", locale.value);
  });

  watch(
    locale,
    async (newLocale) => {
      if (!newLocale) return;
      translations.value = (await loadTranslations("common", newLocale)) ?? {};
    },
    { immediate: true },
  );
};

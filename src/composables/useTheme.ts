import { ref, watch } from "vue";

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";

const isTheme = (value: string | null): value is Theme => value === "light" || value === "dark";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  return isTheme(savedTheme) ? savedTheme : "light";
};

export const theme = ref<Theme>(getInitialTheme());

let isThemeWatcherReady = false;

export const useTheme = () => {
  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme;
  };

  if (!isThemeWatcherReady && typeof document !== "undefined") {
    isThemeWatcherReady = true;

    watch(
      theme,
      (newTheme) => {
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      },
      { immediate: true },
    );
  }

  return {
    theme,
    toggleTheme,
    setTheme,
  };
};

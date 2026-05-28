import { ref, watch, onMounted } from "vue";

export type Theme = "light" | "dark";

export const theme = ref<Theme>("dark");

export const useTheme = () => {
  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme;
  };

  // Aplicar tema al DOM
  watch(
    theme,
    (newTheme) => {
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("portfolio-theme", newTheme);
    },
    { immediate: true }
  );

  // Cargar tema guardado al montar
  onMounted(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    if (savedTheme) {
      theme.value = savedTheme;
    } else {
      // Detectar preferencia del sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      theme.value = prefersDark ? "dark" : "light";
    }
  });

  return {
    theme,
    toggleTheme,
    setTheme,
  };
};

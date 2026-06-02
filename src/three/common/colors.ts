import { Color } from "three";
import { theme } from "../../composables/useTheme";

export const colors = {
  beigeDark: new Color("rgb(233, 222, 208)"),
  beigeLight: new Color("#f5efe6"),
  darkBg: new Color("#1a1f28"),
  darkContactBg: new Color("#1a1f28"),
  darkShadow: new Color("rgb(60, 60, 60)"),
};

// Función para obtener el color de fondo según el tema
export const getBackgroundColor = (): Color => {
  if (!theme || !theme.value) return colors.beigeLight;
  return theme.value === "dark" ? colors.darkBg : colors.beigeLight;
};

// Función para obtener el color de fondo de contacto según el tema
export const getContactBackgroundColor = (): Color => {
  if (!theme || !theme.value) return colors.beigeDark;
  // Un gris oscuro que permite ver el personaje
  return theme.value === "dark" ? colors.darkContactBg : colors.beigeDark;
};

// Función para obtener el color de sombra en contacto según el tema
export const getContactShadowColor = (): Color => {
  if (!theme || !theme.value) return new Color("rgb(208, 185, 156)");
  // Una sombra más oscura y dramática para dar profundidad
  return theme.value === "dark" ? new Color("rgb(40, 45, 55)") : new Color("rgb(208, 185, 156)");
};

// Función para obtener el color de sombra según el tema
export const getShadowColor = (): Color => {
  if (!theme || !theme.value) return new Color("#8B7D6E");
  return theme.value === "dark" ? new Color("rgb(200, 180, 160)") : new Color("#8B7D6E");
};

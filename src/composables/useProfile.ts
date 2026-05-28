import { computed } from "vue";
import { locale } from "../i18n/store";
import { profile as profileES } from "../content/credentials";
import { profileEN } from "../content/credentials/en-profile";

export const useProfile = () => {
  const profile = computed(() => {
    return locale.value === "en" ? profileEN : profileES;
  });

  return profile;
};

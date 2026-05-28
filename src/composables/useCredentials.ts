import { computed } from "vue";
import { locale } from "../i18n/store";
import * as esData from "../content/credentials";
import * as enData from "../content/credentials/en";

export const useCredentials = () => {
  const data = computed(() => {
    return locale.value === "en" ? enData : esData;
  });

  const academicTitles = computed(() => data.value.academicTitles);
  const otherTitles = computed(() => data.value.otherTitles);
  const certificatesCompleted = computed(() => data.value.certificatesCompleted);
  const certificatesPending = computed(() => data.value.certificatesPending);

  return {
    academicTitles,
    otherTitles,
    certificatesCompleted,
    certificatesPending,
  };
};

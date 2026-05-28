<script setup lang="ts">
import Github from "./icons/Github.vue";
import Linkedin from "./icons/Linkedin.vue";
import Instagram from "./icons/Instagram.vue";
import Mail from "./icons/Mail.vue";
import X from "./icons/X.vue";
import Link from "./Link.vue";
import { t } from "../i18n/utils/translate";
import ButtonRound from "./ButtonRound.vue";

import { social } from "../content/social";

const props = defineProps<{
  variant?: "theme" | "background";
}>();

// map icon names to components
const icons = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  x: X,
  instagram: Instagram,
} as const;

const getAriaLabel = (name: string) => `${t("go-to")} ${name.charAt(0).toUpperCase() + name.slice(1)}`;
</script>

<template>
  <div class="social">
    <Link
      v-for="item in social"
      :key="item.name"
      external
      :href="item.url"
      :aria-label="getAriaLabel(item.name)"
      class="social-link"
      data-cursor="circle-white"
    >
      <ButtonRound
        renderAs="div"
        :variant="props.variant ?? 'theme'"
        class="children-unclickable"
        data-hoversound="hover"
      >
        <component :is="icons[item.name]" :aria-label="getAriaLabel(item.name)" external />
      </ButtonRound>
    </Link>
  </div>
</template>

<style scoped lang="scss">
.social {
  display: flex;
  gap: var(--space-md);
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0; /* avoid inline baseline clipping */
  vertical-align: middle;
  padding: 6px; /* ensure clickable area covers full circular button */
}

.social-link > .button-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* ensure the anchor receives the clicks */
}
</style>

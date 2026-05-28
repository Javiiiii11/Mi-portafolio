<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { transitions } from "../../../animations";
import { t } from "../../../i18n/utils/translate";
import Link from "../../../components/Link.vue";
import Social from "../../../components/Social.vue";
import ThemeSwitch from "../../../components/ThemeSwitch.vue";
import { useProfile } from "../../../composables/useProfile";

const profile = useProfile();

const contactElement = ref<HTMLElement | null>(null);

onMounted(() => {
  if (contactElement.value) {
    transitions.contact.setup(contactElement.value);
  }
});

onUnmounted(() => {
  transitions.contact.destroy();
});
</script>

<template>
  <div class="contact grid" ref="contactElement">
    <div class="contact-content">
      <div class="contact-title-wrapper">
        <h2 class="contact-title" v-html="t('lets-work-together')"></h2>
      </div>
      <div class="contact-profile">
        <div class="contact-profile-copy">
          <p class="contact-profile-kicker">{{ t('contact-profile') }}</p>
          <h3 class="contact-profile-name">{{ profile.name }}</h3>
          <p class="contact-profile-text">{{ profile.location }} · {{ profile.availability }}</p>
          <p class="contact-profile-text">{{ t('contact-copy') }}</p>
        </div>

        <div class="contact-profile-links">
          <Link external :href="`mailto:${profile.email}`" data-cursor="circle-white">{{ t('contact-email') }}</Link>
          <Link external :href="`tel:${profile.phone.replace(/\s+/g, '')}`" data-cursor="circle-white">{{ t('contact-phone') }}</Link>
          <Link external :href="profile.linkedin" data-cursor="circle-white">{{ t('contact-linkedin') }}</Link>
          <Link external :href="profile.github" data-cursor="circle-white">{{ t('contact-github') }}</Link>
        </div>
      </div>
      <Social variant="background" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: calc(var(--svw) * 100);
  overflow: hidden;
  min-height: calc(var(--lvh) * 100);
  padding: var(--space-outer);
  padding-top: var(--space-lg);

  @include mixins.mq("md") {
    padding-top: var(--space-xxl);
  }

  &-content {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    @include mixins.mq("sm") {
      grid-column: 1 / 8;
    }

    @include mixins.mq("md") {
      gap: var(--space-xl);
      grid-column: 1 / 6;
      padding-top: var(--space-lg);
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 6;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-title-wrapper {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
    margin-bottom: var(--space-md);
  }

  &-profile {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding: var(--space-md) 0;
    border-top: 1px solid rgba(97, 218, 251, 0.22);
    border-bottom: 1px solid rgba(97, 218, 251, 0.22);

    @include mixins.mq("md") {
      padding: var(--space-lg) 0;
    }

    &-kicker {
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--color-cyan-400);
      font-size: var(--font-size-xs);
      font-family: "ProFontWindows";
      margin-bottom: 4px;
    }

    &-name {
      font-size: var(--font-size-title-sm);
      font-weight: 900;
      line-height: 1.05;
    }

    &-text {
      color: var(--color-text-400);
      line-height: var(--line-height-copy);
      max-width: 44ch;
    }

    &-links {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        padding: 8px 12px;
        background: var(--color-card-bg, rgba(255, 255, 255, 0.42));
        border: 1px solid var(--color-card-border, rgba(38, 60, 112, 0.12));
        font-size: var(--font-size-sm);
        font-weight: 700;
        transition: all 0.2s ease;

        @include mixins.hover {
          &:hover {
            background-color: var(--color-card-bg-hover, var(--color-hover));
            color: var(--color-white-400);
            border-color: var(--color-card-border, var(--color-hover));
          }
        }
      }
    }
  }
}
</style>

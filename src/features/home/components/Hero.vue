<script setup>
import Button from "../../../components/Button.vue";
import Banner from "../../../components/Banner.vue";
import { preloaderVisible } from "../../../composables/usePreloader";
import { t } from "../../../i18n/utils/translate";
import AppearingText from "../../../components/AppearingText.vue";
</script>

<template>
  <div class="hero">
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-content-copys">
          <p class="hero-kicker">{{ t('hero-kicker') }}</p>
          <h1 class="hero-title">
            <span>Javier</span>
            <span class="hero-title-group">
              <span>Rodríguez</span>
              <span>Jiménez</span>
            </span>
          </h1>
          <p class="hero-meta">{{ t('hero-meta') }}</p>
          <Banner class="hero-banner" :copy="t('job-title')" v-if="!preloaderVisible" animated />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  max-height: calc(var(--lvh) * 100);
  height: calc(var(--lvh) * 100);
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  &-content {
    position: absolute;
    inset: 0;
    min-height: 0;
    padding: 0;

    @include mixins.landscape {
      align-items: center;
      justify-content: center;
      min-height: 100%;
      align-items: center;
      padding-top: var(--space-xl);
      padding-right: var(--space-outer);
      padding-left: var(--space-outer);
      padding-bottom: var(--space-xl);

      @include mixins.mq("md") {
        padding-bottom: 30%;
      }

      @include mixins.mq("lg") {
        padding-bottom: 5%;
      }
    }

    &-inner {
      transform-origin: center center;
      grid-column: 1 / -1;
      gap: var(--space-xxl);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: min(18rem, calc(100% - var(--space-outer) * 2));
      max-width: 18rem;
      position: absolute;
      left: var(--space-outer);
      top: clamp(5.5rem, 14vh, 8.5rem);
      z-index: 2;

      @include mixins.mq("sm") {
        max-width: 19.5rem;
        width: min(19.5rem, calc(100% - var(--space-outer) * 2));
        top: clamp(6.5rem, 16vh, 10rem);
      }

      @include mixins.landscape {
        position: relative;
        left: 0;
        top: auto;
        transform: translateX(0);
        grid-column: 2 / 13;
        align-self: center;
        justify-content: center;
        width: fit-content;
        max-width: 36rem;
      }
    }

    &-copys {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      align-items: flex-start;
      width: 100%;

      @include mixins.mq("md") {
        gap: var(--space-md);
      }
    }

    &-button {
      width: fit-content;
    }
  }

  &-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: clamp(2.2rem, 7.6vw, 3.4rem);
    line-height: 0.95;
    max-width: none;

    @include mixins.mq("sm") {
      font-size: clamp(2.5rem, 6.8vw, 3.8rem);
    }

    @include mixins.landscape {
      font-size: var(--font-size-title-lg);
      max-width: none;
    }

    @include mixins.landscape-large {
      @include mixins.mq("sm") {
        font-size: var(--font-size-title-xl);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xxl);
      }
    }

    &-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @include mixins.landscape {
        flex-direction: row;
        gap: 0.2em;
      }
    }
  }

  &-kicker {
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-family: "ProFontWindows";
    color: var(--color-cyan-400);
    font-size: var(--font-size-xs);
  }

  &-meta {
    font-size: clamp(var(--font-size-sm), 3.8vw, var(--font-size-md));
    line-height: var(--line-height-copy);
    color: var(--color-text-400);
    max-width: 28ch;
  }

  &-banner {
    position: relative;
    margin-top: var(--space-xs);
    z-index: 10;
    transform: rotate(-3deg);

    @include mixins.landscape {
      position: absolute;
      bottom: 0;
      right: -16px;
      margin-top: 0;
      transform: rotate(-5deg) translate(0, 65%);
    }

    @include mixins.mq("sm") {
      @include mixins.landscape {
        right: -24px;
        transform: rotate(-5deg) translate(0, 70%);
      }
    }

    @include mixins.mq("lg") {
      right: -32px;
      transform: rotate(-5deg) translate(0, 80%);
    }
  }
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import Social from "./Social.vue";
import Link from "./Link.vue";
import LangSwitch from "./LangSwitch.vue";
import NotchSection from "./NotchSection.vue";
import Download from "./icons/Download.vue";
import Copy from "./icons/Copy.vue";
import { t } from "../i18n/utils/translate";
import { useProfile } from "../composables/useProfile";
import ButtonRound from "./ButtonRound.vue";
import { lenis } from "../composables/useScroll";
import ArrowRightLong from "./icons/ArrowRightLong.vue";

const profile = useProfile();

interface Props {
  withSocial?: boolean;
}

const emailCopied = ref(false);

const handleBackToTop = () => {
  if (!lenis.value) return;
  lenis.value.scrollTo(0);
};

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/curriculum Javier Rodríguez.pdf";
  link.download = "curriculum Javier Rodríguez.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleCopyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
    emailCopied.value = true;
    setTimeout(() => {
      emailCopied.value = false;
    }, 2000);
  } catch (error) {
    console.error("Error al copiar email:", error);
    // Fallback: intentar con el método antiguo
    const textarea = document.createElement("textarea");
    textarea.value = profile.email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    emailCopied.value = true;
    setTimeout(() => {
      emailCopied.value = false;
    }, 2000);
  }
};

const { withSocial = true } = defineProps<Props>();
</script>

<template>
  <footer class="footer">
    <NotchSection class="footer-notch" />
    <div class="footer-content">
      <div
        class="footer-back-to-top"
        tabindex="0"
        @click="handleBackToTop"
        @keydown.enter="handleBackToTop"
        data-cursor="circle-white"
        data-sound="click"
      >
        <ButtonRound renderAs="div" variant="border" class="children-unclickable" data-hoversound="hover">
          <ArrowRightLong class="footer-back-to-top-icon" />
        </ButtonRound>
      </div>
      <div class="footer-top">
        <Social v-if="withSocial" />
        <div class="footer-top-links">
          <div class="footer-top-links-legal">
            <button class="footer-link footer-action-btn" @click="handleDownloadCV" data-cursor="circle-white" data-sound="click" data-hoversound="hover">
              <Download />
              {{ t("download-cv") }}
            </button>
            <button class="footer-link footer-action-btn" :class="{ 'footer-action-btn--copied': emailCopied }" @click="handleCopyEmail" data-cursor="circle-white" data-sound="click" data-hoversound="hover">
              <Copy />
              {{ emailCopied ? t("email-copied") : t("copy-email") }}
            </button>
          </div>
          <LangSwitch />
        </div>
      </div>
      <div class="footer-credits">
        <p>© {{ new Date().getFullYear() }} Javier Rodríguez Jiménez</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: var(--color-background-300, var(--color-beige-400));
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
    width: 100%;
    max-width: calc(var(--breakpoint-xxxl));
    padding: calc(var(--space-outer) + var(--space-sm)) var(--space-outer);
    position: relative;
  }

  &-back-to-top {
    cursor: pointer;

    @include mixins.mq("md") {
      position: absolute;
      top: calc(var(--space-outer) + var(--space-sm));
      left: 50%;
      transform: translateX(-50%);
    }

    &-icon {
      transform: rotate(-90deg);
    }
  }

  &-top {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-xl);

    @include mixins.mq("md") {
      gap: var(--space-md);
      flex-direction: row;
    }

    &-links {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      gap: var(--space-md);

      &-legal {
        display: flex;
        flex-direction: row;
        gap: var(--space-md);
      }

      @include mixins.mq("md") {
        gap: var(--space-lg);
        flex-direction: row;
        position: relative;
        margin-left: auto;
      }
    }
  }

  &-link {
    font-weight: 700;
  }

  &-credits {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    width: 100%;
    font-size: var(--font-size-sm);
    text-align: center;
  }

  &-notch {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    color: var(--color-background-300, var(--color-beige-400));
    --icon-color: var(--color-background-300, var(--color-beige-400));
  }

  &-action-btn {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    background: none;
    border: 2px solid var(--color-grayscale-400);
    color: inherit;
    padding: var(--space-sm) var(--space-md);
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
    font-size: inherit;
    font-weight: 700;
    border-radius: 100px;
    --icon-color: currentColor;

    &:hover {
      background-color: var(--color-orange-400);
      color: var(--color-white-400);
      border-color: var(--color-orange-400);
      --icon-color: var(--color-white-400);
    }

    svg {
      width: 18px;
      height: 18px;
      transition: all 0.2s ease;
      color: var(--icon-color);
    }

    &--copied {
      background-color: var(--color-orange-400);
      color: var(--color-white-400);
      border-color: var(--color-orange-400);
      --icon-color: var(--color-white-400);
    }
  }
}
</style>

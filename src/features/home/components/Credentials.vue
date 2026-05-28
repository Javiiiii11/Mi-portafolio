<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, computed, watch } from "vue";
import gsap from "gsap";
import Banner from "../../../components/Banner.vue";
import NotchSection from "../../../components/NotchSection.vue";
import Heart from "../../../components/icons/Heart.vue";
import Droplet from "../../../components/icons/Droplet.vue";
import AlertCircle from "../../../components/icons/AlertCircle.vue";
import Users from "../../../components/icons/Users.vue";
import Zap from "../../../components/icons/Zap.vue";
import Book from "../../../components/icons/Book.vue";
import Cpu from "../../../components/icons/Cpu.vue";
import Code from "../../../components/icons/Code.vue";
import Shield from "../../../components/icons/Shield.vue";
import Star from "../../../components/icons/Star.vue";
import Award from "../../../components/icons/Award.vue";
import { t } from "../../../i18n/utils/translate";
import { useCredentials } from "../../../composables/useCredentials";
import { locale } from "../../../i18n/store";

type CertificateState = "completed" | "pending";

type CertificateView = (typeof certificatesCompleted)[number] & {
  state: CertificateState;
  image?: string;
  imageAlt?: string;
};

const iconComponents: Record<string, any> = {
  Heart,
  Droplet,
  AlertCircle,
  Users,
  Zap,
  Book,
  Cpu,
  Code,
  Shield,
  Star,
  Award,
};

const getIconComponent = (iconName?: string) => {
  return iconName ? iconComponents[iconName] : null;
};

const { academicTitles, otherTitles, certificatesCompleted, certificatesPending } = useCredentials();

const completedCertificates = computed(() =>
  certificatesCompleted.value.map((entry) => ({
    ...entry,
    state: "completed" as const,
  }))
);

const pendingCertificates = computed(() =>
  certificatesPending.value.map((entry) => ({
    ...entry,
    state: "pending" as const,
  }))
);

const allCertificates = computed(() => [...completedCertificates.value, ...pendingCertificates.value]);

const wrapperRef = ref<HTMLElement | null>(null);
const selectedCertificateModal = ref<CertificateView | null>(null);
const showCertificateModal = ref(false);
let animationContext: gsap.Context | null = null;

const openCertificateModal = (certificate: CertificateView) => {
  if (certificate.state === 'completed') {
    selectedCertificateModal.value = certificate;
    showCertificateModal.value = true;
  }
};

const closeCertificateModal = () => {
  showCertificateModal.value = false;
  setTimeout(() => {
    selectedCertificateModal.value = null;
  }, 300);
};

const animate = () => {
  animationContext?.revert();
  animationContext = null;

  if (!wrapperRef.value) return;

  animationContext = gsap.context(() => {
    const items = wrapperRef.value?.querySelectorAll<HTMLElement>(".credentials-reveal");

    if (!items || items.length === 0) return;

    gsap.fromTo(
      items,
      { y: 26, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.72,
        stagger: 0.075,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.value,
          start: "top 72%",
        },
      },
    );
  }, wrapperRef.value);
};

onMounted(async () => {
  await nextTick();
  animate();
});

watch(locale, async () => {
  await nextTick();
  animate();
});

onBeforeUnmount(() => {
  animationContext?.revert();
  animationContext = null;
});
</script>

<template>
  <section class="credentials" ref="wrapperRef" id="credentials">
    <NotchSection class="credentials-notch-start" />
    <NotchSection class="credentials-notch-end" />

    <div class="grid">
      <div class="credentials-title credentials-reveal">
        <Banner class="credentials-title-banner" :copy="t('titles-and-certificates')" size="sm" animated />
        <h2 class="credentials-title-copy">{{ t("credentials") }}</h2>
      </div>
    </div>

    <div class="grid">
      <div class="credentials-cards-wrapper">
        <div class="credentials-section credentials-reveal">
          <div class="credentials-section-title-with-icon">
            <Book class="credentials-section-icon" />
            <h3 class="credentials-section-title">{{ t('academic-titles') }}</h3>
          </div>
          <div class="credentials-cards credentials-cards-academic">
            <article v-for="entry in academicTitles" :key="entry.title" class="credentials-card">
              <p class="credentials-card-issuer">{{ entry.issuer }}</p>
              <div class="credentials-card-title-with-icon">
                <component v-if="entry.icon" :is="getIconComponent(entry.icon)" class="credentials-card-icon" />
                <h3 class="credentials-card-title">{{ entry.title }}</h3>
              </div>
              <p class="credentials-card-note">{{ entry.note }}</p>
              <div class="credentials-card-tags">
                <span v-for="tag in entry.tags" :key="tag" class="credentials-card-tag">{{ tag }}</span>
              </div>
            </article>
          </div>
        </div>

        <div class="credentials-section credentials-reveal">
          <div class="credentials-section-title-with-icon">
            <Star class="credentials-section-icon" />
            <h3 class="credentials-section-title">{{ t('other-titles') }}</h3>
          </div>
          <div class="credentials-cards credentials-cards-others">
            <article v-for="entry in otherTitles" :key="entry.title" class="credentials-card credentials-card-mini">
              <p class="credentials-card-issuer">{{ entry.issuer }}</p>
              <div class="credentials-card-title-with-icon">
                <component v-if="entry.icon" :is="getIconComponent(entry.icon)" class="credentials-card-icon" />
                <h3 class="credentials-card-title">{{ entry.title }}</h3>
              </div>
              <p class="credentials-card-note">{{ entry.note }}</p>
              <div class="credentials-card-tags">
                <span v-for="tag in entry.tags" :key="tag" class="credentials-card-tag">{{ tag }}</span>
              </div>
            </article>
          </div>
        </div>

        <div class="credentials-section credentials-reveal">
          <div class="credentials-section-title-with-icon">
            <Award class="credentials-section-icon" />
            <h3 class="credentials-section-title">{{ t('certificates') }}</h3>
          </div>
          <div class="credentials-cards credentials-cards-certifications">
            <button
              v-for="entry in allCertificates"
              :key="entry.title"
              type="button"
              class="credentials-card credentials-card-certificate"
              :class="{ 'credentials-card-certificate-pending': entry.state === 'pending', 'credentials-card-certificate-completed': entry.state === 'completed' }"
              @click="openCertificateModal(entry)"
              :disabled="entry.state === 'pending'"
              :data-cursor="entry.state === 'completed' ? 'search' : undefined"
            >
              <div class="credentials-card-certificate-top">
                <p class="credentials-card-issuer">{{ entry.category }}</p>
                <span class="credentials-card-year">{{ entry.date }}</span>
              </div>
              <h3 class="credentials-card-title">{{ entry.title }}</h3>
              <p class="credentials-card-note">{{ entry.issuer }}</p>
              <div class="credentials-card-footer">
                <span
                  :class="[
                    'credentials-card-status',
                    { 'credentials-card-status-pending': entry.state === 'pending' },
                  ]"
                >
                  {{ entry.state === 'completed' ? t('certificate-completed') : t('certificate-not-completed') }}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <transition name="modal-fade">
      <div v-if="showCertificateModal" class="credentials-modal-overlay" @click="closeCertificateModal">
        <div class="credentials-modal" @click.stop>
          <button class="credentials-modal-close" @click="closeCertificateModal" :aria-label="t('close')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div v-if="selectedCertificateModal" class="credentials-modal-content">
            <div class="credentials-modal-image-wrapper">
              <template v-if="selectedCertificateModal.image">
                <img
                  :src="selectedCertificateModal.image"
                  :alt="selectedCertificateModal.imageAlt || selectedCertificateModal.title"
                  class="credentials-modal-image"
                />
              </template>
              <template v-else>
                <div class="credentials-modal-placeholder">
                  <p>{{ t('certificates-placeholder') }}</p>
                </div>
              </template>
            </div>

            <div class="credentials-modal-info">
              <p class="credentials-modal-category">{{ selectedCertificateModal.category }}</p>
              <h3 class="credentials-modal-title">{{ selectedCertificateModal.title }}</h3>
              <p class="credentials-modal-issuer"><strong>{{ t('platform') }}:</strong> {{ selectedCertificateModal.issuer }}</p>
              <p class="credentials-modal-date"><strong>{{ t('year-completed') }}:</strong> {{ selectedCertificateModal.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped lang="scss">
.credentials {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  gap: var(--space-xl);
  padding-left: var(--space-outer);
  padding-right: var(--space-outer);
  padding-top: 96px;
  padding-bottom: 96px;
  background:
    radial-gradient(circle at top left, rgba(97, 218, 251, 0.08), transparent 34%),
    radial-gradient(circle at bottom right, rgba(255, 170, 90, 0.14), transparent 32%),
    linear-gradient(180deg, var(--color-beige-500) 0%, var(--color-beige-400) 100%);

  @include mixins.mq("md") {
    padding-top: 144px;
    padding-bottom: 144px;
    gap: var(--space-xxl);
  }

  @include mixins.mq("lg") {
    gap: var(--space-xxxl);
  }

  &-title {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;

    @include mixins.mq("md") {
      grid-column: 1 / 10;
    }

    @include mixins.mq("lg") {
      grid-column: 3 / 9;
    }

    &-copy {
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

    &-banner {
      position: absolute;
      top: 0;
      left: -8px;
      transform: translate(0, -20%) rotate(-4deg);

      @include mixins.mq("lg") {
        left: -16px;
        transform: translate(0, -20%) rotate(-6deg);
      }
    }
  }

  &-notch {
    &-start {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-100%);
      color: var(--color-beige-500);
      --icon-color: var(--color-beige-500);
    }

    &-end {
      position: absolute;
      bottom: 0;
      left: 0;
      color: var(--color-beige-600);
      --icon-color: var(--color-beige-600);
    }
  }

  &-cards-wrapper {
    width: 100%;
    grid-column: 1 / span 12;
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);

    @include mixins.mq("lg") {
      grid-column: 2 / span 10;
      gap: var(--space-xxl);
    }
  }

  &-section {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);

    &-title {
      font-size: var(--font-size-title-sm);
      font-weight: 900;
      line-height: var(--line-height-title);
    }

    &-title-with-icon {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
    }

    &-icon {
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--color-orange-400);
    }
  }

  &-cards {
    display: grid;
    gap: var(--space-md);

    &-academic,
    &-others,
    &-certifications {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));

      @include mixins.mq("md") {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      }

      @include mixins.mq("lg") {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      }
    }
  }

  &-card {
    padding: var(--space-md);
    border-radius: var(--radius-md);
    background: var(--color-card-bg);
    border: 1px solid var(--color-card-border);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    min-height: 100%;
    width: 100%;
    text-align: left;
    appearance: none;
    cursor: default;
    position: relative;
    transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      background-color 0.25s ease,
      box-shadow 0.25s ease;

    &:hover {
      transform: translateY(-6px);
      border-color: rgba(97, 218, 251, 0.9);
      background: var(--color-card-bg-hover);
      box-shadow: 0 18px 36px rgba(20, 34, 58, 0.11);
    }

    &-certificate {
      min-height: 160px;
    }

    &-certificate-pending {
      opacity: 0.92;
    }

    &-certificate-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--space-xs);
    }

    &-year,
    &-issuer {
      color: var(--color-cyan-400);
      font-family: "ProFontWindows";
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: var(--font-size-xs);
    }

    &-title {
      font-size: var(--font-size-title-sm);
      font-weight: 900;
      line-height: var(--line-height-title);
    }

    &-title-with-icon {
      display: flex;
      align-items: flex-start;
      gap: var(--space-sm);
    }

    &-icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--color-orange-400);
      margin-top: 2px;
    }

    &-icon-badge {
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 0;
      border-left: 45px solid transparent;
      border-top: 45px solid var(--color-orange-400);
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        position: absolute;
        top: 6px;
        right: 6px;
        width: 18px;
        height: 18px;
        color: white;
      }
    }

    &-note {
      font-size: var(--font-size-md);
      line-height: var(--line-height-copy);
    }

    &-tags {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      margin-top: auto;
    }

    &-tag {
      border-radius: 999px;
      padding: 3px 10px;
      border: var(--stroke-sm) solid var(--color-cyan-400);
      color: var(--color-cyan-400);
      font-family: "ProFontWindows";
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: var(--font-size-xs);
    }

    &-footer {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: var(--space-xs);
    }

    &-status {
      display: inline-flex;
      align-items: center;
      border-radius: 999px;
      padding: 4px 8px;
      background: rgba(37, 154, 71, 0.14);
      color: rgb(37, 154, 71);
      font-size: var(--font-size-xs);
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;

      &-pending {
        background: rgba(255, 170, 90, 0.16);
        color: rgb(184, 96, 0);
      }
    }

    &-certificate-completed {
      cursor: pointer;

      &:hover {
        transform: translateY(-6px);
        border-color: rgba(97, 218, 251, 0.9);
        background: rgba(255, 255, 255, 0.72);
        box-shadow: 0 18px 36px rgba(20, 34, 58, 0.11);
      }
    }
  }

  &-modal-overlay {
    position: fixed;
    inset: 0;
    background: var(--color-modal-overlay-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
  }

  &-modal {
    position: relative;
    background: var(--color-background-400);
    border-radius: var(--radius-lg);
    box-shadow: 0 20px 60px rgba(20, 34, 58, 0.3);
    width: 90vw;
    height: 85vh;
    max-width: 1000px;
    overflow-y: auto;
    padding: var(--space-lg);
    animation: modal-slide-in 0.3s ease-out;

    @include mixins.mq("md") {
      width: 85vw;
      height: 82vh;
      max-width: 1100px;
      padding: var(--space-xl);
    }

    @include mixins.mq("lg") {
      width: 80vw;
      height: 80vh;
      max-width: 1200px;
      padding: var(--space-xxl);
    }

    &-close {
      position: absolute;
      top: var(--space-md);
      right: var(--space-md);
      background: none;
      border: none;
      cursor: pointer;
      color: var(--color-text-400);
      transition: all 0.2s ease;
      padding: var(--space-xs);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;

      @include mixins.hover {
        &:hover {
          background: var(--color-orange-400);
          color: white;
        }
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }

    &-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-xl);
      height: calc(100% - 60px);

      @include mixins.mq("md") {
        grid-template-columns: 1.5fr 0.8fr;
        gap: var(--space-xxl);
      }

      @include mixins.mq("lg") {
        grid-template-columns: 1.8fr 0.7fr;
      }
    }

    &-image-wrapper {
      border-radius: var(--radius-md);
      overflow: visible;
      background: var(--color-card-bg);
      min-height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;

      @include mixins.mq("md") {
        min-height: auto;
        max-height: 100%;
      }
    }

    &-image {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      display: block;
      border: var(--stroke-lg) solid var(--color-orange-400);
      border-radius: var(--radius-md);
    }

    &-placeholder {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      padding: var(--space-lg);
      text-align: center;
      color: var(--color-text-400);
      background: linear-gradient(135deg, rgba(97, 218, 251, 0.08), rgba(255, 170, 90, 0.08));
    }

    &-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--space-md);
    }

    &-category {
      color: var(--color-cyan-400);
      font-family: "ProFontWindows";
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: var(--font-size-xs);
      font-weight: 800;
    }

    &-title {
      font-size: var(--font-size-title-md);
      font-weight: 900;
      line-height: var(--line-height-title);
      color: var(--color-text-500);
    }

    &-issuer {
      font-size: var(--font-size-md);
      line-height: var(--line-height-copy);
      color: var(--color-text-400);
    }

    &-date {
      font-size: var(--font-size-md);
      color: var(--color-text-400);

      strong {
        color: var(--color-text-500);
        font-weight: 700;
      }
    }
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@keyframes modal-slide-in {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

<script setup lang="ts">
import { computed } from "vue";
import { tagLabels, type TagVariant } from "./tagVariants";

const props = defineProps<{
  variant: TagVariant;
}>();

const classes = computed(() => ["tag", `tag-variant-${props.variant}`]);
</script>

<template>
  <div :class="classes">
    <p class="tag-copy">{{ tagLabels[props.variant] }}</p>
  </div>
</template>

<style scoped lang="scss">
.tag {
  border-radius: var(--radius-md);
  padding: calc(var(--space-xxs) - var(--stroke-md)) calc(var(--space-sm  ) - var(--stroke-md));
  border: var(--stroke-md) solid transparent;

  &-copy {
    font-size: var(--font-size-xs);
    font-weight: 700;
  }

  &-variant {
    &-three {
      background-color: #ed9c55;
      color: #492708;
    }

    &-react {
      background-color: #61dafb;
      color: #0f2e36;
    }

    &-websockets {
      background-color: #2674a4;
      color: white;
    }

    &-redis {
      background-color: #ce4036;
      color: white;
    }

    &-html {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-css {
      color: var(--color-text-400);
      border-color: var(--color-grayscale-400);
    }

    &-javascript {
      background-color: #ffdf4f;
      color: #362d03;
    }

    &-kotlin {
      background-color: #7f52ff;
      color: white;
    }

    &-jetpack-compose {
      background-color: #3ddc84;
      color: #07351d;
    }

    &-flask {
      background-color: #f4f4f4;
      color: #151515;
    }

    &-python {
      background-color: #3776ab;
      color: white;
    }

    &-firebase {
      background-color: #ffca28;
      color: #3b2900;
    }

    &-android-studio {
      background-color: #2f6c92;
      color: white;
    }

    &-pycharm {
      background-color: #21d789;
      color: #062717;
    }

    &-vscode {
      background-color: #007acc;
      color: white;
    }

    &-android {
      background-color: #a4c639;
      color: #1f2b0a;
    }

    &-windows {
      background-color: #00a4ef;
      color: white;
    }

    &-node {
      background-color: #237d23;
      color: white;
    }

    &-next {
      background-color: white;
      color: black;
    }

    &-kubernetes {
      background-color: #326ce5;
      color: white;
    }

    &-postgresql {
      background-color: #2f6c92;
      color: white;
    }

    &-ogl {
      background-color: #0e5495;
      color: white;
    }

    &-glsl {
      background-color: #95630e;
      color: white;
    }

    &-godot {
      background-color: #478cbf;
      color: white;
    }

    &-gdscript {
      background-color: #3a8e9f;
      color: white;
    }

    &-2d {
      background-color: #8B7355;
      color: white;
    }

    &-multiplayer {
      background-color: #6B8E23;
      color: white;
    }

    &-local-save {
      background-color: #8B4513;
      color: white;
    }
  }
}
</style>

<script setup lang="ts">
import { useTheme } from "../composables/useTheme";

const { theme, toggleTheme } = useTheme();

const handleClick = () => {
  toggleTheme();
};
</script>

<template>
  <button class="theme-btn" @click="handleClick" aria-label="Toggle theme" data-cursor="circle-white">
    {{ theme === 'light' ? '☀️' : '🌙' }}
  </button>
</template>

<style scoped>
.theme-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
  pointer-events: auto;
}

.theme-btn:hover {
  background: rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
}
</style>

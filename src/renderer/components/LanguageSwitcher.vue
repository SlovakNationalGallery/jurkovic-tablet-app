<template>
  <div class="flex gap-2">
    <button
      :class="{ 'font-bold': lang === 'en' }"
      @click="toggle"
      :disabled="lang === 'en'"
    >
      ENG
    </button>
    <button
      :class="{ 'font-bold': lang === 'sk' }"
      @click="toggle"
      :disabled="lang === 'sk'"
    >
      SK
    </button>
  </div>
</template>

<script setup lang="ts">
import { useLang } from "../composables/lang";
const { lang, toggle } = useLang();
</script>

<template>
  <div class="flex flex-col h-screen bg-[#FFF3E3]">
    <div class="w-full h-[80px] flex items-center justify-between p-6 text-2xl">
      <div class="flex items-center gap-4">
        <button @click="router.back()"><ArrowUp class="w-8 h-8" /></button>
        <span class="font-bold">Dušan Jurkovič</span>
        <span>Práce lidu našeho</span>
        <span>1905</span>
      </div>
      <LanguageSwitcher />
    </div>
    <div class="grow flex items-center">
      {{ publication.title }}
    </div>
    <div class="w-full h-[72px] flex items-center justify-center p-6 text-neutral-900">
      <Logo class="h-6 w-6" />
      <span class="ml-4 text-xl">Slovenská národná galéria</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { LIBRARY } from "../consts";
import ArrowUp from "../icons/ArrowUp.vue";
import LanguageSwitcher from "../components/LanguageSwitcher.vue";
import Logo from "../icons/Logo.vue";

const route = useRoute();
const router = useRouter();
const index = route.params.index;
const publication = LIBRARY[Number(index)];
</script>

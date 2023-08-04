<template>
  <div class="flex flex-col h-screen bg-[#FFF3E3]">
    <div class="w-full h-[80px] flex items-center justify-between p-6 text-2xl">
      <div class="flex items-center gap-4">
        <button @click="router.back()"><ArrowUp class="w-8 h-8" /></button>
        <span class="font-bold">Dušan Jurkovič</span>
        <span>{{ trans("worksOfSlovakPeople") }}</span>
        <span>1905</span>
      </div>
      <LanguageSwitcher />
    </div>
    <div class="grow flex items-center">
      <div class="w-full flex gap-x-11 snap-x snap-mandatory overflow-x-auto no-scrollbar pt-16 pb-6 px-11">
        <div class="snap-center shrink-0" v-for="index in publication.pages">
            <img
              class="w-[809px] h-auto"
              :src="`library/${publication.id}/${publication.id}-${String(index).padStart(2, '0')}.jpg`"
            />
        </div>
      </div>
    </div>
    <div class="w-full h-[72px] flex items-center justify-center p-6 text-neutral-900">
      <Logo class="h-6 w-6" />
      <span class="ml-4 text-xl">{{ trans("sng") }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { LIBRARY } from "../consts";
import ArrowUp from "../icons/ArrowUp.vue";
import LanguageSwitcher from "../components/LanguageSwitcher.vue";
import { useLang } from "../composables/lang";
import Logo from "../icons/Logo.vue";

const route = useRoute();
const router = useRouter();
const index = route.params.index;
const publication = LIBRARY[Number(index)];
const { trans } = useLang();
</script>

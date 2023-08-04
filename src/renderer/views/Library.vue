<template>
  <div class="flex flex-col h-screen bg-[#FFF3E3]">
    <div class="w-full h-[80px] flex items-center justify-between p-6 text-2xl">
      <div class="flex items-center gap-4">
        <span class="font-bold">Dušan Jurkovič</span>
        <span>{{ trans("worksOfSlovakPeople") }}</span>
        <span>1905</span>
      </div>
      <LanguageSwitcher />
    </div>
    <div class="grow flex items-center">
      <div
        class="w-full flex gap-x-11 snap-x snap-mandatory overflow-x-auto no-scrollbar pt-16 pb-6 px-[90px]"
      >
        <div
          class="snap-center shrink-0"
          :book-index="index"
          ref="booksRefs"
          v-for="(publication, index) in LIBRARY"
        >
          <router-link :to="`/publication/${index}`" tag="button">
            <div class="relative">
              <div class="absolute w-full h-full bg-black z-0 rounded-xl"></div>
              <img
                :class="`${index !== activeBookIndex ? 'translate-x-4 -translate-y-4' : 'translate-x-0' } transition-transform duration-300 shrink-0 w-[557px] h-[700px] rounded-xl border-2 border-black`"
                :src="`library/images/${publication.id}.jpg`"
              />
            </div>
            <h2 class="text-4xl font-bold text-neutral-900 py-6">
              {{ publication.title }}
            </h2>
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="w-full h-[72px] flex items-center justify-center p-6 text-neutral-900"
    >
      <Logo class="h-6 w-6" />
      <span class="ml-4 text-xl">{{ trans("sng") }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import LanguageSwitcher from "../components/LanguageSwitcher.vue";
import { LIBRARY } from "../consts";
import { useLang } from "../composables/lang";
import Logo from "../icons/Logo.vue";
const { trans } = useLang();

const activeBookIndex = ref<Number>();
const booksRefs = ref([]);

const intersectionObserver = new IntersectionObserver(
  (entries, _) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeBookIndex.value = Number(entry.target.getAttribute("book-index"));
      }
    });
  },
  { threshold: 1 }
);

onMounted(() =>
  booksRefs.value.map((bookRef) => intersectionObserver.observe(bookRef))
);
</script>

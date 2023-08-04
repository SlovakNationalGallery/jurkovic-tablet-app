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
              <div
                :class="`${
                  index !== activeBookIndex
                    ? 'translate-x-4 -translate-y-4'
                    : 'translate-x-0'
                } transition-transform duration-300 shrink-0 w-[557px] h-[700px] rounded-xl border-2 border-black`"
              >
                <img
                  :class="`${
                    index !== activeBookIndex ? 'absolute inset-0' : 'rounded-xl absolute inset-0 animate-slideshow1'
                  }`"
                  :src="`library/images/${publication.id}.jpg`"
                />
                <template v-for="(pageNumber, pageIndex) in publication.featuredPages">
                  <img
                  :class="`${
                    index !== activeBookIndex ? 'hidden' : 'rounded-xl absolute inset-0 animate-slideshow' + (pageIndex+2)
                  }`"
                  :src="`library/${publication.id}/${publication.id}-${String(pageNumber).padStart(2, '0')}.jpg`"
                />
                </template>
              </div>
            </div>
            <h2 class="text-4xl font-bold text-neutral-900 py-6">
              {{ publication.title }}
            </h2>
          </router-link>
        </div>
      </div>
    </div>
    <div class="w-full h-[72px] flex items-center justify-between p-6 text-neutral-900">
      <div class="flex items-center">
        <Logo class="h-6 w-6" />
        <span class="ml-4 text-xl">{{ trans("sng") }}</span>
      </div>
      <button class="" @click="isPopoverOpen = !isPopoverOpen">
        <Close class="w-8 h-8" v-if="isPopoverOpen" />
        <Info class="w-8 h-8" v-else />
      </button>
      <dialog
      :open="isPopoverOpen"
      class="absolute rounded-xl bottom-16 border-2 border-black ml-auto mr-6 p-6 w-96"
    >
      <article class="flex flex-col">
        <p class="pt-2 text-lg leading-6">
          {{ trans("worksOfSlovakPeopleDescription1") }}
        </p>
        <p class="pt-2 text-lg leading-6">
          {{ trans("worksOfSlovakPeopleDescription2") }}
        </p>
      </article>
    </dialog>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import LanguageSwitcher from "../components/LanguageSwitcher.vue";
import { LIBRARY } from "../consts";
import { useLang } from "../composables/lang";
import Logo from "../icons/Logo.vue";
import Info from "../icons/Info.vue";
import Close from "../icons/Close.vue";

const { trans } = useLang();
const isPopoverOpen = ref<boolean>(false);

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

onMounted(() => booksRefs.value.map((bookRef) => intersectionObserver.observe(bookRef)));
</script>

<template>
  <div class="flex flex-col h-screen bg-[#FFF3E3]">
    <div class="w-full h-[80px] flex items-center justify-between p-6 text-2xl">
      <div>
        <span class="font-bold mr-4">Dušan Jurkovič</span>
        <span class="mr-4">Práce lidu našeho</span>
        <span>1905</span>
      </div>
      <div>ENG <span class="font-bold">SK</span></div>
    </div>
    <div class="grow flex items-center">
      <div class="w-full flex gap-x-11 snap-x snap-mandatory overflow-x-auto no-scrollbar pt-16 pb-6 px-[90px]">
        <div class="snap-center shrink-0" v-for="(publication, index) in LIBRARY">
          <router-link :to="`/publication/${index}`" tag="button">
            <div class="relative">
              <div class="absolute w-full h-full bg-black z-0 rounded-xl"></div>
              <img
                class="translate-x-4 -translate-y-4 shrink-0 w-[557px] h-[700px] rounded-xl border-2 border-black"
                :src="`library/images/${publication.id}.jpg`"
              />
            </div>
            <h2 class="text-4xl font-bold text-neutral-900 py-6">{{ publication.title }}</h2>
          </router-link>
        </div>
      </div>
    </div>
    <div class="w-full h-[72px] flex items-center justify-center p-6 text-neutral-900">
      <Logo class="inline-block h-6 w-6" />
      <span class="ml-4 text-xl">Slovenská národná galéria</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { LIBRARY } from "../consts";
import Logo from "../icons/Logo.vue";
</script>

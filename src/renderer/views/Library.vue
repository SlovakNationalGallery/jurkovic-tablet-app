<template>
  <div class="flex flex-col h-screen bg-[#FFF3E3]">
    <div class="w-full h-[80px] flex items-center justify-between p-6 text-2xl">
      <div>
        <span class="font-bold mr-4">Dušan Jurkovič</span>
        <span>Práce lidu nášho (1900—1910)</span>
      </div>
      <div>ENG <span class="font-bold">SK</span></div>
    </div>
    <div class="grow flex items-center overflow-hidden">
      <div class="w-full flex gap-7 snap-x snap-mandatory overflow-x-auto pb-5">
        <div class="snap-center shrink-0"><div class="shrink-0 w-[104px]"></div></div>
        <div class="snap-center shrink-0" v-for="publication in LIBRARY">
          <img class="shrink-0 w-[557px] h-[700px] rounded-lg border-2 border-black" :src="`library/images/${publication.id}.jpg`" />
        </div>
        <div class="snap-center shrink-0"><div class="shrink-0 w-[104px]"></div></div>
      </div>
    </div>
    <div class="w-full h-[72px] bg-[#FCF1DF] flex items-center justify-center p-6">
      <Logo class="inline-block h-6 w-6" />
      <span class="ml-4 text-xl">Slovenská národná galéria</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { LIBRARY } from "../consts";
import Logo from "../icons/Logo.vue";
</script>

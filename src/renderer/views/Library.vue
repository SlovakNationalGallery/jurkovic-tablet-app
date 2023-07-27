<template>
  <div class="flex flex-col h-screen bg-[#FFF3E3]">
    <div class="w-full h-[80px] flex items-center justify-between p-6 text-2xl">
      <div>
        <span class="font-bold mr-4">Dušan Jurkovič</span>
        <span>Práce lidu nášho (1900—1910)</span>
      </div>
      <div>ENG <span class="font-bold">SK</span></div>
    </div>
    <div class="grow">
      <!-- publikacie -->
    </div>
    <div
      class="w-full h-[72px] bg-[#FCF1DF] flex items-center justify-center p-6"
    >
      <Logo class="inline-block h-6 w-6" />
      <span class="ml-4 text-xl">Slovenská národná galéria</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from "../icons/Logo.vue";
</script>

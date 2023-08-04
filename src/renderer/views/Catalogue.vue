<template>
  <div class="flex flex-col h-screen">
    <div class="w-full h-[80px] flex items-center justify-between p-6 text-2xl">
      <div>
        <span class="font-bold mr-4">{{ trans('worksByFerdišKostka') }}</span>
      </div>
      <LanguageSwitcher />
    </div>
    <div class="grow columns-3 px-6">
      <div class="break-inside-avoid" v-for="(artwork, index) in GALLERY">
        <router-link
          :to="`/detail/${index}`"
          tag="button"
          class="flex flex-col pb-4"
        >
          <img :src="`catalogue/previewImages/${artwork.id}.jpg`" />
        </router-link>
      </div>
    </div>
    <div
      class="sticky bottom-0 inset-x-0 h-[72px] flex items-center justify-center p-6"
    >
      <Logo class="inline-block h-6 w-6" />
      <span class="ml-4 text-xl">{{ trans('sng') }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import LanguageSwitcher from "../components/LanguageSwitcher.vue";
import { GALLERY } from "../consts";
import Logo from "../icons/Logo.vue";
import { useLang } from "../composables/lang"

const { trans } = useLang()
</script>

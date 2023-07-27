<template>
  <div class="flex flex-col h-screen">
    <div class="w-full h-[80px] flex items-center justify-between p-6 text-2xl">
      <div>
        <span class="font-bold mr-4">Diela Ferdiša Kostku zo SNG</span>
      </div>
    </div>
    <div class="grow columns-3 p-6">
      <div class="break-inside-avoid" v-for="artwork, index in GALLERY">
        <router-link
          :to="`/detail/${index}`"
          tag="button"
          class="flex flex-col pb-4"
        >
          <img :src="`catalogue/previewImages/${artwork.id}.png`" />
        </router-link>
      </div>
    </div>
    <div
      class="sticky bottom-0 inset-x-0 h-[72px] flex items-center justify-center p-6"
    >
      <svg class="inline-block h-6 w-6 fill-none" viewBox="0 0 24 24">
        <path
          d="M12.8266 12.8266H22.3649V16.7691H14.4618V18.4042H22.3649V22.3467H12.8266V12.8266ZM12.8266 2.79788L21.2021 11.1734H12.8266V2.79788ZM1.63512 1.63512H11.1734V11.1734H1.63512V1.63512ZM13.9894 1.63512H22.3649V10.0106L13.9894 1.63512ZM0 0V12.8266H11.1734V22.3649H1.63512V14.4618H0V24H24V0H0Z"
          fill="#050505"
        />
      </svg>
      <span class="ml-4 text-xl">Slovenská národná galéria</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { GALLERY } from "../consts";
</script>

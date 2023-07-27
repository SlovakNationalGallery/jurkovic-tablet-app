<template>
  <div class="flex flex-col h-screen">
    <div class="grow columns-3">
      <div class="break-inside-avoid" v-for="artwork in GALLERY">
        <router-link
          :to="`/detail/${artwork.id}`"
          tag="button"
          class="flex flex-col"
        >
          <img :src="`previewImages/${artwork.id}.png`" />
          <span>{{ artwork.title }}</span>
          <span>{{ artwork.yearStart }} - {{ artwork.yearEnd }}</span>
        </router-link>
      </div>
    </div>
    <div
      class="w-full h-[72px] flex items-center justify-center p-6"
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

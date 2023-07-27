<template>
  <div class="flex flex-col h-screen">
    <div
      class="w-full h-[80px] flex items-center justify-between p-6 text-2xl gap-4"
    >
      <div class="flex items-center gap-4">
        <button @click="router.back()"><ArrowUp class="w-8 h-8" /></button>
        <span class="font-bold">Ferdiš Kostka</span>
        <span>{{ artwork.title }}</span>
        <span class="whitespace-nowrap"
          >{{ artwork.yearStart }} - {{ artwork.yearEnd }}</span
        >
      </div>
      <div>ENG <span class="font-bold">SK</span></div>
    </div>
    <div id="container" class="w-screen h-full"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from "vue";
import { loadScript, unloadScript } from "vue-plugin-load-script";
import { useRoute, useRouter } from "vue-router";
import ArrowUp from "../icons/ArrowUp.vue";
import { GALLERY } from "../consts";

const route = useRoute();
const router = useRouter();
const index = route.params.index;
const artwork = GALLERY[Number(index)];

onMounted(() => {
  loadScript("/catalogue/object2vr_player.js")
    .then(() => {
      return loadScript("/catalogue/skin.js");
    })
    .then(() => {
      const { object2vrPlayer, object2vrSkin } = window;
      const obj = new object2vrPlayer("container");
      new object2vrSkin(obj, "/catalogue/details/");
      obj.readConfigUrl(`/catalogue/details/${artwork.id}/${artwork.id}.xml`);
    });
});

onBeforeUnmount(() => {
  unloadScript("/catalogue/object2vr_player.js");
  unloadScript("/catalogue/skin.js");
});
</script>

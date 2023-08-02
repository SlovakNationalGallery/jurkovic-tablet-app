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
    <button
      class="absolute bottom-8 left-8 z-[1001]"
      @click="isPopoverOpen = !isPopoverOpen"
    >
      <Close class="w-12 h-12" v-if="isPopoverOpen" />
      <Info class="w-12 h-12" v-else />
    </button>
    <dialog
      :open="isPopoverOpen"
      class="absolute rounded-xl bottom-32 left-8 border-2 border-black mx-0 p-6 w-80"
    >
      <article class="flex flex-col">
        <h2 class="text-xl font-bold">{{ artwork.titleSK }}</h2>
        <span class="text-base"
          >({{ artwork.yearStart }}
          {{ artwork.yearEnd ? `- ${artwork.yearEnd}` : "" }})</span
        >
        <p class="pt-4 text-lg leading-6">
          {{ artwork.descriptionSK }}
        </p>
      </article>
    </dialog>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { loadScript, unloadScript } from "vue-plugin-load-script";
import { useRoute, useRouter } from "vue-router";
import ArrowUp from "../icons/ArrowUp.vue";
import Info from "../icons/Info.vue";
import Close from "../icons/Close.vue";
import { GALLERY } from "../consts";

const route = useRoute();
const router = useRouter();
const index = route.params.index;
const artwork = GALLERY[Number(index)];
const isPopoverOpen = ref<boolean>(false);

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

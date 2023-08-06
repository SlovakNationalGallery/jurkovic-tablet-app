<template>
  <div class="flex flex-col h-screen bg-[#FFF3E3]">
    <div class="w-full h-[80px] flex items-center justify-between p-6 text-2xl">
      <div class="flex items-center gap-4">
        <button @click="router.back()"><ArrowUp class="w-8 h-8" /></button>
        <span class="font-bold">Dušan Jurkovič</span>
        <span>{{ trans("worksOfSlovakPeople") }}</span>
        <span>1905</span>
      </div>
      <LanguageSwitcher />
    </div>
    <div class="grow flex items-center">
      <div class="w-full flex gap-x-11 snap-x snap-mandatory overflow-x-auto no-scrollbar pt-16 pb-6 px-11">
        <div class="w-[809px] h-[1018px] overflow-hidden" ref="wrapper" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
          <img :style="{ transform: `scale(${scale})`, width: '809px', height: '1018px' }" :src="`library/${publication.id}/${publication.id}-${String(1).padStart(2, '0')}.jpg`" />
        </div>
        <!-- <div class="snap-center shrink-0" v-for="index in publication.pages">
            <img
              class="w-[809px] h-auto"
              :src="`library/${publication.id}/${publication.id}-${String(index).padStart(2, '0')}.jpg`"
            />
        </div> -->
      </div>
    </div>
    <div class="w-full h-[72px] flex items-center justify-center p-6 text-neutral-900">
      <Logo class="h-6 w-6" />
      <span class="ml-4 text-xl">{{ trans("sng") }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted } from 'vue';
import { useRoute, useRouter } from "vue-router";
import { LIBRARY } from "../consts";
import ArrowUp from "../icons/ArrowUp.vue";
import LanguageSwitcher from "../components/LanguageSwitcher.vue";
import { useLang } from "../composables/lang";
import Logo from "../icons/Logo.vue";

const route = useRoute();
const router = useRouter();
const index = route.params.index;
const publication = LIBRARY[Number(index)];
const { trans } = useLang();

const wrapper = ref<HTMLElement | null>(null);
const scale = ref(1);
const minScale = 1;
let initialDistance = 0;
let initialScale = 1;
let initialX = 0;
let initialY = 0;

const imageStyle = {
  transform: `scale(${scale}) translate(${initialX}px, ${initialY}px)`,
  width: '809px',
  height: '1018px',
};

const handleTouchStart = (event: TouchEvent) => {
  if (event.touches.length === 2) {
    event.preventDefault(); 
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    initialDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
    initialScale = scale.value;
  } else if (event.touches.length === 1) {
    initialX = initialX || 0;
    initialY = initialY || 0;
    const touch = event.touches[0];
    const rect = wrapper.value?.getBoundingClientRect();
    if (rect) {
      initialX = touch.clientX - rect.left;
      initialY = touch.clientY - rect.top;
    }
  }
};

const handleTouchMove = (event: TouchEvent) => {
  if (event.touches.length === 2) {
    event.preventDefault(); 
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    const newDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
    scale.value = Math.max(minScale, initialScale * (newDistance / initialDistance));
  } else if (event.touches.length === 1 && wrapper.value) {
    const touch = event.touches[0];
    const rect = wrapper.value.getBoundingClientRect();
    if (rect) {
      const maxX = rect.width - (rect.width * scale.value);
      const maxY = rect.height - (rect.height * scale.value);
      const newX = Math.min(Math.max(0, touch.clientX - rect.left), maxX);
      const newY = Math.min(Math.max(0, touch.clientY - rect.top), maxY);
      initialX = newX;
      initialY = newY;
    }
  }
};

onUnmounted(() => {
  initialDistance = 0;
  initialScale = 1;
});

</script>

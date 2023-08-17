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
        <div
          class="snap-center shrink-0 w-[700px] h-[880px] overflow-hidden flex items-center"
          v-for="(image, index) in images"
          :key="index"
          :ref="(el) => (image.wrapperRef = el)"
        >
          <img
            class="w-[700px] h-auto"
            :style="getImageStyle(index)"
            :src="image.src"
            @touchstart="(event) => handleTouchStart(event, index)"
            @touchmove="(event) => handleTouchMove(event, index)"
            @touchend="(event) => handleTouchEnd(event, index)"
          />
        </div>
      </div>
    </div>
    <div class="w-full h-[72px] flex items-center justify-center p-6 text-neutral-900">
      <Logo class="h-6 w-6" />
      <span class="ml-4 text-xl">{{ trans("sng") }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, Ref } from "vue";
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

interface ImageData {
  src: string;
  scale: number;
  initialX: number;
  initialY: number;
  initialDistance: number;
  initialScale: number;
  wrapperRef: Ref<HTMLElement | null>;
}

const images: Ref<Array<ImageData>> = ref([]);

const minScale = 1;
const maxScale = 3;

const handleTouchStart = (event: TouchEvent, index: number) => {
  const image = images.value[index];
  if (event.touches.length === 2) {
    event.preventDefault();
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    image.initialDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
    image.initialScale = image.scale;
  } else if (event.touches.length === 1 && image.scale > 1) {
    // @TODO: implement panning
    // event.preventDefault();
    // const touch = event.touches[0];
    // const rect = image.wrapperRef.getBoundingClientRect();
    // if (rect) {
    //   image.initialX = (touch.clientX - rect.left) / image.scale;
    //   image.initialY = (touch.clientY - rect.top) / image.scale;
    // }
  }
};

const handleTouchMove = (event: TouchEvent, index: number) => {
  const image = images.value[index];
  if (event.touches.length === 2) {
    event.preventDefault();
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    const newDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
    image.scale = Math.min(maxScale, Math.max(minScale, image.initialScale * (newDistance / image.initialDistance)));
  } else if (event.touches.length === 1 && image.scale > 1) {
    // @TODO: implement panning
    // event.preventDefault();
    // const touch = event.touches[0];
    // const rect = image.wrapperRef.getBoundingClientRect();
    // if (rect) {
    //   const newX = (touch.clientX - rect.left) / image.scale;
    //   const newY = (touch.clientY - rect.top) / image.scale;
    //   image.initialX = newX;
    //   image.initialY = newY;
    // }
  }
};

const handleTouchEnd = (event: TouchEvent, index: number) => {
  const image = images.value[index];
  image.initialDistance = 0;
  image.initialScale = image.scale;
};

onMounted(() => {
  for (let i = 1; i < Number(publication.pages); i++) {
    images.value.push({
      src: `library/${publication.id}/${publication.id}-${String(i + 1).padStart(2, "0")}.jpg`,
      scale: 1,
      initialX: 0,
      initialY: 0,
      initialDistance: 0,
      initialScale: 1,
      wrapperRef: ref(null),
    });
  }
});

onUnmounted(() => {
  images.value.forEach((image) => {
    image.initialDistance = 0;
    image.initialScale = 1;
  });
});

const getImageStyle = (index: number) => {
  const { scale, initialX, initialY } = images.value[index];
  return {
    transform: `scale(${scale}) translate(${initialX}px, ${initialY}px)`,
  };
};
</script>

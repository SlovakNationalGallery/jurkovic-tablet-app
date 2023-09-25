<template>
  <div class="flex flex-col h-screen bg-[#FFF3E3]">
    <div class="w-full h-[80px] flex items-center justify-between p-6 text-2xl">
      <div class="flex items-center gap-4">
        <button @click="router.back()"><ArrowUp class="w-8 h-8" /></button>
        <span class="font-bold">{{ trans(`library.${publication.id}.author`)}}</span>
        <span>{{ trans(`library.${publication.id}.title`) }}</span>
        <span>({{ trans(`library.${publication.id}.year`) }})</span>
      </div>
      <LanguageSwitcher />
    </div>
    <div class="grow flex items-center">
      <div
        class="w-full flex gap-x-11 snap-x snap-mandatory overflow-x-auto no-scrollbar pt-16 pb-6 px-11"
      >
        <div
          class="snap-center flex items-center overflow-hidden min-w-[700px]"
          v-for="(image, index) in images"
          :key="index"
        >
          <img
            class="w-full"
            :src="image.src"
            :ref="(el) => (image.wrapperRef = el)"
            @touchstart="(event) => handleTouchStart(event, index)"
            @touchmove="(event) => handleTouchMove(event, index)"
            @touchend="(event) => handleTouchEnd(event, index)"
          />
        </div>
      </div>
    </div>
    <div
      class="w-full h-[72px] flex items-center justify-center p-6 text-neutral-900"
    >
      <Logo class="h-6 w-6" />
      <span class="ml-4 text-xl">{{ trans("sng") }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, Ref } from "vue";
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
  initialDistance: number;
  initialTouchCenterX: number;
  initialTouchCenterY: number;
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
    image.initialDistance = Math.hypot(
      touch2.clientX - touch1.clientX,
      touch2.clientY - touch1.clientY
    );
    image.initialTouchCenterX = (touch2.clientX + touch1.clientX) / 2;
    image.initialTouchCenterY = (touch2.clientY + touch1.clientY) / 2;

  }
};

const handleTouchMove = (event: TouchEvent, index: number) => {
  const image = images.value[index];
  const frameRect = image.wrapperRef?.parentElement?.getBoundingClientRect();
  const wrapperRef = image.wrapperRef;

  let scale = 1;
  if (event.touches.length === 2) {
    wrapperRef.style.transition = `all .0s`;
    event.preventDefault();
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    const touchCenterX = (touch2.clientX + touch1.clientX) / 2;
    const touchCenterY = (touch2.clientY + touch1.clientY) / 2;

    const newDistance = Math.hypot(
      touch2.clientX - touch1.clientX,
      touch2.clientY - touch1.clientY
    );

    const delta = newDistance - image.initialDistance;

    scale = Math.min(maxScale, Math.max(minScale, scale + delta * 0.01));

    //inverse movement
    const x = (2 * image.initialTouchCenterX - touchCenterX) - frameRect.left;
    const y = (2 * image.initialTouchCenterY - touchCenterY) - frameRect.top;

    wrapperRef.style.transform = `scale(${scale})`;
    wrapperRef.style.transformOrigin = `${x}px ${y}px`;
  } else {
    wrapperRef.style.transition = `all .25s`;
  }
};

const handleTouchEnd = (event: TouchEvent, index: number) => {
  const image = images.value[index];
  const wrapperRef = image.wrapperRef;
  wrapperRef.style.transition = `all .25s`;
  wrapperRef.style.transform = `scale(1)`;
  wrapperRef.style.transformOrigin = `0px 0px`;
};

onMounted(() => {
  let pageImages: Array<ImageData> = [];
  for (let i = 0; i < Number(publication.pages); i++) {
    pageImages.push({
      initialDistance: 0,
      initialTouchCenterX: 0,
      initialTouchCenterY: 0,
      src: `library/${publication.id}/${publication.id}-${i + 1}.jpg`,
      wrapperRef: ref(null),
    });
  }
  images.value = pageImages;
});
</script>

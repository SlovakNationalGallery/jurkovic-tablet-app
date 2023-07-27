<template>
  <div id="container" class="w-screen h-screen"></div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from "vue";
import { loadScript, unloadScript } from "vue-plugin-load-script";
import { useRoute } from "vue-router";

const route = useRoute();

onMounted(() => {
  const id = route.params.id;
  loadScript("/catalogue/object2vr_player.js")
    .then(() => {
      return loadScript("/catalogue/skin.js");
    })
    .then(() => {
      const { object2vrPlayer, object2vrSkin } = window;
      const obj = new object2vrPlayer("container");
      new object2vrSkin(obj, "/catalogue/details/");
      obj.readConfigUrl(`/catalogue/details/${id}/${id}.xml`);
    });
});

onBeforeUnmount(() => {
  unloadScript("/catalogue/object2vr_player.js");
  unloadScript("/catalogue/skin.js");
});
</script>

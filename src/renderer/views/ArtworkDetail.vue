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
  loadScript("/object2vr_player.js")
    .then(() => {
      return loadScript("/skin.js");
    })
    .then(() => {
      const { object2vrPlayer, object2vrSkin } = window;
      const obj = new object2vrPlayer("container");
      new object2vrSkin(obj, "/details/");
      obj.readConfigUrl(`/details/${id}/${id}.xml`);
    });
});

onBeforeUnmount(() => {
  unloadScript("/object2vr_player.js");
  unloadScript("/skin.js");
});
</script>

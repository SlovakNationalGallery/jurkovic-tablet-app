<template>
  <div class="flex flex-col h-screen">
    {{ publication.title }}
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { LIBRARY } from "../consts";

const route = useRoute();
const index = route.params.index;
const publication = LIBRARY[Number(index)];

</script>

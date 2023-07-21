<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="grow">
      <div id="app">
        <p>
          <router-link to="/">Home</router-link>
          <router-link to="/library">Library</router-link>
          <router-link to="/catalogue">Catalogue</router-link>
        </p>
        <router-view></router-view>
      </div>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import IconHeart from "./components/icons/IconHeart.vue";
import IconSast from "./components/icons/IconSast.vue";
import NavBar from "./components/NavBar.vue";
import ReloadPrompt from "./components/ReloadPrompt.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>
  <div class="d-flex flex-column justify-content-between h-100-header">
    <RouterView />

    <footer class="py-3 fixed-end">
      <p class="border-top text-center text-muted pt-3">
        Made with <IconHeart class="text-danger" height="1.2em" /> by
        <IconSast height="3rem" class="text-body" />
      </p>
    </footer>
  </div>
  <ReloadPrompt />
</template>

<style scoped>
div.h-100-header {
  min-height: calc(100% - 90px);
}
</style>

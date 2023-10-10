<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconSast from "@/components/icons/IconSast.vue";
import ReloadPrompt from "./components/ReloadPrompt.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>
  <div class="d-flex flex-column justify-content-between h-100-header">
    <RouterView />

    <footer class="py-3 my-4 fixed-end">
      <p class="border-top text-center text-muted pt-3 mt-3">
        Made with <IconHeart class="text-danger" /> by
        <IconSast height="3rem" />
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

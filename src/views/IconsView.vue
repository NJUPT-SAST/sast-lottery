<script setup lang="ts">
import IconHeart from "@/components/icons/IconHeart.vue";
import IconPick from "@/components/icons/IconPick.vue";
import IconSast from "@/components/icons/IconSast.vue";
</script>
<template>
  <ul>
    <li><IconCommunity /></li>
    <li><IconDocumentation /></li>
    <li><IconEcosystem /></li>
    <li><IconHeart /></li>
    <li><IconPick /></li>
    <li><IconSast /></li>
    <li><IconTooling /></li>
  </ul>
</template>
<style scoped>
li > * {
  max-height: 3em;
}
</style>

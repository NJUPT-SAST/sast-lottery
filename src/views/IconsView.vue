<script setup lang="ts">
import IconCommunity from "@/components/icons/IconCommunity.vue";
import IconDocumentation from "@/components/icons/IconDocumentation.vue";
import IconEcosystem from "@/components/icons/IconEcosystem.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconPick from "@/components/icons/IconPick.vue";
import IconSast from "@/components/icons/IconSast.vue";
import IconTooling from "@/components/icons/IconTooling.vue";
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

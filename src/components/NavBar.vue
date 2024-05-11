<script setup lang="ts">
import IconSast from "@/components/icons/IconSast.vue";
import IconPick from "@/components/icons/IconPick.vue";
import IconHistory from "@/components/icons/IconHistory.vue";
import IconImport from "@/components/icons/IconImport.vue";
import IconMoon from "@/components/icons/IconMoon.vue";
import IconSun from "@/components/icons/IconSun.vue";
import IconGitHub from "@/components/icons/IconGitHub.vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body",
  attribute: "data-bs-theme",
  valueDark: "dark",
});

const toggleDark = useToggle(isDark);
</script>
<template>
  <nav class="navbar navbar-expand-sm mb-3">
    <div class="container-fluid">
      <RouterLink class="navbar-brand d-flex align-items-center" to="/">
        <IconSast class="me-1" height="2em" /> 抽奖系统
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target=".navbar-collapse"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="navbar-collapse collapse d-sm-inline-flex justify-content-between"
      >
        <ul class="navbar-nav flex-grow-1">
          <li class="nav-item">
            <RouterLink
              class="nav-link d-flex align-items-center me-1"
              to="/"
              active-class="active"
            >
              <IconPick height="1.2em" class="me-1" /> 抽奖
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link d-flex align-items-center me-1"
              to="/history"
              active-class="active"
            >
              <IconHistory height="1.2em" class="me-1" /> 抽奖历史
            </RouterLink>
          </li>
          <li class="nav-item me-auto">
            <RouterLink
              class="nav-link d-flex align-items-center"
              to="/import"
              active-class="active"
            >
              <IconImport height="1.2em" class="me-1" /> 名单导入
            </RouterLink>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="btn d-flex align-items-center h-100"
              @click="toggleDark()"
            >
              <IconMoon v-if="isDark" height="1.2em" />
              <IconSun v-else height="1.2em" />
            </button>
          </li>
          <li class="nav-item">
            <a
              href="https://github.com/NJUPT-SAST/sast-lottery"
              target="_blank"
              rel="noopener noreferrer"
              class="nav-link d-flex align-items-center"
            >
              <IconGitHub height="1.2em" class="me-1" /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

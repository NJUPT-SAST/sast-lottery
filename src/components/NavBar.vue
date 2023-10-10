<script setup lang="ts">
import IconPick from "@/components/icons/IconPick.vue";
import IconSast from "@/components/icons/IconSast.vue";
import IconImport from "@/components/icons/IconImport.vue";
</script>
<template>
  <nav class="navbar navbar-expand-sm bg-light mb-3">
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
              <IconPick height="1.2em" class="me-1" />
              抽奖
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link d-flex align-items-center me-1"
              to="/import"
              active-class="active"
            >
              <IconImport height="1.2em" class="me-1" />
              名单导入
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

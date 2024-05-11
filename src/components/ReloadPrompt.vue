<script setup lang="ts">
import { useRegisterSW } from "virtual:pwa-register/vue";

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

const close = async () => {
  offlineReady.value = false;
  needRefresh.value = false;
};
</script>

<template>
  <div
    v-if="offlineReady || needRefresh"
    class="toast-container position-fixed bottom-0 end-0 p-3"
  >
    <div role="alert" class="toast show">
      <div class="toast-header">
        <strong class="me-auto">提示</strong>
        <button type="button" class="btn-close" @click="close"></button>
      </div>

      <div class="toast-body">
        <span v-if="offlineReady"> 应用已经就绪，可以离线运行 </span>
        <span v-else> 检测到新的内容，请点击重新加载 </span>
        <div v-if="needRefresh" class="mt-2 pt-2 border-top">
          <button
            type="button"
            class="btn btn-primary btn-sm me-1"
            @click="updateServiceWorker()"
          >
            重新加载
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

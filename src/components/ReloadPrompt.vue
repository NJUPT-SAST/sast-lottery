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
            @click="updateServiceWorker()"
            type="button"
            class="btn btn-primary btn-sm me-1"
          >
            重新加载
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/*.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 1;
  text-align: left;
  box-shadow: 3px 4px 5px 0 #8885;
  background-color: white;
}
.pwa-toast .message {
  margin-bottom: 8px;
}
.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}*/
</style>

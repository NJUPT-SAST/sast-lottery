<script setup lang="ts">
import { useHistoryStore } from "@/stores/history";
const historyStore = useHistoryStore();
</script>
<template>
  <div>
    <table class="table text-center picked-table">
      <thead>
        <th>学号</th>
        <th>姓名</th>
      </thead>
      <tbody>
        <tr v-for="item in historyStore.history" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </table>

    <button
      type="button"
      class="btn btn-danger btn-lg mb-auto"
      @click="historyStore.clearHistory()"
    >
      清除记录
    </button>
  </div>
</template>

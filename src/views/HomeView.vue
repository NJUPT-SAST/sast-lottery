<script setup lang="ts">
import { useHistoryStore } from "@/stores/history";
import { useStudentsStore } from "@/stores/students";
import type { Student } from "@/types/student";
import { useIntervalFn } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const { students } = storeToRefs(useStudentsStore());

const historyStore = useHistoryStore();

const picked = ref<Student>({ id: "点击", name: "开始抽取" });

const pickedSet = ref(new Set<Student>());

const { isActive, pause, resume } = useIntervalFn(
  () => {
    if (students.value) {
      const n = students.value.length;
      // `| 0` is more compact and faster than `Math.floor()`.
      picked.value = students.value[(Math.random() * n) | 0];
    }
  },
  50,
  { immediate: false },
);

const toggleRolling = () => {
  if (isActive.value) {
    pause();
    const pickedStudent = picked.value;
    if (historyStore.pushHistory(pickedStudent)) {
      pickedSet.value.add(pickedStudent);
    }
  } else if (students.value?.length) {
    resume();
  } else {
    alert("还没有添加学生哦！");
  }
};
</script>

<template>
  <main class="d-flex align-items-center my-auto">
    <button
      type="button"
      class="btn bg-secondary-subtle btn-lg ms-auto"
      @click="toggleRolling"
    >
      <h2>{{ picked.id }}</h2>
      <h2>{{ picked.name }}</h2>
    </button>
    <div v-if="pickedSet.size" class="d-flex flex-column ms-5 me-auto">
      <table class="table text-center picked-table">
        <thead>
          <th>学号</th>
          <th>姓名</th>
        </thead>
        <tbody>
          <tr v-for="item in pickedSet" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        class="btn btn-danger btn-lg"
        @click="pickedSet = new Set()"
      >
        清除记录
      </button>
    </div>
    <div v-else class="me-auto"></div>
  </main>
</template>
<style scoped>
button > h2 {
  font-size: 5em;
}

.picked-table {
  font-size: 3em;
}
</style>

<script setup lang="ts">
import { useStudentsStore } from "@/stores/students";
import type { Student } from "@/types/student";
import { onUnmounted, ref } from "vue";

const { students } = useStudentsStore();

const picked = ref<Student>({ id: "点击", name: "开始抽取" });

const rolling = ref(false);
let rollingInterval: number | undefined;
const toggleRolling = () => {
  if (rolling.value) {
    clearInterval(rollingInterval);
    rolling.value = false;
  } else if (students) {
    rollingInterval = setInterval(() => {
      const n = students.length;
      // `| 0` is more compact and faster than `Math.floor()`.
      picked.value = students[(Math.random() * n) | 0];
    }, 50);
    rolling.value = true;
  } else {
    alert("还没有添加学生哦！");
  }
};

onUnmounted(() => {
  if (rolling.value) {
    clearInterval(rollingInterval);
    rolling.value = false;
  }
});
</script>

<template>
  <div></div>
  <main class="d-flex flex-column align-items-center">
    <button type="button" @click="toggleRolling" class="btn btn-light btn-lg">
      <h2>{{ picked.id }}</h2>
      <h2>{{ picked.name }}</h2>
    </button>
  </main>
</template>
<style scoped>
button > h2 {
  font-size: 5em;
}
</style>

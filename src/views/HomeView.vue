<script setup lang="ts">
import { useStudentsStore } from "@/stores/students";
import type { Student } from "@/types/student";
import { useIntervalFn } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const { students } = storeToRefs(useStudentsStore());

const picked = ref<Student>({ id: "点击", name: "开始抽取" });

const { isActive, pause, resume } = useIntervalFn(
  () => {
    if (students.value) {
      console.log(students.value);
      const n = students.value.length;
      // `| 0` is more compact and faster than `Math.floor()`.
      picked.value = students.value[(Math.random() * n) | 0];
    }
  },
  50,
  { immediate: false },
);

const toggleRolling = () => {
  console.log(1);
  if (isActive.value) {
    console.log(2);
    pause();
  } else if (students.value?.length) {
    console.log(3);
    resume();
  } else {
    console.log(4);
    alert("还没有添加学生哦！");
  }
};
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

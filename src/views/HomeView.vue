<script setup lang="ts">
import { useStudentsStore } from "@/stores/students";
import type { Student } from "@/types/student";
import { useIntervalFn } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const { students } = storeToRefs(useStudentsStore());

const picked = ref<Student>({ id: "点击", name: "开始抽取" });

const pickedSet = ref<Set<Student>>(new Set());

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
    pickedSet.value.add(picked.value);
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
  <main class="d-flex align-items-center my-auto">
    <button
      type="button"
      class="btn btn-light btn-lg ms-auto me-5"
      @click="toggleRolling"
    >
      <h2>{{ picked.id }}</h2>
      <h2>{{ picked.name }}</h2>
    </button>
    <div class="d-flex flex-column me-auto">
      <table v-if="pickedSet.size" class="table text-center picked-table">
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
        v-if="pickedSet.size"
        type="button"
        class="btn btn-danger btn-lg"
        @click="pickedSet = new Set()"
      >
        清除记录
      </button>
    </div>
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

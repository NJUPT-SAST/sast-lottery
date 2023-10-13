<script setup lang="ts">
import { ref, computed } from "vue";
import { useStudentsStore } from "@/stores/students";
import type { Student } from "@/types/student";

const hasFile = ref(false);
const fileContent = ref<string>();
const studentsStore = useStudentsStore();

/**
 * Regex for matching student ID.
 */
const idRegExp = /^[BFPQ][0-9]{8}$/;

/**
 * Regex for matching student name.
 */
const nameRegExp = /^[\p{Script=Hani}]+(?:·[\p{Script=Hani}]+)*?$/u;

const invalidCount = ref(0);

const items = computed(() => {
  const c = fileContent.value?.split("\n");
  // Remove the header row from file
  c?.shift();
  return c
    ?.map<Student>((s) => {
      const field = s.split(",");
      return { id: field[1], name: field[2] };
    })
    .filter(
      (s) =>
        (idRegExp.test(s.id) && nameRegExp.test(s.name)) ||
        ((invalidCount.value += 1) && false),
    );
});

const importStudents = () => {
  studentsStore.setStudents(items.value);
};

const clearStudents = () => {
  hasFile.value = false;
  studentsStore.setStudents(undefined);
};

const onInput = async (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.item(0);
  hasFile.value = !!file;
  if (file) fileContent.value = (await file.text()).trim();
};
</script>

<template>
  <main class="d-flex flex-column align-items-center">
    <h1>名单导入</h1>
    <form>
      <div class="input-group">
        <input
          type="file"
          @input="onInput"
          class="form-control"
          accept=".csv,text/csv"
        />

        <button
          class="btn btn-primary"
          v-if="hasFile"
          type="button"
          @click="importStudents"
        >
          导入
        </button>
        <button class="btn btn-secondary" type="reset" @click="clearStudents">
          重置
        </button>
      </div>
    </form>
    <div v-if="studentsStore.students">
      <table class="table">
        <thead>
          <th>学号</th>
          <th>姓名</th>
        </thead>
        <tbody>
          <tr v-for="item in studentsStore.students" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="invalidCount">已过滤 {{ invalidCount }} 条不合法记录</div>
  </main>
</template>

<style scoped></style>

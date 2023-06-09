<script setup lang="ts">
import { ref, computed } from "vue";
import { useStudentsStore } from "@/stores/students";
import type { Student } from "@/types/student";
// const files = ref<FileList | null | undefined>();

const hasFile = ref(false);
const fileContent = ref<string>();
const studentsStore = useStudentsStore();

const items = computed(() => {
  const c = fileContent.value?.split("\n");
  c?.shift();
  return c
    ?.map<Student>((s) => {
      const field = s.split(",");
      return { id: field[1], name: field[2] };
    })
    .filter((s) => s.id);
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
  </main>
</template>

<style scoped></style>

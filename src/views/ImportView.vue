<script setup lang="ts">
import { ref } from "vue";
import { useStudentsStore } from "@/stores/students";
import type { Student } from "@/types/student";

const hasFile = ref(false);
const studentsStore = useStudentsStore();

const fileForm = ref<HTMLFormElement>();

/**
 * Regex for matching student ID.
 */
const idRegExp = /^[BFPQ][0-9]{8}$/;

/**
 * Regex for matching student name.
 */
const nameRegExp = /^[\p{Script=Hani}]+(?:·[\p{Script=Hani}]+)*?$/u;

const invalidCount = ref(0);

const items = ref<Student[]>([]);

const setItems = (content: string) => {
  invalidCount.value = 0;
  const c = content.split("\n");
  // Remove the header row from file
  c.shift();
  console.log(JSON.stringify(c));
  items.value = c
    .map<Student>((s) => {
      const field = s.split(",");
      console.log(JSON.stringify(field));
      return { id: field[1], name: field[2] };
    })
    .filter((s) => {
      const valid = idRegExp.test(s.id) && nameRegExp.test(s.name);
      if (!valid) {
        invalidCount.value += 1;
      }
      return valid;
    });
};

const importStudents = () => {
  if (items.value.length) {
    studentsStore.students = items.value;
    items.value = [];
    fileForm.value?.reset();
    hasFile.value = false;
  }
};

const clearStudents = () => {
  hasFile.value = false;
  invalidCount.value = 0;
  items.value = [];
  studentsStore.students = undefined;
};

const onInput = async (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.item(0);
  hasFile.value = !!file;
  if (file) setItems((await file.text()).trim());
};
</script>

<template>
  <main class="d-flex flex-column">
    <h1 class="mx-auto">名单导入</h1>
    <form ref="fileForm" class="mx-auto">
      <div class="input-group">
        <input
          type="file"
          class="form-control"
          accept=".csv,text/csv"
          @input="onInput"
        />

        <button
          v-if="hasFile"
          class="btn btn-primary"
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
    <div class="d-flex mx-auto">
      <div v-if="studentsStore.students?.length" class="mx-3">
        当前名单：
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

      <div v-if="items.length" class="mx-3">
        新名单：
        <table class="table">
          <thead>
            <th>学号</th>
            <th>姓名</th>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="invalidCount">已过滤 {{ invalidCount }} 条不合法记录</div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>

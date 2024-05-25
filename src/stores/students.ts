import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed } from "vue";
import type { Student } from "../types/student";

export const useStudentsStore = defineStore("students", () => {
  const studentsStorage = useStorage<Student[]>("students", []);
  const students = computed<Student[] | undefined>({
    get: () => studentsStorage.value,
    set: (value) => {
      studentsStorage.value = value;
    },
  });

  return { students };
});

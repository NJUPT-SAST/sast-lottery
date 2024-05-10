import type { Student } from "@/types/student";
import { computed } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

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

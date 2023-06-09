import { ref, computed, type Ref, readonly } from "vue";
import { defineStore } from "pinia";
import type { Student } from "@/types/student";

export const useStudentsStore = defineStore("students", () => {
  const studentsLocal = ref<Student[]>();
  const studentsRef: Ref<Student[] | undefined> = computed<
    Student[] | undefined
  >({
    get: () => {
      if (!studentsLocal.value && localStorage.getItem("students")) {
        studentsLocal.value = JSON.parse(localStorage.students) as Student[];
      }
      return studentsLocal.value;
    },
    set: (value: Student[] | undefined) => {
      studentsLocal.value = value;

      if (value) {
        localStorage.students = JSON.stringify(value);
      } else {
        localStorage.removeItem("students");
      }
    },
  });

  const students = readonly(studentsRef);

  function setStudents(newStudents: Student[] | undefined) {
    studentsRef.value = newStudents;
  }

  return { students, setStudents };
});

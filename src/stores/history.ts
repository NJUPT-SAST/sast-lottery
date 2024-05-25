import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { readonly } from "vue";
import type { Student } from "../types/student";

export const useHistoryStore = defineStore("history", () => {
  const historySet = useStorage<Set<Student>>("historySet", new Set());
  const historyStorage = useStorage<Student[]>("history", []);

  const pushHistory = (student: Student) => {
    if (!historySet.value.has(student)) {
      historySet.value.add(student);
      historyStorage.value.push(student);
      console.log("push suceeded");
      return true;
    }
    console.log("push failed");
    return false;
  };

  const clearHistory = () => {
    historySet.value.clear();
    historyStorage.value = [];
  };

  const history = readonly(historyStorage);
  return { history, pushHistory, clearHistory };
});

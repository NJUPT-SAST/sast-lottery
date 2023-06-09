import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/import",
      name: "import",
      component: () => import("@/views/ImportView.vue"),
    },
    {
      path: "/icons",
      name: "icons",
      component: () => import("@/views/IconsView.vue"),
    },
  ],
});

export default router;

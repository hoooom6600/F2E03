import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Practice from "../components/Practice.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("../components/User.vue"),
      children: [
        {
          path: "profile",
          component: () => import("../components/UserProfile.vue"),
        },
      ],
    },
    {
      path: "/practice",
      name: "practice",
      component: Practice, // 練習全域 import router
      children: [
        {
          path: "/status",
          component: () => import("../components/PracticeStatus.vue"), // 練習 component 後的函數 import
        },
      ],
    },
  ],
});

export default router;

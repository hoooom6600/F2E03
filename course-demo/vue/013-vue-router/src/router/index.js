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
      // 加上拜訪權限要求
      meta: {
        requireAuth: true,
      },
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
      // 巢狀路由練習
      children: [
        {
          path: "status",
          component: () => import("../components/PracticeStatus.vue"), // 練習 component 後的函數 import
        },
        {
          path: "/remind",
          component: () => import("@/components/Remind.vue"), // 練習巢狀 + 路徑符號@
        },
      ],
    },
    {
      path: "/practice2",
      name: "practice2",
      component: () => import("../components/Practice2.vue"),
    },
    {
      path: "/product/:id",
      component: () => import("../components/ProductDetail.vue"),
    },
  ],
});

// 拜訪權限
router.beforeEach((to, from, next) => {
  const isAuth = false; // 未登入

  // 檢查權限
  if (to.meta.requireAuth) {
    if (!isAuth) {
      alert("未登入");
      next("/");
    } else {
      next(); // 有權限，就去該去的頁面
    }
  } else {
    // 這邊不 else，則其他頁面沒有權限要求就無法渲染出來
    // 其他路由不需要授權，也必須呼叫 next() 才能渲染
    next();
  }
});

export default router;

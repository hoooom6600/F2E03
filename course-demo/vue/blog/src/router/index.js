import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/Home.vue"),
    },
    {
      path: "/post",
      name: "post",
      component: () => import("@/components/PostList.vue"),
    },
    {
      path: "/post/:id",
      component: () => import("@/components/PostDetail.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/components/Login.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/components/Admin.vue"),
      children: [
        {
          path: "create",
          component: () => import("@/components/CreatePost.vue"),
        },
        {
          path: "setting",
          component: () => import("@/components/Setting.vue"),
        },
      ],
      meta: {
        requireAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuth = true; // 未登入

  // 檢查權限
  if (to.meta.requireAuth) {
    if (!isAuth) {
      alert("未登入");
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

<script setup>
import { useRoute, RouterView, RouterLink } from "vue-router";

const route = useRoute();
const id = route.params.id;
</script>

<template>
  <div>
    <h1>This is a practice for RouterLink and RouterView</h1>
    <!-- 練習不同巢狀路由寫法，搭配 index.js 觀察 -->
    <RouterLink to="/practice/status">See Login Status</RouterLink>
    <RouterLink to="/remind">小鈴鐺~</RouterLink>
    <Router-view />
  </div>
</template>

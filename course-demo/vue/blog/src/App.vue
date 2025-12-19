<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h1>Blog</h1>
  <nav>
    <div><RouterLink to="/">首頁</RouterLink></div>
    <div><RouterLink to="/post">文章詳情</RouterLink></div>
    <div><RouterLink to="/login">登入頁</RouterLink></div>
    <div><RouterLink to="/admin">後臺管理員</RouterLink></div>
  </nav>
  <RouterView />
</template>

<style scoped></style>

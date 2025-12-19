<script setup>
import { useRoute, RouterView, RouterLink } from "vue-router";

const route = useRoute();
</script>

<template>
  <h1>文章列表</h1>
  <ul>
    <li><RouterLink to="/post/1">文章1</RouterLink></li>
    <li><RouterLink to="/post/2">文章2</RouterLink></li>
    <li><RouterLink to="/post/3">文章3</RouterLink></li>
    <li><RouterLink to="/post/4">文章4</RouterLink></li>
  </ul>

  <RouterView />
</template>

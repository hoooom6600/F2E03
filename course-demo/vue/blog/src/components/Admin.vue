<script setup>
import { useRoute, RouterView, RouterLink } from "vue-router";
</script>
<template>
  <h1>管理員介面</h1>
  <div><RouterLink to="/admin/create">前往寫文章</RouterLink></div>
  <div><RouterLink to="/admin/setting">前往設定</RouterLink></div>
  <RouterView />
</template>

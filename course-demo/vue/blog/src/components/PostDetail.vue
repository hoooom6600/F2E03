<script setup>
import { useRoute, RouterView, RouterLink } from "vue-router";
const route = useRoute();
console.log(route);
</script>

<template>
  <h2>文章ID: {{ route.params.id }}</h2>
</template>

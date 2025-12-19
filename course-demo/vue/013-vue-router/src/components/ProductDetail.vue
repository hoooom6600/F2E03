<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route);
</script>

<template>
  <h2>商品頁面</h2>
  <p>商品ID: {{ route.params.id }}</p>
</template>

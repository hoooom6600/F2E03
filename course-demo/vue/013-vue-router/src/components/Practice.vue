<script setup>
import { useRoute, RouterView, RouterLink } from "vue-router";

const route = useRoute();
const id = route.params.id;
</script>

<template>
  <div>
    <h1>This is a practice for RouterLink and RouterView</h1>
    <RouterLink to="/status">See Login Status</RouterLink>
    <Router-view />
  </div>
</template>

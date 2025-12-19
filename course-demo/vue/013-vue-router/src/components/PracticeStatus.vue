<script setup>
import { useRoute, RouterView, RouterLink } from "vue-router";

const route = useRoute();
const id = route.params.id;
</script>

<template>
  <div>
    <h2>Visitor now</h2>
  </div>
</template>

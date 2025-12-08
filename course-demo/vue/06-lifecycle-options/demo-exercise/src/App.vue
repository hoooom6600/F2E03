<!-- 元件引入組合式語法 -->
<!-- <script setup>
import Demo from "../components/Demo.vue";
</script> -->

<!-- 元件引入選項式語法 -->
<script>
import Demo from "../components/Demo.vue";

export default {
  components: {
    Demo,
  },
};
</script>

<template>
  <h1>You did it!</h1>
  <Demo />
  <p>
    Visit
    <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to
    read the documentation
  </p>
</template>

<style scoped></style>

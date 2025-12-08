<script>
export default {
  data() {
    return {
      text: "Hello12312",
    };
  },
  beforeCreate() {
    this.text = "HIIIIII WOLRD";
  },
  created() {
    console.log(`可以看到 this.text → ${this.text}，但不會是 HIIIIII WOLRD`);
  },
};
</script>

<template>
  <p>{{ text }}</p>
</template>

<style></style>

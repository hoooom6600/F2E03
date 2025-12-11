<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    double() {
      return this.count * 2;
    },
  },
  methods: {
    increase() {
      this.count += 1;
    },
    decrease() {
      this.count -= 1;
    },
  },
};
</script>

<template>
  <h2>選項式</h2>
  <button @click="decrease">-</button>
  <span>計數器: {{ count }}</span>
  <button @click="increase">+</button>
  <p>雙倍值: {{ double }}</p>
</template>

<style></style>

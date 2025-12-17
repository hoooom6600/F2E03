<template>
  <div class="counter">
    <button @click="decrement">-</button>
    <span class="count">{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    default: 0,
  },
});

// TODO: 使用 defineEmits 定義 'update:count' 事件
const emit = defineEmits(["update:count"]);

const increment = () => {
  // TODO: emit 新的數值（count + 1）
  emit("update:count", props.count + 1);
};

const decrement = () => {
  // TODO: emit 新的數值（count - 1），但不能小於 0
  if (props.count > 0) {
    emit("update:count", props.count - 1);
  }
};
</script>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  gap: 15px;
}
.counter button {
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
}
.count {
  font-size: 24px;
  min-width: 50px;
  text-align: center;
}
</style>

<script setup>
import { computed, ref } from "vue";

const constCount = ref(0);
const funcCount = ref(0);

const increase = () => {
  constCount.value += 1;
};
const decrease = () => {
  constCount.value -= 1;
};

const constCountDouble = computed(() => {
  return constCount.value * 2;
});

function plus() {
  funcCount.value += 1;
}

function minus() {
  funcCount.value -= 1;
}

function funcCountDouble() {
  return computed(() => funcCount.value * 2);
}
</script>

<template>
  <h2>組合式（宣告 const 定義函數）</h2>
  <button @click="decrease">-</button>
  <span>計數器: {{ constCount }}</span>
  <button @click="increase">+</button>
  <p>雙倍值: {{ constCountDouble }}</p>

  <hr />
  <h2>組合式（直接定義函數）</h2>
  <button @click="minus">-</button>
  <span>計數器: {{ funcCount }}</span>
  <button @click="plus">+</button>
  <p>雙倍值: {{ funcCountDouble() }}</p>
</template>

<style></style>

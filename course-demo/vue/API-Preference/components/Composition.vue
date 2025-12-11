<script setup>
import { computed, ref, reactive, toRefs } from "vue";

// const 宣告 + ref
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

// 函數定義 + ref
function plus() {
  funcCount.value += 1;
}

function minus() {
  funcCount.value -= 1;
}

function funcCountDouble() {
  return computed(() => funcCount.value * 2);
}

// reactive
const countData = reactive({
  count: 0,
  add() {
    countData.count += 1;
  },
  deduct() {
    countData.count -= 1;
  },
});

// reactive 一般解構
const countDataReactive = reactive({
  count: 0,
  add() {
    countDataReactive.count += 1;
  },
  deduct() {
    countDataReactive.count -= 1;
  },
});
const { count, add, deduct } = countDataReactive;

// toRefs 解構
const countDataToRefs = reactive({
  countToRefs: 0,
  addToRefs: () => {
    countDataToRefs.countToRefs += 1;
  },
  deductToRefs: () => {
    countDataToRefs.countToRefs -= 1;
  },
});
const { countToRefs, addToRefs, deductToRefs } = toRefs(countDataToRefs);
</script>

<template>
  <h2>組合式 ref（宣告 const 定義函數）</h2>
  <button @click="decrease">-</button>
  <span>計數器: {{ constCount }}</span>
  <button @click="increase">+</button>
  <p>雙倍值: {{ constCountDouble }}</p>

  <hr />

  <h2>組合式 ref（直接定義函數）</h2>
  <button @click="minus">-</button>
  <span>計數器: {{ funcCount }}</span>
  <button @click="plus">+</button>
  <p>雙倍值: {{ funcCountDouble() }}</p>

  <hr />

  <h2>組合式 reactive</h2>
  <button @click="countData.deduct">-</button>
  <span>計數器: {{ countData.count }}</span>
  <button @click="countData.add">+</button>
  <p>雙倍值: {{ countData.count * 2 }}</p>

  <hr />

  <h2>組合式 reactive（一般解構，不會響應）</h2>
  <button @click="deduct">-</button>
  <span>計數器: {{ count }}</span>
  <button @click="add">+</button>
  <p>雙倍值: {{ count * 2 }}</p>

  <hr />

  <h2>組合式 reactive（toRefs 特殊解構，會響應）</h2>
  <button @click="deductToRefs">-</button>
  <span>計數器: {{ countToRefs }}</span>
  <button @click="addToRefs">+</button>
  <p>雙倍值: {{ countToRefs * 2 }}</p>
</template>

<style></style>

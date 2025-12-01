<script setup>
import { ref } from 'vue'
import LifecycleDemo from './components/LifecycleDemo.vue'

const isShow = ref(true)

const toggleChild = () => {
  isShow.value = !isShow.value
}
</script>

<template>
  <div>
    <h2>父元件</h2>
    <button @click="toggleChild">{{ isShow ? '移除子元件' : '顯示子元件' }}</button>
    
    <LifecycleDemo v-if="isShow" />
  </div>
</template>
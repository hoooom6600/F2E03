<template>
  <div class="lifecycle-demo">
    <h2>Vue 生命週期示範</h2>

    <div class="counter-section">
      <p>計數器: {{ counter }}</p>
      <button @click="increaseCounter">增加計數</button>
    </div>

    <div class="logs-section">
      <h3>生命週期記錄:</h3>
      <div class="log-container">
        <div v-for="(log, index) in lifecycleLogs" :key="index" class="log-item">
          {{ log }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifecycleDemo',

  beforeCreate () {
    console.log('1. beforeCreate 被調用')
    // 這時候還不能使用 data 和 methods
  },

  created () {
    console.log('2. created 被調用')
    console.log('在這裡可以訪問 data 和 methods')
  },

  beforeMount () {
    console.log('3. beforeMount 被調用')
    console.log('DOM 即將掛載')
  },

  mounted () {
    console.log('4. mounted 被調用')
    console.log('DOM 已掛載完成')
    // 僅在初始掛載時加一次記錄
    this.lifecycleLogs.push('組件初始化完成並掛載到 DOM')
  },

  beforeUpdate () {
    console.log('5. beforeUpdate 被調用')
    console.log(`計數即將更新為: ${this.counter + 1}`)
  },

  updated () {
    console.log('6. updated 被調用')
    console.log(`計數已更新為: ${this.counter}`)
  },

  beforeUnmount () {
    console.log('7. beforeUnmount 被調用')
    console.log('組件即將被銷毀')
  },

  unmounted () {
    console.log('8. unmounted 被調用')
    console.log('組件已被銷毀')
  },

  data () {
    return {
      counter: 0,
      lifecycleLogs: []
    }
  },

  methods: {
    increaseCounter () {
      this.counter++
      // 只在計數器更新時增加記錄
      this.lifecycleLogs.push(`計數更新為: ${this.counter}`)
    }
  }
}
</script>

<style scoped>
.lifecycle-demo {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.counter-section {
  margin: 20px 0;
  padding: 15px;
  background-color: #f0f4f8;
  border-radius: 8px;
  text-align: center;
}

button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

button:hover {
  background-color: #3aa876;
}

.logs-section {
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.log-container {
  max-height: 200px;
  overflow-y: auto;
}

.log-item {
  padding: 8px;
  margin: 4px 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
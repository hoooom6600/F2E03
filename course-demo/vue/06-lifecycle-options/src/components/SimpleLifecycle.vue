<template>
  <div>
    <p>計數: {{ counter }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
// 0
  beforeCreate () {
    // 🚫 無法取得 data
    console.log('beforeCreate: counter =', this.counter) // undefined
  },
// 1
  created () {
    // ✅ 可以取得 data
    console.log('created: counter =', this.counter) // 0
  },
// 2
  beforeMount () {
    // ✅ DOM 還未掛載，但可以取得 data
    console.log('beforeMount: counter =', this.counter) // 0
  },
// 3
  mounted () {
    // ✅ DOM 已掛載，可以取得 DOM 元素
    console.log('mounted: counter =', this.counter) // 0
    const el = this.$el
    console.log('DOM ready:', el.textContent)
    console.log('DOM text parts:', el.textContent.split(' '))
  },
// 4
  beforeUpdate () {
    // 🔄 數據已改變，但 DOM 還未更新
    console.log('beforeUpdate: counter 即將變為', this.counter + 1)
  },
// 5
  updated () {
    // ✅ DOM 已更新完成
    console.log('updated: counter 現在是', this.counter)
  },

  methods: {
    increment () {
      this.counter++
    }
  }
}
</script>
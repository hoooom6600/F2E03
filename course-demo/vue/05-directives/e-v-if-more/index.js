Vue.createApp({
  data() {
    return {
      // v-if 和 v-for 示例的數據
      items: [
        { id: 1, name: '蘋果', isActive: true },
        { id: 2, name: '香蕉', isActive: false },
        { id: 3, name: '橙子', isActive: true }
      ],
    }
  },
  computed: {
    // v-if 和 v-for 的正確用法
    activeItems() {
      return this.items.filter(item => item.isActive)
    },
  },
}).mount('#list')

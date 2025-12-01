Vue.createApp({
  data() {
    // v-show 範例
    return {
      showPrice: false,
      showCategory: false,
      switchCount: 0,

      // v-if 範例
      userRole: 'user',

      // 性能監控
      vShowSwitchTime: 0,
      vIfSwitchTime: 0
    }
  },
  methods: {
    togglePrice() {
      const start = performance.now()
      this.showPrice = !this.showPrice
      this.switchCount++
      this.vShowSwitchTime = (performance.now() - start).toFixed(2)
    },
    toggleCategory() {
      const start = performance.now()
      this.showCategory = !this.showCategory
      this.switchCount++
      this.vShowSwitchTime = (performance.now() - start).toFixed(2)
    },
    toggleUserRole() {
      const start = performance.now()
      this.userRole = this.userRole === 'user' ? 'admin' : 'user'
      this.vIfSwitchTime = (performance.now() - start).toFixed(2)
    }
  }
}).mount('#comparison')

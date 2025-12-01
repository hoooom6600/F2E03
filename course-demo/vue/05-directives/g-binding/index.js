Vue.createApp({
  data() {
    // 基礎屬性
    return {
      userName: 'Chiikawa',
      avatarUrl:
        'https://cdn.shopify.com/s/files/1/0513/6636/3293/files/AdorableCutieChiikawa_480x480.webp?v=1726085157',
      profileLink: '#profile',

      // 樣式綁定
      themes: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
      selectedTheme: '#FF6B6B',
      boxSize: 100,

      // 動態屬性
      inputType: 'password',
      placeholder: '請輸入密碼',
      inputValue: '',
      showPassword: false,
      isDisabled: false,

      // 進度條
      progress: 25
    }
  },
  computed: {
    progressBarStyle() {
      return {
        border: '1px solid #ddd',
        borderRadius: '4px',
        overflow: 'hidden',
        height: '20px'
      }
    },
    getProgressColor() {
      if (this.progress < 30) return '#FF6B6B'
      if (this.progress < 60) return '#FFB746'
      if (this.progress < 90) return '#4ECDC4'
      return '#96CEB4'
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword
      this.inputType = this.showPassword ? 'text' : 'password'
    },
    updateProgress() {
      this.progress = (this.progress + 15) % 100
    }
  }
}).mount('#bind-demo')

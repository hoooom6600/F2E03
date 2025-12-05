Vue.createApp({
  data() {
    return {
      studentName: "小明",
      studentNumber: 18,
      checkInWord: "請報到",
      welcomeMessage:
        '<h4 style="color: green">🌟 今天要學習很多有趣的 Vue 指令！</h4>',
    };
  },
}).mount("#template-syntax");

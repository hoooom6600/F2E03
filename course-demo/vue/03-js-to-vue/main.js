const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
});

app.mount(".container");

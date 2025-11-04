import axios from "axios"

function active() {
  return {
    active: "login",
    email: "",
    nickname: "",
    password: "",
    async doSignUp() {
      // 解構寫法
      const { email, nickname, password } = this
      if (email != "" && nickname != "" && password != "") {
        // 註冊 API，axois 用法
        const newUser = {
          // 前後相同，ES6 簡寫語法
          user: {
            email,
            nickname,
            password,
          },
        }
        try {
          const resp = await axios.post("https://todoo.5xcamp.us/users", newUser)
          console.log(resp)
        } catch (err) {
          alert(`${err.response.data.message}: ${err.response.data.error}`)
        }
      }
    },
    goToLogin() {
      this.active = "login"
    },
    goToSignUp() {
      this.active = "signUp"
    },
    showLogin() {
      return this.active == "login"
    },
    showSignUp() {
      return this.active == "signUp"
    },
    showTasks() {
      return this.active == "tasks"
    },
  }
}

export { active }

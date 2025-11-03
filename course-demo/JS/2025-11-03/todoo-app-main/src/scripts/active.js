import axios from "axios"

const url = "待補"

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
          email,
          nickname,
          password,
        }
        try {
          const resp = await axios.post(url, newUser)
          console.log(resp)
        } catch (err) {
          alert(err.response.data.message)
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

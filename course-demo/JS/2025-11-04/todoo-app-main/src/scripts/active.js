import axios from "axios"
function active() {
  return {
    email: "",
    nickname: "",
    password: "",
    isLogin: false,
    init() {
      const token = localStorage.getItem("todoToken")
      if (token) {
        this.isLogin = true
      }
      if (this.isLogin) {
        this.goToTasks()
      } else {
        this.goToLogin()
      }
    },
    async doLogin() {
      const { email, password } = this
      if (email != "" && password != "") {
        // 登入 API，axois 用法
        const userData = {
          user: {
            // 前後相同，ES6 簡寫語法
            email,
            password,
          },
        }
        try {
          const resp = await axios.post("https://todoo.5xcamp.us/users/sign_in", userData)
          const token = resp.headers.authorization
          if (token) {
            localStorage.setItem("todoToken", token)
          }
          this.resetForm()
          this.goToTasks()
          this.isLogin = true
        } catch (err) {
          console.log(err)
          alert(err.response.data.message)
        }
      }
    },
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
          this.resetForm()
          this.goToLogin()
        } catch (err) {
          console.log(err)
          alert(`${err.response.data.message}: ${err.response.data.error}`)
        }
      }
    },
    resetForm() {
      this.email = ""
      this.password = ""
      this.nickname = ""
    },
    goToLogin() {
      this.active = "login"
    },
    goToSignUp() {
      this.active = "signup"
    },
    goToTasks() {
      this.active = "tasks"
    },
    showLogin() {
      return this.active == "login"
    },
    showSignUp() {
      return this.active == "signup"
    },
    showTasks() {
      return this.active == "tasks"
    },
    async logout() {
      const token = localStorage.getItem("todoToken")
      if (token) {
        const config = {
          headers: {
            accept: "application/json",
            Authorization: token,
          },
        }

        try {
          const resp = await axios.delete("https://todoo.5xcamp.us/users/sign_out", config)
          localStorage.removeItem("todoToken")
          this.isLogin = false
          this.goToLogin()
        } catch (err) {
          console.log(err)
        }
      }
    },
  }
}
export { active }

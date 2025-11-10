import axios from "axios"
function active() {
  return {
    email: "",
    nickname: "",
    password: "",
    newTask: "",
    tasks: [],
    isLogin: false,
    init() {
      const token = localStorage.getItem("todoToken")
      if (token) {
        this.isLogin = true
        // 抓 TODO
        this.getTasks()
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

    async addTask() {
      if (this.newTask != "") {
        const taskData = {
          todo: {
            content: this.newTask,
          },
        }
        const config = this.getConfig()

        // 假發，為了配合後端處理演戲，假設後端伺服器很慢，先提升使用者體驗，讓人覺得有發
        // 如果出錯，再像網路不穩時發 LINE 一樣，之後再給一個提示紅色驚嘆號之類
        const fakeTask = {
          id: crypto.randomUUID(),
          content: this.newTask,
          completed_at: null,
        }
        this.tasks.unshift(fakeTask)

        // 真發
        try {
          const resp = await axios.post("https://todoo.5xcamp.us/todos", taskData, config)
          // 以假換真，必須更新資料庫的 ID，否則未來要刪除 TODO 會出錯
          const newTask = resp.data
          const targetIndex = this.tasks.findIndex((task) => task.id == fakeTask.id)
          this.tasks.splice(targetIndex, 1, newTask)
        } catch (err) {
          console.log(err)
        }

        // 新增之後，將輸入框文字清除
        this.newTask = ""
      }
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

    async getTasks() {
      try {
        const config = this.getConfig()
        const resp = await axios.get("https://todoo.5xcamp.us/todos", config)
        this.tasks = resp.data.todos
        console.log(resp)
      } catch (err) {
        console.log(err)
      }
    },
    getConfig() {
      const token = localStorage.getItem("todoToken")

      return {
        headers: {
          accept: "application/json",
          Authorization: token,
        },
      }
    },
    async deleteTask(id) {
      const config = this.getConfig()
      try {
        const resp = await axios.delete(`https://todoo.5xcamp.us/todos/${id}`, config)
        console.log(resp)
        console.log(id)
      } catch (err) {
        console.log(err)
      }
    },
    async logout() {
      const token = localStorage.getItem("todoToken")
      if (token) {
        const config = this.getConfig()

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

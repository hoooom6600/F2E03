import axios from "axios"
import { debounce } from "throttle-debounce"

function active() {
  return {
    email: "",
    nickname: "",
    password: "",
    newTask: "",
    taskName: "",
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
          this.getTasks()
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
          await axios.post("https://todoo.5xcamp.us/users", newUser)
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

        // (演戲演完) 新增之後，將輸入框文字清除
        this.newTask = ""

        // 真發
        try {
          const resp = await axios.post("https://todoo.5xcamp.us/todos", taskData, config)
          // 以真換假，必須更新資料庫的 ID，否則未來要刪除 TODO 會出錯
          const newTask = resp.data
          const targetIndex = this.tasks.findIndex((task) => task.id == fakeTask.id)
          this.tasks.splice(targetIndex, 1, newTask)
        } catch (err) {
          console.log(err)
        }
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
    toggleDebounce: debounce(1000, function (id, targetToggle) {
      const config = this.getConfig() // 套件手冊用箭頭函數，但箭頭函數沒有 this，所以更改 debounce callback
      const count = targetToggle.count
      if (count % 2 != 0) {
        console.log(count + " GO!")
        axios.patch(`https://todoo.5xcamp.us/todos/${id}/toggle`, null, config)
      }
      // 重置 count 次數
      targetToggle.count = 0
    }),
    async taskToggle(id) {
      const config = this.getConfig()

      // 假做
      const targetToggle = this.tasks.find((task) => task.id == id)

      // tasks 裡各個物件沒有 count 屬性，所以這邊手動加上
      // JS 新屬性不用宣告變數
      // 未初始化的屬性為 undefined
      if (targetToggle.count == undefined) {
        targetToggle.count = 0
      }
      targetToggle.count++

      if (targetToggle.completed_at) {
        targetToggle.completed_at = null
      } else {
        targetToggle.completed_at = new Date()
      }

      // 真做
      this.toggleDebounce(id, targetToggle)
    },
    toggleEdit(id) {
      this.tasks.forEach((task) => (task.isEditing = false))
      const targetIndex = this.tasks.findIndex((task) => task.id === id)

      if (targetIndex >= 0) {
        this.tasks[targetIndex].isEditing = !this.tasks[targetIndex].isEditing
        this.taskName = this.tasks[targetIndex].content
      }
    },
    updateTODO(id) {
      const config = this.getConfig()
      const targetIndex = this.tasks.findIndex((task) => task.id === id)
      this.tasks[targetIndex].isEditing = false

      // 沒修改就不打 API
      if (this.tasks[targetIndex].content != this.taskName) {
        this.tasks[targetIndex].content = this.taskName
        const editedTaskName = {
          todo: {
            content: this.taskName,
          },
        }

        axios.put(`https://todoo.5xcamp.us/todos/${id}`, editedTaskName, config)
      }
    },
    deleteTask(id) {
      const config = this.getConfig()

      const targetIndex = this.tasks.findIndex((task) => task.id === id)
      if (targetIndex >= 0) {
        // 假戲
        this.tasks.splice(targetIndex, 1)

        // 沒有要透過 delete 再處理什麼資料，且為最後一步驟，其實可以不用 async / await
        // 真做
        try {
          axios.delete(`https://todoo.5xcamp.us/todos/${id}`, config)
        } catch (err) {
          console.log(err)
        }
      }
    },
    async logout() {
      const token = localStorage.getItem("todoToken")
      if (token) {
        const config = this.getConfig()

        try {
          await axios.delete("https://todoo.5xcamp.us/users/sign_out", config)
          localStorage.removeItem("todoToken")
          this.isLogin = false
          this.goToLogin()
          this.tasks = []
        } catch (err) {
          console.log(err)
        }
      }
    },
  }
}
export { active }

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 任務列表
const tasks = ref([
  { id: 1, title: '讀書', time: 0, isRunning: false },
  { id: 2, title: '運動', time: 0, isRunning: false }
])

// 新任務標題
const newTaskTitle = ref('')

// 儲存所有計時器的 intervalId
const timerIntervals = ref({})

// 格式化時間
const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  const pad = (num) => num.toString().padStart(2, '0')
  return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`
}

// 開始計時器
const startTimer = (task) => {
  if (task.isRunning) return
  task.isRunning = true

  // 創建新的計時器
  timerIntervals.value[task.id] = setInterval(() => {
    task.time++
    // 儲存到本地存儲
    saveToLocalStorage()
  }, 1000)
}

// 停止計時器
const stopTimer = (task) => {
  task.isRunning = false
  clearInterval(timerIntervals.value[task.id])
  delete timerIntervals.value[task.id]
  saveToLocalStorage()
}

// 新增任務
const addTask = () => {
  if (!newTaskTitle.value.trim()) return

  const newTask = {
    id: Date.now(), // 使用時間戳作為唯一ID
    title: newTaskTitle.value,
    time: 0,
    isRunning: false
  }

  tasks.value.push(newTask)
  newTaskTitle.value = '' // 清空輸入框
  saveToLocalStorage()
}

// 刪除任務
const deleteTask = (taskId) => {
  // 如果計時器正在運行，先停止它
  const task = tasks.value.find(t => t.id === taskId)
  if (task && task.isRunning) {
    stopTimer(task)
  }

  tasks.value = tasks.value.filter(task => task.id !== taskId)
  saveToLocalStorage()
}

// 保存到本地存儲
const saveToLocalStorage = () => {
  const tasksToSave = tasks.value.map(task => ({
    ...task,
    isRunning: false // 儲存時將所有任務設為非運行狀態
  }))
  localStorage.setItem('tasks', JSON.stringify(tasksToSave))
}

// 從本地存儲加載
const loadFromLocalStorage = () => {
  const savedTasks = localStorage.getItem('tasks')
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks)
  }
}

// 生命週期鉤子
onMounted(() => {
  loadFromLocalStorage()
})

onUnmounted(() => {
  // 清理所有計時器
  Object.values(timerIntervals.value).forEach(intervalId => {
    clearInterval(intervalId)
  })
})
</script>

<template>
  <div class="container">
    <h1 class="title">任務計時器</h1>

    <!-- 新增任務表單 -->
    <div class="add-task-form">
      <input v-model="newTaskTitle" @keyup.enter="addTask" placeholder="輸入新任務名稱" class="task-input">
      <button @click="addTask" class="add-button">新增任務</button>
    </div>

    <!-- 任務列表 -->
    <div class="task-list">
      <div v-for="task in tasks" :key="task.id" class="task-item" :class="{ 'running': task.isRunning }">
        <div class="task-header">
          <h3>{{ task.title }}</h3>
          <button @click="deleteTask(task.id)" class="delete-button">
            刪除
          </button>
        </div>

        <p class="time-display">已花費時間：{{ formatTime(task.time) }}</p>

        <button @click="task.isRunning ? stopTimer(task) : startTimer(task)"
          :class="['timer-button', task.isRunning ? 'stop' : 'start']">
          {{ task.isRunning ? '停止' : '開始' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.add-task-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.task-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #3aa876;
}

.task-list {
  display: grid;
  gap: 20px;
}

.task-item {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
}

.task-item.running {
  border-color: #42b983;
  box-shadow: 0 2px 8px rgba(66, 185, 131, 0.1);
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.task-header h3 {
  margin: 0;
  color: #2c3e50;
}

.time-display {
  font-size: 1.2em;
  color: #666;
  margin: 10px 0;
}

.timer-button {
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.timer-button.start {
  background-color: #42b983;
  color: white;
}

.timer-button.stop {
  background-color: #e74c3c;
  color: white;
}

.delete-button {
  padding: 4px 12px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #c0392b;
}
</style>
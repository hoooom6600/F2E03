<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const todos = ref([]);
const newTask = ref("");

const API_URL = "http://localhost:3000/todos/";

const fetchTodos = async () => {
  try {
    const res = await axios.get(API_URL);
    todos.value = res.data;
  } catch (err) {
    console.error("取得資料失敗");
  }
};

const addTodo = async () => {
  try {
    const res = await axios.post(API_URL, {
      task: newTask.value,
    });
    console.log(res);
    todos.value.push(res.data);
  } catch (err) {
    console.error("新增資料失敗");
  }
};

onMounted(() => {
  fetchTodos();
});
</script>

<template>
  <main>
    <h1>待辦清單</h1>
    <div>
      <input v-model="newTask" placeholder="輸入文字" />
      <button type="button" @click="addTodo">新增</button>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <p>{{ todo.task }}</p>
      </li>
    </ul>
  </main>
</template>

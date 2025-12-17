<template>
  <div class="card">
    <div class="card-header">
      <!-- TODO: 具名插槽 header，預設顯示 "標題" -->
      <slot name="header">標題</slot>
    </div>
    <div class="card-body">
      <!-- TODO: 預設插槽 -->
      <slot></slot>
    </div>
    <div class="card-footer">
      <!-- TODO: 具名插槽 footer，預設顯示 "頁尾" -->
      <slot name="footer">頁尾</slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}
.card-header {
  background: #f5f5f5;
  padding: 15px;
  font-weight: bold;
}
.card-body {
  padding: 20px;
}
.card-footer {
  background: #f5f5f5;
  padding: 10px;
  text-align: right;
}
</style>

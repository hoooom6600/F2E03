// 🔴 一般常見的寫法：邏輯和畫面混在一起
function createCounter() {
  let count = 0

  // 1. 獲取 DOM 元素
  const display = document.querySelector('.display')
  const addButton = document.querySelector('.addBtn')
  const subButton = document.querySelector('.subBtn')

  // 2. 加入點擊事件
  addButton.addEventListener('click', () => {
    // 3. 更新數字
    count++
    // 4. 更新畫面
    display.textContent = count
  })

  subButton.addEventListener('click', () => {
    count--
    display.textContent = count
  })
}

createCounter()

// 🟢 關注點分離的寫法：分離資料邏輯和畫面更新
// 這種概念比較接近 Vue 的思維方式
function createBetterCounter() {
  // 1. 資料狀態（對應到 Vue 的 data）
  const state = {
    count: 0
  }

  // 2. 更新畫面的函式（對應到 Vue 的 template）
  function updateDisplay() {
    document.querySelector('.display').textContent = state.count
  }

  // 3. 資料處理方法（對應到 Vue 的 methods）
  const methods = {
    add() {
      state.count++
      updateDisplay() // 資料變更後更新畫面
    },
    subtract() {
      state.count--
      updateDisplay()
    }
  }

  // 4. 綁定事件
  document.querySelector('.addBtn').addEventListener('click', methods.add)
  document.querySelector('.subBtn').addEventListener('click', methods.subtract)

  // 5. 初始化畫面
  updateDisplay()
}

createBetterCounter()


// 🔴 混在一起的寫法
// count++;
// display.textContent = count;

// 🟢 分離的寫法
// state.count++;  // 只關注資料的更新
// updateDisplay();  // 統一處理畫面更新

// ✨ Vue 的寫法
// this.count++;  // Vue 會自動幫我們處理畫面更新
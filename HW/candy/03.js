// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  // 程式碼寫在這裡
  const target = 0; // 定義標的，依題目要求而異。本題為 0
  const targetCount = arr.filter((element) => element === target).length; // 嚴格相等，否則 false 會視為 0

  // 把 0 去除，然後在陣列末端依 0 原本出現的數量補上
  arr = arr.filter((element) => element !== 0);
  for (let i = 0; i < targetCount; i++) {
    arr.push(target);
  }
  return arr;
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

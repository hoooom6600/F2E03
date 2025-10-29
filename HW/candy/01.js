// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

function sumOfSmallestValues(arr) {
  // 實作程式碼寫在這裡
  const count = 2; // 即可依題目要求的相加數量做改變

  // 型別轉換，確認只有number elements
  const numberArr = arr.filter((n) => typeof n == "number" && !isNaN(n));

  // 確認數字陣列有東西
  if (numberArr.length <= 0) {
    return "空陣列，沒有東西可以相加";
  }

  // 有序整理陣列
  numberArr.sort((pre, next) => pre - next);

  // 最小值相加
  let result = 0; // 加總初始化
  for (let i = 0; i < count; i++) {
    result += numberArr[i];
  }
  return result;
}

const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1)); // 印出 7
console.log(sumOfSmallestValues(list2)); // 印出 19

// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24

function sumOfSmallestValues(arr) {
  // 實作程式碼寫在這裡
  const count = 2; // 可依題目要求的相加數量做改變

  // 型別轉換，確認只有number elements，並做遞增有序整理
  const numberArr = arr
    .filter((n) => typeof n == "number" && !isNaN(n))
    .sort((prev, next) => prev - next);

  // 確認數字陣列有達要求數量可以做相加
  if (numberArr.length < count) {
    return `陣列不足要求相加的數量（需要 ${count} 個數值）。只接受 number 型態數字`;
  }

  // 最小值加總
  const init = 0; // 加總初始化，可依題目要求更改
  return numberArr
    .slice(0, count) // 因為已經做遞增有序整理，所以可以直接砍掉超過題目要求數量 (count 變數) 的 elements
    .reduce((accumulator, currentValue) => accumulator + currentValue, init);
}

const list1 = [19, 5, 42, 2, 77];
const list2 = [23, 15, 59, 4, 17];

console.log(sumOfSmallestValues(list1)); // 印出 7
console.log(sumOfSmallestValues(list2)); // 印出 19

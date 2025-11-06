// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

function findOddElm(numbers) {
  // 實作寫在這裡
  if (numbers.length == 0) {
    return "不可為空陣列";
  }

  const ordered = numbers.sort((prev, next) => prev - next);
  const oddTimesNum = [];
  let count = 1; // 非空陣列，所以第一元素絕對存在，故數量從 1 開始計算
  for (let i = 0; i < ordered.length; i++) {
    if (ordered[i] == ordered[i + 1]) {
      count++;
    } else {
      ordered[i] != ordered[i + 1];
      if (count % 2 != 0) {
        oddTimesNum.push(ordered[i]);
      }
      count = 1;
    }
  }
  return oddTimesNum.join(", ");
}

console.log(findOddElm([1, 1, 2])); // 印出 2
console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])); // 印出 1
console.log(findOddElm([0, 1, 0, 1, 0])); // 印出 0
console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])); // 印出 -1
console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 印出 5

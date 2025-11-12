// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

function randomNumber(start, end) {
  // 只給一個參數 == 只給起始值
  if (end == undefined) {
    end = start;
    start = 0;
  }

  // 傳入參數有可能為小數，整理成整數
  start = Math.ceil(start);
  end = Math.floor(end);

  // 包含開頭，但不包含結尾
  return Math.floor(Math.random() * (end - start) + start);
}
console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字

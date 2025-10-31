// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  // 實作寫在這裡
  const pow = 2; // 可依題目要求改變指數

  // 將參數轉成字串形式然後展開為陣列其中一個元素
  // String is iterable
  const elements = [...num.toString()];
  const isOnlyDigits = elements.every(
    (currentElement) => !isNaN(Number(currentElement))
  );
  if (!isOnlyDigits) {
    return "可接受數值和字串型態的數字，但拒絕有任一字元非數字";
  }
  // 為開發嚴謹，不依賴 JS 強制轉型做數學，先手動轉成 number 資料型態，並回傳 number 格式
  return Number(elements.map((digit) => Math.pow(Number(digit), pow)).join(""));
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449

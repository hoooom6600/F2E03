// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
  // 實作寫在這裡
  if (num <= 0 || parseInt(num) != num) {
    return "數字需為大於 0 的正整數";
  }
  const digits = [...String(num)];
  let currentPow = digits.length - 1;
  return (
    digits
      .map((digit, index) => `${Math.pow(10, currentPow - index)} x ${digit}`)
      // 位數為 0 者，去除
      .filter((noZeroDigit) => {
        return Number(noZeroDigit[noZeroDigit.length - 1]) != 0;
      })
      // 陣列文字串接
      .join(" + ")
      // 個位數不做乘法，用替代文字方法處理
      .replace("1 x ", "")
  );
}

console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 10 x 2 + 5
console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8

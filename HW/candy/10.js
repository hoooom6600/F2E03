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
  let result = "";
  digits.forEach((digit) => {
    if (currentPow == 0 && Number(digit) == 0) {
      return result;
    } else if (currentPow == 0) {
      result += digit;
    } else if (Number(digit) == 0) {
      currentPow--;
    } else {
      result += `${Math.pow(10, currentPow)} x ${digit} + `;
      currentPow--;
    }
  });

  return result;
}

console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 10 x 2 + 5
console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8

// 編號：CANDY-023
// 程式語言：JavaScript
// 題目：算出 N 個數字的最大公因數

function calcGCD(...numbers) {
  // 實作程式碼寫在這裡
  numbers = numbers.sort((prev, next) => next - prev);

  // 最大公因數不可能 > 陣列中的最小值
  const min = Math.min(...numbers);

  const factors = [];

  // 類似小學找公因數的短除法，L 型的那個，只是程式寫短除法只能盡舉慢慢來
  for (let factor = 1; factor <= min; factor++) {
    let isdivisible = numbers.every((number) => number % factor == 0);
    if (isdivisible) {
      factors.push(factor);
    }
  }

  return factors[factors.length - 1];
}

console.log(calcGCD(10)); // 10
console.log(calcGCD(103, 27)); // 1
console.log(calcGCD(21, 15, 18)); // 3
console.log(calcGCD(104, 96, 36, 88)); // 4

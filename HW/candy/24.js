// 編號：CANDY-024
// 程式語言：JavaScript
// 題目：算出 N 個數字的最小公倍數
// 提示：可使用 023 計算最大公因數的函數

function calcLCM(...numbers) {
  // 實作程式碼寫在這裡

  // 沿用第 23 題 短除法取 GCD
  numbers = numbers.sort((prev, next) => next - prev);

  // 最大公因數不可能 > 陣列中的最小值
  const min = Math.min(...numbers);

  const factors = [];

  // 類似小學找公因數的短除法，L 型的那個，只是程式寫短除法只能盡舉慢慢來
  for (let factor = 1; factor <= min; factor++) {
    const isDivisible = numbers.every((number) => number % factor == 0);
    if (isDivisible) {
      factors.push(factor);
    }
  }
  const GCD = factors[factors.length - 1];

  // 原數除以 GCD 得到的商
  let remaining = numbers.map((num) => num / GCD);

  // 用短除法找 remaining 的部分公因數
  let lcmRemaining = 1;
  let factor = 2; // 公因數從 2 開始找

  // 當剩下的商還有不是 1 的，繼續找公因數
  while (!remaining.every((num) => num === 1)) {
    let lcmFactorPass = false; // 是否為 GCD 之後，LCM 的部分公因數
    for (let i = 0; i < remaining.length; i++) {
      if (remaining[i] % factor === 0) {
        remaining[i] = remaining[i] / factor; // 能被整除就留給下一列 (指小學短除法往下長那樣)
        lcmFactorPass = true;
      }
    }
    if (lcmFactorPass) {
      lcmRemaining *= factor; // 累乘 LCM 公因數
      continue;
    }
    factor++; // 本輪非 LCM 因數，則遞增
  }

  return GCD * lcmRemaining;
}

console.log(calcLCM(10)); // 10
console.log(calcLCM(103, 27)); // 2781
console.log(calcLCM(21, 15, 18)); // 630
console.log(calcLCM(104, 96, 36, 88)); // 41184

// 編號：CANDY-025
// 程式語言：JavaScript
// 題目：
//   一般我們常見的四捨五入計算方式在統計上容易造成計算偏差
//   於是有人推出了「銀行家捨入法」用來稍微平衡計算偏差
//   計算方式是「四捨六入五成雙」
//   當捨入計算位數剛好是 5 的時候，會算出離這個數字比較近的偶數

function bankersRounding(num, digits = 0) {
  // 實作程式碼寫在這裡
  const numString = num.toString();

  let integer = numString.split(".")[0];
  let decimal = numString.split(".")[1];

  // 沒 digits 參數 → 捨入法到個位數
  if (digits == 0) {
    const roundingIndex = integer.length - 1; // 個位數
    const decidingIndex = 0; // 小數點後第一位
    const roundingDigit = Number(integer[roundingIndex]);
    const decidingDigit = Number(decimal[decidingIndex]);

    // 捨入法邏輯
    // 四捨
    if (decidingDigit < 5) {
      return Number(integer);
    }
    // 六入
    else if (decidingDigit > 5) {
      return Number(integer) + 1;
    }
    // 五成雙
    else {
      if (roundingDigit % 2 == 0) {
        return Number(integer); // 偶數，不變
      }
      return Number(integer) + 1; // 奇數，進位
    }
  }
  // 有 digits 參數 → 捨入法到小數位
  const roundingIndex = digits - 1;
  const roundingDigit = Number(decimal[digits]);
  const decidingDigit = Number(decimal[roundingIndex]);

  const carryNumber = Number(`0.${"0".repeat(roundingIndex)}1`);

  // console.log(num + carryNumber);

  // 捨入法邏輯
  // 四捨
  if (decidingDigit < 5) {
    return Number(num.toString().slice(0, -1));
  }
  // 六入
  else if (decidingDigit > 5) {
    return Number((num + carryNumber).toString().slice(0, -1));
  }
  // 五成雙
  else {
    if (roundingDigit % 2 == 0) {
      return roundingDigit; // 偶數，不變
    }
    return roundingDigit + 1; // 奇數，進位
  }
}

console.log(bankersRounding(0.4)); // 0
console.log(bankersRounding(0.6)); // 1
console.log(bankersRounding(0.5)); // 0
console.log(bankersRounding(1.5)); // 2
console.log(bankersRounding(1.24, 1)); // 1.2
console.log(bankersRounding(1.26, 1)); // 1.3
console.log(bankersRounding(1.25, 1)); // 1.2

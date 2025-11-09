// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

function isValidVatNumber(vat) {
  // 實作寫在這裡
  const digits = [...vat];
  const checkNum = [1, 2, 1, 2, 1, 2, 4, 1];
  const process = [];
  for (let i = 0; i < digits.length; i++) {
    process.push(Number(digits[i]) * checkNum[i]);
  }

  // 檢查乘積，做乘積之和
  for (let i = 0; i < process.length; i++) {
    if (process[i] > 9) {
      process[i] =
        Number(process[i].toString()[0]) + Number(process[i].toString()[1]);
    }
  }

  // 從左而右開始，第 7 位數「非」 7 者
  if (Number(digits[6]) != 7) {
    const sum = process.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    if (sum % 5 == 0 || sum % 10 == 0) {
      return true;
    }
  }

  // 從左而右開始，第 7 位數「為」 7 者
  let oddValid = false;
  let evenValid = false;
  if (Number(digits[6]) == 7) {
    let sum = 0;
    // 第 7 位數乘積之和 > 9，取左側數字相加
    for (let i = 0; i < process.length; i++) {
      if (process[i] > 9) {
        sum += Number(process[i].toString()[0]);
        continue;
      }
      sum += process[i];
    }
    if (sum % 5 == 0) {
      oddValid = true;
    }
    // 重置，計算第 7 位數乘積之和 > 9，取右側數字相加的狀況
    sum = 0;
    for (let i = 0; i < process.length; i++) {
      if (process[i] > 9) {
        sum += Number(process[i].toString()[1]);
        continue;
      }
      sum += process[i];
    }
    if (sum % 5 == 0) {
      evenValid = true;
    }
  }
  if (oddValid || evenValid) {
    return true;
  }
  return false;
}

console.log(isValidVatNumber("10458575")); // true
console.log(isValidVatNumber("88117125")); // true
console.log(isValidVatNumber("53212539")); // true
console.log(isValidVatNumber("88117126")); // false

// 編號：CANDY-017
// 程式語言：JavaScript
// 題目：計算數字的 2 進位裡有幾個 1
// 範例：5 -> 101 -> 2 個 1

function countBits(num) {
  // 實作寫在這裡
  // 多少進位
  const carry = 2;

  // 進位轉換
  const binary = num.toString(carry);

  // 嘗試用 reduce 同時做過濾並累積
  return [...binary].reduce((count, current) => {
    if (Number(current) == 1) {
      count++;
    }
    return count;
  }, 0);
}

console.log(countBits(1234)); // 5
console.log(countBits(1450)); // 6
console.log(countBits(9527)); // 8

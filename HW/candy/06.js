// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  // 實作寫在這裡
  // 有序排列（小至大）
  const ordered = numbers.sort((prev, next) => prev - next);

  // 因已排序，若前二個元素相同，則代表異者在陣列末端，反之
  if (ordered[0] === ordered[1]) {
    return ordered[ordered.length - 1];
  }
  return ordered[0];
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

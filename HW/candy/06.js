// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  // 實作寫在這裡
  const first = {
    num: null,
    count: 0,
  };
  const second = {
    num: null,
    count: 0,
  };

  numbers.forEach((number) => {
    if (first.count === 0) {
      first.num = number;
      first.count++;
    } else if (number !== first.num) {
      second.num = number;
      second.count++;
    } else if (number === first.num) {
      first.count++;
    } else {
      second.count++;
    }
  });

  if (first.count === 1) {
    return first.num;
  }
  return second.num;
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

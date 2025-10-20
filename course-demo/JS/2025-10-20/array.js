const alphas = ["A", "B", "C", "D", "E"];

// 印出 E
console.log(alphas[4]);
console.log(alphas[alphas.length - 1]);

const nums = [1, 2, 3, 4, 5];
// 利用 for 迴圈印出
console.log("利用 for 迴圈印出");
for (let i = 0; i <= nums.length - 1; i++) {
  console.log(nums[i]);
}

// forEach
console.log("利用 forEach 迴圈印出");
nums.forEach(function (num) {
  console.log(num);
});

// 利用 for 迴圈印出 [2, 4, 6, 8, 10]
console.log("利用 for 迴圈印出 [2, 4, 6, 8, 10]");
const numsTwice = [];
for (let i = 0; i <= nums.length - 1; i++) {
  numsTwice.push(nums[i] * 2);
}
console.log(numsTwice);

// 利用 map 印出 [2, 4, 6, 8, 10]
console.log("利用 map 印出 [2, 4, 6, 8, 10]");
const mapTwice = nums.map(function (num) {
  return num * 2;
});

console.log(mapTwice);

// 利用 map 印出 ['aa', 'bb', 'cc', 'dd', 'ee']
console.log("利用 map 印出 ['aa', 'bb', 'cc', 'dd', 'ee']");
const chars = ["a", "b", "c", "d", "e"];
const doubleChars = chars.map(function (char) {
  return char.repeat(2);
});
console.log(doubleChars);

// 利用 filter 留下偶數
console.log("利用 filter 留下偶數");
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = nums2.filter(function (num) {
  return num % 2 == 0;
});
console.log(evens);

// 利用 reduce 從 1 加到 5
console.log("利用 reduce 從 1 加到 5");
const result = nums.reduce(function (acc, currentValue) {
  return acc + currentValue;
}, 0);
console.log(result);

// 綜合練習: 1 - 10 中，偶數的平方總和

// step.1 取偶數
console.log("綜合練習: 1 - 10 中，偶數的平方總和");
const evensFliter = nums2.filter(function (num) {
  return num % 2 == 0;
});
console.log(evensFliter);

// step.2-1 用 map 來取平方
// const evensSquare = evensFliter.map(function (even) {
//   return Math.pow(even, 2);
// });

// step.2-2 用 forEach 來取平方
// const evensSquare = [];
// evensFliter.forEach(function (even) {
//   evensSquare.push(even * even);
// });

// step.3 加總
// const squareTotal = evensSquare.reduce(function (acc, currentValue) {
//   return acc + currentValue;
// });
// console.log(squareTotal);

// 把 step.2 和 step.3 合在一起
// const squareTotal = evensFliter.reduce(function (acc, currentValue) {
//   return acc + currentValue * currentValue;
// }, 0);
// console.log(squareTotal);

// 全部省成一步驟
console.log("綜合練習(精簡成一步驟): 1 - 10 中，偶數的平方總和");
// const squareTotal = nums2
//   .filter(function (num) {
//     return num % 2 == 0;
//   })
//   .map(function (even) {
//     return Math.pow(even, 2);
//   })
//   .reduce(function (acc, currentValue) {
//     return acc + currentValue;
//   });
// console.log(squareTotal);

// 把函數抽象化
console.log("綜合練習(callback抽象化): 1 - 10 中，偶數的平方總和");
function getEvens(num) {
  return num % 2 == 0;
}
function getSquares(even) {
  return Math.pow(even, 2);
}
function getTotal(acc, currentValue) {
  return acc + currentValue;
}

console.log(nums2.filter(getEvens).map(getSquares).reduce(getTotal));

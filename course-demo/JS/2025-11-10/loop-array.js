const arr = ["a", "b", "c"];

// 印出 a, b, c
arr.forEach((element) => console.log(element));

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 物件
for (let a of arr) {
  console.log(a);
}

// 用索引取物件
for (let a in arr) {
  console.log(arr[a]);
}

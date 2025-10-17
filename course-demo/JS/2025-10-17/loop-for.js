// 10 次 hello world

for (let i = 0; i <= 10; i++) {
  console.log(`第${i}次 hello world`);
}

// 0 - 9 印出偶數
console.log("餘數用法");
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 0 - 9 印出偶數
console.log("等差用法");
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

// 0 - 9 印出偶數
console.log("關鍵字用法");
for (let i = 0; i < 10; i += 2) {
  if (i % 2 != 0) {
    continue;
  }
  console.log(i);
}

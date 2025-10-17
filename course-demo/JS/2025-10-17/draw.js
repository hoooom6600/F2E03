let star = "*";

console.log("基礎款");
for (let i = 1; i <= 5; i++) {
  console.log(star.repeat(i));
}

console.log("進階款");
let space = " ";
let maxHeight = 5;
console.log(`高度: ${maxHeight}`);

for (let row = 1; row <= maxHeight; row++) {
  console.log(space.repeat(maxHeight - row) + star.repeat(row * 2 - 1));
}

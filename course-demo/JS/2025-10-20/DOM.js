// 使用監聽器再來更改 HTML
// document.addEventListener("DOMContentLoaded", () => {
//   const hello = document.querySelector("#hi");
//   hello.textContent = "123";
//   console.log(hello);
// });

// 配合 defer 並將 JS 放在 <head> 來控制 HTML
// const hello = document.querySelector("#hi");
// hello.textContent = "123";
// console.log(hello);

// 點擊按鈕後，改變 HTML
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const div = document.querySelector("#hi");
  const currentText = div.textContent;
  if (currentText === "Hello") {
    div.textContent = "World";
  } else {
    div.textContent = "Hello";
  }
});

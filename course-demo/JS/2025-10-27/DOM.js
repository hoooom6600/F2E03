const body = document.querySelector("body");
const btnColor = document.querySelector("#btnColor");
const btnDisplay = document.querySelector("#btnDisplay");
const btnAdd = document.querySelector("#btnAdd");
const title = document.querySelector("#title");

btnColor.addEventListener("click", (e) => {
  if (title.classList.contains("red")) {
    // if (title.className.includes("red")) {
    // includes 風險較高，以 red 為例，若class裡有很多包含 red 字元，則會全部選取
    // contains 的抓取比較精準
    title.classList = "blue";
  } else {
    title.className = "red";
  }
});

btnDisplay.addEventListener("click", (e) => {
  title.classList.toggle("hidden");
});

btnAdd.addEventListener("click", (e) => {
  // 建立新元素
  const div = document.createElement("div");
  div.id = "s";
  div.className = "string wow amazing";
  div.textContent = "I'm div by appendChild()";
  div.classList.add("nihao");
  div.classList.remove("string");
  body.appendChild(div);
});

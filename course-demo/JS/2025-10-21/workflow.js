document.addEventListener("DOMContentLoaded", () => {
  const outer = document.querySelector("#outer");
  const inner = document.querySelector("#inner");
  outer.addEventListener("click", () => {
    console.log("out");
  });
  inner.addEventListener("click", () => {
    console.log("in");
  });
});

// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
document.addEventListener("DOMContentLoaded", () => {
  const bodyHeight = document.querySelector("#bodyHeight");
  const bodyWeight = document.querySelector("#bodyWeight");
  const button = document.querySelector("button");
  const resultText = document.querySelector("#resultText");

  button.addEventListener("click", () => {
    const hM = Number(bodyHeight.value) / 100;
    const w = Number(bodyWeight.value);
    resultText.textContent = (w / (hM * hM)).toFixed(2);
  });
});

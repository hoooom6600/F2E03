// BMI 計算機

function calcBMI(heightCM, weight) {
  const heightM = heightCM / 100;
  const result = weight / (heightM * heightM);
  return result;
}

console.log(calcBMI(170, 64));

// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  // 實作寫在這裡
  // 整理字母順序，由A至z，然後轉成UTF碼
  const charsToUTF = [];
  chars.sort().forEach((char) => {
    charsToUTF.push(char.charCodeAt(char));
  });

  // 收集缺字的UTF碼，可能不只一個缺漏，依題目而定
  const missingsUTF = [];
  for (let i = 0, j = 1; j < charsToUTF.length; i++, j++) {
    let distance = charsToUTF[j] - charsToUTF[i];
    if (distance != 1) {
      for (let k = 1; k < charsToUTF[j] - charsToUTF[i]; k++)
        missingsUTF.push(charsToUTF[i] + k);
    }
  }

  let result = "";
  // 從UTF轉回字符
  missingsUTF.forEach((missing) => {
    if (result.length > 0) {
      result += `, ${String.fromCharCode(missing)}`;
    } else {
      result += String.fromCharCode(missing);
    }
  });
  return result;
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...

// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  // 實作寫在這裡
  if (str.length == 0) {
    return [];
  }

  // 拷貝參數字串並拆解個別字元為一元素納入陣列，才能做 _ 號的加入與否
  const array = [...str];

  // 奇數長度，尾端補 _ 符號
  if (array.length % 2 != 0) {
    array[array.length] = "_";
  }

  const result = [];

  // 奇數長度補符號，則傳入合理的字串參數必定為偶數長度，所以可以 i += 2
  for (let i = 0; i < array.length; i += 2) {
    result.push(`${array[i]}${array[i + 1]}`);
  }

  return result;
}

console.log(splitString("abcdef")); // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(splitString("")); // []

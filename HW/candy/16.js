// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
  // 實作寫在這裡
  const result = [...str];
  for (let i = 0; i < result.length; i++) {
    if (result[i] == "_") {
      result[i] = "";
      result[i + 1] = result[i + 1].toUpperCase();
    }
  }
  return result.join("");
}

console.log(toCamelCase("book")); // book
console.log(toCamelCase("book_store")); // bookStore
console.log(toCamelCase("get_good_score")); // getGoodScore

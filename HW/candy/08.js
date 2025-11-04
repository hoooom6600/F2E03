// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  // 實作寫在這裡
  // 練習正則表達式
  if ([...input].filter((words) => words.match(/[A-Z]/)).length) {
    return "拒絕任何大寫";
  }
  const words = input.split(" ");
  let highestScore = 0;
  let highestWord = "";

  words.forEach((word) => {
    const currentScore = [...word].reduce(
      // 小寫 a 的 UTF-16 編碼為 97
      (sum, letter) => sum + letter.charCodeAt(0) - 97 + 1,
      0
    );
    if (currentScore > highestScore) {
      highestScore = currentScore;
      highestWord = word;
    }
  });
  return highestWord;
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there

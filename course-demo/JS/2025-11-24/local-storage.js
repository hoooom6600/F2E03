const hero = {
  name: "cc",
  age: 18,
};

localStorage.setItem("aa", hero);
const result = localStorage.getItem("aa");
console.log(result); // [object Object]

localStorage.setItem("bb", JSON.stringify(hero));
const JSONresult = JSON.parse(localStorage.getItem("bb"));
console.log(JSONresult); // 正確物件格式

const aa = [
  { id: 1, name: "aa" },
  { id: 20, name: "bb" },
  { id: 3, name: "cc" },
  { id: 42, name: "dd" },
];

// 印出 id = 3 的物件

console.log(aa.find((element) => element.id == 3));

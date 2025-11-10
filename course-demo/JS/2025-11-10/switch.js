const aa = [
  { id: 1, name: "cc" },
  { id: 5, name: "kk" },
  { id: 100, name: "siri" },
];

// id: 5  --> {id: 7, name: "dd"}
// 提示：splice

// console.log(
//   aa.map((element) => {
//     if (element.id == 5) {
//       element = { id: 7, name: "dd" };
//     }
//     return element;
//   })
// );

const targetIndex = aa.findIndex((element) => element.id == 5);
if (targetIndex >= 0) {
  aa.splice(targetIndex, 1, { id: 7, name: "dd" });
}
console.log(aa);

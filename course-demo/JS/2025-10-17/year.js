let year = Number(prompt("請輸入年份"));

// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       console.log(year + "是閏年");
//     } else {
//       console.log(year + "是平年");
//     }
//   } else {
//     console.log(year + "是閏年");
//   }
// } else {
//   console.log(year + "是平年");
// }

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(year + "是閏年");
} else {
  console.log(year + "是平年");
}

// FIXME: 線上demo【練習題】流程控制 12:26處 year % 100 != 4 寫錯，整除應該為0

const url =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

//
// await 寫法
//
// try {
//   const response = await fetch(url);
//   const stations = await response.json();
// } catch (err) {
//   alert("系統發生錯誤，請稍後再試");
//   console.log(err);
// }
// console.log(response);
// console.log(stations);

//
// 使用 axios 套件
//
// axios
//   .get(url)
//   .then((repsonse) => {
//     console.log(repsonse);
//     console.log(repsonse.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//
// axios 解構寫法
//
// axios
//   .get(url)
//   .then(({ data }) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//
// await + axios 組合技
//
try {
  const { data: stations } = await axios.get(url);
  console.log(stations);
} catch (err) {
  console.log(err);
}

// function createCounters() {
//   const counters = [];
//   for (var i = 0; i < 3; i++) {
//     counters.push(() => i);
//   }
//   return counters;
// }

// const [a, b, c] = createCounters();
// console.log(a(), b(), c());

/* ////// var -> let ////// */
// function createCounters() {
//   const counters = [];
//   for (let i = 0; i < 3; i++) {
//     counters.push(() => i);
//   }
//   return counters;
// }

// const [a, b, c] = createCounters();
// console.log(a(), b(), c());

/* ////// IIFE ////// */
function createCounters() {
  const counters = [];
  var i = 0;
  for (var i = 0; i < 3; i++) {
    counters.push(
      (
        (num) => () =>
          num
      )(i)
    );
  }
  return counters;
}

const [a, b, c] = createCounters();
console.log(a(), b(), c());

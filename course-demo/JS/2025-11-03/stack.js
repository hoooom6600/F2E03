let count = 0; // 計算多少 stack 會 overflow
function repeat() {
  console.log(count++);
  repeat();
}

repeat();

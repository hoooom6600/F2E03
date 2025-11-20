function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  const timeString = `${hours} : ${minutes} : ${seconds}`;

  document.getElementById("clock").innerText = timeString;
}

function addZero(num) {
  return num.toString().padStart(2, "0");
}

updateClock(); // 進入頁面，立即執行，顯示進入頁面的時間
setInterval(updateClock, 1000); // 之後每 1 秒刷新一次

const url =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

const bikeIcon = '<i class="fas fa-bicycle"></i>'; // 注意 Font Awesome v5.15.4 和 v6 的 solid 寫法差異

document.addEventListener("DOMContentLoaded", (e) => {
  const button = document.querySelector("button");
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");

  button.addEventListener("click", (e) => {
    // 取消 button 預設提交 form 行為，否則頁面會重整 ( URL 後面多一個問號)
    e.preventDefault();

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((stations) => {
        // 如果 ul 內有東西，清空。 ul 內的元素來自前次的檢索
        console.log(ul.childNodes.length);
        if (ul.childNodes.length > 0) {
          ul.innerHTML = "";
        }

        // 取得符合搜尋條件的站點(陣列);
        const value = input.value;
        const stationsMatch = stations.filter((station) => {
          return station.ar.includes(value);
        });

        // 在頁面顯示搜尋結果
        // 沒有符合的搜尋條件
        if (stationsMatch.length == 0) {
          const empty = document.createElement("p");
          empty.className = "empty";
          empty.textContent = "查無搜尋結果";
          ul.appendChild(empty);
          return;
        }
        // 關鍵字通過
        stationsMatch.forEach((stationMatch) => {
          // 站點名稱
          const newLiStationName = document.createElement("li");
          newLiStationName.className = "station-name";

          newLiStationName.innerHTML =
            bikeIcon + stationMatch.sna.replace("YouBike2.0_", "");

          // 站點路名
          const newPAddress = document.createElement("p");
          newPAddress.textContent = stationMatch.ar;
          newPAddress.className = "station-address";

          // ul 內新增元素
          newLiStationName.appendChild(newPAddress);
          ul.appendChild(newLiStationName);
        });
      });
  });
});

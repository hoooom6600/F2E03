const url =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

const bikeIcon = '<i class="fas fa-bicycle"></i>'; // 注意 Font Awesome v5.15.4 和 v6 的 solid 寫法差異

document.addEventListener("DOMContentLoaded", (e) => {
  const button = document.querySelector("button");
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");

  // 為提升效能，避免點擊一次按鈕就要重新 fetch，所以先在 global fetch
  const items = fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((item) => {
      return item;
    });

  button.addEventListener("click", (e) => {
    // 取消 button 預設提交 form 行為，否則頁面會重整（URL 後面多一個問號）
    e.preventDefault();

    items.then((stations) => {
      // 如果 ul 內有東西，清空。 ul 內的元素來自前次的檢索
      if (ul.childNodes.length > 0) {
        ul.innerHTML = "";
      }

      // 取得符合搜尋條件（限路名）的站點（陣列）;
      const value = input.value;
      const stationsMatch = stations.filter((station) => {
        return station.ar.includes(value);
      });

      // 在頁面顯示搜尋結果
      // 不允許空字串，但沒有任何輸入代表搜尋全部站點
      if (value != "" && value.trim().length == 0) {
        const empty = document.createElement("p");
        empty.className = "empty";
        empty.textContent = "請輸入關鍵字";
        ul.appendChild(empty);
        return;
      }

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
        const list = document.createElement("li");
        const stationNameBox = document.createElement("span");
        stationNameBox.className = "station-name";
        stationNameBox.innerHTML = `${bikeIcon}${stationMatch.sna.replace(
          "YouBike2.0_",
          ""
        )}`; // 為了能正確解析 icon，所以用 innerHTML

        // 站點路名
        const addressBox = document.createElement("p");
        addressBox.className = "station-address";
        addressBox.textContent = stationMatch.ar;

        // 可租借數量
        const availableCountBox = document.createElement("span");
        availableCountBox.className = "available-count";
        availableCountBox.textContent = `(${stationMatch.available_rent_bikes})`;

        // ul 內新增 list，list 內插入站點名稱、可租借數量、站點路名
        list.appendChild(stationNameBox);
        list.appendChild(availableCountBox);
        list.appendChild(addressBox);
        ul.appendChild(list);
      });
    });
  });
});

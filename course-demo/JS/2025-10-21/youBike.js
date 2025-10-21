const url =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((stations) => {
    // 把前綴清除
    // stations.forEach((station) => {
    //   console.log(station.sna.replace("YouBike2.0_", ""));
    // });
    //
    // 取出 中山區 的站點
    // const stationCount = stations.filter((station) => {
    //   return station.sarea == "中山區";
    // });
    // console.log(stationCount.length);
    //
    // 取出 中山區 的站點，且可租借數 10 台以上
    // const stationCount = stations.filter((station) => {
    //   return station.sarea == "中山區" && station.available_rent_bikes >= 10;
    // });
    // console.log(stationCount.length);
    //
    // 取出在 民權西路，可租借數 10 台以上的站點
    //
    const stationAddress = stations.filter((station) => {
      return (
        station.available_rent_bikes >= 10 && station.ar.includes("民權西路")
      );
    });
    stationAddress.forEach((address) => {
      console.log(`${address.ar} ${address.available_rent_bikes} 台`);
    });
  });

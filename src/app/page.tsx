'use client';
export default function Home() {
  // Geolocation APIを使って現在地を取得する
  // const getLocation = () => {
  //   console.log(navigator);
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  //   }
  // };

  // // 取得に成功した場合の処理
  // function successCallback(position: any) {
  //   // 緯度を取得し画面に表示
  //   const latitude = position.coords.latitude;
  //   console.log(latitude);
  //   // document.getElementById('latitude').innerHTML = latitude;
  //   // 経度を取得し画面に表示
  //   const longitude = position.coords.longitude;
  //   console.log(longitude);
  //   // document.getElementById('longitude').innerHTML = longitude;
  // }

  // // 取得に失敗した場合の処理
  // function errorCallback(error: any) {
  //   alert('位置情報が取得できませんでした');
  // }

  // getLocation();
  return <main>test</main>;
}

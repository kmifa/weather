'use client';

import { useEffect, useState } from 'react';
import Chart from '@/app/[prefecture]/chart';

const Geolocation = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [data, setData] = useState<any | null>(null); // 追加: APIのレスポンスデータを保存するステート
  const [error, setError] = useState<any>(null);
  // ブラウザの機能にアクセスする場合はuseEffectを使う
  useEffect(() => {
    // Geolocation APIを使って現在地を取得する
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }

    // 取得に成功した場合の処理
    function successCallback(position: any) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }

    // 取得に失敗した場合の処理
    function errorCallback(error: any) {
      console.log(error);
      alert('位置情報が取得できませんでした');
    }
  }, []);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/personal?lat=${latitude}&lon=${longitude}`
          );
          if (!response.ok) throw new Error('Failed to fetch data');
          const responseData = await response.json();
          setData(responseData); // 追加: レスポンスデータをステートに保存
          console.log(responseData);
        } catch (error: any) {
          console.error('Error fetching data:', error);
          setError(error.message); // エラーメッセージをステートに保存
        }
      };

      fetchData();
    }
  }, [latitude, longitude]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {data ? (
        // この部分でデータを表示。実際の表示方法はAPIのレスポンスに応じて変更してください。
        <div>
          {/* <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p> */}
          <Chart times={data} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Geolocation;

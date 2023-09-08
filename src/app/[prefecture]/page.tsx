import Chart from './chart';
import SetStorage from './setStorage';
const generateWeatherIcon = (weatherCode: number) => {
  // https://www.jodc.go.jp/data_format/weather-code_j.html
  const iconText = (() => {
    if (weatherCode === 0) return { text: '快晴', emoji: '☀' }; // 0 : Clear Sky
    if (weatherCode === 1) return { text: '晴れ', emoji: '🌤' }; // 1 : Mainly Clear
    if (weatherCode === 2) return { text: '一部曇', emoji: '⛅' }; // 2 : Partly Cloudy
    if (weatherCode === 3) return { text: '曇り', emoji: '☁' }; // 3 : Overcast
    if (weatherCode <= 49) return { text: '霧', emoji: '🌫' }; // 45, 48 : Fog And Depositing Rime Fog
    if (weatherCode <= 59) return { text: '霧雨', emoji: '🌧' }; // 51, 53, 55 : Drizzle Light, Moderate And Dense Intensity ・ 56, 57 : Freezing Drizzle Light And Dense Intensity
    if (weatherCode <= 69) return { text: '雨', emoji: '☔' }; // 61, 63, 65 : Rain Slight, Moderate And Heavy Intensity ・66, 67 : Freezing Rain Light And Heavy Intensity
    if (weatherCode <= 79) return { text: '雪', emoji: '☃' }; // 71, 73, 75 : Snow Fall Slight, Moderate And Heavy Intensity ・ 77 : Snow Grains
    if (weatherCode <= 84) return { text: '俄か雨', emoji: '🌧' }; // 80, 81, 82 : Rain Showers Slight, Moderate And Violent
    if (weatherCode <= 94) return { text: '雪・雹', emoji: '☃' }; // 85, 86 : Snow Showers Slight And Heavy
    if (weatherCode <= 99) return { text: '雷雨', emoji: '⛈' }; // 95 : Thunderstorm Slight Or Moderate ・ 96, 99 : Thunderstorm With Slight And Heavy Hail
    return { text: '不明', emoji: '✨' };
  })();
  return <span title={iconText.text}>{iconText.emoji}</span>;
};

const Prefecture = async ({ params }: { params: { prefecture: string } }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${params.prefecture}`);
  if (!response.ok) throw new Error('Failed to fetch data');
  const data = await response.json();
  return (
    <>
      <div className="mx-auto w-80 text-center">
        <time className="text-sm text-orange-500">{data.current_weather.time}</time>
        <h1 className="text-4xl">{params.prefecture.toUpperCase()}</h1>
        <div className="flex justify-center text-center text-3xl">
          {generateWeatherIcon(data.current_weather.weathercode)}
          <p className="">{data.current_weather.temperature}℃</p>
        </div>
        {/* <SetStorage params={params} /> */}
      </div>
      <Chart times={data} />
    </>
  );
};

export default Prefecture;

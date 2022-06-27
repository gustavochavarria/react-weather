//openweathermap
const url = new URL('https://api.openweathermap.org/data/2.5/forecast');

url.searchParams.set('appid', process.env.REACT_APP_OPEN_WEATHER_KEY);
url.searchParams.set('units', 'metric');

console.log('process.env: ', process.env.REACT_APP_OPEN_WEATHER_KEY);

export const getWeather = async ({ lat, lon, lang }) => {
  url.searchParams.set('lat', lat);
  url.searchParams.set('lon', lon);
  url.searchParams.set('lang', lang);

  const res = await window.fetch(url.toString());

  return res.json();
};

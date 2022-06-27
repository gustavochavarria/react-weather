export const WeatherModel = data => {
  const days = data.list.map(day => {
    const { temp, feels_like, humidity } = day?.main || {};
    const { main, description } = day?.weather[0] || {};
    const datetime = new Date(day.dt * 1000);

    return {
      temp: '',
      datetime,
    };
  });

  return {};
};

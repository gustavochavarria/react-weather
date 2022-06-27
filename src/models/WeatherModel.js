import { format } from 'date-fns';

export const WeatherModel = data => {
  const days = (data?.list || []).map(day => {
    const { temp, feels_like, humidity } = day?.main || {};
    const { main, description, icon } = day?.weather[0] || {};
    const formattedDate = format(new Date(day.dt * 1000), 'MM/dd/yyyy ha');

    return {
      temp,
      datetime: formattedDate,
      feelsLike: feels_like,
      humidity,
      weather: description,
      weatherId: main,
      icon,
    };
  });

  return days;
};

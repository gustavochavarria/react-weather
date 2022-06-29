import { render, screen } from '@testing-library/react';
import CityWeather from './CityWeather';

describe('<CityWeather />', () => {
  const mockWeather = [
    {
      temp: 24.64,
      datetime: '06/27/2022 9PM',
      feelsLike: 25.61,
      humidity: 94,
      weather: 'light rain',
      weatherId: 'Rain',
      icon: '10n',
    },
    {
      temp: 24.59,
      datetime: '06/28/2022 12AM',
      feelsLike: 25.48,
      humidity: 91,
      weather: 'broken clouds',
      weatherId: 'Clouds',
      icon: '04n',
    },
  ];

  test('Component is rendered', () => {
    render(<CityWeather weather={mockWeather} />);

    const el = screen.getByText('light rain');
    expect(el).toBeInTheDocument();
  });
});

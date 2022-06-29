import { useEffect, useCallback } from 'react';
import { Box } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';

import { changeWeather } from '../../redux/weatherSlice';
import { changeCity } from '../../redux/citySlice';

import { CityModel } from '../../models/CityModel';
import { WeatherModel } from '../../models/WeatherModel';

import { getWeather } from '../../services/openWeather';

import CityWeather from './components/CityWeather';
import CitiesAvailable from './components/CitiesAvailable';

export default function Cities() {
  const currentCity = useSelector(state => state.city.value);
  const dispatch = useDispatch();

  const weather = useSelector(state => state.weather.value);
  const lang = useSelector(state => state.lang.value);

  const handleChangeCity = useCallback(
    async name => {
      dispatch(changeCity(name));

      const currentCityModel = CityModel.find(city => city.name === name);

      const res = await getWeather({ ...currentCityModel, lang });
      const re = WeatherModel(res);

      dispatch(changeWeather(re));
    },
    [dispatch, lang]
  );

  useEffect(() => {
    handleChangeCity(CityModel[0].name);
  }, [handleChangeCity]);

  console.log({ weather });

  return (
    <Box
      p="8px"
      backdropFilter="blur(10px)"
      backgroundColor="rgba(0,0,0,0.1)"
      borderRadius="md"
    >
      <CitiesAvailable
        cityModel={CityModel}
        currentCity={currentCity}
        handleChangeCity={handleChangeCity}
      />

      <Box my="24px">
        <CityWeather weather={weather} />
      </Box>
    </Box>
  );
}

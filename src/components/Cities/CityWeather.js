import { Box, Text, HStack } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { CityModel } from '../../models/CityModel';
import { WeatherModel } from '../../models/WeatherModel';

import { getWeather } from '../../services/openWeather';

import { changeWeather } from '../../redux/weatherSlice';

export default function WeatherCity({ city }) {
  const weather = useSelector(state => state.weather.value);
  const lang = useSelector(state => state.lang.value);
  const dispatch = useDispatch();

  const currentCityModel = CityModel.find(({ name }) => name === city);

  useEffect(() => {
    const query = async () => {
      const res = await getWeather({ ...currentCityModel, lang });
      const re = WeatherModel(res);

      dispatch(changeWeather(re));
    };

    query();
  }, [currentCityModel, dispatch, lang]);

  return (
    <Box overflowY="scroll" minH="200px" height="35vh">
      {weather.map((d, index) => {
        return (
          <HStack
            dir="row"
            bgColor="rgba(255,255,255,0.8)"
            backdropFilter="blur(40px)"
            color="gray.700"
            my="8px"
            p="8px"
            borderRadius="2px"
            key={`${index} - ${d.datetime}`}
          >
            <Text>{d.datetime}</Text>
            <Text minW="80px">{Number(d?.temp || 0)}°C</Text>
            <Text>{d.weather}</Text>
          </HStack>
        );
      })}
    </Box>
  );
}

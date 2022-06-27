import { Box, ButtonGroup, Button } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../../redux/citySlice';

import { CityModel } from '../../models/CityModel';
import CityWeather from './CityWeather';

export default function Cities() {
  const currentCity = useSelector(state => state.city.value);
  const dispatch = useDispatch();

  return (
    <Box
      p="8px"
      backdropFilter="blur(10px)"
      backgroundColor="rgba(0,0,0,0.1)"
      borderRadius="md"
    >
      <ButtonGroup variant="outline" spacing="4">
        {CityModel.map(({ name }) => (
          <Button
            fontWeight="bold"
            fontSize="xl"
            key={name}
            bgColor={name === currentCity ? 'red.400' : ''}
            onClick={() => dispatch(changeCity(name))}
            _hover={{
              bgColor: name === currentCity ? 'red.500' : 'red.3  00',
            }}
          >
            {name}
          </Button>
        ))}
      </ButtonGroup>

      <Box my="24px">
        <CityWeather city={currentCity} />
      </Box>
    </Box>
  );
}

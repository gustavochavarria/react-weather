import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { useSelector } from 'react-redux';

export default function WeatherHeader() {
  const weather = useSelector(state => state.weather.value);

  const icon = weather[0]?.icon;
  const temp = Number(weather[0]?.temp || 0).toFixed(0);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="baseline"
      cursor="default"
      mb="16px"
      color="rgba(255,255,255,0.7)"
      _hover={{
        color: 'rgba(255,255,255,0.9)',
      }}
    >
      <Box>
        <Text>
          {icon && (
            <Image
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              fontSize={['7xl', '8xl']}
              opacity="0.7"
              _hover={{
                opacity: '0.9',
              }}
            />
          )}
        </Text>
        <Text fontSize="lg" textAlign="center" textTransform="capitalize">
          {weather[0]?.weather || ''}
        </Text>
      </Box>
      <Box>
        <Text fontSize={['8xl', '9xl']}>{temp}°C</Text>
      </Box>
    </Flex>
  );
}

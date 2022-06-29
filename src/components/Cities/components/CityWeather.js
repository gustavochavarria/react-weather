import { Box, Text, HStack } from '@chakra-ui/react';

export default function WeatherCity({ weather }) {
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

import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import { FaCloudRain } from 'react-icons/fa';

export default function Weather() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="baseline"
      cursor="default"
      mb="16px"
      color="rgba(255,255,255,0.6)"
      _hover={{
        color: 'rgba(255,255,255,0.9)',
      }}
    >
      <Box>
        <Text>
          <Icon as={FaCloudRain} fontSize={['7xl', '8xl']} />
        </Text>
        <Text fontSize="lg" textAlign="center">
          It's sunny
        </Text>
      </Box>
      <Box>
        <Text fontSize={['8xl', '9xl']}>24°C</Text>
      </Box>
    </Flex>
  );
}

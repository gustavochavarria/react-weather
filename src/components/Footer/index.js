import { Box, Flex, Text, Icon, Tooltip } from '@chakra-ui/react';

import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = '2022';

  return (
    <Box as={'footer'} color="white" py="24px">
      <Flex alignItems="center" justifyContent="space-around" fontSize="small">
        <Tooltip label="Made with love">
          <Text as={'a'} href="https://gustavochavarria.com" target="_blank">
            Made with{' '}
            <Icon
              as={FaHeart}
              w="10px"
              title="Love"
              className="footer__love__icon"
            />{' '}
            by Gustavo Chavarria
          </Text>
        </Tooltip>

        <Text>&copy; {currentYear} </Text>
      </Flex>
    </Box>
  );
}

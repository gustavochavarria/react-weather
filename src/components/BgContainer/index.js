import { Box, Container } from '@chakra-ui/react';

import { useSelector } from 'react-redux';

import { CityModel } from '../../models/CityModel';

export default function BgContainer({ children }) {
  const city = useSelector(state => state.city.value);
  const { utc } = CityModel.find(({ name }) => name === city);

  const [_hour] = new Date()
    .toLocaleTimeString('en-US', {
      timeZone: utc,
    })
    .split(':');

  const hour = Number(_hour);

  let bg = '/assets/04.jpg';

  if (hour > 5 && hour < 15) {
    bg = '/assets/01.jpg';
  } else if (hour >= 15 && hour < 18) {
    bg = '/assets/03.jpg';
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      backgroundImage={bg}
      backgroundPosition="center"
      backgroundSize={'cover'}
    >
      <Container>{children}</Container>
    </Box>
  );
}

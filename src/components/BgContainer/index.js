import { Box, Container } from '@chakra-ui/react';

import { useSelector } from 'react-redux';

import { CityModel } from '../../models/CityModel';

export default function BgContainer({ children }) {
  const city = useSelector(state => state.city.value);
  const { utc } = CityModel.find(({ name }) => name === city);

  // eslint-disable-next-line no-unused-vars
  const [_, currentTime] = new Date()
    .toLocaleString('en-US', {
      timeZone: utc,
    })
    .split(',');

  const [_hour] = currentTime.trim().split(':');
  const hour = Number(_hour);

  let bg = '/assets/04.jpg';

  if (hour > 6 && hour < 16) {
    bg = '/assets/01.jpg';
  } else if (hour > 16 && hour < 19) {
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

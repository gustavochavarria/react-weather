import { Box, Container } from '@chakra-ui/react';

export default function BgContainer({ children }) {
  const bg = '/assets/01.jpg';

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

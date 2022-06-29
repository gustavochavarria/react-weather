import { ButtonGroup, Button } from '@chakra-ui/react';

export default function CitiesAvailables({
  cityModel,
  currentCity,
  handleChangeCity,
}) {
  return (
    <ButtonGroup variant="outline" spacing="4" overflowX="scroll" width="100%">
      {cityModel.map(({ name }) => (
        <Button
          fontWeight="bold"
          fontSize="xl"
          key={name}
          bgColor={name === currentCity ? 'red.400' : ''}
          color="white"
          onClick={() => handleChangeCity(name)}
          _hover={{
            bgColor: name === currentCity ? 'red.500' : 'red.3  00',
          }}
        >
          {name}
        </Button>
      ))}
    </ButtonGroup>
  );
}

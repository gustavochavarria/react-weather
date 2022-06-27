import { Button, Flex } from '@chakra-ui/react';

import { useSelector, useDispatch } from 'react-redux';
import { switchLang } from '../../redux/langSlice';

export default function LangSelector() {
  const lang = useSelector(state => state.lang.value);
  const dispatch = useDispatch();

  return (
    <Flex justifyContent="flex-end" fontSize="lg" py="8px">
      <Button
        color="white"
        title="Click here to change the language"
        fontWeight="bold"
        cursor="pointer"
        borderRadius="4px"
        textTransform="uppercase"
        _hover={{
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}
        onClick={() => dispatch(switchLang())}
      >
        {lang}
      </Button>
    </Flex>
  );
}

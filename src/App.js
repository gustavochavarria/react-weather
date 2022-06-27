import { ChakraProvider, theme } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import store from './redux/store';

import BgContainer from './components/BgContainer';
import Cities from './components/Cities';
import Weather from './components/Weather';
import LangSelector from './components/LangSelector';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BgContainer>
          <LangSelector />

          <Weather />

          <Cities />
        </BgContainer>
      </ChakraProvider>
    </Provider>
  );
}

export default App;

import { ChakraProvider, theme } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import './styles/global.css';

import store from './redux/store';

import BgContainer from './components/BgContainer';
import Cities from './components/Cities';
import WeatherHeader from './components/WeatherHeader';
import LangSelector from './components/LangSelector';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BgContainer>
          <LangSelector />

          <WeatherHeader />

          <Cities />

          <Footer />
        </BgContainer>
      </ChakraProvider>
    </Provider>
  );
}

export default App;

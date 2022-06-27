import { configureStore } from '@reduxjs/toolkit';

import langReducer from './langSlice';
import cityReducer from './citySlice';
import weatherReducer from './weatherSlice';

export default configureStore({
  reducer: {
    lang: langReducer,
    city: cityReducer,
    weather: weatherReducer,
  },
});

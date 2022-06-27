import { createSlice } from '@reduxjs/toolkit';

export const langSlice = createSlice({
  name: 'lang',
  initialState: {
    value: 'en',
  },
  reducers: {
    switchLang: state => {
      if (state.value === 'en') {
        state.value = 'es';
      } else {
        state.value = 'en';
      }
    },
  },
});

export const { switchLang } = langSlice.actions;

export default langSlice.reducer;

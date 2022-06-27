import { createSlice } from '@reduxjs/toolkit';

export const langSlice = createSlice({
  name: 'lang',
  initialState: {
    value: 'en',
  },
  reducers: {
    switchLang: state => {
      if (state.value === 'en') {
        return 'es';
      }

      return 'en';
    },
  },
});

export const { switchLang } = langSlice.actions;

export default langSlice.reducer;

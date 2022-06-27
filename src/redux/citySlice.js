import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    value: 'Managua',
  },
  reducers: {
    changeCity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeCity } = citySlice.actions;

export default citySlice.reducer;

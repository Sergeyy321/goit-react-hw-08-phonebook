import { createSlice } from '@reduxjs/toolkit';

 const sliceReducer = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    qwery(state, action) {
      return (state = action.payload);
    },
  
  },
});

export const { qwery } = sliceReducer.actions;
export const sliceFilter = sliceReducer.reducer
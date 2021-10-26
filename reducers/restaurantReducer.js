import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchRestaurants from '../actions/restaurantAction';

const initialState = {
  restaurants: [],
  loading: false,
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      // Demo
      console.log(action.payload);
    });
  },
});

export default restaurantSlice.reducer;

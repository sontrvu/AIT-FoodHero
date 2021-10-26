import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchRestaurants = createAsyncThunk('restaurant/fetchRestaurants', async () => {
  let restaurants = [];

  return restaurants;
});

export default fetchRestaurants;

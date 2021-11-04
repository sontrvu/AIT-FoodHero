import { createAsyncThunk } from '@reduxjs/toolkit';
import { fbAuth } from '../app/firebase';
import axios from 'axios';
import * as AppConstant from '../helpers/appConstant';

const fetchRestaurants = createAsyncThunk('restaurant/fetchRestaurants', async (data, thunkAPI) => {
  const token = await fbAuth.currentUser.getIdToken();

  const response = await axios.request({
    baseURL: AppConstant.API.baseUrl,
    url: AppConstant.API.restaurantUrl.fetchRestaurants,
    method: 'POST',
    data: {
      ...data,
      token,
    },
  });

  return response.data;
});

const fetchMenuItems = createAsyncThunk('restaurant/fetchMenuItems', async (data, thunkAPI) => {
  const token = await fbAuth.currentUser.getIdToken();

  const response = await axios.request({
    baseURL: AppConstant.API.baseUrl,
    url: AppConstant.API.restaurantUrl.fetchMenuItems,
    method: 'POST',
    data: {
      ...data,
      token,
    },
  });

  return response.data;
});

export { fetchRestaurants, fetchMenuItems };

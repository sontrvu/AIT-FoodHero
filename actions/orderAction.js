import { createAsyncThunk } from '@reduxjs/toolkit';
import { fbAuth } from '../app/firebase';
import axios from 'axios';
import * as AppConstant from '../helpers/appConstant';

const placeOrder = createAsyncThunk('restaurant/placeOrder', async (data, thunkAPI) => {
  const token = await fbAuth.currentUser.getIdToken();

  const response = await axios.request({
    baseURL: AppConstant.API.baseUrl,
    url: AppConstant.API.orderUrl.placeOrder,
    method: 'POST',
    data: {
      ...data,
      token,
    },
  });

  return response.data;
});

export { placeOrder };

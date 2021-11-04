import { createAsyncThunk } from '@reduxjs/toolkit';
import { fbAuth } from '../app/firebase';
import axios from 'axios';
import * as AppConstant from '../helpers/appConstant';

const loginWithUser = createAsyncThunk('user/getUserById', async (data, thunkAPI) => {
  const fbResponse = await fbAuth.signInWithEmailAndPassword(data.email, data.password);
  const token = await fbResponse.user.getIdToken();

  const response = await axios.request({
    baseURL: AppConstant.API.baseUrl,
    url: AppConstant.API.userUrl.userLogin,
    method: 'POST',
    data: {
      ...data,
      token,
    },
  });

  return response.data;
});

const registerUser = createAsyncThunk('user/registerUser', async (data, thunkAPI) => {
  const fbResponse = await fbAuth.createUserWithEmailAndPassword(data.email, data.password);
  const token = await fbResponse.user.getIdToken();

  const response = await axios.request({
    baseURL: AppConstant.API.baseUrl,
    url: AppConstant.API.userUrl.userRegister,
    method: 'POST',
    data: {
      ...data,
      token,
    },
  });

  return response.data;
});

const logoutWithUser = createAsyncThunk('user/logoutWithUser', async (data, thunkAPI) => {
  return {};
});

export { loginWithUser, registerUser, logoutWithUser };

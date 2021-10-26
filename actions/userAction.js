import { createAsyncThunk } from '@reduxjs/toolkit';

const getUserById = createAsyncThunk('user/getUserById', async (userId, thunkAPI) => {
  let user = {
    name: userId,
  };

  return user;
});

export default getUserById;

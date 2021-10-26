import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getUserById from '../actions/userAction';

const initialState = {
  user: {},
  loading: false,
};

const userReducer = createSlice({
  name: 'user',
  initialState: initialState,

  extraReducers: (builder) => {
    builder.addCase(getUserById.fulfilled, (state, action) => {
      // Demo
      console.log(action.payload);
    });
  },
});

export default userReducer.reducer;

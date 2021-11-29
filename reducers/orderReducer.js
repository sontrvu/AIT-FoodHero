import { createSlice } from '@reduxjs/toolkit';
import { placeOrder } from '../actions/orderAction';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  requestId: '',
};

const restaurantSlice = createSlice({
  name: 'order',
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      // Fetch restaurant groups
      .addCase(placeOrder.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.requestId = action.meta.requestId;

        console.log(action.payload);
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.error.message;
        state.requestId = action.meta.requestId;

        console.log(action.error.message);
      });
  },
});

export default restaurantSlice.reducer;

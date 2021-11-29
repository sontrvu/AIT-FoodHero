import { createSlice } from '@reduxjs/toolkit';
import { fetchRestaurants, fetchMenuItems } from '../actions/restaurantAction';

const initialState = {
  restaurantGroups: [],
  currentRestaurant: {
    id: '',
    menuItems: [],
  },
  loading: false,
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      // Fetch restaurant groups
      .addCase(fetchRestaurants.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.restaurantGroups = action.payload.data.restaurantGroups;
        state.loading = false;

        console.log(action.payload);
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
      })

      // Fetch menu items
      .addCase(fetchMenuItems.pending, (state, action) => {
        state.currentRestaurant = {
          id: '',
          menuItems: [],
        };

        state.loading = true;
        console.log(action.payload);
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.currentRestaurant = {
          id: action.payload.data.restaurantId,
          menuItems: action.payload.data.menuItems,
        };

        state.loading = false;
        console.log(action.payload);
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
      });
  },
});

export default restaurantSlice.reducer;

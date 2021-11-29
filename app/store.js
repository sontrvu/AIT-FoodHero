import { configureStore, combineReducers } from '@reduxjs/toolkit';
import restaurantReducer from '../reducers/restaurantReducer';
import userReducer from '../reducers/userReducer';
import orderReducer from '../reducers/orderReducer';

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  user: userReducer,
  order: orderReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

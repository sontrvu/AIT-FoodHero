import { configureStore, combineReducers } from '@reduxjs/toolkit';
import restaurantReducer from '../reducers/restaurantReducer';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

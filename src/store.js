import { configureStore } from '@reduxjs/toolkit';

import LoginReducer from './LoginPage/LoginSlice';
import RestaurantReducer from './RestaurantPage/RestaurantSlice';

const store = configureStore({
  reducer: {
    Login: LoginReducer,
    Restaurant: RestaurantReducer,
  },
});

export default store;

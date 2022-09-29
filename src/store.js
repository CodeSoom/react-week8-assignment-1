import { configureStore } from '@reduxjs/toolkit';

import LoginReducer from './LoginPage/LoginSlice';
import RestaurantReducer from './RestaurantPage/RestaurantSlice';
import RestaurantsReducer from './RestaurantsPage/RestaurantsSlice';

const store = configureStore({
  reducer: {
    Login: LoginReducer,
    Restaurant: RestaurantReducer,
    Restaurants: RestaurantsReducer,
  },
});

export default store;

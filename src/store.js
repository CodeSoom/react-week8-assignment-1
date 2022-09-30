import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './LoginPage/loginSlice';
import restaurantReducer from './RestaurantPage/restaurantSlice';
import restaurantsReducer from './RestaurantsPage/restaurantsSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    restaurant: restaurantReducer,
    restaurants: restaurantsReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import categoriesReducer from './categoriesSlice';
import regionsReducer from './regionsSlice';
import restaurantReducer from './restaurantSlice';
import restaurantsReducer from './restaurantsSlice';
import reviewReducer from './reviewSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    regions: regionsReducer,
    restaurant: restaurantReducer,
    restaurants: restaurantsReducer,
    review: reviewReducer,
  },
});

export default store;

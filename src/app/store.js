import { configureStore } from '@reduxjs/toolkit';

import loginReducer from '../features/login/loginSlice';
import regionsReducer from '../features/regions/regionsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import restaurantsReducer from '../features/restaurants/restaurantsSlice';
import restaurantReducer from '../features/restaurant/restaurantSlice';
import reviewReducer from '../features/review/reviewSlice';

const rootReducer = {
  login: loginReducer,
  regions: regionsReducer,
  categories: categoriesReducer,
  restaurants: restaurantsReducer,
  restaurant: restaurantReducer,
  review: reviewReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

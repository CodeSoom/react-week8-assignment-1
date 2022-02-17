import { configureStore } from '@reduxjs/toolkit';

import restaurantReducer from './restaurantSlice';
import userReducer from './userSlice';
import reviewReducer from './reviewSlice';

const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    user: userReducer,
    review: reviewReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';

import restaurantSlice from './slice/restaurantSlice';

import reviewSlice from './slice/reviewSlice';

import loginSlice from './slice/loginSlice';

const store = configureStore({
  reducer: {
    loginSlice,
    reviewSlice,
    restaurantSlice,
  },
});

export default store;

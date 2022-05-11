import { configureStore } from '@reduxjs/toolkit';

import reducer from './slice';
import restaurantReducer from './features/restaurants/restaurantsSlice';

const store = configureStore({
  reducer: {
    // TODO: refactoring reducer
    ...reducer,
    restaurants: restaurantReducer,
  },
});

export default store;

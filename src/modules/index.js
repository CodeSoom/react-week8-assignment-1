import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth';
import category from './category';
import region from './region';
import restaurant from './restaurant';
import review from './review';

const reducer = combineReducers({
  auth: auth.reducer,
  category: category.reducer,
  region: region.reducer,
  restaurant: restaurant.reducer,
  review: review.reducer,
});

export default reducer;

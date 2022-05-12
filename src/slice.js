import { combineReducers } from 'redux';

import authSlice from './features/auth/authSlice';
import restaurantSlice from './features/restaurant/restaurantSlice';
import restaurantsSlice from './features/restaurants/restaurantsSlice';

const reducer = combineReducers({
  restaurants: restaurantsSlice,
  restaurant: restaurantSlice,
  auth: authSlice,
});

export default reducer;

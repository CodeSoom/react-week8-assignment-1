import { combineReducers } from 'redux';

import restaurantReducer, {
  setRegions,
  setCategories,
  selectRegion,
  selectCategory,
  setRestaurants,
  setRestaurant,
  loadInitialData,
  loadRestaurants,
  loadRestaurant,
} from './slice/restaurantSlice';

import reviewReducer, {
  changeReviewField,
  clearReviewFields,
  setReviews,
  loadReview,
  sendReview,
} from './slice/reviewSlice';

import loginReducer, {
  setAccessToken,
  changeLoginField,
  logout,
  requestLogin,
} from './slice/loginSlice';

export {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginField,
  setAccessToken,
  logout,
  changeReviewField,
  clearReviewFields,
  setReviews,
  loadInitialData,
  loadRestaurants,
  loadRestaurant,
  requestLogin,
  loadReview,
  sendReview,
};

export default combineReducers({
  restaurant: restaurantReducer,
  review: reviewReducer,
  login: loginReducer,
});

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from '../services/api';
import { saveItem } from '../services/storage';

import {
  setRegions, setCategories, setRestaurants, setRestaurant, selectRegion, selectCategory,
} from './restaurantSlice';
import { setReviews, changeReviewField, clearReviewFields } from './reviewSlice';
import { setAccessToken, changeLoginField, logout } from './userSlice';

export {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  setAccessToken,
  changeReviewField,
  changeLoginField,
  logout,
};

export function loadInitialData() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const {
      restaurant: {
        selectedRegion: region,
        selectedCategory: category,
      },
    } = getState();

    if (!region || !category) {
      return;
    }

    const restaurants = await fetchRestaurants({
      regionName: region.name,
      categoryId: category.id,
    });
    dispatch(setRestaurants(restaurants));
  };
}

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setRestaurant(restaurant));
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const { user: { loginFields: { email, password } } } = getState();

    const accessToken = await postLogin({ email, password });

    saveItem('accessToken', accessToken);

    dispatch(setAccessToken(accessToken));
  };
}

export function loadReview({ restaurantId }) {
  return async (dispatch) => {
    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setReviews(restaurant.reviews));
  };
}

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const { user: { accessToken }, review: { reviewFields: { score, description } } } = getState();

    await postReview({
      accessToken, restaurantId, score, description,
    });

    dispatch(loadReview({ restaurantId }));
    dispatch(clearReviewFields());
  };
}

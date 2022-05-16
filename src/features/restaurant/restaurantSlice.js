import { createSlice } from '@reduxjs/toolkit';

import {
  fetchRestaurant,
  postReview,
} from '../../services/api';

const initialReviewFields = {
  score: '',
  description: '',
};

const initialState = {
  restaurant: null,
  reviewFields: {
    ...initialReviewFields,
  },
};

const reducers = {
  setRestaurant(state, { payload: { restaurant } }) {
    return {
      ...state,
      restaurant,
    };
  },

  changeReviewField(state, { payload: { name, value } }) {
    return {
      ...state,
      reviewFields: {
        ...state.reviewFields,
        [name]: value,
      },
    };
  },

  clearReviewFields(state) {
    return {
      ...state,
      reviewFields: {
        ...initialReviewFields,
      },
    };
  },

  setReviews(state, { payload: { reviews } }) {
    const { restaurant } = state;

    return {
      ...state,
      restaurant: {
        ...restaurant,
        reviews,
      },
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'restaurant',
  initialState,
  reducers,
});

export const {
  setRestaurant,
  changeReviewField,
  clearReviewFields,
  setReviews,
} = actions;

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant({ restaurant: null }));

    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setRestaurant({ restaurant }));
  };
}

export function loadReview({ restaurantId }) {
  return async (dispatch) => {
    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setReviews({ reviews: restaurant.reviews }));
  };
}

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const {
      auth: { accessToken },
      restaurant: { reviewFields: { score, description } },
    } = getState();

    await postReview({
      accessToken, restaurantId, score, description,
    });

    dispatch(loadReview({ restaurantId }));
    dispatch(clearReviewFields());
  };
}

const get = (key) => (obj) => obj.restaurant[key];

export const getAccessToken = (state) => state.auth.accessToken;
export const getRestaurant = get('restaurant');
export const getReviewFields = get('reviewFields');

export default reducer;

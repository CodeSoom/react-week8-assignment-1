import { createSlice } from '@reduxjs/toolkit';

import { fetchRestaurant, postReview } from '@/services/api';

const initialReviewFields = {
  score: '',
  description: '',
};

const { reducer, actions } = createSlice({
  name: 'restaurant',
  initialState: {
    restaurant: null,
    reviewFields: {
      ...initialReviewFields,
    },
  },
  reducers: {
    setRestaurant(state, { payload: restaurant }) {
      return {
        ...state,
        restaurant,
      };
    },

    setReviews(state, { payload: reviews }) {
      const { restaurant } = state;

      return {
        ...state,
        restaurant: {
          ...restaurant,
          reviews,
        },
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
  },
});

export const {
  setRestaurant,
  setReviews,
  changeReviewField,
  clearReviewFields,
} = actions;

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setRestaurant(restaurant));
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
    const {
      auth: { accessToken },
      review: { reviewFields: { score, description } },
    } = getState();

    await postReview({
      accessToken, restaurantId, score, description,
    });

    dispatch(loadReview({ restaurantId }));
    dispatch(clearReviewFields());
  };
}

export const selectRestaurant = (state) => state.restaurant.restaurant;

export const selectReviewFields = (state) => state.restaurant.reviewFields;

export default reducer;

import { createSlice } from '@reduxjs/toolkit';

import { fetchRestaurant, postReview } from '../../services/api';

const initialReviewFields = {
  score: '',
  description: '',
};

const { actions, reducer } = createSlice({
  name: 'reviewSlice',
  initialState: {
    reviewFields: {
      ...initialReviewFields,
    },
  },
  reducers: {
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
  },
});

export const { changeReviewField, clearReviewFields, setReviews } = actions;

export function loadReview({ restaurantId }) {
  return async (dispatch) => {
    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setReviews(restaurant.reviews));
  };
}

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const {
      loginSlice: { accessToken },
      reviewSlice: {
        reviewFields: { score, description },
      },
    } = getState();

    await postReview({
      accessToken,
      restaurantId,
      score,
      description,
    });

    dispatch(loadReview({ restaurantId }));
    dispatch(clearReviewFields());
  };
}

export default reducer;

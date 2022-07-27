import { createSlice } from '@reduxjs/toolkit';

import { postReview } from '@/services/api';

import { loadReview } from '../restaurantSlice/restaurantSlice';

const initialReviewFields = {
  score: '',
  description: '',
};

const { reducer, actions } = createSlice({
  name: 'review',
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
  },
});

export const {
  changeReviewField,
  clearReviewFields,
  setReviews,
} = actions;

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const { accessToken, reviewFields: { score, description } } = getState();

    await postReview({
      accessToken, restaurantId, score, description,
    });

    dispatch(loadReview({ restaurantId }));
    dispatch(clearReviewFields());
  };
}

export const selectReviewFields = (state) => state.review.reviewFields;

export default reducer;

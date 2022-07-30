import { createSlice } from '@reduxjs/toolkit';

import { postReview } from '../../services/api';

import { loadReviews } from '../restaurant/restaurantSlice';

const initialReviewFields = {
  score: '',
  description: '',
};

const slice = createSlice({
  name: 'review',
  initialState: {
    fields: {
      ...initialReviewFields,
    },
  },
  reducers: {
    changeField(state, { payload: { name, value } }) {
      return {
        ...state,
        fields: {
          ...state.fields,
          [name]: value,
        },
      };
    },

    clearFields(state) {
      return {
        ...state,
        fields: {
          ...initialReviewFields,
        },
      };
    },
  },
});

export const { changeField, clearFields } = slice.actions;

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const { login: { accessToken }, review: { fields } } = getState();
    const { score, description } = fields;

    await postReview({
      accessToken,
      restaurantId,
      score,
      description,
    });

    await dispatch(loadReviews({ restaurantId }));

    dispatch(clearFields());
  };
}

export const reviewFieldsSelector = (state) => state.review.fields;

export default slice.reducer;

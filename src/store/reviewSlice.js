import { createSlice } from '@reduxjs/toolkit';

const initialReviewFields = {
  score: '',
  description: '',
};

const initialState = {
  reviewFields: { ...initialReviewFields },
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
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

export const {
  changeReviewField, clearReviewFields, setReviews,
} = reviewSlice.actions;

export default reviewSlice.reducer;

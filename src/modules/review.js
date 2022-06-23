import { createSlice } from '@reduxjs/toolkit';

const review = createSlice({
  name: 'review',
  initialState: {
    reviewFields: {
      score: '',
      description: '',
    },
    reviews: {
      isLoading: false,
      isError: false,
      errorMessage: '',
      data: [],
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

    setReviews(state, { payload: reviews }) {
      return {
        ...state,
        reviewFields: {
          score: '',
          description: '',
        },
        reviews: {
          isLoading: false,
          isError: false,
          errorMessage: '',
          data: reviews,
        },
      };
    },
  },
});

export default review;

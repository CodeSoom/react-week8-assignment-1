import { createSlice } from '@reduxjs/toolkit';

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
          ...state.reviewFields,
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

export const reviewFieldsSelector = (state) => state.review.fields;

export default slice.reducer;

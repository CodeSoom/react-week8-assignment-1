const { createSlice } = require('@reduxjs/toolkit');

const initialReviewFields = {
  score: '',
  description: '',
};

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  selectedRegion: null,
  selectedCategory: null,
  loginFields: {
    email: '',
    password: '',
  },
  accessToken: '',
  reviewFields: {
    ...initialReviewFields,
  },
};

const { actions, reducer } = createSlice({
  name: '',
  initialState,
  reducer: {},
});

export { actions, reducer };

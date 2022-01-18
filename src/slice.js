import { createSlice } from '@reduxjs/toolkit';

const initialReviewFields = {
  score: '',
  description: '',
};

const { actions, reducer } = createSlice({
  name: '',
  initialState: {
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
  },
  reducers: {},
});

export { actions, reducer }; // 슬라이스 이름 및 초기 상태 값을 받아서 자동으로 만들어진
// slice reducer와 action creator, action types 를 export!!!

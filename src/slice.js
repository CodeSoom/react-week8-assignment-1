import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: '',
  initialState: {},
  reducers: {},
});

export { actions, reducer }; // 슬라이스 이름 및 초기 상태 값을 받아서 자동으로 만들어진
// slice reducer와 action creator, action types 를 export!!!

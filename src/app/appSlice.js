import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAccessToken(state, { payload }) {
      return {
        ...state,
        accessToken: payload,
      };
    },
  },
});

export const { setAccessToken } = appSlice.actions;

export const accessTokenSelector = (state) => state.app.accessToken;

export default appSlice.reducer;

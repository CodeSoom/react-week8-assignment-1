import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginFields: {
    email: '',
    password: '',
  },
  accessToken: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeLoginField(state, { payload: { name, value } }) {
      return {
        ...state,
        loginFields: {
          ...state.loginFields,
          [name]: value,
        },
      };
    },

    setAccessToken(state, { payload: accessToken }) {
      return {
        ...state,
        accessToken,
      };
    },

    logout(state) {
      return {
        ...state,
        accessToken: '',
      };
    },
  },
});

export const {
  changeLoginField, setAccessToken, logout,
} = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    loginFields: {
      email: '',
      passwords: '',
    },
    auth: {
      accessToken: null,
      isLoading: false,
      isError: false,
      isLogin: false,
      errorMessage: '',
    },
  },
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
        auth: {
          ...state.auth,
          auth: {
            accessToken,
            isLoading: false,
            isError: false,
            isLogin: true,
            errorMessage: '',
          },
        },
      };
    },

    logout(state) {
      return {
        ...state,
        auth: {
          ...state.auth,
          accessToken: null,
          isLoading: false,
          isError: false,
          isLogin: false,
          errorMessage: '',
        },
      };
    },
  },
});

export default auth;

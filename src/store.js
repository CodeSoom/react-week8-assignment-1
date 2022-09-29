import { configureStore } from '@reduxjs/toolkit';

import LoginReducer from './LoginPage/LoginSlice';

const store = configureStore({
  reducer: {
    Login: LoginReducer,
  },
});

export default store;

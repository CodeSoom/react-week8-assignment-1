import { configureStore } from '@reduxjs/toolkit';

import reducer from './slice/slice';

import loginSlice from './slice/loginSlice';

const store = configureStore({
  reducer: {
    loginSlice,
    reducer,
  },
});

export default store;

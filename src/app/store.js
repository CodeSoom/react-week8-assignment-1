import { configureStore } from '@reduxjs/toolkit';

import appReducer from './appSlice';
import loginReducer from '../features/login/loginSlice';

const rootReducer = {
  app: appReducer,
  login: loginReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

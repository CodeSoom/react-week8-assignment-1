import { configureStore } from '@reduxjs/toolkit';

import loginReducer from '../features/login/loginSlice';

const rootReducer = {
  login: loginReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

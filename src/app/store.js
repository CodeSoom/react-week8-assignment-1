import { configureStore } from '@reduxjs/toolkit';

import loginReducer from '../features/login/loginSlice';
import regionsReducer from '../features/regions/regionsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

const rootReducer = {
  login: loginReducer,
  regions: regionsReducer,
  categories: categoriesReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

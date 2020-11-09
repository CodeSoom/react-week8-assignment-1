import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { reducer } from './slice';

const store = configureStore({
  reducer,
  middleware: applyMiddleware(thunk),
});

export default store;

import { configureStore } from '@reduxjs/toolkit';

import applicationSlice from './slice';

const store = configureStore(applicationSlice);

export default store;

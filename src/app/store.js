import { configureStore } from '@reduxjs/toolkit';

import reducer from '../store/slice';

const store = configureStore({ reducer });

export default store;

import { configureStore } from '@reduxjs/toolkit';

import reducer from '../modules/index';

const store = configureStore({ reducer });

export default store;

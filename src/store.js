import { configureStore } from 'redux';

import reducer from './slice';

const store = configureStore({ reducer });

export default store;

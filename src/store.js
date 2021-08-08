import { configureStore } from '@reduxjs/toolkit';
// Redux Toolkit의 configureStore 사용하여 store 생성시, 기본으로 thunk 미들웨어 지원

import reducer from './slice';

const store = configureStore({ reducer });

export default store;

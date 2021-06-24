import { createSlice } from '@reduxjs/toolkit';
import { equal } from './utils';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from './services/api';

import { saveItem, removeItem } from './services/storage';

// actionCreate & reducer 를 하나로

const initialReviewFields = {
  score: '',
  description: '',
};

const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  restaurant: null,
  selectedRegion: null,
  selectedCategory: null,
  loginFields: {
    email: '',
    password: '',
  },
  accessToken: '',
  reviewFields: {
    ...initialReviewFields,
  },
};

const reducers = {
  setRegions(state, { payload: regions }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: categories }) {
    return {
      ...state,
      categories,
    };
  },

  setRestaurants(state, { payload: restaurants }) {
    return {
      ...state,
      restaurants,
    };
  },

  setRestaurant(state, { payload: restaurant }) {
    return {
      ...state,
      restaurant,
    };
  },

  selectRegion(state, { payload: regionId }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
    };
  },

  selectCategory(state, { payload: categoryId }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },

  changeLoginField(state, { payload: { name, value } }) {
    return {
      ...state,
      loginFields: {
        ...state.loginFields,
        [name]: value,
      },
    };
  },

  setAccessToken(state, { payload: accessToken }) {
    return {
      ...state,
      accessToken,
    };
  },

  logout(state) {
    removeItem('accessToken');
    return {
      ...state,
      accessToken: '',
    };
  },

  changeReviewField(state, { payload: { name, value } }) {
    return {
      ...state,
      reviewFields: {
        ...state.reviewFields,
        [name]: value,
      },
    };
  },

  clearReviewFields(state) {
    return {
      ...state,
      reviewFields: {
        ...initialReviewFields,
      },
    };
  },

  setReviews(state, { payload: reviews }) {
    const { restaurant } = state;

    return {
      ...state,
      restaurant: {
        ...restaurant,
        reviews,
      },
    };
  },
};
// const {actions, reducer} = slice;
const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  selectRegion,
  selectCategory,
  changeLoginField,
  setAccessToken,
  logout,
  changeReviewField,
  clearReviewFields,
  setReviews,
} = actions;
export default reducer;

/* 리듀서를 여러개 만들어 사용해도 좋다.

직접 액션 크리에이터를 사용할 때와 달라진점
1. dispatch시 리듀서의 name/type명 으로 prefix형태를 갖는다.
* 예시*
기존: {type: "setAccessToken" }
변경후 :  {type:"application/setAccessToken" }

2. dispatch에서 호출하는 형태로 payload 파라미터를 처리한다.
*예시*
dispatch(메소드(파라미터))인 경우,   "payload": "ACCESS_TOKEN",
dispatch(메소드({파라미터}))인 경우,   "payload": {"ACCESS_TOKEN": "토큰값"},
*/

// 비동기 액션
export function loadInitialData() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { selectedRegion: region, selectedCategory: category } = getState();

    if (!region || !category) {
      return;
    }

    const restaurants = await fetchRestaurants({
      regionName: region.name,
      categoryId: category.id,
    });
    dispatch(setRestaurants(restaurants));
  };
}

export function loadRestaurant({ restaurantId }) {
  return async (dispatch) => {
    dispatch(setRestaurant(null));

    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setRestaurant(restaurant));
  };
}

export function requestLogin() {
  return async (dispatch, getState) => {
    const {
      loginFields: { email, password },
    } = getState();

    const accessToken = await postLogin({ email, password });

    saveItem('accessToken', accessToken);

    dispatch(setAccessToken(accessToken));
  };
}

export function loadReview({ restaurantId }) {
  return async (dispatch) => {
    const restaurant = await fetchRestaurant({ restaurantId });

    dispatch(setReviews(restaurant.reviews));
  };
}

export function sendReview({ restaurantId }) {
  return async (dispatch, getState) => {
    const {
      accessToken,
      reviewFields: { score, description },
    } = getState();

    await postReview({
      accessToken,
      restaurantId,
      score,
      description,
    });

    dispatch(loadReview({ restaurantId }));
    dispatch(clearReviewFields());
  };
}

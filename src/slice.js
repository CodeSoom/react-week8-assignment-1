import { createSlice } from '@reduxjs/toolkit';

import { saveItem } from './services/storage';

import { equal } from './utils';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
  fetchRestaurant,
  postLogin,
  postReview,
} from './services/api';

const initialReviewFields = {
  score: '',
  description: '',
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
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
  },
  reducers: {
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
  },
});

export const {
  setRegions,
  setCategories,
  setRestaurant,
  setRestaurants,
  setAccessToken,
  setReviews,
  selectRegion,
  selectCategory,
  changeLoginField,
  changeReviewField,
  clearReviewFields,
  logout,
} = actions;

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
    const {
      selectedRegion: region,
      selectedCategory: category,
    } = getState();

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
    const { loginFields: { email, password } } = getState();

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
    const { accessToken, reviewFields: { score, description } } = getState();

    await postReview({
      accessToken, restaurantId, score, description,
    });

    dispatch(loadReview({ restaurantId }));
    dispatch(clearReviewFields());
  };
}

export default reducer;

// 아래의 것들을 자동적으로 생성해준다!!!
// 단, 자동으로 만들어주기 때문에 payload: <value> type이 그대로 정해짐을 유의해야 한다!

// export function setRegions(regions) {
//   return {
//     type: 'setRegions',
//     payload: { regions },
//   };
// }

// export function setCategories(categories) {
//   return {
//     type: 'setCategories',
//     payload: { categories },
//   };
// }

// export function setRestaurants(restaurants) {
//   return {
//     type: 'setRestaurants',
//     payload: { restaurants },
//   };
// }

// export function setRestaurant(restaurant) {
//   return {
//     type: 'setRestaurant',
//     payload: { restaurant },
//   };
// }

// export function selectRegion(regionId) {
//   return {
//     type: 'selectRegion',
//     payload: { regionId },
//   };
// }

// export function selectCategory(categoryId) {
//   return {
//     type: 'selectCategory',
//     payload: { categoryId },
//   };
// }

// export function changeLoginField({ name, value }) {
//   return {
//     type: 'changeLoginField',
//     payload: { name, value },
//   };
// }

// export function setAccessToken(accessToken) {
//   return {
//     type: 'setAccessToken',
//     payload: { accessToken },
//   };
// }

// export function logout() {
//   return {
//     type: 'logout',
//   };
// }

// export function changeReviewField({ name, value }) {
//   return {
//     type: 'changeReviewField',
//     payload: { name, value },
//   };
// }

// export function clearReviewFields() {
//   return {
//     type: 'clearReviewFields',
//   };
// }

// export function setReviews(reviews) {
//   return {
//     type: 'setReviews',
//     payload: { reviews },
//   };
// }

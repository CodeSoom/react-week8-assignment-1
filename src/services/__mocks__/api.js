import regions from '../../../fixtures/regions';
import categories from '../../../fixtures/categories';
import restaurant from '../../../fixtures/restaurant';
import restaurants from '../../../fixtures/restaurants';

export async function fetchRegions() {
  return regions;
}

export async function fetchCategories() {
  return categories;
}

export async function fetchRestaurants() {
  return restaurants;
}

export async function fetchRestaurant() {
  return restaurant;
}

export async function postLogin() {
  return 'TOKEN';
}

export async function postReview({
  accessToken, restaurantId, score, description,
}) {
  return {
    accessToken,
    restaurantId,
    score,
    description,
    // TODO: ....
  };
}

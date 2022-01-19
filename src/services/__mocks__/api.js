export async function fetchRegions() {
  console.log('이렇게 써줘야 하는데?');
  return [];
}

export async function fetchCategories() {
  return [];
}

export async function fetchRestaurants() {
  return [];
}

export async function fetchRestaurant() {
  return {};
}

export async function postLogin() {
  return {};
}

export async function postReview({
  accessToken,
  restaurantId,
  score,
  description,
}) {
  return {
    accessToken,
    restaurantId,
    score,
    description,
    // TODO: ....
  };
}

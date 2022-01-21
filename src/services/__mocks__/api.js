export const fetchRegions = jest.fn(() => []);

// export async function fetchRegions() {
//   return [];
// }

export const fetchCategories = jest.fn(() => []);

// export async function fetchCategories() {
//   return [];
// }

export async function fetchRestaurants() {
  return [];
}

export async function fetchRestaurant() {
  return {};
}

export async function postLogin() {
  return {};
}

export const postReview = jest.fn(
  ({
    accessToken, restaurantId, score, description,
  }) => ({
    accessToken,
    restaurantId,
    score,
    description,
  }),
);

// export async function postReview({
//   accessToken,
//   restaurantId,
//   score,
//   description,
// }) {
//   return {
//     accessToken,
//     restaurantId,
//     score,
//     description,
//     // TODO: ....
//   };
// }

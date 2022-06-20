import axios from 'axios';

const customerAPI = 'https://eatgo-customer-api.ahastudio.com';
const loginAPI = 'https://eatgo-customer-api.ahastudio.com';

export async function fetchRegions() {
  const response = await axios.get(`${customerAPI}/regions`);
  return response.data;
}

export async function fetchCategories() {
  const response = await axios.get(`${customerAPI}/categories`);
  return response.data;
}

export async function fetchRestaurants({ regionName, categoryId }) {
  const response = await axios.get(
    `${customerAPI}/restaurants?region=${regionName}&category=${categoryId}`,
  );
  return response.data;
}

export async function fetchRestaurant({ restaurantId }) {
  const response = await axios.get(
    `${customerAPI}/restaurants/${restaurantId}`,
  );
  return response.data;
}

export async function postLogin({ email, password }) {
  const url = 'https://eatgo-login-api.ahastudio.com/session';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const { accessToken } = await response.json();
  return accessToken;
}

export async function postReview({
  accessToken, restaurantId, score, description,
}) {
  const url = 'https://eatgo-customer-api.ahastudio.com'
    + `/restaurants/${restaurantId}/reviews`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ score, description }),
  });
  await response.json();
}

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { restaurantSelector, loadRestaurant } from './restaurantSlice';

import {
  accessTokenSelector,
} from '../login/loginSlice';

import {
  reviewFieldsSelector,
  changeField,
  sendReview,
} from '../review/reviewSlice';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from '../review/ReviewForm';
import Reviews from './Reviews';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(accessTokenSelector);
  const restaurant = useSelector(restaurantSelector);
  const reviewFields = useSelector(reviewFieldsSelector);

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChange({ name, value }) {
    dispatch(changeField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <ReviewForm
          fields={reviewFields}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      ) : null}
      <Reviews reviews={restaurant.reviews} />
    </>
  );
}

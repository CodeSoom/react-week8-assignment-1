import { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from '../../RestaurantDetail';
import ReviewForm from '../../ReviewForm';
import Reviews from '../../Reviews';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
  getAccessToken,
  getRestaurant,
  getReviewFields,
} from './restaurantSlice';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(getAccessToken);
  const restaurant = useSelector(getRestaurant);
  const reviewFields = useSelector(getReviewFields);

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeReviewField({ name, value }));
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    dispatch(sendReview({ restaurantId }));
  }, [dispatch, restaurantId]);

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
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

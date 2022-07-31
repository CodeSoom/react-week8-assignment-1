import { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectAccessToken } from '@/store/authSlice';
import {
  loadRestaurant,
  selectRestaurant,
  changeReviewField,
  selectReviewFields,
  sendReview,
} from '@/store/restaurantSlice';

import RestaurantDetail from '../RestaurantDetail';
import ReviewForm from '../ReviewForm';
import Reviews from '../Reviews';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(selectAccessToken);
  const restaurant = useSelector(selectRestaurant);
  const reviewFields = useSelector(selectReviewFields);

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

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectAccessToken } from '@/store/authSlice';
import {
  loadRestaurant,
  selectRestaurant,
} from '@/store/restaurantSlice';
import {
  changeReviewField,
  selectReviewFields,
  sendReview,
} from '@/store/reviewSlice';

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

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  function handleChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
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

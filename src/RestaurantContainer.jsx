import { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

import {
  changeReviewField,
  setRestaurant,
  loadRestaurant,
  sendReview,
} from './slice';

import { get } from './utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));

    return () => {
      dispatch(setRestaurant(null));
    };
  }, []);

  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));
  const reviewFields = useSelector(get('reviewFields'));

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeReviewField({ name, value }));
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    dispatch(sendReview({ restaurantId }));

    dispatch(changeReviewField({ name: 'score', value: '' }));
    dispatch(changeReviewField({ name: 'description', value: '' }));
  }, [dispatch]);

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken
        ? (
          <ReviewForm
            reviewFields={reviewFields}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        ) : null}
      <ReviewList reviews={restaurant.reviews} />
    </>
  );
}

import { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from '../RestaurantDetail/RestaurantDetail';
import ReviewForm from '../ReviewForm/ReviewForm';
import Reviews from '../Reviews/Reviews';

import {
  changeReviewField,
  sendReview,
} from '../../slice/reviewSlice';

import { loadRestaurant } from '../../slice/restaurantSlice';

import { get } from '../../utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(get({ sliceName: 'loginSlice', key: 'accessToken' }));
  const restaurant = useSelector(get({ sliceName: 'restaurantSlice', key: 'restaurant' }));
  const reviewFields = useSelector(get({ sliceName: 'reviewSlice', key: 'reviewFields' }));

  const handleChange = useCallback(
    ({ name, value }) => {
      dispatch(changeReviewField({ name, value }));
    }, [dispatch],
  );

  const handleSubmit = useCallback(() => {
    dispatch(sendReview({ restaurantId }));
  }, [dispatch]);

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

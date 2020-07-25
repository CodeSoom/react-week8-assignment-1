import React, { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurant from '../components/Restaurant';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from '../slice';

import { get } from '../utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(get('accessToken'));
  const restaurant = useSelector(get('restaurant'));
  const reviewFields = useSelector(get('reviewFields'));

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeReviewField({ name, value }));
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    dispatch(sendReview({ restaurantId }));
  }, [dispatch, restaurantId]);

  return (
    <Restaurant
      restaurant={restaurant}
      accessToken={accessToken}
      reviewFields={reviewFields}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

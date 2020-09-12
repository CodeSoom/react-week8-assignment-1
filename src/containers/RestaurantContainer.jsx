import React, { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from '../components/RestaurantDetail';
import ReviewForm from '../components/ReviewForm';
import Reviews from '../components/Reviews';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from '../reducer';

import { get } from '../utils';

const RestaurantContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(get('accessToken'));
  const restaurant = useSelector(get('restaurant'));
  const reviewFields = useSelector(get('reviewFields'));

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeReviewField({ name, value }));
  }, []);

  const handleSubmit = useCallback(() => {
    dispatch(sendReview({ restaurantId }));
  }, [restaurantId]);

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
};

export default React.memo(RestaurantContainer);

import React, { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from './slice';

import { get } from './utils';

const RestaurantArticle = styled.article({
  backgroundColor: '#d3d9e0',
  display: 'grid',
  gridTemplateRows: '1fr 1fr',
  maxHeight: '480px',
});

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

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <RestaurantArticle>
      <RestaurantDetail restaurant={restaurant} />
      <Reviews reviews={restaurant.reviews} />
      {accessToken ? (
        <ReviewForm
          fields={reviewFields}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      ) : null}
    </RestaurantArticle>
  );
}

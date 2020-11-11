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

const LeftSide = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginRight: '6em',
});

const RestaurantContainer = React.memo(({ restaurantId }) => {
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
    <>
      <LeftSide>
        <RestaurantDetail restaurant={restaurant} />
        {accessToken ? (
          <ReviewForm
            fields={reviewFields}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        ) : null}
      </LeftSide>
      <Reviews reviews={restaurant.reviews} />
    </>
  );
});

export default RestaurantContainer;

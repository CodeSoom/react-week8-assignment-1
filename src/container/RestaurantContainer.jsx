import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import RestaurantDetail from 'presentational/RestaurantDetail';
import ReviewForm from 'presentational/ReviewForm';
import Reviews from 'presentational/Reviews';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from '_redux/slice';

import { get } from 'utils';


const RestaurantLayout = styled.div({
  height: '100vh',
  overflow: 'scroll',
  scrollSnapType: 'y mandatory',
  scrollbarWidth: 'none',
  '& ::-webkit-scrollbar': {
    display: 'none',
  },
  '& ::first-child': {
    display: 'flex',
  },
});

const Section = styled.div({
  width: '100%',
  height: '100%',
  scrollSnapAlign: 'start',
  overflow: 'scroll',
});


export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const accessToken = useSelector(get('accessToken'));
  const restaurant = useSelector(get('restaurant'));
  const reviewFields = useSelector(get('reviewFields'));

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
    <RestaurantLayout>
      <Section>
        <RestaurantDetail restaurant={restaurant} />

      </Section>

      <Section>
        {accessToken ? (
          <ReviewForm
            fields={reviewFields}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        ) : null}
        <Reviews reviews={restaurant.reviews} />
      </Section>
    </RestaurantLayout>
  );
}

import { useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import Container from '../../styles/Container';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from '../Review/ReviewForm';
import Reviews from '../Review/Reviews';

import {
  loadRestaurant,
  changeReviewField,
  sendReview,
} from '../../slice';

import { get } from '../../utils';

const Wrapper = styled.div`
  background-color:#dedededb;
  font-size: 2rem;
  line-height: 2.7rem;
  &>div{
    padding-top:5rem;
    padding-bottom: 5rem;
  }
`;

const LodingText = styled.div`
  font-size: 4rem;
  font-weight:bold;
  margin-top:5rem;
  color:#FF5F00;
`;

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
      <Container>
        <LodingText>Loading...</LodingText>
      </Container>
    );
  }

  return (
    <Wrapper>
      <Container>
        <RestaurantDetail restaurant={restaurant} />
        {accessToken ? (
          <ReviewForm
            fields={reviewFields}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        ) : null}
        <Reviews reviews={restaurant.reviews} />
      </Container>
    </Wrapper>
  );
}
